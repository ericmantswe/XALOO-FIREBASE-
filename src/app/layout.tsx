import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});


export const metadata: Metadata = {
  title: 'Xaloo Technologies | Industrial Automation & Control Engineering',
  description: 'Xaloo Technologies delivers reliable automation, control systems, and industrial communication solutions. Based in Botswana, serving Mining, Water, Food & Beverage and more.',
  keywords: ['industrial automation', 'control systems', 'SCADA', 'PLC', 'Profibus', 'Botswana', 'Xaloo Technologies'],
  authors: [{ name: 'Xaloo Technologies' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Xaloo Technologies | Industrial Automation & Control Engineering',
    description: 'Your partner in smart industrial automation and control engineering.',
    url: 'https://www.xaloo.com', // Replace with your actual domain
    siteName: 'Xaloo Technologies',
    images: [
      {
        url: 'https://i.postimg.cc/CKX2vC8V/xaloo.jpg', // A link to your logo or a featured image
        width: 800,
        height: 600,
        alt: 'Xaloo Technologies Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xaloo Technologies | Industrial Automation & Control Engineering',
    description: 'Delivering reliable automation, control systems, and industrial communication solutions.',
    images: ['https://i.postimg.cc/CKX2vC8V/xaloo.jpg'], // A link to your logo or a featured image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
