"use client";

import Link from "next/link";
import { Shirt } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Shirt className="h-6 w-6" />
          <span>CommerceKit</span>
        </Link>
      </div>
    </header>
  );
}
