import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: 'var(--color-midnight)',
        sand: 'var(--color-sand)',
        sand2: 'var(--color-sand-2)',
        teal: 'var(--color-teal)',
        coral: 'var(--color-coral)',
        ink: 'var(--color-ink)',
        mist: 'var(--color-mist)',
      },
      borderRadius: {
        xl: 'var(--radius-xl)',
        lg: 'var(--radius-lg)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Instrument Sans', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(16px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        drift: { '0%,100%': { transform: 'translateX(-10px)' }, '50%': { transform: 'translateX(10px)' } },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-out',
        slideUp: 'slideUp 0.7s ease-out',
        floaty: 'floaty 7s ease-in-out infinite',
        drift: 'drift 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
