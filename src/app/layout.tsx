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

// import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "thegreat4u.com | All-in-One Online Directory",
    template: "%s | thegreat4u.com",
  },
  description:
    "thegreat4u.com is your go-to online directory for finding businesses, services, local events, and more — all in one convenient place.",
  keywords: [
    "online directory",
    "business listings",
    "find services",
    "local businesses",
    "classifieds",
    "events",
    "places near me",
    "directory website",
    "thegreat4u",
    "thegreat4u.com",
  ],
  authors: [{ name: "thegreat4u.com", url: "https://www.thegreat4u.com" }],
  creator: "thegreat4u.com",
  publisher: "thegreat4u.com",
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
  metadataBase: new URL("https://www.thegreat4u.com"),
  alternates: {
    canonical: "https://www.thegreat4u.com",
  },
  openGraph: {
    title: "thegreat4u.com | All-in-One Online Directory",
    description:
      "Find local businesses, services, events, and more with thegreat4u.com — the directory that makes discovering everything easier.",
    url: "https://www.thegreat4u.com",
    siteName: "thegreat4u.com",
    images: [
      {
        url: "https://www.thegreat4u.com/og-image.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "thegreat4u.com - Your All-in-One Online Directory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "thegreat4u.com | All-in-One Online Directory",
    description:
      "Discover everything from businesses to events with thegreat4u.com — your one-stop online directory.",
    creator: "@thegreat4u", // if you have a Twitter handle
    images: ["https://www.thegreat4u.com/twitter-image.jpg"], // Replace with your image
  },
  category: "Directory",
  themeColor: "#ffffff",
  colorScheme: "light",
  icons: {
    icon: "/favicon.ico",
    // shortcut: "/favicon-32x32.png",
    // apple: "/apple-touch-icon.png",
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
