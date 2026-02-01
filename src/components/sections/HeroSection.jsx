import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Ticket, CheckCircle, Users, Star, Shield, Zap, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Composant Counter optimisé pour le style clean
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [inView, end, duration]);

    return <span ref={ref}>{count.toLocaleString('fr-FR')}{suffix}</span>;
};

const HeroSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const stats = [
        { label: 'Billets Sécurisés', value: 35247, suffix: '+', icon: Shield },
        { label: 'Événements Créés', value: 187, suffix: '', icon: Ticket },
        { label: 'Clients Actifs', value: 12483, suffix: '+', icon: Users },
        { label: 'Satisfaction', value: 98, suffix: '%', icon: Star },
    ];

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/20 overflow-hidden">
            {/* SEO Metadata */}
            <div className="hidden">
                <h1>EvenFlow - Plateforme officielle des organisateurs béninois</h1>
                <p>Transformez votre vision en réalité avec des outils professionnels pour maximiser vos revenus.</p>
            </div>

            {/* Minimalist Background Gradients (Subtle) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-50/50 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[150px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center justify-center h-full pb-10">
                <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 md:gap-8">



                    {/* Headline - SKEW TRICK applied for accents */}
                    <div className="flex flex-col items-center leading-[0.85]">
                        <h1 className="text-6xl md:text-[90px] lg:text-[110px] font-black text-gray-900 tracking-tighter uppercase -skew-x-12 transform">
                            L'ART DE
                        </h1>
                        <h1 className="text-6xl md:text-[90px] lg:text-[110px] font-black text-gray-900 tracking-tighter uppercase -skew-x-12 transform">
                            <span className="text-blue-600">RÉUSSIR</span> VOS
                        </h1>
                        <h1 className="text-6xl md:text-[90px] lg:text-[110px] font-black text-gray-900 tracking-tighter uppercase -skew-x-12 transform">
                            ÉVÉNEMENTS
                        </h1>
                    </div>

                    {/* Description */}
                    <div className="space-y-3 max-w-2xl mx-auto">
                        <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
                            La seule plateforme qui transforme votre vision en réalité, avec des outils professionnels pour maximiser vos revenus.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-gray-900 uppercase tracking-widest">
                            <span className="flex items-center gap-1.5">
                                <Shield className="w-3.5 h-3.5 text-blue-600" />
                                PCI-DSS Niveau 1
                            </span>
                            <span className="hidden md:inline text-gray-300">•</span>
                            <span className="flex items-center gap-1.5">
                                <Zap className="w-3.5 h-3.5 text-blue-600" />
                                Support 24/7
                            </span>
                        </div>
                    </div>

                    {/* Actions - Style "Explorer" & "Comment ça marche" */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-2">
                        <Link
                            to="/organizer/dashboard"
                            className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 group"
                        >
                            Démarrer maintenant
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <button
                            onClick={() => setIsPlaying(true)}
                            className="flex items-center gap-3 group text-gray-400 hover:text-gray-900 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 group-hover:border-gray-900 transition-all duration-300 bg-white">
                                <Play className="w-3 h-3 fill-current ml-0.5" />
                            </div>
                            <div className="text-left leading-tight">
                                <span className="block text-[10px] font-bold uppercase tracking-widest">Témoignage Client</span>
                                <span className="block text-[9px] font-medium text-gray-400">Festival Cotonou 2023</span>
                            </div>
                        </button>
                    </div>

                    {/* Stats Grid - Style Clean & Compact */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 pt-8 w-full border-t border-gray-50 mt-4">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center group">
                                <div className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter mb-1 group-hover:text-blue-600 transition-colors -skew-x-12 transform">
                                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-[9px] font-bold uppercase text-gray-400 tracking-[0.2em] text-center flex items-center gap-1.5">
                                    <stat.icon className="w-3 h-3" />
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Modal - Clean Overlay */}
            <AnimatePresence>
                {isPlaying && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setIsPlaying(false)}
                    >
                        <div className="w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                                title="Demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            <button
                                onClick={() => setIsPlaying(false)}
                                className="absolute top-4 right-4 text-white hover:text-blue-500 transition-colors"
                            >
                                <span className="sr-only">Fermer</span>
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default HeroSection;