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
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-black/90 backdrop-blur-md border-white/10 py-3" : "bg-black py-6"
      )}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        {/* Top Row: Mobile Menu Toggle, Centered Logo, Cart */}
        <div className="w-full flex items-center justify-between relative">
          {/* Left: Mobile Toggle (Visible on Mobile only) */}
          <div className="flex-1 flex justify-start md:hidden">
             <button
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Left placeholder for desktop */}
          <div className="flex-1 hidden md:block" />

          {/* Center: Logo */}
          <div className="z-50">
            <Link href="/">
              <h1 className="text-3xl md:text-4xl font-bold tracking-wider text-white font-anton uppercase">
                DOCHY
              </h1>
            </Link>
          </div>

          {/* Right: Cart */}
          <div className="flex-1 flex items-center justify-end gap-4 z-50">
            <Link href="/cart" className="relative group">
              <ShoppingBag className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full ring-2 ring-black">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Bottom Row: Desktop Navigation (Centered under Logo) */}
        <nav className="hidden md:flex items-center gap-8 mt-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-black/95 backdrop-blur-xl transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 z-[40]",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-bold text-white hover:text-primary font-anton uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
