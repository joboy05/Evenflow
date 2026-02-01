import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md', color = 'blue' }) => {
    const sizes = {
        sm: 'w-6 h-6',
        md: 'w-12 h-12',
        lg: 'w-16 h-16'
    };

    const colors = {
        blue: 'border-red-600',
        white: 'border-white',
        gray: 'border-gray-600'
    };

    return (
        <div className="flex items-center justify-center">
            <motion.div
                className={`${sizes[size]} border-4 ${colors[color]} border-t-transparent rounded-full`}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
    );
};

export const LoadingDots = () => {
    return (
        <div className="flex items-center justify-center gap-2">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="w-3 h-3 bg-red-600 rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2
                    }}
                />
            ))}
        </div>
    );
};

export const LoadingPulse = ({ className = '' }) => {
    return (
        <motion.div
            className={`bg-gray-200 rounded-lg ${className}`}
            animate={{
                opacity: [0.5, 1, 0.5]
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    );
};

export default LoadingSpinner;
