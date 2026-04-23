'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[var(--navy)] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.71 4.04c-.18-.18-.43-.29-.7-.29-.27 0-.52.11-.71.29l-7.07 7.07-3.54-3.54c-.19-.19-.43-.29-.7-.29-.27 0-.52.11-.71.29L4.29 10.29c-.19.18-.29.43-.29.7 0 .27.11.52.29.71l4.54 4.54c.18.18.43.29.7.29.27 0 .52-.11.71-.29l7.07-7.07 1.88 1.88c.18.18.43.29.7.29.27 0 .52-.11.71-.29l1.88-1.88c.18-.18.29-.43.29-.7 0-.27-.11-.52-.29-.71l-2.83-2.83z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-[var(--navy)]">Swar Marine</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[var(--navy)] hover:text-[var(--accent)] transition-colors font-medium">Home</Link>
            <Link href="/trips" className="text-[var(--navy)] hover:text-[var(--accent)] transition-colors font-medium">Trips</Link>
            <Link href="/about" className="text-[var(--navy)] hover:text-[var(--accent)] transition-colors font-medium">About</Link>
            <Link href="/contact" className="text-[var(--navy)] hover:text-[var(--accent)] transition-colors font-medium">Contact</Link>
            <Link href="/trips" className="btn-primary">Book Your Trip</Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-[var(--navy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-4 flex flex-col gap-4">
            <Link href="/" className="text-[var(--navy)] py-2 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/trips" className="text-[var(--navy)] py-2 font-medium" onClick={() => setIsOpen(false)}>Trips</Link>
            <Link href="/about" className="text-[var(--navy)] py-2 font-medium" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" className="text-[var(--navy)] py-2 font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link href="/trips" className="btn-primary text-center" onClick={() => setIsOpen(false)}>Book Your Trip</Link>
          </div>
        </div>
      )}
    </nav>
  );
}