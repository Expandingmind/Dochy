"use client";

import { Product } from "@/lib/products";
import { useCartStore } from "@/lib/store";
import { ShoppingCart, Info } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col">
      {/* Image Area Placeholder */}
      <div className="relative h-48 w-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
        
        {/* Placeholder Icon/Graphic */}
        <div className="text-6xl opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 select-none">
          {product.type === 'bundle' ? '📦' : '⚡'}
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-secondary to-accent text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wide">
            {product.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wide line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>
        
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xl font-bold text-primary">
            ${product.price}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ${product.originalPrice}
          </span>
        </div>

        <div className="mt-auto flex flex-col gap-2">
           <button 
             className="w-full py-2 px-4 rounded-lg border border-white/10 hover:bg-white/5 text-xs font-medium text-gray-300 transition-colors flex items-center justify-center gap-2 uppercase tracking-wider"
             onClick={() => alert(`Details for ${product.name}: ${product.description}`)}
           >
             Details <Info className="w-3 h-3" />
           </button>
           
           <button
             onClick={handleAddToCart}
             className={cn(
               "w-full py-3 px-4 rounded-lg font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg",
               isAdded 
                 ? "bg-green-500 text-white"
                 : "bg-primary hover:bg-primary/90 text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
             )}
           >
             {isAdded ? "Added!" : "Buy Now"}
           </button>
        </div>
      </div>
    </div>
  );
}

