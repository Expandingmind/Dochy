"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What does buying a vendor list get me?",
    answer: "You get instant access to a curated list of verified suppliers for specific products. This includes their contact information and website links so you can buy directly from the source at wholesale prices."
  },
  {
    question: "How do I receive access?",
    answer: "Access is delivered instantly via email immediately after purchase. You'll receive a digital file or link to view your vendors."
  },
  {
    question: "Are the suppliers worldwide?",
    answer: "Yes, most of our suppliers ship worldwide. We specify shipping regions in the detailed vendor info if there are any restrictions."
  },
  {
    question: "How much do suppliers charge per product?",
    answer: "Prices vary by niche and quantity, but you can generally expect margins of 2x-5x when reselling. We only select vendors with competitive pricing."
  },
  {
    question: "Can beginners use this?",
    answer: "Absolutely. Our lists are designed for people just starting their reselling journey. We cut out the hard work of finding reliable suppliers."
  },
  {
    question: "What if I can't find my order?",
    answer: "Check your spam folder first. If you still can't find it, contact our support team at support@dochyvendors.com with your order details."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white/5">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12 uppercase">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-lg bg-black/20 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-white">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-primary transition-transform duration-300",
                    openIndex === i ? "rotate-180" : "rotate-0"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="p-5 pt-0 text-gray-400 text-sm leading-relaxed">
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

