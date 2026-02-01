import React from 'react';
import { Search, Ticket, Mail, Scan, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: Search,
            title: "Explorer",
            subtitle: "Trouvez l'inspiration",
            desc: "Parcourez notre catalogue d'événements exclusifs et trouvez celui qui fera battre votre cœur."
        },
        {
            icon: Ticket,
            title: "Réserver",
            subtitle: "Paiement sécurisé",
            desc: "Choisissez votre type de ticket et réglez en toute sécurité via Mobile Money ou Carte."
        },
        {
            icon: Mail,
            title: "Recevoir",
            subtitle: "Ticket digital",
            desc: "Votre ticket QR Code unique arrive instantanément par mail et sur votre dashboard."
        },
        {
            icon: Scan,
            title: "Profiter",
            subtitle: "Scanning à l'entrée",
            desc: "Présentez simplement votre écran à l'entrée et entrez dans l'univers de l'événement."
        }
    ];

    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden rounded-[4rem] mx-4">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center space-y-6 mb-24">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">GUIDE UTILISATEUR</span>
                    <h2 className="text-6xl md:text-8xl font-black text-dark tracking-tighter uppercase italic leading-none">
                        Comment ça <span className="text-primary italic animate-glow">Marche</span> ?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    {/* Connection Lines (Desktop) */}
                    <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 border-t-2 border-dashed border-dark/5 -z-10"></div>

                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-[2rem] bg-white shadow-2xl shadow-dark/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <step.icon className="w-10 h-10" />
                                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-dark text-white text-xs font-black flex items-center justify-center border-4 border-slate-50">
                                    0{i + 1}
                                </div>
                            </div>
                            <div className="space-y-3 px-4">
                                <h4 className="text-[10px] font-black uppercase text-primary tracking-[0.3em]">{step.subtitle}</h4>
                                <h3 className="text-2xl font-black text-dark tracking-tight uppercase italic">{step.title}</h3>
                                <p className="text-dark/40 text-sm font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter Sub-section */}
                <div className="mt-40 max-w-5xl mx-auto glass-panel p-12 lg:p-20 rounded-[4rem] text-center space-y-10">
                    <div className="space-y-4">
                        <h3 className="text-4xl md:text-6xl font-black text-dark tracking-tighter uppercase italic leading-none">
                            Ne manquez plus <br /> aucun <span className="text-primary italic animate-glow">Flow</span>
                        </h3>
                        <p className="text-lg text-dark/40 font-medium">Inscrivez-vous à la newsletter pour recevoir les exclusivités avant tout le monde.</p>
                    </div>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                        <input
                            type="email"
                            placeholder="votre@email.com"
                            className="flex-grow premium-input"
                        />
                        <button className="btn-premium px-10 py-5 whitespace-nowrap">
                            S'abonner <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
