import Link from 'next/link';
import { fallbackTrips } from '@/lib/data';
import TripBookingClient from './TripBookingClient';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trip = fallbackTrips.find(t => t.slug === slug);
  if (!trip) return { title: 'Trip Not Found' };
  
  return {
    title: `${trip.title} | Swar Marine`,
    description: trip.short_description,
  };
}

export default async function TripDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trip = fallbackTrips.find(t => t.slug === slug);
  
  if (!trip) {
    return (
      <div className="section">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-[var(--navy)] mb-4">Trip Not Found</h1>
          <p className="text-gray-600 mb-8">The trip you are looking for does not exist.</p>
          <Link href="/trips" className="btn-primary">View All Trips</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-[var(--navy)] py-12">
        <div className="container">
          <Link href="/trips" className="text-gray-300 hover:text-white mb-4 inline-flex items-center gap-2">
            ← Back to Trips
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-[var(--accent)] text-white text-sm font-bold px-3 py-1 rounded-full uppercase">
              {trip.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{trip.title}</h1>
          <p className="text-xl text-gray-300">{trip.short_description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative h-96 rounded-2xl overflow-hidden bg-[var(--navy)] mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl">🌊</span>
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {trip.images.slice(0, 3).map((_, i) => (
                    <div key={i} className="w-20 h-20 bg-white/20 rounded-lg" />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">About This Trip</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{trip.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">What&apos; s Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {trip.included.map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-[var(--accent)]">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <TripBookingClient trip={trip} />
          </div>
        </div>
      </section>
    </div>
  );
}