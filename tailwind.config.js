/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        cream: '#FAF8F3',
        parchment: '#F2EFE7',
        ink: '#1A1612',
        'ink-light': '#3D3530',
        teal: '#0D9488',
        'teal-light': '#14B8A6',
        'teal-dark': '#0F766E',
        amber: '#D97706',
        'warm-gray': '#9B8E85',
      },
      animation: {
        'wave': 'wave 8s ease-in-out infinite',
        'wave-slow': 'wave 12s ease-in-out infinite reverse',
        'bob': 'bob 4s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
