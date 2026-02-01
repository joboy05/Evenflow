import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-xl mx-auto py-16 px-4 text-center">
            <div className="mb-12">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                    <Mail className="w-8 h-8" />
                </div>
                <h1 className="text-4xl font-black text-dark mb-4 tracking-tight">Contactez-nous</h1>
                <p className="text-dark/50 font-medium whitespace-pre-wrap">
                    Comment pouvons-nous fluidifier votre expérience ?
                    Notre équipe "Flow" vous répondra sous 24h.
                </p>
            </div>

            <form className="space-y-6 text-left bg-white/5 p-8 rounded-3xl border-2 border-white/5 shadow-2xl">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-dark/40 uppercase tracking-widest pl-1">Nom Complet</label>
                    <input type="text" className="input-field" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-dark/40 uppercase tracking-widest pl-1">Email</label>
                    <input type="email" className="input-field" placeholder="votre@email.com" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-dark/40 uppercase tracking-widest pl-1">Message</label>
                    <textarea className="input-field min-h-[150px] pt-4" placeholder="Votre message..."></textarea>
                </div>
                <button type="button" className="w-full btn-primary py-4 text-lg font-bold">
                    Envoyer <Send className="w-5 h-5 ml-2" />
                </button>
            </form>
        </div>
    );
};

export default Contact;
