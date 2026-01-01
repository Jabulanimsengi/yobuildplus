
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { StickyQuoteButton } from "@/components/quotes/StickyQuoteButton";
import { LoadSheddingBanner } from "@/components/banners/LoadSheddingBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yobuildplus - Find Trusted Contractors in South Africa",
  description: "Connect with verified builders, plumbers, electricians, and contractors across South Africa. Get quotes from trusted professionals for your construction and home improvement projects.",
  keywords: "builders, contractors, plumbers, electricians, construction, South Africa, home improvement, renovations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript" async></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <AuthProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster />
          <StickyQuoteButton />
          <LoadSheddingBanner />
        </AuthProvider>
      </body>
    </html>
  );
}
