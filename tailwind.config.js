export default {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};