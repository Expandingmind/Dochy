"use client";

import { Star, SlidersHorizontal } from "lucide-react";

const reviews = [
  {
    name: "David D.",
    stars: 5,
    text: "Just bought my first car just from ecom... crazy 🙏",
    hasImage: true,
  },
  {
    name: "James W.",
    stars: 5,
    text: "Just sold my first big bulk order worth over $1.8k 🔥",
    hasImage: true,
  },
  {
    name: "Isaiah M.",
    stars: 5,
    text: "Crazy how fast things move when you stay consistent.",
    hasImage: true,
  },
  {
    name: "Keshawn T.",
    stars: 5,
    text: "This 🦇 got me feeling like Batman lmao me and my two hb finally got our own 3 bed highrise apartment in downtown Los Angeles. Still ripping bros vendors to this day 😂",
    hasImage: true,
  },
  {
    name: "Oliver K.",
    stars: 5,
    text: "Kinda crazy not even finna come on here and glaze bro, cus I did this all myself, but still to this day I still use the clothing vendor for all of my shipments for my reselling brand. So yeah his vendor is good.",
    hasImage: true,
  },
  {
    name: "Jayy F.",
    stars: 5,
    text: "Best suppliers in the game ngl. Also gives a discount on top of that when buying your products.",
    hasImage: false,
  },
  {
    name: "Jackson L.",
    stars: 4,
    text: "Very good tbh",
    hasImage: false,
  },
  {
    name: "Mike C.",
    stars: 5,
    text: "I mean yeah their good can't complain, much better than other resellers that I've bought from",
    hasImage: false,
  },
  {
    name: "Jack A.",
    stars: 5,
    text: "Leaving this review at the barbershop lol I normally don't be writing reviews but I had to... normally when I buy other resellers vendors it's literally all a copy of eachother, but these were completely new.",
    hasImage: true,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i <= count
              ? "fill-purple-500 text-purple-500"
              : "fill-transparent text-purple-500/50"
          }`}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="py-12 md:py-16 bg-black">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-7 h-7 md:w-8 md:h-8 fill-purple-500 text-purple-500" />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden md:block px-4 py-2 rounded-lg border border-white/20 text-white font-bold text-sm hover:bg-white/5 transition-colors">
              Write a review
            </button>
            <button className="p-3 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
              <SlidersHorizontal className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Write a review button */}
        <button className="md:hidden w-full py-4 mb-8 rounded-xl border border-white/20 text-white font-bold text-base hover:bg-white/5 transition-colors">
          Write a review
        </button>

        {/* Reviews List */}
        <div className="space-y-5">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-[#111114] rounded-2xl p-5 md:p-6 border border-white/5"
            >
              <div className="flex gap-4 md:gap-6">
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-bold text-base md:text-lg mb-2">
                    {review.name}
                  </h4>
                  <StarRating count={review.stars} />
                  <p className="text-gray-200 font-medium text-base md:text-base mt-4 leading-relaxed">
                    {review.text}
                  </p>
                </div>

                {/* Image placeholder */}
                {review.hasImage && (
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gray-800/50 flex items-center justify-center">
                      <span className="text-gray-600 text-3xl">📸</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
