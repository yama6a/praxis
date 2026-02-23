import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WebSiteJsonLd } from "@/lib/structured-data";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.birgit-maehner.de"),
  title: {
    default: "Praxis Ganzheitliche Körpertherapie – Birgit Mähner",
    template: "%s – Birgit Mähner, Berlin Charlottenburg",
  },
  description:
    "Ihre Praxis für ganzheitliche Körpertherapie in Berlin Charlottenburg. Yoga, Shiatsu, Bach-Blütentherapie, Fußreflexzonenmassage und Schröpfen bei Heilpraktikerin Birgit Mähner.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Praxis Ganzheitliche Körpertherapie",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Praxis Ganzheitliche Körpertherapie – Yoga & Shiatsu in Berlin Charlottenburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <WebSiteJsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
