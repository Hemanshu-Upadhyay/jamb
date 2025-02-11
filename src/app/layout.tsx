import type { Metadata } from "next";
import type React from "react";
import "./globals.css";
import Footer from "@/components/footer";
import { Lora } from "next/font/google";
import { Header } from "@/components/header";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

// This metadata is to show how will I manage the SEO In real world.
export const metadata: Metadata = {
  metadataBase: new URL("https://jamb.com"),
  title: {
    default: "Jamb | Luxury Interior Design",
    template: "%s | Jamb",
  },
  description:
    "Transform your space with Jamb's luxury interior design services. Expertly curated furniture, lighting, and decor for sophisticated living.",
  keywords: [
    "luxury interior design",
    "high-end furniture",
    "interior decoration",
    "bespoke design",
    "luxury homes",
  ],
  authors: [{ name: "Jamb" }],
  creator: "Jamb",
  publisher: "Jamb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jamb.com",
    siteName: "Jamb",
    title: "Jamb | Luxury Interior Design",
    description:
      "Transform your space with Jamb's luxury interior design services. Expertly curated furniture, lighting, and decor for sophisticated living.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamb | Luxury Interior Design",
    description:
      "Transform your space with Jamb's luxury interior design services. Expertly curated furniture, lighting, and decor for sophisticated living.",
    creator: "@jamb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-copernicus font-fallback ${lora.variable} scroll-smooth`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
