import Footer from "@/components/airpodsLanding/airpodFooter";
import ContactSection from "@/components/ThreePiceLanding/Contact";
import FeaturesListSection from "@/components/ThreePiceLanding/FeaturesListSection";
import HeroSection from "@/components/ThreePiceLanding/HeroSection";
import OrderFormSection from "@/components/ThreePiceLanding/OrderFormSection";
import PinkFeaturesSection from "@/components/ThreePiceLanding/PinkFeaturesSection";
import ThreePiceHeader from "@/components/ThreePiceLanding/ThreePiceHeader";

export default function BengaliLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <ThreePiceHeader />
      <HeroSection />
      <PinkFeaturesSection />
      <ContactSection />
      <FeaturesListSection />
      <OrderFormSection />
      <Footer />
    </div>
  );
}
