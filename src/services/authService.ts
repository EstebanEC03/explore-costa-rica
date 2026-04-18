import { apiClient } from './apiClient';
import type { ApiResponse } from '../types/api';
import type { User, LoginCredentials, RegisterData, AuthResponse } from '../types/user';

export const authService = {
  // POST /api/auth/login
  async login(credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> {
    return apiClient.post<ApiResponse<AuthResponse>>('/auth/login', credentials);
  },

  // POST /api/auth/register
  async register(data: RegisterData): Promise<ApiResponse<AuthResponse>> {
    return apiClient.post<ApiResponse<AuthResponse>>('/auth/register', data);
  },

  // GET /api/auth/me
  async getCurrentUser(): Promise<ApiResponse<User>> {
    return apiClient.get<ApiResponse<User>>('/auth/me');
  },

  // POST /api/auth/logout
  async logout(): Promise<{ message: string }> {
    return apiClient.post<{ message: string }>('/auth/logout', {});
  },
};
