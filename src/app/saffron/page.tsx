import SaffronBenefitsSection from "@/components/Saffron/SaffronBenefitsSection";
import SaffronHeroSection from "@/components/Saffron/SaffronHeroSection";
import SaffronIngredientsSection from "@/components/Saffron/SaffronIngredientsSection";
import SaffronOrderFormSection from "@/components/Saffron/SaffronOrderFormSection";
import SaffronTestimonialsSection from "@/components/Saffron/SaffronTestimonialsSection";
import SaffronWhyChooseSection from "@/components/Saffron/SaffronWhyChooseSection";


export default function SaffronProductLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SaffronHeroSection />
      <SaffronIngredientsSection />
      <SaffronBenefitsSection />
      <SaffronTestimonialsSection />
      <SaffronWhyChooseSection />
      <SaffronOrderFormSection />
    </div>
  );
}
