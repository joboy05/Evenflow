import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        { name: "Saliou Houédjissou", role: "Organisateur de Concerts (Cotonou)", text: "EventFlow a révolutionné la billetterie pour nos spectacles au Palais des Congrès. Adieu les billets en papier falsifiés !", initial: "S" },
        { name: "Ousmane Sossa", role: "Manager Culturel", text: "Le système de QR Code dynamique est ce qu'il manquait au Bénin pour sécuriser les entrées VIP des grands festivals.", initial: "O" },
        { name: "Arlette Agossou", role: "Participante Festival Ouidah", text: "Simple et efficace. J'ai pu acheter mon pass pour les Fêtes des Vodun en 2 clics. La fierté du numérique local !", initial: "A" }
    ];

    return (
        <div className="max-w-6xl mx-auto py-16 px-4">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-black text-dark mb-4 tracking-tight uppercase">Témoignages</h1>
                <p className="text-primary font-bold uppercase tracking-widest text-sm">Ceux qui vivent le Flow</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-white border-2 border-dark/5 p-8 rounded-3xl shadow-sm hover:border-primary/20 transition-all relative overflow-hidden group">
                        <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors" />

                        <div className="flex gap-1 mb-6">
                            {[1, 2, 3, 4, 5].map(star => (
                                <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                        </div>

                        <p className="text-dark font-medium leading-relaxed mb-8 relative z-10">"{review.text}"</p>

                        <div className="flex items-center gap-4 border-t border-dark/5 pt-6">
                            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-black">
                                {review.initial}
                            </div>
                            <div>
                                <h4 className="font-bold text-dark">{review.name}</h4>
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">{review.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
