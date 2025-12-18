import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/cta/MobileCTA";
import { CookieConsent } from "@/components/shared/CookieConsent";
import { SITE, SEO } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-sans",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: [...SEO.keywords],
  robots: "index, follow",
  authors: [{ name: SITE.name }],
  alternates: {
    canonical: SITE.url,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE.url,
    title: SEO.title,
    description: SEO.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE.name,
              url: SITE.url,
              description: SEO.description,
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
        <CookieConsent />
      </body>
    </html>
  );
}

