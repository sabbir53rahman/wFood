import BenefitsSection from "@/components/Headphone/BenefitsSection";
import ContactSection from "@/components/Headphone/ContactSection";
import HeadphoneHeroSection from "@/components/Headphone/HeadphoneHeroSection";
import HeadphoneOrderFormSection from "@/components/Headphone/HeadphoneOrderFormSection";
import PricingSection from "@/components/Headphone/PricingSection";
import ProductShowcase from "@/components/Headphone/ProductShowcase";
import SpecificationsSection from "@/components/Headphone/SpecificationsSection";
import VideoSection from "@/components/Headphone/VideoSection";

export default function HeadphonesProductLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeadphoneHeroSection />
      <SpecificationsSection />
      <VideoSection />
      <ProductShowcase />
      <PricingSection />
      <BenefitsSection />
      <ContactSection />
      <HeadphoneOrderFormSection />
    </div>
  );
}
