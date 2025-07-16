import './globals.css';

export const metadata = {
  title: 'Avrodeep Pal - Portfolio',
  description: 'Full Stack Developer & Designer',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased vsc-initialized">
        {children}
      </body>
    </html>
  );
}