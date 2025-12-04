"use client";

import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export type Filter = "All" | "Bundles" | "Vendor Lists";

interface ProductGridProps {
  initialFilter?: Filter;
  hideFilters?: boolean;
  title?: string;
}

export function ProductGrid({ initialFilter = "All", title }: ProductGridProps) {
  const filteredProducts = products.filter((product) => {
    if (initialFilter === "All") return true;
    if (initialFilter === "Bundles") return product.type === "bundle";
    if (initialFilter === "Vendor Lists") return product.type === "vendor";
    return true;
  });

  return (
    <section id="catalog" className="py-8 md:py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {title && (
          <h2 className="text-xl md:text-3xl font-bold text-white text-center mb-8">
            {title}
          </h2>
        )}
        {/* Grid - 2 columns mobile, 4 columns desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
