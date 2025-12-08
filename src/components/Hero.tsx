import Link from "next/link";
import { Package, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-8 md:pt-12 pb-8 overflow-hidden bg-black">
      <div className="container mx-auto px-3 flex flex-col items-center gap-4 z-10 max-w-5xl">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-anton text-white tracking-wide leading-[1.15] uppercase md:whitespace-nowrap text-center">
          <span className="block md:inline">TURN YOUR HUSTLE</span>
          <span className="block md:inline"> INTO PROFIT TODAY.</span>
        </h1>

        <div className="flex items-center gap-3 mt-4">
          <div className="flex -space-x-2">
            {[
              "/IMG_9486.JPG",
              "/IMG_9489.JPG",
              "/IMG_9492.JPG",
              "/IMG_9491.JPG",
              "/IMG_9490.JPEG"
            ].map((src, i) => (
              <div key={i} className="w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-black overflow-hidden">
                 <img 
                   src={src} 
                   alt={`Member ${i}`}
                   className="w-full h-full object-cover"
                 />
              </div>
            ))}
          </div>
          <span className="text-sm md:text-base text-white font-medium">
            Join <span className="font-bold">5,000+</span> resellers.
          </span>
        </div>

        {/* Category Boxes */}
        <div className="flex gap-4 md:gap-6 mt-8 w-full max-w-md md:max-w-3xl">
          <Link 
            href="/items"
            className="flex-1 relative overflow-hidden rounded-xl md:rounded-2xl p-6 md:p-12 flex flex-col items-center gap-3 md:gap-5 transition-all duration-300 hover:scale-[1.02] group border border-purple-500/30 hover:border-purple-500/60 hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
          >
            {/* Galaxy gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-800 via-fuchsia-700 to-indigo-900" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 via-transparent to-pink-500/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            
            <div className="relative z-10 w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <Package className="w-6 h-6 md:w-10 md:h-10 text-white" />
            </div>
            <span className="relative z-10 text-white font-bold text-sm md:text-xl uppercase tracking-wide">Items</span>
          </Link>

          <Link 
            href="/vendors"
            className="flex-1 relative overflow-hidden rounded-xl md:rounded-2xl p-6 md:p-12 flex flex-col items-center gap-3 md:gap-5 transition-all duration-300 hover:scale-[1.02] group border border-purple-500/30 hover:border-purple-500/60 hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
          >
            {/* Galaxy gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-violet-700 to-fuchsia-800" />
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-700/40 via-transparent to-pink-600/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            
            <div className="relative z-10 w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 md:w-10 md:h-10 text-white" />
            </div>
            <span className="relative z-10 text-white font-bold text-sm md:text-xl uppercase tracking-wide">Vendors</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
