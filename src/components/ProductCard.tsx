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
      {/* Image Card with Gradient Background */}
      <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Sale Badge */}
        {product.badge && (
          <div className={cn(
            "absolute top-4 left-4 text-white text-xs font-bold px-3 py-1.5 rounded-lg z-20 uppercase",
            product.badge === "BEST DEAL" ? "bg-purple-600" : "bg-purple-600"
          )}>
            {product.badge === "BEST DEAL" ? "Best Deal" : "Sale"}
          </div>
        )}

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon 
            strokeWidth={1}
            className="w-24 h-24 md:w-28 md:h-28 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Title Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide text-center drop-shadow-lg">
            {product.name}
          </h3>
        </div>
      </div>

      {/* Product Info Below Card */}
      <div className="text-center">
        <h4 className="text-sm md:text-base font-bold text-white uppercase mb-2 tracking-wide">
          {product.name}
        </h4>
        
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-sm text-gray-500 line-through">
            ${product.originalPrice} USD
          </span>
          <span className="text-xl font-bold text-white">
            ${product.price}
          </span>
        </div>

        {/* Buttons */}
        <div className="space-y-2">
          <button 
            className="w-full py-3 rounded-lg bg-[#1a1a1f] hover:bg-[#252529] text-xs font-medium text-gray-400 hover:text-white transition-all uppercase tracking-widest border border-white/5"
            onClick={() => alert(`Details for ${product.name}: ${product.description}`)}
          >
            DETAILS +
          </button>
          
          <button
            onClick={handleAddToCart}
            className={cn(
              "w-full py-3.5 rounded-lg font-bold text-sm uppercase tracking-wide transition-all",
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
