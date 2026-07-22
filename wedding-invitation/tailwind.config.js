/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream:  { 50: '#FDFAF4', 100: '#FAF6EF', 200: '#F5EDD8', 300: '#EDD9B0' },
        gold:   { 100: '#FFF8DC', 200: '#FFE878', 300: '#FFD700', 400: '#D4AF37', 500: '#B8860B', 600: '#9A6F0A', 700: '#7A5208' },
        dark:   { 900: '#0A0804', 800: '#1C1008', 700: '#2E1A0A' },
        ivory:  '#FFFFF0',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        script:  ['"Great Vibes"', 'cursive'],
        display: ['"Playfair Display"', 'serif'],
        body:    ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B8860B 0%, #FFD700 50%, #D4AF37 100%)',
        'cream-gradient':'linear-gradient(180deg, #FAF6EF 0%, #F5EDD8 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0A0804 0%, #1C1008 100%)',
      },
      animation: {
        float:      'float 5s ease-in-out infinite',
        shimmer:    'shimmer 4s linear infinite',
        pulseGold:  'pulseGold 2.5s ease-in-out infinite',
        petalFall:  'petalFall 10s ease-in infinite',
        fadeUp:     'fadeUp 1s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        float:     { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-16px)' } },
        shimmer:   { '0%': { backgroundPosition:'-200% center' }, '100%': { backgroundPosition:'200% center' } },
        pulseGold: { '0%,100%': { boxShadow:'0 0 0 0 rgba(212,175,55,0.5)' }, '50%': { boxShadow:'0 0 0 14px rgba(212,175,55,0)' } },
        petalFall: { '0%': { transform:'translateY(-10px) rotate(0deg)', opacity:'0' }, '10%': { opacity:'0.6' }, '100%': { transform:'translateY(100vh) rotate(360deg)', opacity:'0' } },
        fadeUp:    { '0%': { opacity:'0', transform:'translateY(60px)' }, '100%': { opacity:'1', transform:'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
