export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatar?: string | null;
  createdAt?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface UserFormData {
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface UserFilters {
  search?: string;
  role?: 'user' | 'admin' | '';
  page?: number;
  pageSize?: number;
}
