import type { Metadata } from 'next';
import './globals.css';
import { DonationProvider } from '@/context/DonationContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DonationModal } from '@/components/DonationModal';
import { ScrollToTop } from '@/components/ScrollToTop';

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <DonationProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <DonationModal />
          <ScrollToTop />
        </DonationProvider>
      </body>
    </html>
  );
}
