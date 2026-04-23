import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { fallbackTrips } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Swar Marine | Premium Marine Tourism Experiences',
  description: 'Discover premium marine tourism experiences - boat tours, fishing trips, snorkeling adventures, and luxury yacht charters. Book your unforgettable ocean adventure today.',
};

const services = [
  {
    icon: '⛵',
    title: 'Boat Tours',
    description: 'Explore stunning coastlines and hidden gems on our guided boat adventures',
    link: '/trips?category=boat',
  },
  {
    icon: '🎣',
    title: 'Fishing Trips',
    description: 'Deep sea and reef fishing with expert guides for all skill levels',
    link: '/trips?category=fishing',
  },
  {
    icon: '🤿',
    title: 'Snorkeling',
    description: 'Discover underwater paradises with colorful marine life',
    link: '/trips?category=snorkeling',
  },
  {
    icon: '🛥️',
    title: 'Private Yacht',
    description: 'Ultimate luxury charter with dedicated crew and gourmet dining',
    link: '/trips?category=yacht',
  },
];

const whyChooseUs = [
  {
    icon: '🛡️',
    title: 'Safety First',
    description: 'All trips include certified safety equipment and trained crew',
  },
  {
    icon: '👨‍✈️',
    title: 'Professional Crew',
    description: 'Experienced captains and guides with years of maritime expertise',
  },
  {
    icon: '✨',
    title: 'Premium Experience',
    description: 'High-quality equipment, clean vessels, and exceptional service',
  },
  {
    icon: '📱',
    title: 'Easy Booking',
    description: 'Simple online booking with instant confirmation',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'Absolutely incredible experience! The sunset cruise was magical. Crew was professional and the boat was immaculate.',
    rating: 5,
  },
  {
    name: 'James K.',
    text: 'Best fishing trip ever! Caught a huge marlin thanks to our expert guide. Highly recommend Swar Marine!',
    rating: 5,
  },
  {
    name: 'Emily R.',
    text: 'The private yacht charter was perfect for our anniversary. Crew exceeded all expectations. Will definitely return!',
    rating: 5,
  },
];

export default function HomePage() {
  const featuredTrips = fallbackTrips.filter(t => t.featured).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[var(--navy)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)] via-[var(--navy-light)] to-[var(--accent)] opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-30" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
              Discover the Magic of the Ocean
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in animate-delay-1">
              Premium marine experiences awaits. From thrilling boat adventures to luxurious yacht charters, create memories that last forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-2">
              <Link href="/trips" className="btn-accent text-center text-lg">
                Book Your Trip
              </Link>
              <Link href="/trips" className="btn-primary text-center text-lg bg-white/10 hover:bg-white/20">
                Explore Trips
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Choose from a variety of premium marine experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.link}
                className="card p-6 text-center group"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[var(--navy)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Trips Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Trips</h2>
            <p className="section-subtitle">Our most popular marine adventures</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTrips.map((trip) => (
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
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-[var(--navy)]">${trip.price}</span>
                      <span className="text-gray-500 text-sm"> / person</span>
                    </div>
                    <span className="text-gray-500 text-sm">{trip.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/trips" className="btn-primary inline-block text-lg">
              View All Trips
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-[var(--navy)] text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title text-white">Why Choose Us</h2>
            <p className="text-gray-400">Experience the difference of booking with experts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Guests Say</h2>
            <p className="section-subtitle">Real reviews from real adventurers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[var(--accent)]">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-bold text-[var(--navy)]">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-[var(--navy)] to-[var(--navy-light)]">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Ocean Adventure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book now and create memories that last a lifetime
          </p>
          <Link href="/trips" className="btn-accent inline-block text-lg">
            Book Your Trip Today
          </Link>
        </div>
      </section>
    </div>
  );
}