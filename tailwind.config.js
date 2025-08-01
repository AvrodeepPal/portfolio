export default {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        bg: 'var(--bg)',
        fg: 'var(--fg)',
        card: 'var(--card)',
        accent: 'var(--accent)',
        'nav-bg': 'var(--nav-bg)',
        'nav-hover': 'var(--nav-hover)',
        border: 'var(--border)',
        shadow: 'var(--shadow)',
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
      },
    },
  },
  plugins: [],
};
// tailwind.config.js additions
module.exports = {
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#FDD000",
          light: "#FFE44D",
          dark: "#FFDF55",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-in-from-bottom-4": "slideInFromBottom 0.3s ease-out",
        "slide-in-from-right-2": "slideInFromRight 0.3s ease-out",
        "slide-in-from-left-2": "slideInFromLeft 0.3s ease-out",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideInFromBottom: {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(8px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-8px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
};
