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
    <section id="catalog" className="py-12 bg-black">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-10">
            {title}
          </h2>
        )}
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
