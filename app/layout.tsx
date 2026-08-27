import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
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
    default: "Dewa Putra Hamdani ",
    template: "%s | Dewa Putra Hamdani",
  },
  description:
    "a kid creating thoughtful, accessible, and dependable web products.",
  keywords: ["software developer", "full-stack developer", "portfolio", "Next.js"],
  authors: [{ name: "Dewa Putra Hamdani" }],
  openGraph: {
    title: "Dewa Putra Hamdani",
    description:
      "Thoughtful interfaces and dependable engineering for useful digital products.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Dewa Putra Hamdani — Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dewa Putra Hamdani",
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
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
