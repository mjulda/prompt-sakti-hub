import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { Products } from "@/components/Products";
import { Features } from "@/components/Features";
import { Bonus } from "@/components/Bonus";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PainPoints />
      <Products />
      <Features />
      <Bonus />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
