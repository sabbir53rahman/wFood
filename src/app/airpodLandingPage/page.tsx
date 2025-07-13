import Footer from "@/components/airpodsLanding/airpodFooter";
import CheckoutForm from "@/components/airpodsLanding/CheckoutForm";
import FeatureHighlight from "@/components/airpodsLanding/FeatureHighlight";
import HeroSection from "@/components/airpodsLanding/HeroSection";
import OrderSection from "@/components/airpodsLanding/OrderSection";
import ReviewSlider from "@/components/airpodsLanding/ReviewSlider";
import SupportSection from "@/components/airpodsLanding/SupportSection";
import WhyChooseSection from "@/components/airpodsLanding/WhyChooseSection";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <HeroSection />
      <WhyChooseSection />
      <FeatureHighlight />
      <SupportSection />
      <ReviewSlider />
      <OrderSection />
      <CheckoutForm />
      <Footer />
    </main>
  );
}
