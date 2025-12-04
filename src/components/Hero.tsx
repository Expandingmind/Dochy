import Link from "next/link";
import { Package, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-8 md:pt-12 pb-8 overflow-hidden bg-black">
      <div className="container mx-auto px-3 flex flex-col items-center gap-4 z-10 max-w-4xl">
        
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-anton text-white tracking-wide max-w-4xl leading-[1.15] uppercase italic whitespace-nowrap">
          TURN YOUR HUSTLE INTO PROFIT TODAY
        </h1>

        <div className="flex items-center gap-3 mt-4">
          <div className="flex -space-x-2">
            {[
              "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&auto=format&fit=crop&q=60"
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
          <span className="text-sm md:text-base text-white">
            Join <span className="font-bold">50,000+</span> Resellers
          </span>
        </div>

        <span className="text-gray-400 mt-2 text-sm">
          see more
        </span>

        {/* Category Boxes */}
        <div className="flex gap-4 mt-6 w-full max-w-md">
          <Link 
            href="/items"
            className="flex-1 bg-[#111114] hover:bg-[#1a1a1f] border border-white/10 hover:border-purple-500/50 rounded-xl p-6 flex flex-col items-center gap-3 transition-all hover:scale-[1.02] group"
          >
            <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
              <Package className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-white font-bold text-sm uppercase tracking-wide">Items</span>
          </Link>

          <Link 
            href="/vendors"
            className="flex-1 bg-[#111114] hover:bg-[#1a1a1f] border border-white/10 hover:border-purple-500/50 rounded-xl p-6 flex flex-col items-center gap-3 transition-all hover:scale-[1.02] group"
          >
            <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-white font-bold text-sm uppercase tracking-wide">Vendors</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
