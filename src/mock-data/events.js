export const mockEvents = [
    {
        id: 'event-001',
        title: 'Cotonou City Festival 2024',
        slug: 'cotonou-city-festival-2024',
        description: 'Le plus grand festival urbain du Bénin réunissant musique, art et gastronomie pendant 3 jours extraordinaires.',
        shortDescription: '3 jours de musique, art et culture urbaine',
        category: 'festival',
        subcategory: 'musique',
        date: '2024-12-20T20:00:00',
        endDate: '2024-12-22T23:00:00',
        location: 'Plage de Fidjrossè',
        city: 'Cotonou',
        address: 'Plage de Fidjrossè, Cotonou, Bénin',
        coordinates: { lat: 6.3619, lng: 2.4282 },
        organizer: {
            id: 'org-001',
            name: 'Culture Bénin Events',
            logo: 'https://images.unsplash.com/photo-1567446537710-0c5ff5a6ac32?w=200&h=200&fit=crop',
            verified: true
        },
        images: {
            main: 'https://images.unsplash.com/photo-1574391884720-385e697b4c98?w=1200&h=600&fit=crop',
            gallery: [
                'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=400&fit=crop',
                'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=400&fit=crop'
            ]
        },
        tickets: {
            total: 5000,
            sold: 3800,
            available: 1200,
            types: [
                {
                    id: 'ticket-001',
                    name: 'Pass 1 Jour',
                    price: 5000,
                    currency: 'FCFA',
                    description: 'Accès 1 jour au choix',
                    benefits: ['Accès général', 'Zone food court'],
                    quantity: 2000,
                    sold: 1500
                },
                {
                    id: 'ticket-002',
                    name: 'Pass VIP 3 Jours',
                    price: 25000,
                    currency: 'FCFA',
                    description: 'Accès VIP 3 jours',
                    benefits: ['Accès VIP', 'Parking privé', 'Cadeau welcome', 'Zone lounge'],
                    quantity: 500,
                    sold: 480
                }
            ]
        },
        status: 'active',
        featured: true,
        trending: true,
        tags: ['live-music', 'art', 'food', 'culture', 'beach'],
        createdAt: '2024-01-15T10:00:00',
        updatedAt: '2024-01-20T15:30:00'
    }
];

export const eventCategories = [
    { id: 'festival', name: 'Festivals', icon: '🎪', count: 12 },
    { id: 'concert', name: 'Concerts', icon: '🎵', count: 24 },
    { id: 'conference', name: 'Conférences', icon: '💼', count: 18 },
    { id: 'sport', name: 'Sports', icon: '⚽', count: 8 },
    { id: 'culture', name: 'Culture', icon: '🎭', count: 15 },
    { id: 'food', name: 'Gastronomie', icon: '🍴', count: 10 }
];
