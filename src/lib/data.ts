import type { Trip, Booking } from '@/types';

export const fallbackTrips: Trip[] = [
  {
    id: '1',
    title: 'Coastal Adventure Boat Tour',
    slug: 'coastal-adventure-boat-tour',
    description: 'Experience the breathtaking beauty of our coastline on this thrilling boat adventure. This guided tour takes you through pristine waters, past hidden caves, and along stunning cliffs. Watch for dolphins and sea birds as our experienced crew shares local maritime history and points out points of interest along the way. Perfect for families and groups looking for an unforgettable ocean experience.',
    short_description: 'Explore stunning coastlines with views of caves and cliffs',
    images: ['/images/boat-tour-1.jpg', '/images/boat-tour-2.jpg', '/images/boat-tour-3.jpg'],
    category: 'boat',
    duration: '3 hours',
    price: 149,
    max_guests: 12,
    included: ['Professional captain', 'Safety equipment', 'Snacks & beverages', 'Swimming stops', 'Hotel pickup'],
    featured: true,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'Deep Sea Fishing Expedition',
    slug: 'deep-sea-fishing-expedition',
    description: 'Join our expert fishing guides for an action-packed deep sea fishing adventure. Whether you are a seasoned angler or a beginner, this tour offers excitement for all skill levels. Target trophy fish including marlin, tuna, and mahi-mahi in some of the best fishing waters in the region. All fishing gear and bait are provided - just bring your enthusiasm!',
    short_description: 'Target big game fish with expert guides',
    images: ['/images/fishing-1.jpg', '/images/fishing-2.jpg', '/images/fishing-3.jpg'],
    category: 'fishing',
    duration: '6 hours',
    price: 299,
    max_guests: 6,
    included: ['Fishing equipment', 'Bait & lures', 'Expert fishing guide', 'Lunch included', 'Fish cleaning service'],
    featured: true,
    created_at: '2024-01-02T00:00:00Z'
  },
  {
    id: '3',
    title: 'Snorkeling Paradise Experience',
    slug: 'snorkeling-paradise-experience',
    description: 'Discover an underwater wonderland on our guided snorkeling tour. Swim alongside colorful tropical fish, explore vibrant coral reefs, and experience the serenity of the ocean floor. Our certified dive masters ensure safety while guiding you to the best spots. All equipment is provided, and no previous snorkeling experience is necessary.',
    short_description: 'Swim with tropical fish on vibrant coral reefs',
    images: ['/images/snorkeling-1.jpg', '/images/snorkeling-2.jpg', '/images/snorkeling-3.jpg'],
    category: 'snorkeling',
    duration: '4 hours',
    price: 129,
    max_guests: 10,
    included: ['Quality snorkeling gear', 'Wetsuit optional', 'Expert guide', 'Underwater photos', 'Beach BBQ lunch'],
    featured: true,
    created_at: '2024-01-03T00:00:00Z'
  },
  {
    id: '4',
    title: 'Luxury Private Yacht Charter',
    slug: 'luxury-private-yacht-charter',
    description: 'Indulge in the ultimate marine luxury experience aboard our private yacht. This exclusive charter offers personalized service, gourmet dining, and access to secluded coves inaccessible to larger vessels. Perfect for celebrations, romantic getaways, or VIP experiences. Your dedicated crew of three will attend to your every need, ensuring an unforgettable journey.',
    short_description: 'Ultimate luxury with dedicated crew and gourmet dining',
    images: ['/images/yacht-1.jpg', '/images/yacht-2.jpg', '/images/yacht-3.jpg'],
    category: 'yacht',
    duration: '8 hours',
    price: 2499,
    max_guests: 8,
    included: ['Private captain & crew', 'Gourmet meals & drinks', 'Jacuzzi access', 'Water toys', 'Personalized itinerary'],
    featured: true,
    created_at: '2024-01-04T00:00:00Z'
  },
  {
    id: '5',
    title: 'Sunset Catamaran Cruise',
    slug: 'sunset-catamaran-cruise',
    description: 'Witness magical Mediterranean sunsets on this relaxing catamaran cruise. Enjoy complimentary champagne as the sun paints the sky in shades of orange and pink. Light appetizers are served while you glide through calm waters. This romantic evening cruise is perfect for couples seeking a memorable sunset experience.',
    short_description: 'Romantic sunset sailing with champagne',
    images: ['/images/sunset-cruise-1.jpg', '/images/sunset-cruise-2.jpg', '/images/sunset-cruise-3.jpg'],
    category: 'boat',
    duration: '2.5 hours',
    price: 119,
    max_guests: 20,
    included: ['Champagne & drinks', 'Appetizers', 'Live music', 'Sunset photos', 'Hotel transfer'],
    featured: false,
    created_at: '2024-01-05T00:00:00Z'
  },
  {
    id: '6',
    title: 'Reef Fishing Adventure',
    slug: 'reef-fishing-adventure',
    description: 'Experience the thrill of reef fishing in crystal-clear waters close to shore. This family-friendly trip is perfect for those wanting to learn the basics of fishing while catching dinner. Target a variety of local reef fish with guidance from our patient instructors. The catch of the day can be prepared for you at a local restaurant.',
    short_description: 'Family-friendly reef fishing for beginners',
    images: ['/images/reef-fishing-1.jpg', '/images/reef-fishing-2.jpg', '/images/reef-fishing-3.jpg'],
    category: 'fishing',
    duration: '4 hours',
    price: 179,
    max_guests: 8,
    included: ['All fishing gear', 'Expert instruction', 'Fish preparation', 'Lunch', 'Drink package'],
    featured: false,
    created_at: '2024-01-06T00:00:00Z'
  }
];

export const sampleBookings: Booking[] = [];