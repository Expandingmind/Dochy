import { Hero } from "@/components/Hero";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FAQSection } from "@/components/FAQSection";
import { ProofSection, CTASection } from "@/components/ProofSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FAQSection />
      <ProofSection />
      <CTASection />
      <ReviewsSection />
    </>
  );
}
