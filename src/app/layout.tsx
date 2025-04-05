import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "thegrate4u.com | All-in-One Online Directory",
    template: "%s | thegrate4u.com",
  },
  description:
    "thegrate4u.com is your ultimate all-in-one online directory. Find businesses, services, local events, and classifieds quickly and easily — all in one place.",
  keywords: [
    "online directory",
    "business listings",
    "services",
    "local businesses",
    "classifieds",
    "events",
    "directory website",
    "thegrate4u",
    "thegrate4u.com",
  ],
  authors: [{ name: "thegrate4u.com", url: "https://www.thegrate4u.com" }],
  creator: "thegrate4u.com",
  publisher: "thegrate4u.com",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      // maxVideoPreview: -1,
      // maxImagePreview: "large",
      // maxSnippet: -1,
    },
  },
  metadataBase: new URL("https://www.thegrate4u.com"),
  alternates: {
    canonical: "https://www.thegrate4u.com",
  },
  openGraph: {
    title: "thegrate4u.com | All-in-One Online Directory",
    description:
      "Explore top businesses, services, classifieds, and events — all in one place. thegrate4u.com makes it easy to find what you need.",
    url: "https://www.thegrate4u.com",
    siteName: "thegrate4u.com",
    images: [
      {
        url: "https://www.thegrate4u.com/og-image.jpg", // Update with real image path
        width: 1200,
        height: 630,
        alt: "thegrate4u.com - Online Directory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "thegrate4u.com | All-in-One Online Directory",
    description:
      "Find everything from businesses to events on thegrate4u.com – the only directory you'll ever need.",
    creator: "@thegrate4u", // optional if you have a Twitter handle
    images: ["https://www.thegrate4u.com/twitter-image.jpg"],
  },
  category: "Directory",
  themeColor: "#ffffff",
  colorScheme: "light",
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
