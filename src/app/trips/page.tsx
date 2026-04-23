'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { fallbackTrips } from '@/lib/data';

const categories = [
  { value: 'all', label: 'All Trips' },
  { value: 'boat', label: 'Boat Tours' },
  { value: 'fishing', label: 'Fishing' },
  { value: 'snorkeling', label: 'Snorkeling' },
  { value: 'yacht', label: 'Yacht Rental' },
];

export default function TripsPage() {
  const [category, setCategory] = useState('all');
  
  const filteredTrips = useMemo(() => {
    return category === 'all' 
      ? fallbackTrips 
      : fallbackTrips.filter(trip => trip.category === category);
  }, [category]);

  return (
    <div>
      <section className="bg-[var(--navy)] py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Marine Adventures
          </h1>
          <p className="text-xl text-gray-300">
            Choose from our selection of premium experiences on the water
          </p>
        </div>
      </section>

      <section className="bg-white border-b sticky top-20 z-30">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-5 py-2 rounded-full font-medium transition-colors ${
                  category === cat.value
                    ? 'bg-[var(--navy)] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {filteredTrips.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No trips found in this category.</p>
              <button onClick={() => setCategory('all')} className="btn-primary mt-4 inline-block">
                View All Trips
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTrips.map((trip) => (
                <Link key={trip.id} href={`/trips/${trip.slug}`} className="card group">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-[var(--navy)] flex items-center justify-center">
                      <span className="text-6xl">🌊</span>
                    </div>
                    <div className="absolute top-4 left-4 bg-[var(--accent)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                      {trip.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[var(--navy)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {trip.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{trip.short_description}</p>
                    <div className="border-t pt-4 mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-500">Duration</span>
                        <span className="font-medium text-[var(--navy)]">{trip.duration}</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-500">Max Guests</span>
                        <span className="font-medium text-[var(--navy)]">{trip.max_guests} people</span>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t">
                        <span>
                          <span className="text-2xl font-bold text-[var(--navy)]">${trip.price}</span>
                          <span className="text-gray-500 text-sm"> / person</span>
                        </span>
                        <span className="text-[var(--accent)] font-medium">View Details →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}