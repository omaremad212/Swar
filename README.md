# Swar Marine - Premium Marine Tourism Platform

A premium marine tourism platform offering boat tours, fishing trips, snorkeling experiences, and luxury yacht charters.

## Features

- **Boat Tours**: Explore stunning coastlines and hidden gems
- **Fishing Trips**: Deep sea and reef fishing with expert guides
- **Snorkeling**: Discover underwater paradises
- **Private Yacht**: Ultimate luxury charters

## Tech Stack

- Next.js 16
- Tailwind CSS
- Supabase (database)
- TypeScript

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages

- `/` - Home
- `/trips` - All Trips
- `/trips/[slug]` - Trip Details
- `/about` - About Us
- `/contact` - Contact
- `/booking/success` - Booking Success

## Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Deployment

Deploy to Vercel with `vercel deploy`