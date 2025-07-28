import type { Metadata } from "next";
import { Geist, Geist_Mono, MuseoModerno } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const museoModerno = MuseoModerno({
  variable: "--font-museo-moderno",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PROMMMT - Revolutionizing Prompt Engineering",
  description: "Join the waitlist for PROMMMT - We are changing the prompt engineering game forever with intelligent automation and advanced AI capabilities.",
  keywords: ["prompt engineering", "AI", "automation", "artificial intelligence", "prompts", "PROMMMT"],
  authors: [{ name: "PROMMMT Team" }],
  icons: {
    icon: '/icons/icons/favicon.ico',
    apple: '/icons/icons/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/icons/icons/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/icons/icons/android-chrome-512x512.png',
      },
    ],
  },
  openGraph: {
    title: "PROMMMT - Revolutionizing Prompt Engineering",
    description: "Join the waitlist for PROMMMT - We are changing the prompt engineering game forever with intelligent automation and advanced AI capabilities.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/icons/icons/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'PROMMMT Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PROMMMT - Revolutionizing Prompt Engineering",
    description: "Join the waitlist for PROMMMT - We are changing the prompt engineering game forever with intelligent automation and advanced AI capabilities.",
    images: ['/icons/icons/android-chrome-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${museoModerno.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
