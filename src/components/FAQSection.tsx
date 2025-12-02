"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What does buying a supplier get me?",
    answer: "You get instant access to a curated list of verified suppliers for specific products. This includes their contact information and website links so you can buy directly from the source at wholesale prices."
  },
  {
    question: "How will I receive access to the supplier?",
    answer: "Access is delivered instantly via email immediately after purchase. You'll receive a digital file or link to view your vendors."
  },
  {
    question: "How long does the supplier take to ship?",
    answer: "Shipping times vary by supplier, but most offer expedited shipping options. We vet suppliers to ensure they meet reasonable shipping standards."
  },
  {
    question: "Do the suppliers ship worldwide?",
    answer: "Yes, most of our suppliers ship worldwide. We specify shipping regions in the detailed vendor info if there are any restrictions."
  },
  {
    question: "How much do the suppliers charge for a product?",
    answer: "Prices vary by niche and quantity, but you can generally expect margins of 2x-5x when reselling. We only select vendors with competitive pricing."
  },
  {
    question: "What if I can't find my order?",
    answer: "Check your spam folder first. If you still can't find it, contact our support team at support@dochyvendors.com with your order details."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-xl font-bold text-white text-center mb-10 tracking-wide">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#0f0f13] rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-sm font-bold text-gray-200">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-primary/70 transition-transform duration-300",
                    openIndex === i ? "rotate-180 text-primary" : "rotate-0"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === i ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="px-4 pb-4 text-gray-400 text-xs leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
