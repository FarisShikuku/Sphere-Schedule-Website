import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sphere: {
          DEFAULT: '#7C6CF8',
          50: '#F0EFFF',
          100: '#E8E6FF',
          200: '#C5BFFC',
          300: '#A296FA',
          400: '#8B7CF9',
          500: '#7C6CF8',
          600: '#5E4FF0',
          700: '#4A3DE0',
          800: '#3A2FC0',
          900: '#2A22A0',
        },
        accent: {
          DEFAULT: '#FF6B8A',
          50: '#FFF0F3',
          100: '#FFE0E6',
          200: '#FFB3C4',
          300: '#FF8AA5',
          400: '#FF6B8A',
          500: '#FF4D73',
          600: '#E83A60',
          700: '#CC2A4E',
          800: '#B01E3E',
          900: '#941430',
        },
        green: {
          DEFAULT: '#2DD4A0',
          50: '#E6FCF5',
          100: '#C6F5E8',
          200: '#8EEDD0',
          300: '#56E4B8',
          400: '#2DD4A0',
          500: '#1CB883',
          600: '#159966',
          700: '#0E7A4A',
          800: '#075B2E',
          900: '#033C14',
        },
        midnight: '#0B1220',
        'midnight-2': '#111A2E',
        sand: '#F5F7FB',
        'sand-2': '#E6EBF4',
        ink: '#0B1020',
        mist: '#CBD5E1',
      },
      fontFamily: {
        outfit: ['Outfit', 'system-ui', 'sans-serif'],
        dm: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '24px',
        lg: '18px',
        md: '12px',
        sm: '8px',
        xs: '6px',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-down': 'fadeDown 0.7s ease-out both',
        'pulse-badge': 'pulseBadge 2s ease infinite',
        'slide-up': 'slideUp 0.7s ease-out both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          from: { opacity: '0', transform: 'translateY(-16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseBadge: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        glow: '0 20px 60px rgba(124, 108, 248, 0.18)',
        'glow-sm': '0 4px 20px rgba(124, 108, 248, 0.12)',
        'glow-lg': '0 30px 100px rgba(124, 108, 248, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;