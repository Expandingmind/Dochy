import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        primary: {
          DEFAULT: "#a855f7",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#ec4899",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#d946ef",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.03)",
          foreground: "#ffffff",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, rgba(5, 5, 9, 0) 70%)",
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marqueeReverse 40s linear infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.4s ease-out forwards',
        'slide-out-left': 'slideOutLeft 0.4s ease-out forwards',
        'gradient-shift': 'gradientShift 3s ease infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideOutLeft: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-100%)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
