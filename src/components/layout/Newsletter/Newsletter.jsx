import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, Zap } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            console.log('Email subscribed:', email);
            setSubscribed(true);
            setTimeout(() => {
                setSubscribed(false);
                setEmail('');
            }, 3000);
        }
    };

    return (
        <section className="relative overflow-hidden py-24 sm:py-32 bg-white">
            {/* Background elements for depth */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40 animate-pulse" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl opacity-30" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative isolate overflow-hidden bg-[#0A0A0A] px-8 py-20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] rounded-[2.5rem] sm:px-24 xl:py-28 border border-white/5"
                >
                    {/* Interior gradient glow */}
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600/20 rounded-full blur-[100px]" />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="mb-8 flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
                                    Édition Exclusive
                                </span>
                            </div>

                            <h2 className="max-w-3xl text-center text-4xl font-black tracking-tight text-white sm:text-6xl uppercase italic leading-[1.1]">
                                Dominez le <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Flow</span>
                            </h2>

                            <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-gray-400 font-medium">
                                Rejoignez le cercle des organisateurs d'élite.
                                Recevez les stratégies et les opportunités qui font la différence, chaque semaine.
                            </p>

                            <form onSubmit={handleSubmit} className="mt-12 w-full max-w-lg">
                                <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 transition-all hover:border-white/20 group">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-auto bg-transparent border-0 px-6 py-4 text-white focus:ring-0 placeholder:text-gray-500 text-base font-medium"
                                        placeholder="votre@prestige-mail.com"
                                    />
                                    <button
                                        type="submit"
                                        className={`flex-none rounded-xl px-10 py-4 text-sm font-black uppercase tracking-wider shadow-lg transition-all duration-500 ${subscribed
                                            ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                                            : 'bg-red-600 text-white hover:bg-red-500 hover:shadow-red-600/30'
                                            }`}
                                    >
                                        {subscribed ? 'Confirmé' : 'Accès immédiat'}
                                    </button>
                                </div>
                                <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] font-bold uppercase tracking-widest text-white/30">
                                    <span className="flex items-center gap-2">
                                        <Zap className="w-3 h-3 text-red-500" /> Sans engagement
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Check className="w-3 h-3 text-emerald-500" /> Données sécurisées
                                    </span>
                                </div>
                            </form>
                        </motion.div>
                    </div>

                    {/* Background SVG decorative pattern */}
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                        aria-hidden="true"
                    >
                        <circle cx={512} cy={512} r={512} fill="url(#premium-gradient)" fillOpacity="0.1" />
                        <defs>
                            <radialGradient id="premium-gradient">
                                <stop stopColor="#ef4444" />
                                <stop offset={1} stopColor="black" />
                            </radialGradient>
                        </defs>
                    </svg>
                </motion.div>

                {/* Enhanced Social Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 flex flex-col items-center"
                >
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-12" />
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-10">
                        Propulsé par les leaders de l'industrie
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 brightness-0 opacity-40 grayscale transition-all hover:opacity-60">
                        <span className="text-2xl font-black italic tracking-tighter">EVENTPRIME.</span>
                        <span className="text-2xl font-black italic tracking-tighter">CULTURE.BJ</span>
                        <span className="text-2xl font-black italic tracking-tighter">BÉNIN.FLOW</span>
                        <span className="text-2xl font-black italic tracking-tighter">VIP.ACCESS</span>
                    </div>
                </motion.div>
            </div>

            {/* Success Notification Toast */}
            {subscribed && (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="fixed bottom-12 right-12 z-[100] bg-white text-gray-900 border border-gray-100 p-1 pr-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center gap-4"
                >
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white text-xl">
                        <Check className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="font-black text-sm uppercase italic tracking-tight">Bienvenue dans l'élite</p>
                        <p className="text-xs text-gray-500 font-medium">Vérifiez vos emails dès maintenant</p>
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default Newsletter;