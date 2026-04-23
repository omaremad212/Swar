import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getTrips() {
  const { data, error } = await supabase
    .from('trips')
    .select('*')
    .eq('featured', true)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

export async function getAllTrips() {
  const { data, error } = await supabase
    .from('trips')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

export async function getTripBySlug(slug: string) {
  const { data, error } = await supabase
    .from('trips')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (error) throw error;
  return data;
}

export async function createBooking(booking: {
  full_name: string;
  phone: string;
  email: string;
  trip_id: string;
  preferred_date: string;
  num_people: number;
  notes: string;
}) {
  const { data, error } = await supabase
    .from('bookings')
    .insert([booking])
    .select();
  
  if (error) throw error;
  return data;
}