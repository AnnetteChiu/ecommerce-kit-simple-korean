import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";

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
      <head />
      <body suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
