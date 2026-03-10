import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Sok Kimheng | Full Stack Developer & AWS Cloud Engineer",
  description:
    "Full Stack Developer with 3+ years of experience building scalable cloud solutions at AWS. Specialized in React, Next.js, Node.js, and serverless architectures.",
  keywords: [
    "Full Stack Developer",
    "AWS",
    "Cloud Engineer",
    "React",
    "Next.js",
    "Node.js",
  ],
  authors: [{ name: "Sok Kimheng" }],
  openGraph: {
    title: "Sok Kimheng — Full Stack Developer",
    description:
      "Building scalable systems at AWS — where backend precision meets fluid front-end craft.",
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
      <body className="font-mono antialiased">
        <Providers>
          <Cursor />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
