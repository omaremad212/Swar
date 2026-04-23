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
    description: 'Cruise along breathtaking coastlines with our expert guides',
    link: '/trips?category=boat',
  },
  {
    icon: '🎣',
    title: 'Fishing',
    description: 'Deep sea adventures for anglers of all skill levels',
    link: '/trips?category=fishing',
  },
  {
    icon: '🤿',
    title: 'Snorkeling',
    description: 'Swim with vibrant marine life in crystal waters',
    link: '/trips?category=snorkeling',
  },
  {
    icon: '🛥️',
    title: 'Yacht Charter',
    description: 'Ultimate luxury with dedicated crew and amenities',
    link: '/trips?category=yacht',
  },
];

const benefits = [
  { title: 'Safety Certified', desc: 'All trips include certified safety equipment' },
  { title: 'Expert Crew', desc: 'Years of maritime experience' },
  { title: 'Premium Vessels', desc: 'Well-maintained, clean fleet' },
  { title: 'Easy Booking', desc: 'Instant confirmation' },
];

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'The sunset cruise was absolutely magical. The crew went above and beyond to make our anniversary special.',
    rating: 5,
  },
  {
    name: 'James K.',
    text: 'Best fishing trip of my life! The guide knew exactly where to find the big ones. Already booking again.',
    rating: 5,
  },
  {
    name: 'Emily R.',
    text: 'The private yacht exceeded all expectations. Five-star experience from start to finish.',
    rating: 5,
  },
];

export default function HomePage() {
  const featuredTrips = fallbackTrips.filter(t => t.featured).slice(0, 3);

  return (
    <div>
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-[#0f172a]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-transparent to-[#0f172a]/40" />
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-[#0ea5e9]/5 rounded-full blur-2xl" />

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full animate-pulse" />
              <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                Premium Marine Experiences
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-[1.1] tracking-tight">
              Discover the <br />
              <span className="text-[#0ea5e9]">Beauty of the Sea</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              From thrilling boat adventures to luxurious yacht charters, 
              create unforgettable memories on the water with our expert crew.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/trips" className="btn-accent text-base px-6 py-3.5">
                <span>Book Your Experience</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/trips" className="btn-outline text-base px-6 py-3.5">
                View All Trips
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-semibold text-white">10+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">50K+</div>
                <div className="text-sm text-gray-400">Happy Guests</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">98%</div>
                <div className="text-sm text-gray-400">Return Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* Services Section - Redesigned */}
      <section className="section-lg bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Experiences</h2>
            <p className="section-subtitle">
              Choose from a curated selection of premium marine adventures 
              designed for unforgettable moments on the water
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.link}
                className="group relative p-6 bg-[#f8fafc] rounded-xl hover:bg-[#0f172a] transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-xl border border-gray-100 group-hover:border-transparent transition-all" />
                <div className="relative">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-[#0f172a] group-hover:text-white mb-2 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Trips Section - Redesigned */}
      <section className="section-lg bg-[#f8fafc]">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Adventures</h2>
            <p className="section-subtitle">
              Our most sought-after experiences, handpicked for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTrips.map((trip) => (
              <Link 
                key={trip.id} 
                href={`/trips/${trip.slug}`}
                className="group block"
              >
                <div className="card-static overflow-hidden">
                  {/* Image Area */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] flex items-center justify-center">
                      <span className="text-5xl opacity-50">{trip.category === 'yacht' ? '🛥️' : trip.category === 'fishing' ? '🎣' : trip.category === 'snorkeling' ? '🤿' : '⛵'}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-4 left-4 badge badge-accent">
                      {trip.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[#0f172a] mb-2 group-hover:text-[#0ea5e9] transition-colors">
                      {trip.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                      {trip.short_description}
                    </p>
                    
                    {/* Price & Duration */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-xl font-semibold text-[#0f172a]">${trip.price}</span>
                        <span className="text-xs text-gray-400 ml-1">/person</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {trip.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/trips" className="btn-outline text-[#0f172a] border-[#0f172a]/20 hover:bg-[#0f172a] hover:text-white">
              View All Experiences
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Redesigned */}
      <section className="section-lg bg-[#0f172a] text-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title text-white">Why Choose Swar Marine</h2>
            <p className="section-subtitle text-gray-400">
              We combine expertise with passion to deliver exceptional experiences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={benefit.title} className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center">
                  <span className="text-xl">{(idx + 1)}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Redesigned */}
      <section className="section-lg bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Guests Say</h2>
            <p className="section-subtitle">
              Real feedback from adventurers who experienced the sea with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-static p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#d4a853]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic leading-relaxed">"{t.text}"</p>
                <p className="font-semibold text-[#0f172a]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="section-lg bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506929562870-bfd6d0c0f7b4?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
        
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready for Your Marine Adventure?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Book now and create memories that will last a lifetime. 
            Our team is ready to welcome you aboard.
          </p>
          <Link href="/trips" className="btn-accent text-base px-8 py-4">
            Start Your Journey
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}