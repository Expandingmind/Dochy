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
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-12">
          Proof Its Not That Hard...
        </h2>

        {/* Proof Grid - Masonry style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {proofImages.map((proof) => (
            <div 
              key={proof.id}
              className="bg-[#0a0a0f] rounded-xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
            >
              {/* Placeholder for proof screenshots */}
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
                <div className="text-center">
                  {proof.amount && (
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {proof.amount}
                    </div>
                  )}
                  <p className="text-xs md:text-sm text-gray-400">
                    {proof.subtext}
                  </p>
                  {proof.comment && (
                    <div className="mt-3 text-xs text-gray-500 bg-black/50 rounded-full px-3 py-1 inline-block">
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
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 italic">
          Start Your Reselling Career!
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Get access to the world&apos;s best suppliers.
        </p>
        
        <Link 
          href="#catalog"
          className="inline-block px-12 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg text-lg transition-all hover:scale-105"
        >
          Get Access
        </Link>
      </div>
    </section>
  );
}

