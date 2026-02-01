import React from 'react';
import { Target, ShieldCheck, Zap, Globe } from 'lucide-react';

const AboutSection = () => {
    const features = [
        {
            icon: Target,
            title: "Précision Béninoise",
            desc: "Une plateforme conçue spécifiquement pour l'écosystème local, de Cotonou à Parakou."
        },
        {
            icon: ShieldCheck,
            title: "Confiance Totale",
            desc: "Chaque ticket est certifié et sécurisé par notre protocole unique de validation QR."
        },
        {
            icon: Zap,
            title: "Simplicité Flow",
            desc: "Réservez votre place en moins de 60 secondes, sans friction, sans stress."
        }
    ];

    return (
        <section className="relative overflow-hidden py-32" id="about">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-24">
                    {/* Visual Side */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-dark/20 transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                            <img
                                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80"
                                alt="EvenFlow Experience"
                                className="w-full h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent"></div>

                            <div className="absolute bottom-12 left-12 right-12 p-8 glass-panel rounded-3xl">
                                <p className="text-white text-2xl font-black italic uppercase tracking-tighter leading-tight">
                                    "La révolution digitale de la culture béninoise est en marche."
                                </p>
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20 -z-10"></div>
                        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-purple-500 rounded-full blur-[80px] opacity-10 -z-10"></div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2 space-y-12">
                        <div className="space-y-6">
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">NOTRE VISION</span>
                            <h2 className="text-5xl md:text-7xl font-black text-dark tracking-tighter uppercase italic leading-none">
                                Plus qu'une <span className="text-primary italic animate-glow">Billetterie</span>
                            </h2>
                            <p className="text-xl text-dark/40 font-medium leading-relaxed">
                                EvenFlow n'est pas seulement un outil, c'est le moteur de vos souvenirs les plus mémorables. Nous connectons les passionnés aux moments forts de la vie béninoise.
                            </p>
                        </div>

                        <div className="grid gap-8">
                            {features.map((f, i) => (
                                <div key={i} className="flex gap-6 group hover:translate-x-2 transition-transform duration-500">
                                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-xl shadow-dark/5">
                                        <f.icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-dark uppercase tracking-tight italic mb-2">{f.title}</h4>
                                        <p className="text-dark/40 font-medium text-sm leading-relaxed">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
