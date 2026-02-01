import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Globe } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const subjects = [
        'Demande de démo',
        'Support technique',
        'Partenaire commercial',
        'Presse & Médias',
        'Autre question'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Ici tu pourrais ajouter ta logique d'envoi
    };

    return (
        <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                    Prenez Contact
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Nous sommes à votre écoute pour répondre à vos questions et vous accompagner dans vos événements.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left Column: Contact Information */}
                <div className="space-y-10">
                    {/* Informations Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
                            Informations
                        </h2>

                        <div className="space-y-8">
                            {/* Téléphones */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gray-900">
                                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold">Téléphones</h3>
                                </div>
                                <div className="space-y-3 pl-13">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
                                            <span className="text-xs font-bold text-red-600">BJ</span>
                                        </div>
                                        <p className="text-gray-700 font-medium">Bénin: <span className="text-gray-900 font-bold">+229 64 19 29 00</span></p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
                                            <span className="text-xs font-bold text-red-600">FR</span>
                                        </div>
                                        <p className="text-gray-700 font-medium">France: <span className="text-gray-900 font-bold">+33 7 66 89 87 81</span></p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
                                            <span className="text-xs font-bold text-red-600">CA</span>
                                        </div>
                                        <p className="text-gray-700 font-medium">Canada: <span className="text-gray-900 font-bold">+1 (438) 341 1023</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gray-900">
                                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold">Email</h3>
                                </div>
                                <div className="pl-13">
                                    <a href="mailto:contact@evenflow.bj" className="text-red-600 hover:text-red-700 font-bold block mb-2">
                                        contact@evenflow.bj
                                    </a>
                                    <a href="mailto:support@evenflow.bj" className="text-red-600 hover:text-red-700 font-bold block">
                                        support@evenflow.bj
                                    </a>
                                </div>
                            </div>

                            {/* Bureaux */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gray-900">
                                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold">Bureaux</h3>
                                </div>
                                <div className="space-y-3 pl-13">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mt-1">
                                            <span className="text-xs font-bold text-red-600">BJ</span>
                                        </div>
                                        <div>
                                            <p className="text-gray-900 font-bold">Cotonou, Bénin</p>
                                            <p className="text-sm text-gray-500">Quartier Haie Vive, Rue 402</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mt-1">
                                            <span className="text-xs font-bold text-red-600">FR</span>
                                        </div>
                                        <div>
                                            <p className="text-gray-900 font-bold">Paris, France</p>
                                            <p className="text-sm text-gray-500">15ème arrondissement</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mt-1">
                                            <span className="text-xs font-bold text-red-600">CA</span>
                                        </div>
                                        <div>
                                            <p className="text-gray-900 font-bold">Montréal, Canada</p>
                                            <p className="text-sm text-gray-500">Quartier des affaires</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social & Additional Info */}
                    <div className="pt-8 border-t border-gray-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                                <Globe className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-gray-900">Disponibilité</h3>
                        </div>
                        <p className="text-gray-600">
                            Notre équipe de support répond sous <span className="font-bold text-red-600">24 heures maximum</span>.
                            Pour les urgences techniques, contactez le <span className="font-bold">+229 64 19 29 00</span>.
                        </p>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="lg:pl-8 lg:border-l lg:border-gray-100">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Envoyez-nous un message</h2>
                                <p className="text-sm text-gray-500 mt-1">Les champs marqués d'un * sont obligatoires</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Nom */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-medium text-gray-900 flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        Votre nom *
                                    </label>
                                    <span className="text-xs text-gray-400">Ex: Jean Dupont</span>
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="Jean Dupont"
                                />
                            </div>

                            {/* Téléphone */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-900">Téléphone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="+229 00 00 00 00"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-medium text-gray-900">Email *</label>
                                    <span className="text-xs text-gray-400">Ex: votre@email.com</span>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="votre@email.com"
                                />
                            </div>

                            {/* Sujet */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-900">Sujet *</label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                                >
                                    <option value="">Sélectionnez un sujet</option>
                                    {subjects.map((subject, index) => (
                                        <option key={index} value={subject}>
                                            {subject}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-medium text-gray-900">Message *</label>
                                    <span className="text-xs text-gray-400">{formData.message.length}/500</span>
                                </div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    maxLength="500"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Votre message ici..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold py-4 px-6 rounded-xl hover:from-primary-700 hover:to-primary-800 active:scale-95 transition-all duration-300 shadow-lg shadow-primary-500/25 flex items-center justify-center gap-3 group"
                            >
                                <span>Envoyer le message</span>
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <p className="text-xs text-center text-gray-500 pt-4">
                                En cliquant sur "Envoyer", vous acceptez notre politique de confidentialité.
                                Nous ne partagerons jamais vos données avec des tiers.
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            {/* Stats Banner */}
            <div className="mt-16 pt-8 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="text-3xl font-bold text-primary-600 mb-2">24h</div>
                        <div className="text-sm text-gray-600">Temps de réponse moyen</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                        <div className="text-sm text-gray-600">Satisfaction client</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary-600 mb-2">15min</div>
                        <div className="text-sm text-gray-600">Pour les urgences techniques</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;