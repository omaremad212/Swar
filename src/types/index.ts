export interface Trip {
  id: string;
  title: string;
  slug: string;
  description: string;
  short_description: string;
  images: string[];
  category: 'boat' | 'fishing' | 'snorkeling' | 'yacht';
  duration: string;
  price: number;
  max_guests: number;
  included: string[];
  featured: boolean;
  created_at: string;
}

export interface Booking {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  trip_id: string;
  trip_title?: string;
  preferred_date: string;
  num_people: number;
  notes: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: string;
}