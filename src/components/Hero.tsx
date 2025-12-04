import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-16 pb-12 overflow-hidden bg-black">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6 z-10 max-w-5xl">
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-anton text-white tracking-wide max-w-4xl leading-[1.1] uppercase italic">
          START YOUR RESELLING JOURNEY TODAY.
        </h1>

        <div className="flex items-center gap-4 mt-6">
          <div className="flex -space-x-3">
            {[
              "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&auto=format&fit=crop&q=60"
            ].map((src, i) => (
              <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black overflow-hidden">
                 <img 
                   src={src} 
                   alt={`Member ${i}`}
                   className="w-full h-full object-cover"
                 />
              </div>
            ))}
          </div>
          <span className="text-lg md:text-xl text-white">
            Join <span className="font-bold">50,000+</span> Resellers
          </span>
        </div>

        <Link 
          href="#catalog"
          className="text-gray-400 hover:text-white transition-colors mt-4 text-lg"
        >
          see more
        </Link>
      </div>
    </section>
  );
}
