import Link from "next/link";
import { ArrowRight, Package, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center pt-20 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-20" />

      <div className="container mx-auto px-4 flex flex-col items-center gap-6 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Join 50,000+ Resellers
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight max-w-4xl leading-[1.1] animate-fade-in-up delay-100">
          START YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">RESELLING</span> JOURNEY TODAY.
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl animate-fade-in-up delay-200">
          Get instant access to high-quality items and vendor lists so you can start reselling with confidence.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 animate-fade-in-up delay-300">
          <Link
            href="#catalog"
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center gap-2"
          >
            Get Access <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#catalog"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all hover:scale-105 backdrop-blur-sm"
          >
            View Catalog
          </Link>
        </div>

        <div className="mt-8 flex items-center gap-3 animate-fade-in-up delay-500 opacity-80 mb-16">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gray-800 overflow-hidden">
                 {/* Placeholder Avatar */}
                 <div className={`w-full h-full bg-gradient-to-br from-gray-700 to-gray-900`} />
              </div>
            ))}
          </div>
          <span className="text-xl text-gray-400 font-bold">
            Join 10,000+ resellers leveraging DOCHY vendors.
          </span>
        </div>

        {/* Category Cards Island */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl animate-fade-in-up delay-700">
          {/* Items Card */}
          <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/9] bg-black/40 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.2)]">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
             <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
             
             <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-left z-10">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center mb-4 shadow-lg text-black">
                   <Package className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase mb-2">Items</h3>
                <p className="text-gray-300 text-sm mb-6 max-w-sm">
                  Explore our curated collection of high-demand bundles and individual items ready for resale.
                </p>
                <Link 
                  href="/items"
                  className="px-6 py-3 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors"
                >
                  Explore Items <ArrowRight className="w-4 h-4" />
                </Link>
             </div>
          </div>

          {/* Vendors Card */}
          <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/9] bg-black/40 border border-white/10 hover:border-secondary/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(236,72,153,0.2)]">
             <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
             <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
             
             <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-left z-10">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center mb-4 shadow-lg text-black">
                   <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase mb-2">Vendors</h3>
                <p className="text-gray-300 text-sm mb-6 max-w-sm">
                  Connect directly with trusted manufacturers and suppliers to source your own inventory.
                </p>
                <Link 
                  href="/vendors"
                  className="px-6 py-3 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors"
                >
                  Explore Vendors <ArrowRight className="w-4 h-4" />
                </Link>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
