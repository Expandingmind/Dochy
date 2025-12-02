import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { FAQSection } from "@/components/FAQSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <FAQSection />
      <SocialProofSection />
      <ContactSection />
    </>
  );
}

