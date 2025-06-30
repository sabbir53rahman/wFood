import ProductSliderSection from "../ProductSliderSection/ProductSliderSection";


const featuredProducts = [
  {
    id: "fp1",
    name: "Premium Basmati Rice – 5 kg",
    category: "Grocery & Staples",
    price: 850,
    originalPrice: 950,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "fp2",
    name: "Organic Coconut Oil – 500ml",
    category: "Organic & Health Foods",
    price: 320,
    originalPrice: 380,
    discount: 15,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "fp3",
    name: "Fresh Mango Juice – 1 Liter",
    category: "Beverages",
    price: 220,
    originalPrice: 250,
    discount: 12,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "fp4",
    name: "Premium Cashew Nuts – 250g",
    category: "Snacks & Packaged Foods",
    price: 450,
    originalPrice: 500,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "fp5",
    name: "Organic Quinoa – 500g",
    category: "Organic & Health Foods",
    price: 680,
    originalPrice: 750,
    discount: 9,
    image: "/placeholder.svg?height=300&width=300",
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
