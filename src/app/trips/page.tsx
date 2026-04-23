'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { fallbackTrips } from '@/lib/data';

const categories = [
  { value: 'all', label: 'All', icon: '🌊' },
  { value: 'boat', label: 'Boat Tours', icon: '⛵' },
  { value: 'fishing', label: 'Fishing', icon: '🎣' },
  { value: 'snorkeling', label: 'Snorkeling', icon: '🤿' },
  { value: 'yacht', label: 'Yachts', icon: '🛥️' },
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
      {/* Hero */}
      <section className="relative bg-[#0f172a] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518837695005-2083098e35bb?w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent" />
        
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-3">
            Our Experiences
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            Discover handcrafted marine adventures, 
            each designed to create lifelong memories on the water
          </p>
        </div>
      </section>

      {/* Category Filter - Premium */}
      <section className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-xl border-b border-gray-100">
        <div className="container py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  category === cat.value
                    ? 'bg-[#0f172a] text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-[#0f172a]'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trips Grid */}
      <section className="section-lg bg-white">
        <div className="container">
          {filteredTrips.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">No trips found</h3>
              <p className="text-gray-500 mb-6">Try selecting a different category</p>
              <button onClick={() => setCategory('all')} className="btn-primary">
                View All Trips
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTrips.map((trip) => (
                <Link 
                  key={trip.id} 
                  href={`/trips/${trip.slug}`} 
                  className="group block"
                >
                  <div className="card-static h-full">
                    {/* Card Image */}
                    <div className="relative h-52 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] flex items-center justify-center">
                        <span className="text-5xl opacity-40">
                          {trip.category === 'yacht' ? '🛥️' : trip.category === 'fishing' ? '🎣' : trip.category === 'snorkeling' ? '🤿' : '⛵'}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute top-4 left-4 badge badge-accent">
                        {trip.category}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-[#0f172a] mb-2 group-hover:text-[#0ea5e9] transition-colors">
                        {trip.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                        {trip.short_description}
                      </p>
                      
                      {/* Card Meta */}
                      <div className="space-y-3 pt-3 border-t border-gray-100">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Duration</span>
                          <span className="font-medium text-[#0f172a]">{trip.duration}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Max Guests</span>
                          <span className="font-medium text-[#0f172a]">{trip.max_guests} people</span>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <div>
                            <span className="text-xl font-semibold text-[#0f172a]">${trip.price}</span>
                            <span className="text-xs text-gray-400 ml-1">/person</span>
                          </div>
                          <span className="text-sm font-medium text-[#0ea5e9] flex items-center gap-1">
                            Details 
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
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