"use client";

import Link from "next/link";

const proofCards = [
  {
    id: 1,
    image: "💵",
    mainText: "2 easy 5k didn't not all fit in pic got 1 AirPod left",
    reply: "Damn bro getting too rich 🤣 Happy for you",
  },
  {
    id: 2,
    image: "💰",
    mainText: "Made my first $4000 reselling super grateful for finding your page",
    reply: "Good shit bro proud of you 🤝",
  },
  {
    id: 3,
    image: "🤑",
    mainText: "Nice lil $400 day",
    reply: "",
  },
  {
    id: 4,
    image: "💸",
    mainText: "$1700 for the week not bad for a 15 year old 😊",
    reply: "Keep going bro 🔥",
  },
  {
    id: 5,
    image: "🏦",
    mainText: "Just hit 10k this month from the cologne vendors alone",
    reply: "That's insane bro congrats 💪",
  },
  {
    id: 6,
    image: "💵",
    mainText: "First bulk order came in, 50 hoodies ready to flip",
    reply: "Let's gooo 🚀",
  },
];

function ProofCard({ card }: { card: typeof proofCards[0] }) {
  return (
    <div className="w-[280px] md:w-[320px] flex-shrink-0 bg-[#0a0a0f] rounded-2xl overflow-hidden border border-white/5">
      {/* Image area */}
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative">
        <span className="text-6xl">{card.image}</span>
        {/* Fake DM indicator */}
        <div className="absolute top-3 right-3 bg-black/60 rounded-full p-1.5">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
      </div>
      
      {/* Chat messages */}
      <div className="p-3 space-y-2">
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-700 flex-shrink-0" />
          <div className="bg-[#1a1a1f] rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
            <p className="text-white text-xs leading-relaxed">{card.mainText}</p>
          </div>
          <span className="text-red-500 text-xs">❤️</span>
        </div>
        
        {card.reply && (
          <div className="flex items-start gap-2 justify-end">
            <div className="bg-[#3b3b45] rounded-2xl rounded-tr-sm px-3 py-2 max-w-[85%]">
              <p className="text-white text-xs leading-relaxed">{card.reply}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function ProofSection() {
  return (
    <section className="py-10 bg-black overflow-hidden">
      <div className="container mx-auto px-3 mb-6">
        <h2 className="text-lg md:text-2xl font-bold text-white text-center">
          Proof Its Not That Hard...
        </h2>
      </div>

      {/* Scrolling Proof Cards */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-4 animate-marquee-reverse w-max">
          {[...proofCards, ...proofCards, ...proofCards, ...proofCards].map((card, i) => (
            <ProofCard key={`proof-${i}`} card={card} />
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
          href="/items"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]"
        >
          Get Access
        </Link>
      </div>
    </section>
  );
}
