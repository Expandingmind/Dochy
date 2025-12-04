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
    <section id="catalog" className="py-6 md:py-10 bg-black">
      <div className="container mx-auto px-2 md:px-4">
        {title && (
          <h2 className="text-lg md:text-2xl font-bold text-white text-center mb-6">
            {title}
          </h2>
        )}
        {/* Grid - More columns on larger screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
