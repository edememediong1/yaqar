import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond, Playfair_Display } from 'next/font/google';
import './globals.css';
import { SmoothScrolling } from '@/components/ui/smooth-scrolling';
import { Footer } from '@/components/layout/footer';
import { CustomCursor } from '@/components/ui/custom-cursor';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({ 
  weight: ['300', '400', '500', '600', '700'], 
  subsets: ['latin'], 
  variable: '--font-cormorant' 
});
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair' 
});

export const metadata: Metadata = {
  title: 'Anne & Emediong - YAQAR 2026',
  description: 'World-class luxury wedding website for Anne & Emediong featuring cinematic animations and elegant storytelling.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${playfair.variable}`}>
      <body className="antialiased font-sans text-black-elegant" suppressHydrationWarning>
        <CustomCursor />
        <SmoothScrolling>
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}

