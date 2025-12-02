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
    <div className="group relative bg-[#0a0a0f]/90 border border-white/[0.05] rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] flex flex-col h-full backdrop-blur-sm">
      {/* Unified Content Area */}
      <div className="relative flex flex-col items-center justify-center pt-12 pb-6 px-6 flex-grow">
         {/* Ambient Background Glow */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2/3 bg-gradient-to-b from-primary/5 to-transparent opacity-60" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 blur-[60px] rounded-full group-hover:bg-primary/20 transition-all duration-500" />

         {/* Icon */}
         <div className="relative z-10 mb-8 group-hover:scale-110 transition-transform duration-500 ease-out">
           <Icon 
             strokeWidth={1.5}
             className="w-20 h-20 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
           />
         </div>

         {/* Badge */}
         {product.badge && (
           <div className="absolute top-5 left-5 bg-pink-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wide z-20">
             {product.badge}
           </div>
         )}

         {/* Text Content */}
         <h3 className="text-lg font-black text-white mb-2 uppercase tracking-wider text-center leading-tight min-h-[3rem] flex items-center justify-center">
           {product.name}
         </h3>

         <div className="flex items-baseline justify-center gap-3 mb-2">
           <span className="text-xs text-gray-500 line-through font-medium">
             ${product.originalPrice}
           </span>
            <span className="text-xl font-bold text-white">
             ${product.price}
           </span>
         </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 pt-0 mt-auto space-y-3 relative z-10">
         <button 
           className="w-full py-3 rounded-full bg-[#1a1a20] hover:bg-[#252530] text-[10px] font-bold text-gray-300 transition-all uppercase tracking-widest border border-white/5"
           onClick={() => alert(`Details for ${product.name}: ${product.description}`)}
         >
           Details +
         </button>
         
         <button
           onClick={handleAddToCart}
           className={cn(
             "w-full py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-xl active:scale-95",
             isAdded 
               ? "bg-green-500 text-white shadow-green-500/25"
               : "bg-primary hover:bg-primary/90 text-white shadow-primary/25"
           )}
         >
           {isAdded ? "Added!" : "Buy Now"}
         </button>
      </div>
    </div>
  );
}
