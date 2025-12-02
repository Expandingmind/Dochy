"use client";

import { Star, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export function TopNotification() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const targetDate = new Date(`December 24, ${currentYear} 00:00:00`);
      
      if (now.getTime() > targetDate.getTime()) {
        targetDate.setFullYear(currentYear + 1);
      }

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return `${String(days).padStart(2, "0")}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
      }
      return "SALE ENDED";
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  // Content block to repeat
  const Content = () => (
    <div className="flex items-center justify-between gap-8 min-w-[800px] px-4">
      <div className="flex items-center gap-3 text-green-400 animate-pulse whitespace-nowrap">
        <span className="text-2xl">🎄</span>
        <span className="text-lg font-bold tracking-wide">CHRISTMAS SALE LIVE – Limited Time Only</span>
      </div>
      
      <div className="flex items-center gap-4 whitespace-nowrap">
        <span className="text-gray-300 text-lg">46,303+ happy customers</span>
        <span className="text-green-400">•</span>
        <div className="flex items-center gap-2 text-yellow-400">
          <span className="text-lg font-bold">Rated 4.9/5</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 text-red-400 font-bold whitespace-nowrap">
        <Clock className="w-5 h-5" />
        <span>Ends in <span className="tabular-nums tracking-wider text-lg">{timeLeft}</span></span>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-black/40 border-b border-white/5 py-[1.125rem] text-sm sm:text-base font-medium text-white overflow-hidden relative z-[60]">
      <div className="flex animate-marquee w-max">
        {[...Array(4)].map((_, i) => (
          <Content key={i} />
        ))}
      </div>
    </div>
  );
}
