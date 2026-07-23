/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#2F6F5F',
        dark: '#191919',
        light: '#F7F7F7',
        accent: '#DFFF66',
        purple: '#7F6CF6',
        teal: '#48C6B6',
        orange: '#FFD084',
        danger: '#FF6B6B',
        darktext: '#111111',
        muted: '#BFBFBF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        body: ['Inter', '"Space Grotesk"', 'sans-serif'],
      },
      borderRadius: {
        card: '28px',
        'card-lg': '36px',
      },
      boxShadow: {
        soft: '0 20px 60px -15px rgba(0,0,0,0.35)',
        glow: '0 0 0 1px rgba(223,255,102,0.3), 0 8px 30px rgba(223,255,102,0.15)',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        floatX: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(14px)' },
        },
      },
      animation: {
        floatY: 'floatY 7s ease-in-out infinite',
        floatX: 'floatX 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
