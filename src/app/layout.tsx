import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/context/ThemeProvider";
import "./globals.css";

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
  title: "SOK KIMHENG | Full Stack Developer & UI/UX Designer",
  description:
    "SOK KIMHENG - Full Stack Developer & UI/UX Designer. Creating innovative digital solutions with modern technologies.",
  keywords:
    "Full Stack Developer, UI/UX Designer, React, Vue.js, Node.js, Java, Portfolio",
  authors: [{ name: "SOK KIMHENG" }],
  openGraph: {
    title: "SOK KIMHENG - Full Stack Developer",
    description: "Creating innovative digital solutions with modern technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
