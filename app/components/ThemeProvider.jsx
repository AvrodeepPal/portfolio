'use client';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ isDark: true, setDark: () => {} });

export function ThemeProvider({ children }) {
  // Matches the server render; the real theme is already on <html> via the
  // inline script in layout.js, so we only sync state to it after hydration.
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top on refresh
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const setDark = useCallback((value) => {
    setIsDark(value);
    document.documentElement.classList.toggle('dark', value);
    try {
      localStorage.theme = value ? 'dark' : 'light';
    } catch {
      // Storage blocked: the theme still applies for this visit.
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
