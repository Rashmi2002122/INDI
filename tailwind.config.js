/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        health: {
          green: {
            DEFAULT: '#10B981',
            light: '#ECFDF5',
            dark: '#047857',
            text: '#065F46'
          },
          yellow: {
            DEFAULT: '#F59E0B',
            light: '#FFFBEB',
            dark: '#B45309',
            text: '#92400E'
          },
          red: {
            DEFAULT: '#EF4444',
            light: '#FEF2F2',
            dark: '#B91C1C',
            text: '#991B1B'
          }
        }
      },
      animation: {
        'scan-line': 'scanLine 2.5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        scanLine: {
          '0%, 100%': { transform: 'translateY(0%)', opacity: '0.4' },
          '50%': { transform: 'translateY(100%)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
