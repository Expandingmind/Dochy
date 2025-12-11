"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Download, ArrowLeft, Loader2 } from "lucide-react";
import { products } from "@/lib/products";
import { useCartStore } from "@/lib/store";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [purchasedProducts, setPurchasedProducts] = useState<typeof products>([]);
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    // Clear cart on successful purchase
    if (sessionId) {
      clearCart();
      
      // Get products from localStorage
      const storedProducts = localStorage.getItem("pending_purchase");
      if (storedProducts) {
        const productIds = JSON.parse(storedProducts) as string[];
        const purchased = products.filter(p => productIds.includes(p.id));
        setPurchasedProducts(purchased);
        localStorage.removeItem("pending_purchase");
      }
    }
  }, [sessionId, clearCart]);

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            Payment Successful!
          </h1>
          <p className="text-gray-400 text-lg">
            Thank you for your purchase. Your digital products are ready below.
          </p>
        </div>

        {/* Download Section */}
        <div className="bg-[#0a0a0f] border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Download className="w-5 h-5 text-purple-500" />
            Your Downloads
          </h2>

          {purchasedProducts.length > 0 ? (
            <div className="space-y-4">
              {purchasedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5"
                >
                  <div>
                    <h3 className="text-white font-bold">{product.name}</h3>
                    <p className="text-gray-500 text-sm">{product.category}</p>
                  </div>
                  <button
                    className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                    onClick={() => {
                      alert(`Access details for ${product.name} will be sent to your email. For demo: Check your Stripe dashboard.`);
                    }}
                  >
                    Access
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400 mb-4">
                Your purchase has been confirmed!
              </p>
              <p className="text-gray-500 text-sm">
                Check your email for access details, or contact support if you need assistance.
              </p>
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 mb-8">
          <p className="text-purple-300 text-sm text-center">
            💡 <strong>Tip:</strong> Save this page or bookmark it for easy access to your purchases.
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-10 h-10 text-purple-500 animate-spin mx-auto mb-4" />
        <p className="text-gray-400">Loading your purchase...</p>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <SuccessContent />
    </Suspense>
  );
}
