import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle, XCircle, AlertCircle, Info, X,
    Bell, ShoppingBag, Ticket
} from 'lucide-react';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const showToast = (message, type = 'info', duration = 5000) => {
        const id = Date.now();
        const newToast = { id, message, type, duration };
        setToasts(prev => [...prev, newToast]);

        // Auto remove after duration
        setTimeout(() => {
            removeToast(id);
        }, duration);
    };

    const removeToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    const success = (message, duration) => showToast(message, 'success', duration);
    const error = (message, duration) => showToast(message, 'error', duration);
    const warning = (message, duration) => showToast(message, 'warning', duration);
    const info = (message, duration) => showToast(message, 'info', duration);

    return (
        <ToastContext.Provider value={{ success, error, warning, info }}>
            {children}
            <ToastContainer toasts={toasts} removeToast={removeToast} />
        </ToastContext.Provider>
    );
};

// Toast Container Component
const ToastContainer = ({ toasts, removeToast }) => {
    const getIcon = (type) => {
        switch (type) {
            case 'success': return CheckCircle;
            case 'error': return XCircle;
            case 'warning': return AlertCircle;
            case 'info': return Info;
            default: return Bell;
        }
    };

    const getColor = (type) => {
        switch (type) {
            case 'success': return 'bg-gradient-to-r from-green-500 to-emerald-600';
            case 'error': return 'bg-gradient-to-r from-red-500 to-rose-600';
            case 'warning': return 'bg-gradient-to-r from-yellow-500 to-amber-600';
            case 'info': return 'bg-gradient-to-r from-blue-500 to-indigo-600';
            default: return 'bg-gradient-to-r from-gray-600 to-gray-700';
        }
    };

    const getIconColor = (type) => {
        switch (type) {
            case 'success': return 'text-green-100';
            case 'error': return 'text-red-100';
            case 'warning': return 'text-yellow-100';
            case 'info': return 'text-blue-100';
            default: return 'text-gray-100';
        }
    };

    return (
        <div className="fixed top-4 right-4 z-[10000] space-y-3 pointer-events-none">
            <AnimatePresence>
                {toasts.map((toast) => {
                    const Icon = getIcon(toast.type);
                    return (
                        <motion.div
                            key={toast.id}
                            initial={{ opacity: 0, x: 100, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 100, scale: 0.9 }}
                            whileHover={{ scale: 1.02 }}
                            className={`
                relative min-w-[320px] max-w-md rounded-xl shadow-2xl 
                overflow-hidden backdrop-blur-sm pointer-events-auto
                ${getColor(toast.type)}
              `}
                        >
                            {/* Progress Bar */}
                            <motion.div
                                className="absolute bottom-0 left-0 h-1 bg-white/30"
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: toast.duration / 1000, ease: "linear" }}
                            />

                            {/* Content */}
                            <div className="p-4 flex items-start space-x-3">
                                {/* Icon */}
                                <div className={`p-2 rounded-lg bg-white/20 ${getIconColor(toast.type)}`}>
                                    <Icon className="w-5 h-5" />
                                </div>

                                {/* Message */}
                                <div className="flex-1">
                                    <p className="text-white font-medium">{toast.message}</p>
                                </div>

                                {/* Close Button */}
                                <button
                                    onClick={() => removeToast(toast.id)}
                                    className="p-1 rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <X className="w-4 h-4 text-white/70" />
                                </button>
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

export default ToastContainer;
