import React, { useEffect } from 'react';
import HeroSection from '../../../components/sections/HeroSection';
import AboutSection from '../../../components/sections/AboutSection';
import FeaturedEvents from '../../../components/sections/FeaturedEvents';
import HowItWorks from '../../../components/sections/HowItWorks';

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Home Section */}
            <div id="home">
                <HeroSection />
            </div>

            <div className="space-y-32 pb-40">
                <div className="relative">
                    <div id="about" className="absolute -top-24" />
                    <div id="vision" className="absolute -top-24" />
                    <AboutSection />
                </div>

                <div className="relative">
                    <div id="events" className="absolute -top-24" />
                    <div id="selection" className="absolute -top-24" />
                    <FeaturedEvents />
                </div>

                <div className="relative">
                    <div id="how-it-works" className="absolute -top-24" />
                    <div id="guide" className="absolute -top-24" />
                    <HowItWorks />
                </div>

                {/* Testimonials */}
                <div id="testimonials" className="relative">
                </div>
            </div>

            {/* Simple Final CTA - keeping it clean */}
            <div className="py-24 bg-gray-50 border-y border-gray-100" id="contact">
                <div className="container mx-auto px-4 text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase italic">
                        Prêt pour votre prochain <span className="text-blue-600 not-italic">Flow ?</span>
                    </h2>
                    <p className="text-gray-400 font-medium max-w-xl mx-auto text-lg">
                        Rejoignez des milliers de passionnés et ne ratez plus aucune expérience.
                    </p>
                    <button className="px-12 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                        CRÉER UN COMPTE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
