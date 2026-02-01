/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2563eb',
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
                dark: {
                    DEFAULT: '#0F172A',
                    soft: '#1E293B',
                }
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'float-slow': 'float-slow 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'slide-in': 'slide-in 0.3s ease-out',
                'glow': 'glow 3s ease-in-out infinite',
                'glow-soft': 'glow-soft 4s ease-in-out infinite',
                'gradient': 'gradient 3s ease infinite',
                'shimmer': 'shimmer 2s infinite',
                'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'float-slow': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
                    '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
                },
                'slide-in': {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                glow: {
                    '0%, 100%': { textShadow: '0 0 10px rgba(37, 99, 235, 0.2)' },
                    '50%': { textShadow: '0 0 25px rgba(37, 99, 235, 0.5)' },
                },
                'glow-soft': {
                    '0%, 100%': { filter: 'drop-shadow(0 0 10px rgba(37, 99, 235, 0.2))' },
                    '50%': { filter: 'drop-shadow(0 0 25px rgba(37, 99, 235, 0.5))' },
                },
                gradient: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                'pulse-gentle': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
            },
            borderRadius: {
                'premium': '2rem',
                'soft': '1rem',
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}