"use client";

import { Product } from "@/lib/products";
import { useCartStore } from "@/lib/store";
import { 
  Gift, 
  Ghost, 
  Footprints, 
  Shirt, 
  SprayCan, 
  Sparkles, 
  ShoppingBag, 
  Link as LinkIcon, 
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
  Package,
  Dumbbell,
  Crown,
  Users
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
  "sweatpants-vendor": Dumbbell,
  "cologne-vendor": SprayCan,
  "peps-vendor": Sparkles,
  "bags-vendor-bundle": ShoppingBag,
  "bracelets-vendor": LinkIcon,
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
  "resellers-empire": Crown,
  "inner-circle": Users,
  "social-media-growth": Users,
  "vinted-depop-bundle": ShoppingBag,
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
    <div className="group flex flex-col">
      {/* Image Card with Gradient Background - Sharp corners */}
      <div className="relative aspect-square rounded-sm md:rounded-none overflow-hidden mb-3 md:mb-4 border border-white/10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Sale Badge */}
        {product.badge && (
          <div className={cn(
            "absolute top-3 left-3 text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-md z-20 uppercase",
            product.badge === "BEST DEAL" ? "bg-purple-600" : "bg-purple-600"
          )}>
            {product.badge === "BEST DEAL" ? "Best Deal" : "Sale"}
          </div>
        )}

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon 
            strokeWidth={1}
            className="w-16 h-16 md:w-24 md:h-24 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Title Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
          <h3 className="text-xs md:text-base font-bold text-white uppercase tracking-wide text-center drop-shadow-lg leading-tight">
            {product.name}
          </h3>
        </div>
      </div>

      {/* Product Info Below Card */}
      <div className="text-center">
        <h4 className="text-xs md:text-sm font-bold text-white uppercase mb-2 tracking-wide line-clamp-2 leading-tight">
          {product.name}
        </h4>
        
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-xs md:text-sm text-gray-500 line-through">
            ${product.originalPrice} USD
          </span>
          <span className="text-base md:text-xl font-bold text-white">
            ${product.price}
          </span>
        </div>

        {/* Buttons - keep rounded for better UX */}
        <div className="space-y-2">
          <button 
            className="w-full py-2.5 md:py-3 rounded-full bg-[#1a1a1f] hover:bg-[#252529] text-[10px] md:text-xs font-medium text-gray-400 hover:text-white transition-all uppercase tracking-widest border border-white/10"
            onClick={() => alert(`Details for ${product.name}: ${product.description}`)}
          >
            DETAILS +
          </button>
          
          <button
            onClick={handleAddToCart}
            className={cn(
              "w-full py-3 md:py-3.5 rounded-full font-bold text-xs md:text-sm uppercase tracking-wide transition-all",
              isAdded 
                ? "bg-green-500 text-white"
                : "bg-purple-600 hover:bg-purple-500 text-white"
            )}
          >
            {isAdded ? "Added!" : "BUY NOW"}
          </button>
        </div>
      </div>
    </div>
  );
}
