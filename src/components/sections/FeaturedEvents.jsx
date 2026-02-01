import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import EventCardPremium from '../ui/cards/EventCard/EventCardPremium';
import { mockEvents } from '../../mock-data/events';

const FeaturedEvents = () => {
    const navigate = useNavigate();
    // On prend les 3 premiers pour la vitrine
    const featured = mockEvents.slice(0, 3);

    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Blur */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
                    <div className="space-y-6">
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">SÉLECTION EXCLUSIVE</span>
                        <h2 className="text-6xl md:text-8xl font-black text-dark tracking-tighter uppercase italic leading-[0.8]">
                            Événements <br /> <span className="text-primary italic animate-glow">Vedettes</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {featured.map((event) => (
                        <div key={event.id} className="hover:scale-[1.02] transition-transform duration-500">
                            <EventCardPremium
                                event={event}
                                onClick={() => navigate(`/events/${event.id}`)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedEvents;
