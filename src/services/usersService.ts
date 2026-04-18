import { apiClient } from './apiClient';
import type { ApiResponse, PaginatedResponse } from '../types/api';
import type { User, UserFormData, UserFilters } from '../types/user';

function buildQueryString(filters: UserFilters = {}): string {
  const params = new URLSearchParams();

  if (filters.page !== undefined) params.append('page', String(filters.page));
  if (filters.pageSize !== undefined) params.append('pageSize', String(filters.pageSize));
  if (filters.search) params.append('search', filters.search);
  if (filters.role) params.append('role', filters.role);

  const query = params.toString();
  return query ? `?${query}` : '';
}

export const usersService = {
  // GET /api/users — listar usuarios con paginación y filtrado
  async getUsers(filters: UserFilters = {}): Promise<PaginatedResponse<User>> {
    const query = buildQueryString(filters);
    return apiClient.get<PaginatedResponse<User>>(`/users${query}`);
  },

  // GET /api/users/{id} — obtener usuario por ID
  async getUserById(id: string): Promise<ApiResponse<User>> {
    return apiClient.get<ApiResponse<User>>(`/users/${id}`);
  },

  // PUT /api/users/{id} — actualizar usuario
  async updateUser(id: string, data: Partial<UserFormData>): Promise<ApiResponse<User>> {
    return apiClient.put<ApiResponse<User>>(`/users/${id}`, data);
  },

  // DELETE /api/users/{id} — eliminar usuario
  async deleteUser(id: string): Promise<{ message: string }> {
    return apiClient.delete<{ message: string }>(`/users/${id}`);
  },
};
