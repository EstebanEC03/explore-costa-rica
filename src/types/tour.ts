export interface Tour {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  location: string;
  imageUrl: string;
  maxCapacity: number;
  availableSpots: number;
  rating: number;
  category: string;
  includes: string[];
  createdAt: string;
  updatedAt: string;
}

export interface TourFormData {
  title: string;
  description: string;
  price: number;
  duration: string;
  location: string;
  imageUrl: string;
  maxCapacity: number;
  category: string;
  includes: string[];
}

export interface TourFilters {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
}
