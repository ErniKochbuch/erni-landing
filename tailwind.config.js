/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#1D9E75',
          dark: '#157a5a',
          light: '#2cbf90',
          50: '#e8f5f0',
          100: '#c9e8dc',
        },
        skyblue: {
          DEFAULT: '#85B7EB',
          dark: '#5d9adf',
          light: '#aecdf2',
        },
        amber: {
          DEFAULT: '#EF9F27',
          dark: '#d68a15',
          light: '#f5b95e',
        },
        cream: '#f0f4f3',
      },
      fontFamily: {
        inter: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0, 0, 0, 0.06)',
        card: '0 12px 40px rgba(29, 158, 117, 0.10)',
        glow: '0 0 40px rgba(239, 159, 39, 0.35)',
      },
    },
  },
  plugins: [],
};
