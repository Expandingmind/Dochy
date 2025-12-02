import Link from "next/link";
import { ArrowRight, Package, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center pt-20 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-20" />

      <div className="container mx-auto px-4 flex flex-col items-center gap-6 z-10 max-w-7xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Join 50,000+ Resellers
        </div>

        <h1 className="text-6xl md:text-8xl font-anton text-white tracking-wide max-w-5xl leading-[1] animate-fade-in-up delay-100 uppercase">
          Turn Your Hustle Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Profit</span> Today
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl animate-fade-in-up delay-200">
          Get instant access to high-quality items and vendor lists so you can start reselling with confidence.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 animate-fade-in-up delay-300">
          <Link
            href="/items"
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center gap-2"
          >
            Get Access <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/items"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all hover:scale-105 backdrop-blur-sm"
          >
            View Catalog
          </Link>
        </div>

        <div className="mt-10 flex items-center gap-4 animate-fade-in-up delay-500 mb-20 scale-110 md:scale-125 origin-center">
          <div className="flex -space-x-5">
            {[
              "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&auto=format&fit=crop&q=60"
            ].map((src, i) => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-background overflow-hidden relative z-0">
                 <img 
                   src={src} 
                   alt={`Member ${i}`}
                   className="w-full h-full object-cover"
                 />
              </div>
            ))}
          </div>
          <span className="text-2xl font-medium text-white tracking-tight">
            Join <span className="font-black">50,000+</span> Resellers
          </span>
        </div>

        {/* Category Cards Island - Minimalistic Update */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl animate-fade-in-up delay-700">
          {/* Items Card */}
          <div className="group relative rounded-3xl overflow-hidden bg-[#0a0a0f]/80 border border-white/[0.05] hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.1)] flex flex-col items-center justify-center p-12 backdrop-blur-xl min-h-[500px]">
             {/* Glowing ambient background */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent opacity-50" />
             
             <div className="relative z-10 flex flex-col items-center text-center scale-90 md:scale-100">
               <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.3)] mb-8 group-hover:scale-110 transition-transform duration-500">
                   <Package className="w-12 h-12 text-black stroke-[1.5]" />
               </div>
               
               <h3 className="text-3xl font-anton text-white uppercase mb-4 tracking-wide">Items</h3>
               <p className="text-gray-400 text-base mb-10 max-w-xs leading-relaxed">
                 Explore our curated collection of high-demand bundles and individual items ready for resale.
               </p>
               
               <Link 
                  href="/items"
                  className="px-10 py-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-full flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-primary/20"
                >
                  EXPLORE ITEMS <ArrowRight className="w-4 h-4" />
                </Link>
             </div>
          </div>

          {/* Vendors Card */}
          <div className="group relative rounded-3xl overflow-hidden bg-[#0a0a0f]/80 border border-white/[0.05] hover:border-secondary/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(236,72,153,0.1)] flex flex-col items-center justify-center p-12 backdrop-blur-xl min-h-[500px]">
             {/* Glowing ambient background */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-secondary/10 to-transparent opacity-50" />
             
             <div className="relative z-10 flex flex-col items-center text-center scale-90 md:scale-100">
               <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.3)] mb-8 group-hover:scale-110 transition-transform duration-500">
                   <Users className="w-12 h-12 text-black stroke-[1.5]" />
               </div>
               
               <h3 className="text-3xl font-anton text-white uppercase mb-4 tracking-wide">Vendors</h3>
               <p className="text-gray-400 text-base mb-10 max-w-xs leading-relaxed">
                 Connect directly with trusted manufacturers and suppliers to source your own inventory.
               </p>
               
               <Link 
                  href="/vendors"
                  className="px-10 py-4 bg-secondary hover:bg-secondary/90 text-white text-sm font-bold rounded-full flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-secondary/20"
                >
                  EXPLORE VENDORS <ArrowRight className="w-4 h-4" />
                </Link>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
