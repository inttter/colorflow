import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMonoVF.ttf",
  variable: "--font-jetbrains-mono",
  weight: "100 900",
});

const metadataBase = new URL("https://colorflow.cc");

export const metadata: Metadata = {
  metadataBase,
  title: "Colorflow",
  description: "Generate and preview different colors on multiple different examples.",
  openGraph: {
    title: "Colorflow",
    description: "Generate and preview different colors on multiple different examples.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 720,
        alt: "Colorflow OG Image",
      },
    ],
    url: "https://colorflow.cc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colorflow",
    description: "Generate and preview different colors on multiple different examples.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 720,
        alt: "Colorflow OG Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://www.gravatar.com" />
      <body
        className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased selection:bg-neutral-700 selection:text-zinc-300`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
