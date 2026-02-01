/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Theme Principal: Rouge, Blanc, Noir
                primary: {
                    DEFAULT: '#DC2626', // Rouge vif (red-600)
                    50: '#FEF2F2',
                    100: '#FEE2E2',
                    200: '#FECACA',
                    300: '#FCA5A5',
                    400: '#F87171',
                    500: '#EF4444',
                    600: '#DC2626', // Principal
                    700: '#B91C1C',
                    800: '#991B1B',
                    900: '#7F1D1D',
                },
                dark: {
                    DEFAULT: '#1C1C1C', // Noir chaud premium
                    50: '#F8F8F8',
                    100: '#F0F0F0',
                    200: '#E4E4E4',
                    300: '#D1D1D1',
                    400: '#B4B4B4',
                    500: '#9A9A9A',
                    600: '#818181',
                    700: '#6A6A6A',
                    800: '#2E2E2E',
                    900: '#1C1C1C', // Principal
                    soft: '#2E2E2E',
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
                    '0%, 100%': { textShadow: '0 0 10px rgba(220, 38, 38, 0.2)' },
                    '50%': { textShadow: '0 0 25px rgba(220, 38, 38, 0.5)' },
                },
                'glow-soft': {
                    '0%, 100%': { filter: 'drop-shadow(0 0 10px rgba(220, 38, 38, 0.2))' },
                    '50%': { filter: 'drop-shadow(0 0 25px rgba(220, 38, 38, 0.5))' },
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