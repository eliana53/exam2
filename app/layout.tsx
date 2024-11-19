import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Acc 343 Exam 2',
  description: 'Exam 2 for Eliana Furman',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <NavBar />
        <main className="flex-grow container mx-auto p-4 ml-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
