import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { DonationProvider } from '@/context/DonationContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DonationModal } from '@/components/DonationModal';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ScrollObserver } from '@/components/ScrollReveal';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Happy Hands Foundation - Everything Goes to Child Development',
  description:
    'Happy Hands Foundation creates a safe space for the African child through inclusive education access, food relief campaigns, and preventive healthcare.',
  keywords: [
    'Happy Hands Foundation',
    'Child Education Nigeria',
    'Non-Profit Nigeria',
    'Scholars Program',
    'Nourish Now',
    'Teachers on the Go',
    'Back-2-School',
    'FitTot',
  ],
  icons: {
    icon: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <DonationProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <DonationModal />
          <ScrollToTop />
          <ScrollObserver />
        </DonationProvider>
      </body>
    </html>
  );
}

