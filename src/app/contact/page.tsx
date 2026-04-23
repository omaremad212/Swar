import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Swar Marine',
  description: 'Get in touch with Swar Marine. Contact us for booking inquiries, questions, or feedback.',
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-[var(--navy)] py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">We would love to hear from you</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">Get In Touch</h2>
              <p className="text-gray-600 text-lg mb-8">
                Have questions about our trips? Need help planning a special event? Our team is here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--navy)] mb-1">Location</h3>
                    <p className="text-gray-600">Marine Harbor, Bay Area<br />Coastal District, CD 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--navy)] mb-1">Email</h3>
                    <p className="text-gray-600">info@swar-marine.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--navy)] mb-1">Phone</h3>
                    <p className="text-gray-600">+1 555-123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🕐</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--navy)] mb-1">Hours</h3>
                    <p className="text-gray-600">Mon - Sun: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-16">
        <div className="container">
          <div className="h-80 rounded-2xl bg-[var(--navy)] flex items-center justify-center">
            <span className="text-6xl">🗺️</span>
          </div>
        </div>
      </section>
    </div>
  );
}