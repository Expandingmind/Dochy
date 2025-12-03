"use client";

import { Product } from "@/lib/products";
import { useCartStore } from "@/lib/store";
import { 
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
    <div className="group relative bg-[#0a0a0f] border border-white/[0.08] rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] flex flex-col h-full">
      {/* Unified Content Area */}
      <div className="relative flex flex-col items-center justify-center pt-16 pb-8 px-6 flex-grow">
         {/* Ambient Background Glow - Subtle purple top/bottom */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/3 bg-gradient-to-b from-primary/5 to-transparent opacity-40" />
         
         {/* Badge */}
         {product.badge && (
           <div className="absolute top-5 left-5 bg-pink-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-wide z-20">
             {product.badge}
           </div>
         )}

         {/* Icon - Larger, Bold, White, Glowing */}
         <div className="relative z-10 mb-8 group-hover:scale-110 transition-transform duration-500 ease-out">
           <div className="absolute inset-0 blur-xl bg-white/20 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           <Icon 
             strokeWidth={2}
             className="w-24 h-24 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
           />
         </div>

         {/* Text Content */}
         <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight text-center leading-none min-h-[3rem] flex items-center justify-center drop-shadow-md">
           {product.name}
         </h3>

         <div className="flex items-baseline justify-center gap-3 mb-4">
           <span className="text-sm text-gray-600 line-through font-bold">
             ${product.originalPrice}
           </span>
            <span className="text-2xl font-black text-white tracking-tight">
             ${product.price}
           </span>
         </div>
      </div>

      {/* Action Buttons - Compact Layout */}
      <div className="px-6 pb-8 pt-0 space-y-3 relative z-10">
         <button 
           className="w-full py-3 rounded-full bg-[#121217] hover:bg-[#1a1a20] text-[10px] font-bold text-gray-400 hover:text-white transition-all uppercase tracking-widest border border-white/5 flex items-center justify-center gap-1"
           onClick={() => alert(`Details for ${product.name}: ${product.description}`)}
         >
           Details <span className="text-xs">+</span>
         </button>
         
         <button
           onClick={handleAddToCart}
           className={cn(
             "w-full py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-xl active:scale-95 relative overflow-hidden",
             isAdded 
               ? "bg-green-500 text-white shadow-green-500/40"
               : "bg-[#A855F7] hover:bg-[#9333EA] text-white shadow-[0_0_30px_rgba(168,85,247,0.4)]"
           )}
         >
           {isAdded ? "Added!" : "Buy Now"}
         </button>
      </div>
    </div>
  );
}
