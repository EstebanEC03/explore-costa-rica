export interface Reservation {
  id: string;
  tourId: string;
  tourTitle: string;
  userId: string;
  date: string;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface ReservationFormData {
  tourId: string;
  date: string;
  guests: number;
}
