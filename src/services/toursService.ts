import { apiClient } from './apiClient';
import type { ApiResponse, PaginatedResponse } from '../types/api';
import type { Tour, TourFormData, TourFilters, TourCategory } from '../types/tour';

function buildQueryString(filters: TourFilters = {}): string {
  const params = new URLSearchParams();

  if (filters.page !== undefined) params.append('page', String(filters.page));
  if (filters.pageSize !== undefined) params.append('pageSize', String(filters.pageSize));
  if (filters.search) params.append('search', filters.search);
  if (filters.category) params.append('category', filters.category);
  if (filters.location) params.append('location', filters.location);

  const query = params.toString();
  return query ? `?${query}` : '';
}

export const toursService = {
  async getTours(filters: TourFilters = {}): Promise<PaginatedResponse<Tour>> {
    const query = buildQueryString(filters);
    return apiClient.get<PaginatedResponse<Tour>>(`/tours${query}`);
  },

  async getTourById(id: string): Promise<ApiResponse<Tour>> {
    return apiClient.get<ApiResponse<Tour>>(`/tours/${id}`);
  },

  async createTour(data: TourFormData): Promise<ApiResponse<Tour>> {
    return apiClient.post<ApiResponse<Tour>>('/tours', data);
  },

  async updateTour(id: string, data: Partial<TourFormData>): Promise<ApiResponse<Tour>> {
    return apiClient.put<ApiResponse<Tour>>(`/tours/${id}`, data);
  },

  async deleteTour(id: string): Promise<{ message: string }> {
    return apiClient.delete<{ message: string }>(`/tours/${id}`);
  },

  async getCategories(): Promise<ApiResponse<TourCategory[]>> {
    return apiClient.get<ApiResponse<TourCategory[]>>('/tours/categories');
  },
};
