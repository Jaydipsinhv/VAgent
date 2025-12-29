import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://loqua.ai'), // Update this with your actual domain
  title: {
    default: "Loqua | AI-Powered Healthcare Voice Agent",
    template: "%s | Loqua"
  },
  description: "Transform healthcare communication with Loqua - an intelligent AI voice assistant designed for healthcare facilities. 24/7 patient communication, appointment scheduling, and seamless EHR integration.",
  keywords: ["healthcare AI", "voice agent", "patient communication", "EHR integration", "HIPAA compliant", "medical appointment scheduling", "healthcare automation", "AI medical assistant", "patient engagement", "healthcare technology"],
  authors: [{ name: "Loqua" }],
  creator: "Loqua",
  publisher: "Loqua",
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://loqua.ai',
    title: 'Loqua | AI-Powered Healthcare Voice Agent',
    description: 'Transform healthcare communication with Loqua - an intelligent AI voice assistant designed for healthcare facilities.',
    siteName: 'Loqua',
    images: [
      {
        url: '/vagent-hero.png',
        width: 1200,
        height: 630,
        alt: 'Loqua Healthcare Voice Agent',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loqua | AI-Powered Healthcare Voice Agent',
    description: 'Transform healthcare communication with Loqua - intelligent AI voice assistant for healthcare.',
    images: ['/vagent-hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth page-load">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <script src="http://localhost:8787/widget/loader.js" data-key="pk_CszSCOxsqANFwLBfkJT0" async></script>
      </body>
    </html>
  );
}
