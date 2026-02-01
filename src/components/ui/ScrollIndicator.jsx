import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollIndicator = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 via-red-600 to-red-800 z-50 origin-left"
                style={{ scaleX: scrollProgress / 100 }}
                initial={{ scaleX: 0 }}
            />

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 w-14 h-14 bg-red-600 text-white rounded-full shadow-2xl shadow-red-600/50 flex items-center justify-center z-50 hover:bg-red-700 transition-all group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />

                        {/* Pulse Animation */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-red-600"
                            animate={{
                                scale: [1, 1.5],
                                opacity: [0.5, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut"
                            }}
                        />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};

export default ScrollIndicator;
