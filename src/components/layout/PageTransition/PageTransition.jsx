import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const PageTransition = ({ children }) => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [previousPath, setPreviousPath] = useState('');

    // Detect page changes
    useEffect(() => {
        if (location.pathname !== previousPath) {
            if (previousPath !== '') { // Only show loader for subsequent navigations
                setLoading(true);
                const timer = setTimeout(() => {
                    setLoading(false);
                    setPreviousPath(location.pathname);
                }, 500);
                return () => clearTimeout(timer);
            } else {
                setPreviousPath(location.pathname);
            }
        }
    }, [location.pathname, previousPath]);

    // Page content variants
    const pageVariants = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 }
    };

    return (
        <>
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-[9999]"
                initial={{ width: "0%" }}
                animate={{ width: loading ? "70%" : "100%" }}
                transition={{ duration: 0.5 }}
            />

            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>

            {/* Extreme Loading Overlay (Only if truly loading) */}
            <AnimatePresence>
                {loading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9998] bg-white/90 backdrop-blur-md flex items-center justify-center"
                    >
                        <div className="flex flex-col items-center">
                            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
                            <p className="text-dark font-black uppercase tracking-widest text-[10px]">Chargement...</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default PageTransition;
