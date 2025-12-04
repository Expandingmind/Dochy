import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FAQSection } from "@/components/FAQSection";
import { ProofSection, CTASection } from "@/components/ProofSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <ReviewsSection />
      <FAQSection />
      <ProofSection />
      <CTASection />
    </>
  );
}
