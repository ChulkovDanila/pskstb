import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Пиломатериалы купить в Электростали',
  description: 'Пиломатериалы, фанера, ДСП, OSB - купить в Электростали',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-950 relative pt-28 sm:pt-36`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
