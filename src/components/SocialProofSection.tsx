import Link from "next/link";

const testimonials = [
  {
    user: "Alex M.",
    profit: "$5,688.25",
    text: "Turning this into 20k this year trust. Only 14 year old with 6000.",
    color: "from-purple-500 to-indigo-600"
  },
  {
    user: "Jordan K.",
    profit: "$2,095",
    text: "Already at 2k in sales. The vendor list is crazy.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    user: "Sam R.",
    profit: "$1,700",
    text: "Holy good shit bro enjoy that $. My biggest bulk sale ever.",
    color: "from-emerald-500 to-teal-600"
  },
  {
    user: "Casey L.",
    profit: "$3,450",
    text: "Just hit my first 3k month using the electronics bundle. Insane.",
    color: "from-pink-500 to-rose-500"
  }
];

export function SocialProofSection() {
  return (
    <section id="results" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase">
          Proof Its Not That Hard...
        </h2>
        <p className="text-gray-400">See what others are achieving.</p>
      </div>

      {/* Carousel Track - Simplified CSS scroll snap */}
      <div className="flex gap-6 overflow-x-auto pb-8 px-4 md:justify-center snap-x">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-72 md:w-80 bg-white/5 border border-white/10 rounded-2xl p-6 snap-center flex flex-col gap-4 hover:border-primary/30 transition-colors"
          >
            <div className={`w-full h-32 rounded-xl bg-gradient-to-br ${t.color} opacity-80 flex items-center justify-center`}>
                <span className="text-2xl font-bold text-white drop-shadow-md">{t.profit}</span>
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-300 mb-2">&quot;{t.text}&quot;</p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t.user}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="container mx-auto px-4 mt-16">
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
            
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 relative z-10">
                Start Your Reselling Career!
            </h3>
            <p className="text-lg text-gray-300 mb-8 relative z-10">
                Get access to the world&apos;s best suppliers.
            </p>
            
            <Link 
                href="#catalog"
                className="relative z-10 inline-block px-10 py-4 bg-primary text-white font-bold rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 transition-transform"
            >
                Get Access
            </Link>
        </div>
      </div>
    </section>
  );
}

