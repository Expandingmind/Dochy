"use client";

import { useCartStore } from "@/lib/store";
import Link from "next/link";
import { Trash2, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function CartPage() {
  const { items, removeItem, clearCart } = useCartStore();
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="pt-32 pb-20 container mx-auto px-4 min-h-[60vh]">
      <h1 className="text-4xl font-black text-white mb-8 uppercase tracking-tight">Your Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-12 border border-white/10 rounded-2xl bg-white/5">
          <p className="text-gray-400 mb-6 text-lg">Your cart is empty.</p>
          <Link 
            href="/#catalog" 
            className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors"
          >
            Browse Catalog
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white/5 border border-white/10 p-4 rounded-xl items-center">
                <div className="w-20 h-20 bg-gray-800 rounded-lg flex-shrink-0 flex items-center justify-center text-2xl">
                   {item.type === 'bundle' ? '📦' : '⚡'}
                </div>
                <div className="flex-grow">
                  <h3 className="text-white font-bold">{item.name}</h3>
                  <p className="text-primary font-bold">${item.price}</p>
                </div>
                <div className="flex items-center gap-4">
                   <span className="text-gray-400 text-sm">Qty: {item.quantity}</span>
                   <button 
                     onClick={() => removeItem(item.id)}
                     className="p-2 hover:bg-red-500/20 hover:text-red-500 text-gray-500 rounded-full transition-colors"
                   >
                     <Trash2 className="w-5 h-5" />
                   </button>
                </div>
              </div>
            ))}
             
             <button 
                onClick={() => clearCart()}
                className="text-sm text-red-400 hover:text-red-300 underline"
             >
                Clear Cart
             </button>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-32">
              <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
              
              <div className="flex justify-between mb-4 text-gray-400">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-6 text-lg font-bold text-white border-t border-white/10 pt-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                onClick={() => setShowCheckoutModal(true)}
                className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center justify-center gap-2"
              >
                Checkout <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal Placeholder */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowCheckoutModal(false)} />
          <div className="bg-[#0a0a0f] border border-white/10 p-8 rounded-2xl relative z-10 max-w-md w-full text-center shadow-[0_0_50px_rgba(168,85,247,0.2)] animate-in fade-in zoom-in duration-300">
             <h3 className="text-2xl font-black text-white mb-4">Checkout Coming Soon</h3>
             <p className="text-gray-400 mb-6">
               We are currently upgrading our payment systems. Join the Inner Circle to get early access.
             </p>
             <button
               onClick={() => setShowCheckoutModal(false)}
               className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors"
             >
               Close
             </button>
          </div>
        </div>
      )}
    </div>
  );
}

