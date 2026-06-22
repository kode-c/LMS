/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1', // Indigo-500
          600: '#4f46e5', // Indigo-600 (Primary authoritative color)
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        success: {
          50: '#f0fdf4',
          600: '#16a34a',
        }
      },
      fontFamily: {
        sans: ['Mukta', 'Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        mukta: ['Mukta', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(79, 70, 229, 0.12)',
        'premium-hover': '0 20px 45px -12px rgba(79, 70, 229, 0.25)',
      }
    },
  },
  plugins: [],
}
