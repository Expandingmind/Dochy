"use client";

import Link from "next/link";

// EDITABLE PROOF SLIDES - Edit text, images, and order below
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
  {
    id: 7,
    image: "🔥",
    mainText: "Just made $2500 profit this weekend alone from the bracelet vendor",
    reply: "That's crazy bro keep grinding 💯",
  },
];

function ProofCard({ card }: { card: typeof proofCards[0] }) {
  return (
    <div className="w-[196px] md:w-[224px] flex-shrink-0 relative">
      {/* Dark fade overlay on sides */}
      <div className="absolute inset-y-0 -left-3 w-6 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 -right-3 w-6 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <div className="bg-[#0a0a0f] rounded-xl overflow-hidden border border-white/5">
        {/* Image area */}
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative">
          <span className="text-4xl">{card.image}</span>
          {/* Fake DM indicator */}
          <div className="absolute top-2 right-2 bg-black/60 rounded-full p-1">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
        </div>
        
        {/* Chat messages */}
        <div className="p-2 space-y-1.5">
          <div className="flex items-start gap-1.5">
            <div className="w-4 h-4 rounded-full bg-gray-700 flex-shrink-0" />
            <div className="bg-[#1a1a1f] rounded-xl rounded-tl-sm px-2 py-1.5 max-w-[85%]">
              <p className="text-white text-[10px] leading-relaxed">{card.mainText}</p>
            </div>
            <span className="text-red-500 text-[10px]">❤️</span>
          </div>
          
          {card.reply && (
            <div className="flex items-start gap-1.5 justify-end">
              <div className="bg-[#3b3b45] rounded-xl rounded-tr-sm px-2 py-1.5 max-w-[85%]">
                <p className="text-white text-[10px] leading-relaxed">{card.reply}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProofSection() {
  return (
    <section className="py-12 md:py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
          Proof Its Not That Hard...
        </h2>
      </div>

      {/* Scrolling Proof Cards */}
      <div className="w-full overflow-hidden relative px-12 md:px-24">
        {/* Edge fade overlays - wider black padding */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-72 bg-gradient-to-r from-black via-black/95 via-black/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-72 bg-gradient-to-l from-black via-black/95 via-black/80 to-transparent z-20 pointer-events-none" />
        
        <div className="flex gap-4 animate-marquee-fast w-max">
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
    <section id="contact" className="py-14 md:py-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Start Your Reselling Empire!
        </h2>
        <p className="text-base md:text-lg text-gray-300 font-medium mb-8">
          Get access to the world&apos;s best suppliers.
        </p>
        
        <Link 
          href="/items"
          className="inline-block px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.6)]"
        >
          Get Access
        </Link>
      </div>
    </section>
  );
}
