"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Shirt } from "lucide-react";

export default function Header() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
        await signOut(auth);
        router.push("/");
    } catch (error) {
        console.error("Error signing out:", error);
    }
  };

  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Shirt className="h-6 w-6" />
          <span>CommerceKit</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          {user ? (
            <>
              <Button asChild variant="ghost">
                <Link href="/upload">Upload</Link>
              </Button>
              <Button onClick={handleLogout} variant="secondary">Logout</Button>
            </>
          ) : (
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
