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
      <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border border-gray-100">
        {/* Price Header */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <div className="flex items-baseline gap-1.5 mb-3">
            <span className="text-4xl font-semibold text-[#0f172a]">${trip.price}</span>
            <span className="text-sm text-gray-500">/ person</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {trip.duration}
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Up to {trip.max_guests}
            </div>
          </div>
        </div>

        {!isBooking ? (
          <button
            onClick={() => setIsBooking(true)}
            className="btn-accent w-full text-base py-3.5"
          >
            Book This Experience
          </button>
        ) : status === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Booking Submitted!</h3>
            <p className="text-sm text-gray-500">Redirecting to confirmation...</p>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <label className="label">Full Name</label>
              <input
                type="text"
                required
                className="input"
                value={bookingData.full_name}
                onChange={(e) => setBookingData({ ...bookingData, full_name: e.target.value })}
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="label">Phone Number</label>
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
              <label className="label">Email Address</label>
              <input
                type="email"
                required
                className="input"
                value={bookingData.email}
                onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="label">Preferred Date</label>
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
              <label className="label">Number of Guests</label>
              <select
                required
                className="input"
                value={bookingData.num_people}
                onChange={(e) => setBookingData({ ...bookingData, num_people: parseInt(e.target.value) })}
              >
                {[...Array(trip.max_guests)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Special Requests <span className="text-gray-400 font-normal">(optional)</span></label>
              <textarea
                className="input resize-none"
                rows={3}
                value={bookingData.notes}
                onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                placeholder="Any dietary requirements, special occasions, etc."
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-accent w-full py-3.5 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Processing...
                </span>
              ) : 'Confirm Booking'}
            </button>
            <button
              type="button"
              onClick={() => setIsBooking(false)}
              className="w-full text-sm text-gray-500 hover:text-gray-700 py-2"
            >
              Cancel
            </button>
          </form>
        )}

        <div className="mt-5 pt-5 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Free cancellation up to 24h before
          </div>
        </div>
      </div>
    </div>
  );
}