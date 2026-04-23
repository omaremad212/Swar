import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Swar Marine',
  description: 'Learn about Swar Marine - our story, mission, and commitment to providing premium marine tourism experiences.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--navy)] py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-300">Our story and commitment to excellence</p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">Our Story</h2>
              <p className="text-gray-600 text-lg mb-4">
                Founded with a passion for the ocean, Swar Marine has been providing unforgettable marine experiences for over a decade. What started as a small family operation has grown into one of the regions most trusted marine tourism providers.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Our commitment to safety, professionalism, and exceptional service has earned us hundreds of 5-star reviews and a loyal base of returning guests. We believe that everyone deserves to experience the magic of the ocean, and we are dedicated to making that accessible to all.
              </p>
              <p className="text-gray-600 text-lg">
                Every trip we operate is a reflection of our values: safety first, customer satisfaction, and sustainable tourism practices that protect our beautiful marine environment for future generations.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl bg-[var(--navy)] flex items-center justify-center">
              <span className="text-8xl">⚓</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-2">Safety</h3>
              <p className="text-gray-600">
                We never compromise on safety. All vessels are regularly inspected, crew is certified, and we maintain the highest safety standards in the industry.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">💫</div>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-2">Excellence</h3>
              <p className="text-gray-600">
                From the quality of our equipment to the professionalism of our crew, we strive for excellence in everything we do.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to protecting our ocean environment through sustainable practices and eco-friendly operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-[var(--navy)] text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-2">10+</div>
              <div className="text-xl">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-2">50K+</div>
              <div className="text-xl">Happy Guests</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-2">25+</div>
              <div className="text-xl">Expert Crew</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-2">98%</div>
              <div className="text-xl">Repeat Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-[var(--navy)] mb-4">Ready to Experience the Ocean?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of happy guests who have discovered the magic with Swar Marine</p>
          <a href="/trips" className="btn-primary text-lg">View All Trips</a>
        </div>
      </section>
    </div>
  );
}