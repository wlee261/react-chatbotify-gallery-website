/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "dark",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: {
          primary: "rgba(var(--background-primary))",
          secondary: "rgba(var(--background-secondary))",
          inverse: "rgba(var(--background-inverse))"
        },
        action: {
          primary: {
            DEFAULT: "rgba(var(--action-primary))",
            hover: "rgba(var(--action-primary-hover))"
          }
        },
        text: {
          primary: "rgba(var(--text-primary))",
        secondary: "rgba(var(--text-secondary))",
          inverse: "rgba(var(--text-inverse))"
        },        
        color: {
          primary: "rgba(var(--color-primary))",
          secondary: "rgba(var(--color-secondary))",
          inverse: "rgba(var(--color-inverse))"
        }
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulse: {
        '50%': {
            opacity: .1
        }
      }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        pulse: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
      // colors: {},
    },
  },
  plugins: [],
};