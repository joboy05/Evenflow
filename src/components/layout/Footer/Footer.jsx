import React from 'react';
import { Link } from 'react-router-dom';
import { Ticket, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-32 pb-12 overflow-hidden relative mt-auto">
            {/* Abstract Background Blur */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                    {/* Brand Meta Column */}
                    <div className="lg:col-span-4 space-y-10">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:scale-110 transition-transform duration-500">
                                <Ticket className="text-white w-6 h-6" />
                            </div>
                            <span className="text-3xl font-black tracking-tighter uppercase italic">
                                Even<span className="text-primary">Flow</span>
                            </span>
                        </Link>

                        <p className="text-white/40 text-lg font-medium leading-relaxed max-w-sm">
                            Propulser l'écosystème événementiel béninois vers de nouveaux sommets digitaux. 🇧🇯
                        </p>

                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary italic">Plateforme</h4>
                            <ul className="space-y-4">
                                <li><Link to="/events" className="text-white/40 hover:text-white transition-colors font-bold uppercase text-[11px] tracking-widest">Événements</Link></li>
                                <li><Link to="/about" className="text-white/40 hover:text-white transition-colors font-bold uppercase text-[11px] tracking-widest">Notre Vision</Link></li>
                                <li><Link to="/contact" className="text-white/40 hover:text-white transition-colors font-bold uppercase text-[11px] tracking-widest">Support</Link></li>
                                <li><a href="#" className="text-white/40 hover:text-white transition-colors font-bold uppercase text-[11px] tracking-widest">Organisateurs</a></li>
                            </ul>
                        </div>
                        <div className="space-y-8">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary italic">Légal</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-white/40 hover:text-white transition-colors font-bold uppercase text-[11px] tracking-widest">Confidentialité</a></li>
                                <li><a href="#" className="text-white/40 hover:text-white transition-colors font-bold uppercase text-[11px] tracking-widest">Conditions d'usage</a></li>
                                <li><a href="#" className="text-white/40 hover:text-white transition-colors font-bold uppercase text-[11px] tracking-widest">Remboursements</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info Column */}
                    <div className="lg:col-span-3 space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary italic">Nous trouver</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group cursor-default">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase text-white/60 tracking-tight">Cotonou, Bénin</p>
                                    <p className="text-[10px] font-bold text-white/20 mt-1">Quartier Haie Vive, Rue 402</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group cursor-default">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase text-white/60 tracking-tight">+229 01 00 00 00</p>
                                    <p className="text-[10px] font-bold text-white/20 mt-1">Disponible 24/7 pour support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                            &copy; {new Date().getFullYear()} EvenFlow. Tous droits réservés.
                        </p>
                        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span className="text-[9px] font-black text-emerald-500 tracking-widest">SYSTEM STATUS: OPERATIONAL</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-white/20 font-black text-[10px] tracking-widest uppercase italic">
                        <span>MADE BY JjTech's</span>
                        <span className="text-primary">•</span>
                        <span>COTONOU 🇧🇯</span>
                    </div>
                </div>
            </div>

            {/* Global Tagline Reveal */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none uppercase italic tracking-tighter">
                EvenFlow Lifestyle
            </div>
        </footer>
    );
};

export default Footer;
