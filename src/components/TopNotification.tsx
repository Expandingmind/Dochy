"use client";

import { Star } from "lucide-react";
import { useState, useEffect } from "react";

export function TopNotification() {
  const [shoppingNow, setShoppingNow] = useState(71);
  const [timeLeft, setTimeLeft] = useState("");
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    // Simulate live shoppers count
    const interval = setInterval(() => {
      setShoppingNow(prev => {
        const change = Math.floor(Math.random() * 11) - 5; // -5 to +5
        return Math.max(50, Math.min(150, prev + change));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const targetDate = new Date(`December 24, ${currentYear} 00:00:00`);
      
      if (now.getTime() > targetDate.getTime()) {
        setIsEnded(true);
        return "ENDED";
      }

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return `${String(days).padStart(2, "0")}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
      }
      setIsEnded(true);
      return "ENDED";
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const Content = () => (
    <div className="flex items-center gap-8 whitespace-nowrap">
      {/* Rating */}
      <div className="flex items-center gap-2">
        <span className="font-bold text-sm">Rated 4.98/5</span>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>

      {/* Best Vendors */}
      <div className="flex items-center gap-2 text-yellow-500">
        <span>🏆</span>
        <span className="font-bold text-sm">Best Vendors In The Game</span>
        <span>🏆</span>
      </div>

      {/* Shopping Now */}
      <div className="flex items-center gap-2 text-sm">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span><span className="text-green-400 font-bold">{shoppingNow}</span> shopping now</span>
      </div>

      {/* Sale Live */}
      <div className="flex items-center gap-2 text-sm">
        <span>🎄</span>
        <span className="text-green-400 font-bold">CHRISTMAS SALE LIVE</span>
        <span>🎄</span>
      </div>

      {/* Countdown */}
      <div className="flex items-center gap-2 text-sm">
        <span>Ends Dec 24th:</span>
        {isEnded ? (
          <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">ENDED</span>
        ) : (
          <span className="bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">{timeLeft}</span>
        )}
      </div>

      {/* Happy Customers */}
      <div className="flex items-center gap-2 text-sm">
        <span className="w-2 h-2 rounded-full bg-green-500" />
        <span><span className="text-green-400 font-bold">46,303</span> happy customers</span>
      </div>
    </div>
  );

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-black border-b border-white/10 py-3.5 text-sm font-medium text-white overflow-hidden z-[100]">
      <div className="flex animate-marquee w-max">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="mx-6">
            <Content />
          </div>
        ))}
      </div>
    </div>
  );
}
