"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function LegalModal({ isOpen, onClose, title, children }: ModalProps) {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => setShow(false), 300);
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center px-4 transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0"
      )}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      {/* Modal Content */}
      <div 
        className={cn(
          "bg-[#0a0a0f] border border-white/10 w-full max-w-2xl max-h-[80vh] rounded-2xl relative z-10 flex flex-col shadow-2xl transform transition-all duration-300",
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-anton uppercase tracking-wide text-white">{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar text-gray-300 text-sm leading-relaxed space-y-4">
          {children}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 bg-[#0f0f13] rounded-b-2xl">
          <button
            onClick={onClose}
            className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-colors uppercase tracking-wider text-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

