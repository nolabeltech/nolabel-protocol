/** @type {import('tailwindcss').Config} */
export default {
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {
colors: {
gold: '#C9A84C',
'gold-light': '#E8C97A',
'gold-dark': '#A07830',
charcoal: '#1e1f24',
'charcoal-light': '#2a2b32',
cream: '#F5F0E8',
'cream-dim': 'rgba(245, 240, 232, 0.6)',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Playfair Display', 'serif'],
},
animation: {
'fade-up': 'fadeUp 0.6s ease forwards',
'fade-in': 'fadeIn 0.8s ease forwards',
'pulse-gold': 'pulseGold 2s ease infinite',
},
keyframes: {
fadeUp: {
'0%': { opacity: 0, transform: 'translateY(30px)' },
'100%': { opacity: 1, transform: 'translateY(0)' },
},
fadeIn: {
'0%': { opacity: 0 },
'100%': { opacity: 1 },
},
pulseGold: {
'0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 168, 76, 0.4)' },
'50%': { boxShadow: '0 0 20px 4px rgba(201, 168, 76, 0.2)' },
},
},
},
},
plugins: [],
}
