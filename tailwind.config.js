/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#050505',
        cardMain: '#101010',
        accentBlue: '#0066ff', // Electric Blue
        accentCyan: '#00f2fe', // Neon Cyan
        accentPurple: '#7f00ff', // Royal Purple
        glassBorder: 'rgba(255, 255, 255, 0.08)',
        glassWhite: 'rgba(255, 255, 255, 0.03)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'glass-glow': '0 0 30px rgba(0, 242, 254, 0.15)',
        'glass-glow-purple': '0 0 30px rgba(127, 0, 255, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
