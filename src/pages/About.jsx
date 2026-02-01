import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto py-16 px-4">
            <h1 className="text-5xl font-black text-primary mb-8 tracking-tighter italic">À propos d'EvenFlow</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-dark">Notre Vision</h3>
                    <p className="text-dark/70 leading-relaxed text-lg">
                        EvenFlow est né d'une ambition claire : accompagner le rayonnement culturel par une technologie de pointe.
                        Du Palais des Congrès à la plage de Fidjrossè, nous fluidifions l'accès aux plus beaux moments.
                    </p>
                    <p className="text-dark/70 leading-relaxed text-lg">
                        Nous mettons fin aux files d'attente interminables et aux fraudes sur les billets,
                        permettant ainsi aux artistes locaux et aux organisateurs de se concentrer sur l'essentiel : le spectacle.
                    </p>
                </div>

                <div className="bg-white/5 p-8 rounded-3xl border-2 border-primary/20">
                    <h3 className="text-2xl font-bold text-primary mb-6">Nos Valeurs</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-[10px] font-bold mt-1">1</span>
                            <div>
                                <h4 className="font-bold text-dark">Simplicité</h4>
                                <p className="text-sm text-dark/60">Une interface épurée Blanc & Bleu pour une clarté totale.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-[10px] font-bold mt-1">2</span>
                            <div>
                                <h4 className="font-bold text-dark">Confiance</h4>
                                <p className="text-sm text-dark/60">Sécurité maximale et lutte contre la fraude.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-[10px] font-bold mt-1">3</span>
                            <div>
                                <h4 className="font-bold text-dark">Innovation</h4>
                                <p className="text-sm text-dark/60">Le flux technologique au service de l'émotion.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
