import type { Metadata } from "next";
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
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
