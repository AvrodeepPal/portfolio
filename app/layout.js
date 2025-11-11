import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Avrodeep Pal - Portfolio',
  description: 'Full Stack Developer & Designer',
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <body className="antialiased vsc-initialized font-sans">
        {children}
      </body>
    </html>
  );
}