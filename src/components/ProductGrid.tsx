"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { cn } from "@/lib/utils";

type Filter = "All" | "Bundles" | "Vendor Lists";

export function ProductGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const filteredProducts = products.filter((product) => {
    if (filter === "All") return true;
    if (filter === "Bundles") return product.type === "bundle";
    if (filter === "Vendor Lists") return product.type === "vendor";
    return true;
  });

  return (
    <section id="catalog" className="py-20 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
          Featured <span className="text-primary">Bundles</span> & Lists
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Pick a bundle, plug into the suppliers, and start reselling faster.
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-2 mb-12 flex-wrap">
        {["All", "Bundles", "Vendor Lists"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as Filter)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-bold transition-all border",
              filter === f
                ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                : "bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/30"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

