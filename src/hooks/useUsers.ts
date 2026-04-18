import { useEffect, useState } from 'react';
import { usersService } from '../services/usersService';
import type { User, UserFilters } from '../types/user';
import type { ApiError } from '../types/api';

interface UseUsersResult {
  users: User[];
  total: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useUsers(filters: UserFilters = {}): UseUsersResult {
  const [users, setUsers] = useState<User[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refetchIndex, setRefetchIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await usersService.getUsers(filters);
        if (cancelled) return;

        setUsers(response.data);
        setTotal(response.total);
        setTotalPages(response.totalPages);
      } catch (err) {
        if (cancelled) return;
        const apiError = err as ApiError;
        setError(apiError.message || 'Error al cargar los usuarios');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchUsers();

    return () => {
      cancelled = true;
    };
  }, [
    filters.page,
    filters.pageSize,
    filters.search,
    filters.role,
    refetchIndex,
  ]);

  const refetch = () => setRefetchIndex((i) => i + 1);

  return { users, total, totalPages, loading, error, refetch };
}
