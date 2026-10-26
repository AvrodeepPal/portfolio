import './globals.css';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

// Runs before first paint so the saved theme is applied without a light/dark flash.
const themeScript = `try{history.scrollRestoration='manual';var t=localStorage.theme;if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export const metadata = {
  title: 'Avrodeep Pal - Portfolio',
  description: 'Full Stack Developer & Designer',
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased vsc-initialized font-sans">
        {children}
        {/* Vercel Web Analytics: page views and visitors, reported only on Vercel deployments. */}
        <Analytics />
      </body>
    </html>
  );
}
