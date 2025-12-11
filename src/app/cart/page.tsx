"use client";

import { useCartStore } from "@/lib/store";
import Link from "next/link";
import { Trash2, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";

export default function CartPage() {
  const { items, removeItem, clearCart } = useCartStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Store product IDs for success page
      localStorage.setItem(
        "pending_purchase",
        JSON.stringify(items.map((item) => item.id))
      );

      // Create checkout session
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: items.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError("Failed to start checkout. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-4 min-h-[60vh]">
      <h1 className="text-4xl font-black text-white mb-8 uppercase tracking-tight">Your Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-12 border border-white/10 rounded-2xl bg-white/5">
          <p className="text-gray-400 mb-6 text-lg">Your cart is empty.</p>
          <Link 
            href="/items" 
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

              {error && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <button
                onClick={handleCheckout}
                disabled={isLoading}
                className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Checkout <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Secure payment badge */}
              <div className="mt-4 flex items-center justify-center gap-2 text-gray-500 text-xs">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Secure checkout powered by Stripe
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
