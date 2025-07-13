import ShirtBenefitsSection from "@/components/Shirt/ShirtBenefitsSection";
import ShirtCustomerReviews from "@/components/Shirt/ShirtCustomerReviews";
import ShirtHeroSection from "@/components/Shirt/ShirtHeroSection";
import ShirtOrderFormSection from "@/components/Shirt/ShirtOrderFormSection";
import ShirtProductsGrid from "@/components/Shirt/ShirtProductsGrid";
import SizeCharts from "@/components/Shirt/SizeCharts";


export default function ShirtsProductLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <ShirtHeroSection />
      <ShirtProductsGrid />
      <SizeCharts />
      <ShirtBenefitsSection />
      <ShirtCustomerReviews />
      <ShirtOrderFormSection />
    </div>
  );
}
