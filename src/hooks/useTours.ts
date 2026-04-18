import { useEffect, useState } from 'react';
import { toursService } from '../services/toursService';
import type { Tour, TourFilters } from '../types/tour';
import type { ApiError } from '../types/api';

interface UseToursResult {
  tours: Tour[];
  total: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useTours(filters: TourFilters = {}): UseToursResult {
  const [tours, setTours] = useState<Tour[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refetchIndex, setRefetchIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const fetchTours = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await toursService.getTours(filters);
        if (cancelled) return;

        setTours(response.data);
        setTotal(response.total);
        setTotalPages(response.totalPages);
      } catch (err) {
        if (cancelled) return;
        const apiError = err as ApiError;
        setError(apiError.message || 'Error al cargar los tours');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchTours();

    return () => {
      cancelled = true;
    };
  }, [
    filters.page,
    filters.pageSize,
    filters.search,
    filters.category,
    filters.location,
    refetchIndex,
  ]);

  const refetch = () => setRefetchIndex((i) => i + 1);

  return { tours, total, totalPages, loading, error, refetch };
}

export function useTourDetail(id: string | undefined) {
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    const fetchTour = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await toursService.getTourById(id);
        if (cancelled) return;
        const payload = (response as { data?: Tour }).data ?? (response as unknown as Tour);
        setTour(payload ?? null);
      } catch (err) {
        if (cancelled) return;
        const apiError = err as ApiError;
        setError(apiError.message || 'Error al cargar el tour');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchTour();

    return () => {
      cancelled = true;
    };
  }, [id]);

  return { tour, loading, error };
}
