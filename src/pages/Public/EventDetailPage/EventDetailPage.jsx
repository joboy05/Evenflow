import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, Ticket, ShieldCheck, ArrowLeft, Loader, Plus, Minus, Tag, Zap, Share2, Heart } from 'lucide-react';
import { useAuth } from '../../../hooks/useAuth';
import { useCart } from '../../../context/CartContext';
import { useToast } from '../../../components/ui/overlays/Toast';
import { mockEvents } from '../../../mock-data/events';

const EventDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth();
    const { addToCart } = useCart();
    const { success } = useToast();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ticketCount, setTicketCount] = useState(1);
    const [purchasing, setPurchasing] = useState(false);

    useEffect(() => {
        setLoading(true);
        const foundEvent = mockEvents.find(e => e.id === id) || mockEvents[0];
        setEvent(foundEvent);
        setLoading(false);
        window.scrollTo(0, 0);
    }, [id]);

    const handleAddToCart = () => {
        addToCart(event, event.tickets.types[0], ticketCount);
        success(`${ticketCount} ticket(s) ajouté(s) au panier !`);
    };

    if (loading) return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <Loader className="w-12 h-12 animate-spin text-primary" />
        </div>
    );

    if (!event) return (
        <div className="text-center py-40 space-y-8">
            <h2 className="text-4xl font-black text-dark tracking-tighter uppercase italic">Événement introuvable</h2>
            <button onClick={() => navigate('/events')} className="btn-premium py-4 px-8">
                Retour au catalogue
            </button>
        </div>
    );

    return (
        <div className="pb-32 bg-white selection:bg-primary selection:text-white">
            {/* Hero Banner Section */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <img
                    src={event.images.main}
                    alt={event.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-dark/20 to-transparent"></div>

                <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-20">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl text-white hover:bg-white hover:text-dark transition-all shadow-2xl"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <div className="flex gap-4">
                        <button className="p-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl text-white hover:bg-red-500 hover:border-red-500 transition-all shadow-2xl">
                            <Heart className="w-6 h-6" />
                        </button>
                        <button className="p-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl text-white hover:bg-primary hover:border-primary transition-all shadow-2xl">
                            <Share2 className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-12 left-8 right-8 z-20">
                    <div className="container mx-auto">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-wrap gap-3">
                                <span className="premium-badge bg-primary text-white border-transparent">
                                    {event.category}
                                </span>
                                <span className="premium-badge bg-white/20 backdrop-blur-xl text-white border-white/30">
                                    {event.organizer.name}
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.8]">
                                {event.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 bg-slate-50 rounded-[3rem] border border-slate-100 italic">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xl shadow-dark/5">
                                    <Calendar className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-dark/20 uppercase tracking-widest">Date</p>
                                    <p className="text-sm font-black text-dark uppercase">{new Date(event.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xl shadow-dark/5">
                                    <Clock className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-dark/20 uppercase tracking-widest">Heure</p>
                                    <p className="text-sm font-black text-dark uppercase">{new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xl shadow-dark/5">
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-dark/20 uppercase tracking-widest">Lieu</p>
                                    <p className="text-sm font-black text-dark uppercase truncate">{event.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <h2 className="text-3xl font-black text-dark uppercase italic tracking-tighter border-l-8 border-primary pl-6">L’Histoire de l’Événement</h2>
                            <div className="space-y-6 text-lg text-dark/60 font-medium leading-relaxed max-w-4xl">
                                <p>{event.description}</p>
                                <p>Rejoignez-nous pour une expérience sensorielle unique où chaque detail a été pensé pour vous offrir le meilleur de la scène béninoise.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-8 p-10 glass-panel rounded-[3rem] border-slate-100">
                            <img src={event.organizer.logo} alt={event.organizer.name} className="w-24 h-24 rounded-3xl object-cover shadow-2xl" />
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <h4 className="text-xl font-black uppercase italic tracking-tight">{event.organizer.name}</h4>
                                    {event.organizer.verified && <ShieldCheck className="w-5 h-5 text-primary" />}
                                </div>
                                <p className="text-sm text-dark/40 font-bold uppercase tracking-widest italic">Organisateur Vérifié par EvenFlow</p>
                                <button className="text-xs font-black text-primary uppercase tracking-[0.2em] hover:tracking-[0.3em] transition-all">Consulter le catalogue de l'organisateur →</button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="premium-card p-10 sticky top-32 space-y-10">
                            <div className="space-y-2">
                                <h3 className="text-xl font-black uppercase italic tracking-tight">Réserver mon Flow</h3>
                                <p className="text-xs text-dark/30 font-bold uppercase tracking-widest">Tickets digitaux immédiats</p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center p-6 bg-slate-50 rounded-3xl">
                                    <span className="text-xs font-black uppercase tracking-widest text-dark/40 italic">Prix Unit.</span>
                                    <span className="text-2xl font-black italic">{event.tickets.types[0].price.toLocaleString()} FCFA</span>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-dark/40">
                                        <span>Quantité</span>
                                        <span>Max. 10</span>
                                    </div>
                                    <div className="flex items-center justify-between p-2 bg-slate-100 rounded-3xl">
                                        <button
                                            onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                                            className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all scale-90"
                                        >
                                            <Minus className="w-6 h-6" />
                                        </button>
                                        <span className="text-3xl font-black italic">{ticketCount}</span>
                                        <button
                                            onClick={() => setTicketCount(Math.min(10, ticketCount + 1))}
                                            className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all scale-90"
                                        >
                                            <Plus className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-100">
                                <div className="flex justify-between items-center mb-10">
                                    <span className="text-sm font-black uppercase tracking-widest text-dark/40">Total</span>
                                    <span className="text-4xl font-black italic text-primary">{(event.tickets.types[0].price * ticketCount).toLocaleString()} FCFA</span>
                                </div>

                                <button
                                    onClick={handleAddToCart}
                                    disabled={purchasing}
                                    className="w-full btn-premium py-6 flex items-center justify-center gap-4 group"
                                >
                                    {purchasing ? (
                                        <Loader className="w-7 h-7 animate-spin" />
                                    ) : (
                                        <>
                                            <Zap className="w-6 h-6 fill-current group-hover:animate-pulse" />
                                            <span>AJOUTER AU PANIER</span>
                                        </>
                                    )}
                                </button>

                                <p className="mt-6 flex items-center justify-center gap-2 text-[9px] font-black text-dark/20 uppercase tracking-widest">
                                    <ShieldCheck className="w-3 h-3" />
                                    Transaction 100% Cryptée & Sécurisée
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailPage;
