/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50:  '#FFF0F0',
          100: '#FFD6D6',
          200: '#FF9999',
          500: '#8B1A1A',
          600: '#6B0F0F',
          700: '#4A0A0A',
          800: '#2E0606',
          900: '#1A0404',
        },
        gold: {
          100: '#FFF8E7',
          200: '#FFE9A0',
          300: '#FFD700',
          400: '#F5C842',
          500: '#C8922A',
          600: '#A67C20',
          700: '#8B5E1A',
          800: '#5C3D10',
        },
        cream: {
          50:  '#FFFDF5',
          100: '#FFF8E7',
          200: '#F5E6C8',
          300: '#EDD6A0',
        },
        deepred: '#1A0A0A',
      },
      fontFamily: {
        heading:  ['"Cormorant Garamond"', 'serif'],
        script:   ['"Great Vibes"', 'cursive'],
        body:     ['Poppins', 'sans-serif'],
        sanskrit: ['"Noto Serif"', 'serif'],
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'float-slow':  'float 10s ease-in-out infinite',
        'shimmer':     'shimmer 3s linear infinite',
        'petal-fall':  'petalFall 8s ease-in-out infinite',
        'particle':    'particle 4s ease-in-out infinite',
        'lamp-flicker':'lampFlicker 3s ease-in-out infinite',
        'pulse-gold':  'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':      { transform: 'translateY(-20px) rotate(5deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        petalFall: {
          '0%':   { transform: 'translateY(-10px) rotate(0deg)', opacity: '0' },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '0.8' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
        particle: {
          '0%, 100%': { transform: 'scale(1)',   opacity: '0.6' },
          '50%':      { transform: 'scale(1.5)', opacity: '1'   },
        },
        lampFlicker: {
          '0%, 100%': { opacity: '1',   filter: 'drop-shadow(0 0 10px rgba(255,180,20,0.8))' },
          '40%':      { opacity: '0.8', filter: 'drop-shadow(0 0 5px rgba(255,180,20,0.4))'  },
          '60%':      { opacity: '1',   filter: 'drop-shadow(0 0 18px rgba(255,180,20,0.9))' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(200,146,42,0.4)'  },
          '50%':      { boxShadow: '0 0 0 12px rgba(200,146,42,0)' },
        },
      },
      backgroundImage: {
        'gold-gradient':   'linear-gradient(135deg, #C8922A 0%, #FFD700 50%, #C8922A 100%)',
        'maroon-gradient': 'linear-gradient(135deg, #4A0A0A 0%, #8B1A1A 50%, #4A0A0A 100%)',
        'royal-gradient':  'linear-gradient(180deg, #1A0404 0%, #3D0A0A 40%, #1A0404 100%)',
      },
    },
  },
  plugins: [],
}
