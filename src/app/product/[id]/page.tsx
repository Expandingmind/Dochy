"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/products";
import { useCartStore } from "@/lib/store";
import { 
  Gift, Ghost, Footprints, Shirt, SprayCan, Sparkles, ShoppingBag, 
  Link as LinkIcon, Gem, Smartphone, Watch, Gamepad2, Camera, Zap, 
  Headphones, Dice5, PartyPopper, Car, Truck, Armchair, Package, 
  Dumbbell, Crown, Users, Star, ChevronDown, LucideIcon
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

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

const faqs = [
  { question: "What does buying a supplier get me?", answer: "You get instant access to a curated list of verified suppliers for specific products." },
  { question: "How will I receive access to the supplier?", answer: "Access is delivered instantly via email immediately after purchase." },
  { question: "How long does the supplier take to ship?", answer: "Shipping times vary by supplier, but most offer expedited shipping options." },
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find(p => p.id === productId);
  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checkingOut] = useState(Math.floor(Math.random() * 10) + 3);

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Product not found</h1>
          <Link href="/" className="text-purple-400 hover:text-purple-300">Go back home</Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[product.id] || (product.type === 'bundle' ? Package : Zap);
  
  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  // Get related products (same type, excluding current)
  const relatedProducts = products
    .filter(p => p.type === product.type && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-black pt-4 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg">
            {/* Galaxy Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-800 via-fuchsia-700 to-indigo-900" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 via-transparent to-pink-600/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-black/70" />
            
            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon 
                strokeWidth={1}
                className="w-32 h-32 md:w-48 md:h-48 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              />
            </div>

            {/* Title at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wide text-center drop-shadow-lg">
                {product.name}
              </h2>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Checking out indicator */}
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
              <Users className="w-4 h-4" />
              <span>{checkingOut} people are checking out right now</span>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="text-2xl font-bold text-white mb-6">
              ${product.price} <span className="text-gray-500 text-lg">USD</span>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={cn(
                "w-full py-4 rounded-lg font-bold text-base uppercase tracking-wide transition-all duration-300 mb-3 border-2",
                isAdded 
                  ? "bg-green-500 border-green-500 text-white"
                  : "bg-transparent border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              )}
            >
              {isAdded ? "Added to cart!" : "Add to cart"}
            </button>

            {/* Buy Now Button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 rounded-lg font-bold text-base uppercase tracking-wide transition-all duration-300 mb-3 bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              Buy Now
            </button>

            {/* More payment options */}
            <p className="text-center text-gray-500 text-sm underline cursor-pointer mb-6">
              More payment options
            </p>

            {/* Happy Resellers Badge */}
            <div className="flex items-center gap-2 text-white mb-6">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">2000+ happy resellers</span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Vendor links are sent straight to your email and available instantly after purchase, <span className="font-bold text-white">please enter a valid email address</span> at checkout.
            </p>

            {/* Divider */}
            <div className="border-t border-white/10 my-6" />

            {/* Bundle With Section */}
            <div>
              <h3 className="text-white font-bold mb-4">Bundle With Any Of Our Most Popular Vendors And Get 50% off</h3>
              <div className="border-t border-white/10 mb-4" />
              <p className="text-gray-400 text-sm mb-4">Bundle with:</p>
              
              <div className="flex gap-3 overflow-x-auto pb-2">
                {relatedProducts.map((related) => {
                  const RelatedIcon = iconMap[related.id] || Package;
                  return (
                    <Link 
                      key={related.id}
                      href={`/product/${related.id}`}
                      className="flex-shrink-0 w-32 bg-[#111114] rounded-lg border border-purple-500/30 overflow-hidden hover:border-purple-500 transition-colors"
                    >
                      <div className="aspect-square bg-gradient-to-br from-violet-800/50 via-fuchsia-700/50 to-indigo-900/50 flex items-center justify-center relative">
                        <RelatedIcon className="w-10 h-10 text-white" strokeWidth={1} />
                        <span className="absolute bottom-1 text-[8px] text-white uppercase font-bold">{related.name.split(' ')[0]}</span>
                      </div>
                      <div className="p-2">
                        <p className="text-[10px] text-gray-500 uppercase">Best Seller</p>
                        <p className="text-xs text-white font-bold truncate">{related.name}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-xs text-white">${related.price}</span>
                          <span className="text-[10px] bg-green-600 text-white px-1 rounded">Save 50%</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111114] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="text-sm font-medium text-white">{faq.question}</span>
                  <ChevronDown className={cn(
                    "w-5 h-5 text-gray-500 transition-transform",
                    openFaq === i && "rotate-180"
                  )} />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-400 text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-6 h-6 fill-purple-500 text-purple-500" />
              ))}
            </div>
            <button className="px-4 py-2 border border-white/20 rounded-lg text-white text-sm hover:bg-white/5">
              Write a review
            </button>
          </div>

          {/* Sample Reviews */}
          <div className="space-y-4">
            {[
              { name: "David D.", text: "Just bought my first car just from ecom... crazy 🙏", hasImage: true },
              { name: "James W.", text: "Just sold my first big bulk order worth over $1.8k 🔥", hasImage: true },
            ].map((review, i) => (
              <div key={i} className="bg-[#111114] rounded-xl p-4 flex gap-4">
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-sm mb-1">{review.name}</h4>
                  <div className="flex gap-0.5 mb-2">
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} className="w-3 h-3 fill-purple-500 text-purple-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm">{review.text}</p>
                </div>
                {review.hasImage && (
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📸</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

