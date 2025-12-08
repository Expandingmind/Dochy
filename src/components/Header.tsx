"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCartStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "#catalog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Spacer for fixed top notification */}
      <div className="h-12" />
      
      <header
        className={cn(
          "sticky top-12 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-black/90 backdrop-blur-md border-white/10 py-2" : "bg-black py-4"
        )}
      >
        <div className="container mx-auto px-3 flex flex-col items-center">
          
          {/* Top Row: Mobile Menu Toggle, Centered Logo, Cart */}
          <div className="w-full flex items-center justify-between relative">
            {/* Left: Mobile Toggle (Visible on Mobile only) */}
            <div className="flex-1 flex justify-start md:hidden">
               <button
                className="text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Left placeholder for desktop */}
            <div className="flex-1 hidden md:block" />

            {/* Center: Logo with Marbling Effect */}
            <div className="z-50">
              <Link href="/">
                <h1 className="text-2xl md:text-3xl font-bold tracking-wider font-anton uppercase bg-gradient-to-r from-purple-400 via-pink-400 via-blue-400 via-purple-500 to-pink-400 bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                  DOCHY
                </h1>
              </Link>
            </div>

            {/* Right: Cart */}
            <div className="flex-1 flex items-center justify-end gap-4 z-50">
              <Link href="/cart" className="relative group">
                <ShoppingBag className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full ring-1 ring-black">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Bottom Row: Desktop Navigation (Centered under Logo) */}
          <nav className="hidden md:flex items-center gap-8 mt-20">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Overlay */}
          <div
            className={cn(
              "fixed inset-0 bg-black/95 backdrop-blur-xl transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-6 z-[40]",
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-bold text-white hover:text-primary font-anton uppercase tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
