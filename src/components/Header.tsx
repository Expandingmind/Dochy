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
    { name: "FAQ", href: "#faq" },
    { name: "Results", href: "#results" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-white/10 py-3" : "bg-background/0 backdrop-blur-sm py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <h1 className="text-2xl font-bold tracking-widest text-white neon-text font-sans">
            DOCHY
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Cart & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 z-50">
          <Link href="/cart" className="relative group">
            <ShoppingBag className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full ring-2 ring-background">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-xl transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-bold text-white hover:text-primary"
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

