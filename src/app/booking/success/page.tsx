import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Booking Confirmed | Swar Marine',
  description: 'Your booking has been confirmed. Thank you for choosing Swar Marine.',
};

export default function BookingSuccessPage() {
  return (
    <div>
      <section className="section min-h-[60vh] flex items-center">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-[var(--navy)] mb-4">Booking Confirmed!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for booking with Swar Marine. We have received your booking request and will send a confirmation email shortly with all the details.
            </p>
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h2 className="text-lg font-bold text-[var(--navy)] mb-4">What happens next?</h2>
              <ul className="text-left space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-[var(--accent)]/10 rounded-full flex items-center justify-center text-[var(--accent)]">1</span>
                  <span>You will receive a confirmation email within 24 hours</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-[var(--accent)]/10 rounded-full flex items-center justify-center text-[var(--accent)]">2</span>
                  <span>Our team will contact you to confirm details</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-[var(--accent)]/10 rounded-full flex items-center justify-center text-[var(--accent)]">3</span>
                  <span>Enjoy your amazing ocean adventure!</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary text-lg">Back to Home</Link>
              <Link href="/trips" className="btn-primary text-lg bg-gray-100 text-[var(--navy)] hover:bg-gray-200">Browse More Trips</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}