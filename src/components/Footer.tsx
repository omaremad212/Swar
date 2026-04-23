'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="container section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.71 4.04c-.18-.18-.43-.29-.7-.29-.27 0-.52.11-.71.29l-7.07 7.07-3.54-3.54c-.19-.19-.43-.29-.7-.29-.27 0-.52.11-.71.29L4.29 10.29c-.19.18-.29.43-.29.7 0 .27.11.52.29.71l4.54 4.54c.18.18.43.29.7.29.27 0 .52-.11.71-.29l7.07-7.07 1.88 1.88c.18.18.43.29.7.29.27 0 .52-.11.71-.29l1.88-1.88c.18-.18.29-.43.29-.7 0-.27-.11-.52-.29-.71l-2.83-2.83z"/>
                </svg>
              </div>
              <span className="text-xl font-bold">Swar Marine</span>
            </div>
            <p className="text-gray-300 text-sm">Premium marine experiences for unforgettable adventures on the water.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/trips" className="text-gray-300 hover:text-white transition-colors">All Trips</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/trips?category=boat" className="text-gray-300 hover:text-white transition-colors">Boat Tours</Link></li>
              <li><Link href="/trips?category=fishing" className="text-gray-300 hover:text-white transition-colors">Fishing Trips</Link></li>
              <li><Link href="/trips?category=snorkeling" className="text-gray-300 hover:text-white transition-colors">Snorkeling</Link></li>
              <li><Link href="/trips?category=yacht" className="text-gray-300 hover:text-white transition-colors">Yacht Rental</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@swar-marine.com</li>
              <li>Phone: +1 555-123-4567</li>
              <li>Location: Marine Harbor, Bay Area</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Swar Marine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}