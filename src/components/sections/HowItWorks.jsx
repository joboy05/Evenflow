import React from 'react';
import { Search, Ticket, Mail, Scan, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowItWorks = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const steps = [
        {
            icon: Search,
            title: "Explorez",
            subtitle: "Trouvez l'inspiration",
            desc: "Parcourez notre catalogue d'événements exclusifs et découvrez celui qui fera battre votre cœur."
        },
        {
            icon: Ticket,
            title: "Réservez",
            subtitle: "Paiement sécurisé",
            desc: "Choisissez votre ticket et réglez en toute sécurité via Mobile Money ou Carte bancaire."
        },
        {
            icon: Mail,
            title: "Recevez",
            subtitle: "Ticket digital",
            desc: "Votre ticket QR Code unique arrive instantanément par email et sur votre dashboard."
        },
        {
            icon: Scan,
            title: "Profitez",
            subtitle: "Scanning à l'entrée",
            desc: "Présentez simplement votre écran à l'entrée et plongez dans l'expérience."
        }
    ];

    return (
        <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden rounded-[4rem] mx-4">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="text-center space-y-6 mb-24"
                >
                    <span className="text-red-600 font-bold tracking-widest uppercase text-xs">VOTRE SUCCÈS EN 4 ÉTAPES SIMPLES</span>
                    <h2 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter uppercase italic leading-none">
                        Comment ça <span className="text-red-600 italic">Marche</span> ?
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    {/* Connection Lines (Desktop) */}
                    <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200 -z-10"></div>

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="relative w-24 h-24 rounded-[2rem] bg-white shadow-2xl shadow-gray-900/5 flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                                <step.icon className="w-10 h-10" />
                                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gray-900 text-white text-xs font-black flex items-center justify-center border-4 border-gray-50">
                                    0{i + 1}
                                </div>
                                {/* Glow on hover */}
                                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 rounded-[2rem] blur-xl transition-all duration-500 -z-10" />
                            </div>
                            <div className="space-y-3 px-4">
                                <h4 className="text-[10px] font-black uppercase text-red-600 tracking-[0.3em]">{step.subtitle}</h4>
                                <h3 className="text-2xl font-black text-gray-900 tracking-tight uppercase italic">{step.title}</h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter Sub-section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-40 max-w-5xl mx-auto backdrop-blur-xl bg-white/50 p-12 lg:p-20 rounded-[4rem] text-center space-y-10 border border-gray-100 shadow-xl"
                >
                    <div className="space-y-4">
                        <h3 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase italic leading-none">
                            Ne manquez plus <br /> aucun <span className="text-red-600 italic">Flow</span>
                        </h3>
                        <p className="text-lg text-gray-500 font-medium">Recevez les exclusivités avant tout le monde.</p>
                    </div>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                        <input
                            type="email"
                            placeholder="votre@email.com"
                            className="flex-grow px-6 py-4 rounded-full border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-colors font-medium"
                        />
                        <button className="group bg-red-600 text-white px-10 py-4 rounded-full font-bold uppercase text-sm tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2">
                            S'abonner
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
