import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Zap, Facebook, Twitter, Instagram, Linkedin, MapPin } from 'lucide-react';

const Footer = () => {
    const footerLinks = {
        "PLATEFORME": [
            { label: "Explorer", href: "/events" },
            { label: "Créer", href: "/create-event" },
            { label: "Comment ça marche", href: "/how-it-works" },
            { label: "Tarifs", href: "/pricing" }
        ],
        "ENTREPRISE": [
            { label: "À propos", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "Carrières", href: "/careers" },
            { label: "Presse", href: "/press" }
        ],
        "SUPPORT": [
            { label: "Centre d'aide", href: "/help" },
            { label: "Contact", href: "/contact" },
            { label: "Statut", href: "/status" },
            { label: "FAQ", href: "/faq" }
        ],
        "LÉGAL": [
            { label: "Confidentialité", href: "/privacy" },
            { label: "Conditions", href: "/terms" },
            { label: "Cookies", href: "/cookies" },
            { label: "Licences", href: "/licenses" }
        ]
    };

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Linkedin, href: "#", label: "LinkedIn" }
    ];

    return (
        <footer className="bg-[#1d1d1b] text-white">
            <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
                {/* Main Content - 5 Columns including Legal */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-12">

                    {/* Brand & Location Column */}
                    <div className="col-span-2 md:col-span-1 space-y-4 md:space-y-6">
                        <Link to="/" className="flex items-center gap-2 md:gap-3 group">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-lg flex items-center justify-center">
                                <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            </div>
                            <div>
                                <h2 className="text-lg md:text-xl font-black">
                                    Even<span className="text-red-500">Flow</span>
                                </h2>
                                <div className="flex items-center gap-2 mt-1">
                                    <MapPin className="w-3 h-3 text-red-400" />
                                    <span className="text-xs text-white/60">Cotonou, Bénin</span>
                                </div>
                            </div>
                        </Link>

                        {/* Social Links */}
                        <div className="flex items-center gap-2 pt-2">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center"
                                >
                                    <social.icon className="w-3 h-3 md:w-4 md:h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns - including Legal */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="space-y-3">
                            <h3 className="text-xs font-bold text-white/80 uppercase tracking-wider mb-2">
                                {category}
                            </h3>
                            <ul className="space-y-2">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.href}
                                            className="text-white/60 hover:text-white text-xs transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Separator */}
                <div className="h-px bg-white/10 mb-6 md:mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright & Info */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                            <div className="w-5 h-5 bg-red-600 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-black">EF</span>
                            </div>
                            <p className="text-xs text-white/60">
                                © 2026 EvenFlow. Tous droits réservés.
                            </p>
                        </div>
                        <p className="text-xs text-white/40">
                            Plateforme officielle des organisateurs béninois
                        </p>
                    </div>

                    {/* Badges */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            <span className="text-xs font-medium text-white/70">EN LIGNE</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full">
                            <Heart className="w-3 h-3 text-red-500" />
                            <span className="text-xs font-medium text-white/70">Conçu au Bénin</span>
                        </div>
                    </div>
                </div>

                {/* Version Info */}
                <div className="mt-4 pt-4 border-t border-white/5 text-center">
                    <p className="text-xs text-white/30 font-mono">
                        EVF-2024-001 v2.5.1
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;