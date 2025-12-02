"use client";

import { Product } from "@/lib/products";
import { useCartStore } from "@/lib/store";
import { 
  Info, 
  Gift, 
  Ghost, 
  Footprints, 
  Shirt, 
  SprayCan, 
  Users, 
  ShoppingBag, 
  Circle, 
  Gem, 
  Smartphone, 
  Watch, 
  Gamepad2, 
  Camera, 
  Zap, 
  Headphones, 
  Dice5, 
  PartyPopper, 
  Car, 
  Truck, 
  Armchair,
  LucideIcon,
  Package
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const iconMap: Record<string, LucideIcon> = {
  "all-supplier-bundle": Gift,
  "labubuu-vendor": Ghost,
  "shoes-bundle": Footprints,
  "hoodies-vendor": Shirt,
  "sweatpants-vendor": Shirt,
  "cologne-vendor": SprayCan,
  "peps-vendor": Users,
  "bags-vendor-bundle": ShoppingBag,
  "bracelets-vendor": Circle,
  "moissanite-vendor": Gem,
  "phone-vendor": Smartphone,
  "watch-vendor": Watch,
  "console-vendor": Gamepad2,
  "camera-vendor": Camera,
  "all-electronics-vendor-bundle": Zap,
  "pod-vendor": Headphones,
  "shirt-shorts-vendor-bundle": Shirt,
  "jerseys-supplier": Shirt,
  "casino-vendor": Dice5,
  "all-inflatable-decorations-vendor": PartyPopper,
  "car-parts-vendor": Car,
  "shipping-services-vendor": Truck,
  "furniture-vendor": Armchair,
};

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const Icon = iconMap[product.id] || (product.type === 'bundle' ? Package : Zap);

  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col">
      {/* Image Area Placeholder */}
      <div className="relative h-56 w-full bg-gradient-to-b from-[#1a103d] to-[#050509] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        
        {/* Neon Glow Behind Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/30 blur-3xl rounded-full group-hover:bg-primary/50 transition-all duration-500" />

        {/* Icon */}
        <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
          <Icon 
            strokeWidth={1.5}
            className="w-24 h-24 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          />
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-secondary to-accent text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wide z-20">
            {product.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow bg-[#0a0a0f]">
        <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wide line-clamp-2 min-h-[3.5rem] text-center group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-sm text-gray-500 line-through decoration-red-500/50">
            ${product.originalPrice}
          </span>
           <span className="text-xl font-bold text-white">
            ${product.price}
          </span>
        </div>

        <div className="mt-auto flex flex-col gap-3">
           <button 
             className="w-full py-2.5 px-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold text-gray-300 transition-all uppercase tracking-wider flex items-center justify-center gap-2 group/btn"
             onClick={() => alert(`Details for ${product.name}: ${product.description}`)}
           >
             Details <span className="group-hover/btn:translate-x-1 transition-transform">+</span>
           </button>
           
           <button
             onClick={handleAddToCart}
             className={cn(
               "w-full py-3.5 px-4 rounded-lg font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]",
               isAdded 
                 ? "bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                 : "bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
             )}
           >
             {isAdded ? "Added!" : "Buy Now"}
           </button>
        </div>
      </div>
    </div>
  );
}
