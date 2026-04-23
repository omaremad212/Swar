'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Trip } from '@/types';
import { createBooking } from '@/lib/supabase';

export default function TripBookingClient({ trip }: { trip: Trip }) {
  const router = useRouter();
  const [isBooking, setIsBooking] = useState(false);
  const [bookingData, setBookingData] = useState({
    full_name: '',
    phone: '',
    email: '',
    preferred_date: '',
    num_people: 1,
    notes: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await createBooking({
        ...bookingData,
        trip_id: trip.id,
      });
      setStatus('success');
      setTimeout(() => {
        router.push('/booking/success');
      }, 2000);
    } catch {
      setStatus('error');
      setErrorMessage('Failed to submit booking. Please try again.');
    }
  };

  return (
    <div className="lg:col-span-1">
      <div className="card p-6 sticky top-24">
        <div className="mb-6">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold text-[var(--navy)]">${trip.price}</span>
            <span className="text-gray-500">per person</span>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <span>⏱️ {trip.duration}</span>
            <span>👥 Up to {trip.max_guests}</span>
          </div>
        </div>

        {!isBooking ? (
          <button
            onClick={() => setIsBooking(true)}
            className="btn-accent w-full text-lg"
          >
            Book Now
          </button>
        ) : status === 'success' ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✓</div>
            <h3 className="text-xl font-bold text-[var(--navy)] mb-2">Booking Submitted!</h3>
            <p className="text-gray-600">Redirecting...</p>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <label className="label">Full Name *</label>
              <input
                type="text"
                required
                className="input"
                value={bookingData.full_name}
                onChange={(e) => setBookingData({ ...bookingData, full_name: e.target.value })}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="label">Phone *</label>
              <input
                type="tel"
                required
                className="input"
                value={bookingData.phone}
                onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                placeholder="+1 555-123-4567"
              />
            </div>
            <div>
              <label className="label">Email *</label>
              <input
                type="email"
                required
                className="input"
                value={bookingData.email}
                onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="label">Preferred Date *</label>
              <input
                type="date"
                required
                className="input"
                value={bookingData.preferred_date}
                onChange={(e) => setBookingData({ ...bookingData, preferred_date: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <label className="label">Number of People *</label>
              <select
                required
                className="input"
                value={bookingData.num_people}
                onChange={(e) => setBookingData({ ...bookingData, num_people: parseInt(e.target.value) })}
              >
                {[...Array(trip.max_guests)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'person' : 'people'}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Notes</label>
              <textarea
                className="input"
                rows={3}
                value={bookingData.notes}
                onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                placeholder="Any special requests or requirements..."
              />
            </div>
            {errorMessage && (
              <p className="text-red-600 text-sm">{errorMessage}</p>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-accent w-full text-lg disabled:opacity-50"
            >
              {status === 'loading' ? 'Submitting...' : 'Confirm Booking'}
            </button>
            <button
              type="button"
              onClick={() => setIsBooking(false)}
              className="w-full text-gray-600 py-2"
            >
              Cancel
            </button>
          </form>
        )}

        <p className="text-gray-500 text-sm text-center mt-4">
          Free cancellation up to 24 hours before the trip
        </p>
      </div>
    </div>
  );
}