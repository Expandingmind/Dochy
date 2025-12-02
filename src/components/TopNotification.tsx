import { Star, Clock } from "lucide-react";

export function TopNotification() {
  return (
    <div className="w-full bg-black/40 border-b border-white/5 py-2 px-4 text-[10px] sm:text-xs font-medium text-white flex justify-between items-center overflow-hidden whitespace-nowrap">
      <div className="flex items-center gap-2 text-orange-400 animate-pulse">
        <span>🎄</span>
        <span className="hidden sm:inline">CHRISTMAS SALE LIVE – Limited Time Only</span>
        <span className="sm:hidden">XMAS SALE LIVE</span>
      </div>
      
      <div className="hidden md:flex items-center gap-2">
        <span className="text-gray-300">46,303+ happy customers</span>
        <span className="text-orange-400">•</span>
        <div className="flex items-center gap-1 text-yellow-400">
          <span>Rated 4.9/5</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3 h-3 fill-current" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-red-400">
        <Clock className="w-3 h-3" />
        <span>Ends in <span className="tabular-nums">02d 11h 32m</span></span>
      </div>
    </div>
  );
}

