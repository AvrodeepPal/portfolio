'use client';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

const REVEAL_DURATION_MS = 600;

const ThemeContext = createContext({ isDark: true, setDark: () => {} });

export function ThemeProvider({ children }) {
  // Matches the server render; the real theme is already on <html> via the
  // inline script in layout.js, so we only sync state to it after hydration.
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top on refresh
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  // `origin` ({ x, y } in viewport pixels) is where the new theme grows from.
  // Without it, or where the reveal isn't available, the theme switches instantly.
  const setDark = useCallback((value, origin) => {
    const applyTheme = () => {
      // Flushed so the browser's "after" snapshot includes the React-driven changes.
      flushSync(() => setIsDark(value));
      document.documentElement.classList.toggle('dark', value);
      try {
        localStorage.theme = value ? 'dark' : 'light';
      } catch {
        // Storage blocked: the theme still applies for this visit.
      }
    };

    const canReveal =
      origin &&
      document.startViewTransition &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!canReveal) {
      applyTheme();
      return;
    }

    const { x, y } = origin;
    const root = document.documentElement;
    const endReveal = () => root.classList.remove('theme-revealing');

    root.classList.add('theme-revealing');
    const transition = document.startViewTransition(applyTheme);
    transition.finished.then(endReveal, endReveal);
    transition.ready
      .then(() => {
        // Distance to the farthest corner, so the circle ends up covering the viewport.
        const radius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        );
        root.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: REVEAL_DURATION_MS,
            easing: 'ease-in-out',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      })
      .catch(() => {
        // Transition skipped (e.g. tab hidden): the theme is applied regardless.
      });
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
