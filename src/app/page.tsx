import CategoriesSection from "@/components/Categories/categories";
import FeaturedProductsSection from "@/components/FeaturedProductsSection/FeaturedProductsSection";
import HeroBanner from "@/components/Hero/Hero";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ShopSection from "@/components/ServicesSection/ShopSection";

export default function Home() {
  return (
    <>
      <div>
        <HeroBanner />
        <CategoriesSection />
        <FeaturedProductsSection />
        <FeaturedProductsSection />
        <ShopSection />
        <FeaturedProductsSection />
        <FeaturedProductsSection />
        <ServicesSection />
      </div>
    </>
  );
}
