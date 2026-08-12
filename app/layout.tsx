import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Your Name | Full-stack Developer",
    template: "%s | Your Name",
  },
  description:
    "Full-stack developer creating thoughtful, accessible, and dependable web products.",
  keywords: ["software developer", "full-stack developer", "portfolio", "Next.js"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name | Full-stack Developer",
    description:
      "Thoughtful interfaces and dependable engineering for useful digital products.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Your Name — Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Full-stack Developer",
    description:
      "Thoughtful interfaces and dependable engineering for useful digital products.",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#090b0e",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
