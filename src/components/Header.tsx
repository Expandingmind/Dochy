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
    { name: "Catalog", href: "/items" },
    { name: "Vendors", href: "/vendors" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-white/10 py-2" : "bg-background/0 backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        {/* Top Row: Mobile Menu Toggle, Centered Logo, Cart */}
        <div className="w-full flex items-center justify-between relative min-h-[48px]">
          {/* Left: Mobile Toggle (Visible on Mobile only) */}
          <div className="flex-1 flex justify-start md:hidden">
             <button
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            <Link href="/">
              <h1 className="text-4xl font-bold tracking-wider text-white font-anton uppercase whitespace-nowrap">
                DOCHY
              </h1>
            </Link>
          </div>

          {/* Right: Cart */}
          <div className="flex-1 flex items-center justify-end gap-4 z-50">
            <Link href="/cart" className="relative group">
              <ShoppingBag className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full ring-2 ring-background">
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
              className="text-sm font-bold text-gray-300 hover:text-primary transition-colors uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-xl transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 z-[40]",
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
