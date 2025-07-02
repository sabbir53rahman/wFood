import ProductSliderSection from "../ProductSliderSection/ProductSliderSection";
import product1 from "@/assets/product1.webp";
import product2 from "@/assets/product2.webp";
import product3 from "@/assets/product3.webp";

const featuredProducts = [
  {
    id: "fp1",
    name: "Premium Basmati Rice – 5 kg",
    category: "Grocery & Staples",
    price: 850,
    originalPrice: 950,
    discount: 10,
    image: product1,
  },
  {
    id: "fp2",
    name: "Organic Coconut Oil – 500ml",
    category: "Organic & Health Foods",
    price: 320,
    originalPrice: 380,
    discount: 15,
    image: product2,
  },
  {
    id: "fp3",
    name: "Fresh Mango Juice – 1 Liter",
    category: "Beverages",
    price: 220,
    originalPrice: 250,
    discount: 12,
    image: product3,
  },
  {
    id: "fp4",
    name: "Premium Cashew Nuts – 250g",
    category: "Snacks & Packaged Foods",
    price: 450,
    originalPrice: 500,
    discount: 10,
    image: product1,
  },
  {
    id: "fp5",
    name: "Organic Quinoa – 500g",
    category: "Organic & Health Foods",
    price: 680,
    originalPrice: 750,
    discount: 9,
    image: product2,
  },
];

export default function FeaturedProductsSection() {
  return (
    <ProductSliderSection
      subtitle="Featured"
      title="Featured Products"
      products={featuredProducts}
      slidesPerView={{ mobile: 1, tablet: 2, desktop: 4 }}
    />
  );
}
