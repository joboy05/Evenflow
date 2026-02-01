import React from 'react';
import { Target, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const features = [
        {
            icon: Target,
            title: "Précision Locale",
            desc: "Conçu pour l'écosystème béninois. De Cotonou à Parakou, nous comprenons vos défis."
        },
        {
            icon: ShieldCheck,
            title: "Sécurité Absolue",
            desc: "Chaque transaction est cryptée. Chaque ticket est unique. Votre confiance est notre priorité."
        },
        {
            icon: Zap,
            title: "Rapidité Extrême",
            desc: "60 secondes. C'est tout ce qu'il faut pour réserver votre place et recevoir votre ticket."
        }
    ];

    return (
        <section className="relative overflow-hidden py-32 bg-gradient-to-b from-white to-gray-50" id="about">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">

                    {/* Visual Side with Parallax */}
                    <motion.div
                        className="lg:w-1/2 relative"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-900/20 transform hover:scale-[1.02] transition-transform duration-700">
                            <motion.img
                                src="/images/events/concert-crowd.png"
                                alt="Concert avec foule en délire"
                                className="w-full h-[600px] object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                            <div className="absolute bottom-12 left-12 right-12 p-8 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20">
                                <p className="text-white text-2xl font-black italic uppercase tracking-tighter leading-tight">
                                    "Votre succès commence ici."
                                </p>
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-20 -z-10"></div>
                        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-red-500 rounded-full blur-[80px] opacity-10 -z-10"></div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        ref={ref}
                        className="lg:w-1/2 space-y-12"
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="space-y-6">
                            <span className="text-red-600 font-bold tracking-widest uppercase text-xs">VOTRE HÉRITAGE</span>
                            <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase italic leading-none">
                                Plus qu'une <span className="text-red-600 italic">Billetterie</span>
                            </h2>
                            <p className="text-xl text-gray-500 font-medium leading-relaxed">
                                EvenFlow n'est pas un simple outil. C'est <span className="text-gray-900 font-bold">le moteur de vos moments inoubliables</span>.
                                Nous connectons les passionnés aux expériences qui marquent une vie.
                            </p>
                        </div>

                        <div className="grid gap-8">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    className="flex gap-6 group hover:translate-x-2 transition-transform duration-500"
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        delay: 0.4 + i * 0.15
                                    }}
                                >
                                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-gray-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-xl shadow-gray-900/5 group-hover:shadow-red-600/30">
                                        <f.icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight italic mb-2">{f.title}</h4>
                                        <p className="text-gray-500 font-medium text-sm leading-relaxed">{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
