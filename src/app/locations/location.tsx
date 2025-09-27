// inquiries.ts

export type Inquiry = {
  id: number;
  venue: string;
  locationName: string;
  email: string;
  eventDate: string;
  deadline: string;
  eventType: 'Party' | 'Wedding' | 'Conference' | 'Other';
  guests: number;
  notes: boolean;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'QUOTED';
  image?: string;
};

export const inquiries: Inquiry[] = [
  {
    id: 1,
    venue: 'eos',
    locationName: 'Kristy Mosciski',
    email: 'cruz.padberg@example.org',
    eventDate: '34 days ago',
    deadline: '7 days ago',
    eventType: 'Party',
    guests: 9232,
    notes: true,
    status: 'PENDING',
    image: '/images/venue1.jpg'
  },
  {
    id: 2,
    venue: 'debitis',
    locationName: 'Mrs. Joanne Ernser',
    email: 'howell.daisy@example.com',
    eventDate: '22 days ago',
    deadline: '24 days ago',
    eventType: 'Party',
    guests: 463,
    notes: true,
    status: 'PENDING',
    image: '/images/venue1.jpg'
  },
  {
    id: 3,
    venue: 'et',
    locationName: 'Pink Bode',
    email: 'rosenbaum.chance@example.com',
    eventDate: '28 days ago',
    deadline: '9 days ago',
    eventType: 'Wedding',
    guests: 120,
    notes: true,
    status: 'PENDING',
    image: '/images/venue1.jpg'
  },
  {
    id: 4,
    venue: 'Grand Plaza',
    locationName: 'Alice Morgan',
    email: 'alice.morgan@example.com',
    eventDate: '15 days ago',
    deadline: '2 days ago',
    eventType: 'Conference',
    guests: 300,
    notes: false,
    status: 'ACCEPTED',
    image: '/images/venue1.jpg'
  },
  {
    id: 5,
    venue: 'Royal Banquet Hall',
    locationName: 'John Smith',
    email: 'john.smith@example.com',
    eventDate: '5 days ago',
    deadline: 'Tomorrow',
    eventType: 'Wedding',
    guests: 500,
    notes: true,
    status: 'QUOTED',
    image: '/images/venue1.jpg'
  },
  {
    id: 6,
    venue: 'Sunset Gardens',
    locationName: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    eventDate: '42 days ago',
    deadline: '5 days ago',
    eventType: 'Party',
    guests: 150,
    notes: false,
    status: 'PENDING',
    image: '/images/venue1.jpg'
  },
  {
    id: 7,
    venue: 'The Sapphire Hall',
    locationName: 'Michael Brown',
    email: 'michael.brown@example.com',
    eventDate: '19 days ago',
    deadline: '12 days ago',
    eventType: 'Other',
    guests: 90,
    notes: true,
    status: 'REJECTED',
    image: '/images/venue1.jpg'
  },
  {
    id: 8,
    venue: 'Emerald Venue',
    locationName: 'Sophia Davis',
    email: 'sophia.davis@example.com',
    eventDate: '7 days ago',
    deadline: '1 day ago',
    eventType: 'Wedding',
    guests: 220,
    notes: true,
    status: 'ACCEPTED',
    image: '/images/venue1.jpg'
  },
  {
    id: 9,
    venue: 'Ocean Breeze Resort',
    locationName: 'William Garcia',
    email: 'william.garcia@example.com',
    eventDate: '3 days ago',
    deadline: 'In 2 days',
    eventType: 'Conference',
    guests: 1000,
    notes: false,
    status: 'QUOTED',
    image: '/images/venue1.jpg'
  },
  {
    id: 10,
    venue: 'Golden Crown Hall',
    locationName: 'Olivia Martinez',
    email: 'olivia.martinez@example.com',
    eventDate: '25 days ago',
    deadline: '10 days ago',
    eventType: 'Party',
    guests: 350,
    notes: true,
    status: 'PENDING',
    image: '/images/venue1.jpg'
  },
  {
    id: 11,
    venue: 'Crystal Palace',
    locationName: 'James Wilson',
    email: 'james.wilson@example.com',
    eventDate: '12 days ago',
    deadline: 'Yesterday',
    eventType: 'Other',
    guests: 50,
    notes: false,
    status: 'REJECTED',
    image: '/images/venue1.jpg'
  },
  {
    id: 12,
    venue: 'Paradise Garden',
    locationName: 'Mia Thompson',
    email: 'mia.thompson@example.com',
    eventDate: '18 days ago',
    deadline: '7 days ago',
    eventType: 'Wedding',
    guests: 450,
    notes: true,
    status: 'PENDING',
    image: '/images/venue1.jpg'
  },
  {
    id: 13,
    venue: 'Skyline Banquet',
    locationName: 'Benjamin White',
    email: 'ben.white@example.com',
    eventDate: '2 days ago',
    deadline: 'Today',
    eventType: 'Conference',
    guests: 800,
    notes: true,
    status: 'ACCEPTED',
    image: '/images/venue1.jpg'
  },
  {
    id: 14,
    venue: 'Garden Vista',
    locationName: 'Charlotte Harris',
    email: 'charlotte.harris@example.com',
    eventDate: '30 days ago',
    deadline: '4 days ago',
    eventType: 'Party',
    guests: 210,
    notes: false,
    status: 'PENDING',
    image: '/images/venue1.jpg'
  },
  {
    id: 15,
    venue: 'Imperial Hall',
    locationName: 'Henry Lewis',
    email: 'henry.lewis@example.com',
    eventDate: '6 days ago',
    deadline: 'Tomorrow',
    eventType: 'Wedding',
    guests: 600,
    notes: true,
    status: 'QUOTED',
    image: '/images/venue1.jpg'
  },
  {
    id: 16,
    venue: 'Moonlight Resort',
    locationName: 'Amelia Clark',
    email: 'amelia.clark@example.com',
    eventDate: '11 days ago',
    deadline: '5 days ago',
    eventType: 'Other',
    guests: 70,
    notes: false,
    status: 'REJECTED',
    image: '/images/venue1.jpg'
  },
  {
    id: 17,
    venue: 'Pearl Convention Center',
    locationName: 'Liam Hall',
    email: 'liam.hall@example.com',
    eventDate: '21 days ago',
    deadline: 'Yesterday',
    eventType: 'Conference',
    guests: 1200,
    notes: true,
    status: 'ACCEPTED',
    image: '/images/venue1.jpg'
  },
  {
    id: 18,
    venue: 'Royal Orchid',
    locationName: 'Ava Allen',
    email: 'ava.allen@example.com',
    eventDate: '9 days ago',
    deadline: 'Today',
    eventType: 'Wedding',
    guests: 380,
    notes: true,
    status: 'PENDING',
    image: '/images/venue1.jpg'
  },
  {
    id: 19,
    venue: 'Silver Leaf Banquet',
    locationName: 'Ethan Young',
    email: 'ethan.young@example.com',
    eventDate: '13 days ago',
    deadline: '3 days ago',
    eventType: 'Party',
    guests: 260,
    notes: false,
    status: 'PENDING',
    image: '/images/venue1.jpg'
  },
  {
    id: 20,
    venue: 'Coral Beach Club',
    locationName: 'Isabella King',
    email: 'isabella.king@example.com',
    eventDate: '4 days ago',
    deadline: 'Tomorrow',
    eventType: 'Conference',
    guests: 950,
    notes: true,
    status: 'QUOTED',
    image: '/images/venue1.jpg'
  },
  // --- keep going until id: 65 ---
  ...Array.from({ length: 45 }, (_, i) => ({
    id: i + 21,
    venue: `Venue ${i + 21}`,
    locationName: `Person ${i + 21}`,
    email: `person${i + 21}@example.com`,
    eventDate: `${(i % 40) + 1} days ago`,
    deadline: `${(i % 15) + 1} days ago`,
    eventType: (['Party', 'Wedding', 'Conference', 'Other'] as const)[i % 4],
    guests: (i + 1) * 10,
    notes: i % 2 === 0,
    status: (['PENDING', 'ACCEPTED', 'REJECTED', 'QUOTED'] as const)[i % 4],
    image: `https://picsum.photos/seed/${i + 21}/200/150`, 
  })),
];