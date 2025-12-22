import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VAgent | AI-Powered Healthcare Voice Agent",
  description: "Transform healthcare communication with VAgent - an intelligent AI voice assistant designed for healthcare facilities. 24/7 patient communication, appointment scheduling, and seamless EHR integration.",
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
        <script src="https://ai-call-agent-api.alex-ad0.workers.dev/widget/loader.js" data-key="pk_eRlipxHXPbDfDq600rFM" async></script>
      </body>
    </html>
  );
}
