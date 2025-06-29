import type { Metadata } from "next";
import Link from 'next/link';
import { Package } from 'lucide-react';
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "CommerceKit",
  description: "A modern e-commerce platform with AI-powered style guides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&family=Belleza&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <header className="py-4 px-6 border-b border-border/50 shadow-sm sticky top-0 bg-background/80 backdrop-blur-sm z-50">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Package className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
              <span className="text-2xl font-headline font-bold text-primary">CommerceKit</span>
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
