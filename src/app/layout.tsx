import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krovos | Intelligent Automation Platform",
  description: "Enterprise-grade automation solutions that streamline operations, boost productivity, and drive measurable ROI for businesses of all sizes.",
  keywords: ["automation", "business process", "workflow", "AI", "enterprise", "productivity"],
  authors: [{ name: "Krovos" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krovos.com",
    title: "Krovos | Intelligent Automation Platform",
    description: "Transform your business with intelligent automation solutions",
    siteName: "Krovos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krovos | Intelligent Automation Platform",
    description: "Transform your business with intelligent automation solutions",
    creator: "@krovos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
