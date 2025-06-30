import FeaturedProductsSection from "@/components/FeaturedProductsSection/FeaturedProductsSection";
import HeroBanner from "@/components/Hero/Hero";
import ServicesSection from "@/components/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <>
      <div>
        <HeroBanner />
        <FeaturedProductsSection />
        <FeaturedProductsSection />
        <FeaturedProductsSection />
        <FeaturedProductsSection />
        <ServicesSection />
      </div>
    </>
  );
}
