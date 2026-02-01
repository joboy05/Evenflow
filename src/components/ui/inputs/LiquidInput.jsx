import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LiquidInput = ({
    type = 'text',
    placeholder = '',
    value,
    onChange,
    className = '',
    icon: Icon,
    ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [fillPercentage, setFillPercentage] = useState(0);

    const handleChange = (e) => {
        const val = e.target.value;
        const maxLength = props.maxLength || 100;
        const percentage = (val.length / maxLength) * 100;
        setFillPercentage(Math.min(percentage, 100));
        if (onChange) onChange(e);
    };

    return (
        <div className="relative">
            <div className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${isFocused ? 'border-red-600 shadow-lg shadow-red-600/20' : 'border-gray-200'
                }`}>
                {/* Liquid Fill Effect */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-red-50 -z-10"
                    initial={{ height: '0%' }}
                    animate={{ height: `${fillPercentage}%` }}
                    transition={{ duration: 0.3 }}
                />

                <div className="relative flex items-center">
                    {Icon && (
                        <div className={`pl-6 transition-colors ${isFocused ? 'text-red-600' : 'text-gray-400'}`}>
                            <Icon className="w-5 h-5" />
                        </div>
                    )}
                    <input
                        type={type}
                        value={value}
                        onChange={handleChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder={placeholder}
                        className={`w-full px-6 py-4 bg-transparent focus:outline-none font-medium ${Icon ? 'pl-3' : ''} ${className}`}
                        {...props}
                    />
                </div>
            </div>
        </div>
    );
};

export default LiquidInput;
