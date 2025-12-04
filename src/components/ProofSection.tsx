"use client";

import Link from "next/link";

const proofImages = [
  {
    id: 1,
    type: "chat",
    content: "My Biggest bulk sale ever 20 colognes, 10 AirPods",
    subtext: "Holyyyy good sh*t bro enjoy that $",
  },
  {
    id: 2,
    type: "balance",
    amount: "$5,688.25",
    subtext: "Turning this into 20k this year trust",
    comment: "Only 14 year old with 6000",
  },
  {
    id: 3,
    type: "stats",
    amount: "$2,095",
    subtext: "Already at 2k in sales",
    comment: "Yessirr 💪",
  },
  {
    id: 4,
    type: "money",
    subtext: "$1700 for the week not bad for a 15 year old 😊",
    comment: "Not bad",
  },
];

export function ProofSection() {
  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-3">
        <h2 className="text-lg md:text-2xl font-bold text-white text-center mb-6">
          Proof Its Not That Hard...
        </h2>

        {/* Proof Grid - Compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 max-w-5xl mx-auto">
          {proofImages.map((proof) => (
            <div 
              key={proof.id}
              className="bg-[#0a0a0f] rounded-lg overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
            >
              {/* Compact proof card */}
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-3">
                <div className="text-center">
                  {proof.amount && (
                    <div className="text-lg md:text-xl font-bold text-white mb-1">
                      {proof.amount}
                    </div>
                  )}
                  <p className="text-[10px] md:text-xs text-gray-400 leading-tight">
                    {proof.subtext}
                  </p>
                  {proof.comment && (
                    <div className="mt-2 text-[9px] md:text-[10px] text-gray-500 bg-black/50 rounded-full px-2 py-0.5 inline-block">
                      {proof.comment}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section id="contact" className="py-12 bg-black">
      <div className="container mx-auto px-3 text-center">
        <h2 className="text-xl md:text-3xl font-bold text-white mb-3 italic">
          Start Your Reselling Career!
        </h2>
        <p className="text-sm md:text-base text-gray-400 mb-6">
          Get access to the world&apos;s best suppliers.
        </p>
        
        <Link 
          href="#catalog"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg text-sm md:text-base transition-all hover:scale-105"
        >
          Get Access
        </Link>
      </div>
    </section>
  );
}
