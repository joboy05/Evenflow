import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Shield, Ticket, Users, Star, Zap } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MagneticButton from '../ui/buttons/MagneticButton';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

const skewVariants = {
    hidden: { y: 50, opacity: 0, skewX: -20 },
    visible: {
        y: 0,
        opacity: 1,
        skewX: -12,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8
        }
    }
};

// Counter Component
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

    // Mouse Parallax Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const moveX = (clientX - window.innerWidth / 2) / 25;
        const moveY = (clientY - window.innerHeight / 2) / 25;
        mouseX.set(moveX);
        mouseY.set(moveY);
    };

    const orbX = useTransform(springX, (val) => val * 2);
    const orbY = useTransform(springY, (val) => val * 2);
    const spotlightX = useTransform(springX, (val) => val * 1);
    const spotlightY = useTransform(springY, (val) => val * 1);

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-white"
        >

            {/* SEO Metadata */}
            <div className="hidden">
                <h1>EvenFlow - Plateforme officielle des organisateurs béninois</h1>
                <p>L'art de réussir vos événements.</p>
            </div>

            {/* Living Background - Chic & Minimalist */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-white">

                {/* Minimalist Dot Grid */}
                <div
                    className="absolute inset-0 opacity-[0.15]"
                    style={{
                        backgroundImage: `radial-gradient(#DC2626 0.5px, transparent 0.5px)`,
                        backgroundSize: '30px 30px',
                    }}
                />

                {/* Soft Interactive Spotlight */}
                <motion.div
                    style={{
                        x: spotlightX,
                        y: spotlightY,
                        left: '50%',
                        top: '50%',
                        translateX: '-50%',
                        translateY: '-50%'
                    }}
                    className="absolute w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[120px]"
                />

                {/* Subtle Accent Glows */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-red-50/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50/50 to-transparent" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center justify-center h-full"
            >
                <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 md:gap-10">

                    {/* Headline Group */}
                    <div className="flex flex-col items-center leading-[0.85] relative">
                        <motion.h1 variants={itemVariants} className="text-6xl md:text-[90px] lg:text-[110px] font-black text-gray-900 tracking-tighter uppercase -skew-x-12 transform">
                            L'ART DE
                        </motion.h1>

                        <motion.div variants={skewVariants} className="relative z-10">
                            <h1 className="text-6xl md:text-[90px] lg:text-[110px] font-black tracking-tighter uppercase transform text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                                RÉUSSIR
                            </h1>
                            {/* Chic Minimalist Glow */}
                            <motion.div
                                style={{ x: useTransform(springX, v => v * 0.3), y: useTransform(springY, v => v * 0.3) }}
                                className="absolute inset-0 bg-red-500/10 blur-[80px] -z-10"
                            />
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-6xl md:text-[90px] lg:text-[110px] font-black text-gray-900 tracking-tighter uppercase -skew-x-12 transform">
                            VOS ÉVÉNEMENTS
                        </motion.h1>
                    </div>

                    {/* Description - Typewriter effect logic handled by simple delay for now to keep it clean, or framer motion char by char if requested later. using nice fade up */}
                    <motion.div variants={itemVariants} className="space-y-4 max-w-2xl mx-auto">
                        <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
                            La seule plateforme qui transforme <span className="text-gray-900 font-bold">votre vision</span> en réalité.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-gray-900 uppercase tracking-widest pt-2">
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
                                <Shield className="w-4 h-4 text-red-600" />
                                <span>PCI-DSS Niveau 1</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
                                <Zap className="w-4 h-4 text-red-600" />
                                <span>Support 24/7</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Actions - Magnetic Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">

                        <Link to="/organizer/dashboard">
                            <MagneticButton className="group relative bg-red-600 text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase overflow-hidden shadow-xl shadow-red-600/30">
                                <span className="relative z-10 flex items-center gap-2">
                                    Créez votre premier événement
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                                {/* Liquid Fill Effect */}
                                <div className="absolute inset-0 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                            </MagneticButton>
                        </Link>

                        <button
                            onClick={() => setIsPlaying(true)}
                            className="group flex items-center gap-4 text-gray-400 hover:text-gray-900 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 group-hover:border-red-600 group-hover:text-red-600 transition-all duration-300 bg-white shadow-sm">
                                <Play className="w-4 h-4 fill-current ml-0.5" />
                            </div>
                            <div className="text-left leading-tight">
                                <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-900">Témoignage</span>
                                <span className="block text-[9px] font-medium text-gray-400">Festival Cotonou 2023</span>
                            </div>
                        </button>
                    </motion.div>

                    {/* Stats Grid - Cascade Animation */}
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 pt-12 w-full border-t border-gray-100 mt-8"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="flex flex-col items-center group cursor-default"
                            >
                                <div className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter mb-2 group-hover:text-red-600 transition-colors -skew-x-12 transform">
                                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-[10px] font-bold uppercase text-gray-400 tracking-[0.2em] text-center flex items-center gap-2">
                                    <stat.icon className="w-3 h-3 text-red-100 group-hover:text-red-600 transition-colors" />
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Video Modal - Clean Overlay */}
            <AnimatePresence>
                {isPlaying && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setIsPlaying(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative"
                        >
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                                title="Demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            <button
                                onClick={() => setIsPlaying(false)}
                                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            >
                                <span className="sr-only">Fermer</span>
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default HeroSection;