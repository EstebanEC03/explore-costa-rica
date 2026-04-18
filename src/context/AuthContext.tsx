import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { authService } from '../services/authService';
import { tokenStorage } from '../services/apiClient';
import type { User, LoginCredentials, RegisterData } from '../types/user';
import type { ApiError } from '../types/api';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Al montar la app, si hay un token guardado, intentar recuperar el usuario
  useEffect(() => {
    const bootstrap = async () => {
      const token = tokenStorage.get();
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await authService.getCurrentUser();
        setUser(response.data);
      } catch {
        // Token inválido o expirado: limpiar
        tokenStorage.clear();
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    bootstrap();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      const response = await authService.login(credentials);
      tokenStorage.set(response.data.token);
      setUser(response.data.user);
    } catch (err) {
      const apiError = err as ApiError;
      throw new Error(apiError.message || 'Error al iniciar sesión');
    }
  };

  const register = async (data: RegisterData) => {
    if (data.password !== data.confirmPassword) {
      throw new Error('Las contraseñas no coinciden');
    }
    try {
      const response = await authService.register(data);
      tokenStorage.set(response.data.token);
      setUser(response.data.user);
    } catch (err) {
      const apiError = err as ApiError;
      throw new Error(apiError.message || 'Error al registrarse');
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch {
      // Ignorar errores del logout en servidor (igual limpiamos el cliente)
    }
    tokenStorage.clear();
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: user !== null,
    isAdmin: user?.role === 'admin',
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
