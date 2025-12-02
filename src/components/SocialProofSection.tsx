import Link from "next/link";
import { Star, CheckCircle } from "lucide-react";

const testimonials = [
  {
    user: "ALEX M.",
    initials: "AM",
    date: "DEC 19, 2024",
    text: "Turning this into 20k this year trust. Only 14 year old with 6000 made in my first month.",
  },
  {
    user: "JORDAN K.",
    initials: "JK",
    date: "DEC 01, 2024",
    text: "Already at 2k in sales. The vendor list is crazy, literally everything I needed to start.",
  },
  {
    user: "SAM R.",
    initials: "SR",
    date: "NOV 25, 2024",
    text: "Holy good sh*t bro enjoy that $. My biggest bulk sale ever. Best investment I've made.",
  },
  {
    user: "CASEY L.",
    initials: "CL",
    date: "NOV 15, 2024",
    text: "Just hit my first 3k month using the electronics bundle. The suppliers are actually legit.",
  }
];

export function SocialProofSection() {
  return (
    <section id="results" className="py-20 overflow-hidden border-t border-white/5 bg-black/20">
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          {/* Left Side Header */}
          <div className="text-left max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              WHAT OUR CLIENTS SAY ABOUT US
            </h2>
            <p className="text-gray-400 text-lg">
              Real results from real resellers worldwide.
            </p>
          </div>

          {/* Right Side Rating */}
          <div className="flex flex-col items-start md:items-end">
            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 mb-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <CheckCircle className="w-4 h-4 text-green-500 fill-green-500/20" />
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">Google Guaranteed</span>
            </div>
            <div className="text-5xl font-black text-white mb-1 tracking-tight">4.90</div>
            <div className="flex gap-1 mb-1">
               {[1, 2, 3, 4, 5].map((i) => (
                 <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
               ))}
            </div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Based on 400+ Reviews</p>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <div
              key={i}
              className="bg-white text-black rounded-3xl p-8 flex flex-col gap-6 hover:scale-[1.02] transition-transform duration-300 shadow-xl"
            >
              {/* Top: Stars and Date */}
              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t.date}</span>
              </div>

              {/* Middle: Text */}
              <p className="text-gray-800 font-medium leading-relaxed min-h-[80px]">
                &quot;{t.text}&quot;
              </p>

              {/* Bottom: User Info */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm">
                    {t.initials}
                  </div>
                  <span className="font-black text-sm uppercase tracking-wide">{t.user}</span>
                </div>
                <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center bg-white">
                    <span className="font-bold text-[10px] text-blue-500">G</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="container mx-auto px-4 mt-20">
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
