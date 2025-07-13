import ProductFAQ from "@/components/ProductLandingPage/ProductFAQ";
import ProductFeatures from "@/components/ProductLandingPage/ProductFeatures";
import ProductLandingHero from "@/components/ProductLandingPage/ProductLandingHero";
import ProductOrderForm from "@/components/ProductLandingPage/ProductOrderForm";
import ProductSpecifications from "@/components/ProductLandingPage/ProductSpecifications";
import ProductTestimonials from "@/components/ProductLandingPage/ProductTestimonials";
import { notFound } from "next/navigation";

// Mock function to get product landing data
function getProductLandingData(slug: string) {
  const products = {
    "premium-basmati-rice-5kg": {
      id: "fp1",
      name: "Premium Basmati Rice – 5 kg",
      shortDescription:
        "Aromatic, long-grain basmati rice perfect for biryani and special occasions",
      fullDescription:
        "Experience the finest quality basmati rice sourced directly from the foothills of the Himalayas. Our Premium Basmati Rice features extra-long grains that elongate beautifully when cooked, releasing an irresistible aroma that transforms every meal into a special occasion.",
      category: "Grocery & Staples",
      price: 850,
      originalPrice: 950,
      discount: 10,
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600&text=Rice2",
        "/placeholder.svg?height=600&width=600&text=Rice3",
        "/placeholder.svg?height=600&width=600&text=Rice4",
      ],
      inStock: true,
      stockCount: 50,
      features: [
        {
          title: "Premium Quality",
          description:
            "Sourced from the finest farms in the Himalayan foothills",
          icon: "⭐",
        },
        {
          title: "Extra Long Grains",
          description:
            "Grains elongate up to twice their original size when cooked",
          icon: "📏",
        },
        {
          title: "Aromatic",
          description: "Natural fragrance that enhances every dish",
          icon: "🌸",
        },
        {
          title: "Perfect for Biryani",
          description: "Ideal texture and taste for traditional dishes",
          icon: "🍛",
        },
      ],
      specifications: {
        "Net Weight": "5 kg",
        "Grain Type": "Long Grain Basmati",
        Origin: "Himalayan Foothills",
        "Shelf Life": "12 months",
        Storage: "Store in cool, dry place",
        "Cooking Time": "15-20 minutes",
        "Protein Content": "7.5g per 100g",
        Carbohydrates: "78g per 100g",
      },
      benefits: [
        "Rich in essential nutrients and minerals",
        "Low glycemic index - suitable for diabetics",
        "Gluten-free and easy to digest",
        "Perfect for weight management",
        "Contains essential amino acids",
      ],
      testimonials: [
        {
          name: "Rashida Begum",
          location: "Dhaka",
          rating: 5,
          comment:
            "Best basmati rice I've ever used! The aroma is incredible and it cooks perfectly every time.",
          image: "/placeholder.svg?height=60&width=60",
        },
        {
          name: "Ahmed Hassan",
          location: "Chittagong",
          rating: 5,
          comment:
            "My family loves this rice. Perfect for our weekend biryani preparations!",
          image: "/placeholder.svg?height=60&width=60",
        },
      ],
      faqs: [
        {
          question: "How long does this rice take to cook?",
          answer:
            "Our Premium Basmati Rice typically takes 15-20 minutes to cook perfectly. For best results, soak for 30 minutes before cooking.",
        },
        {
          question: "Is this rice suitable for diabetics?",
          answer:
            "Yes, basmati rice has a lower glycemic index compared to regular rice, making it a better choice for diabetics when consumed in moderation.",
        },
        {
          question: "How should I store this rice?",
          answer:
            "Store in a cool, dry place in an airtight container. Properly stored, it will maintain its quality for up to 12 months.",
        },
      ],
    },
    "organic-coconut-oil-500ml": {
      id: "fp2",
      name: "Organic Coconut Oil – 500ml",
      shortDescription:
        "Pure, cold-pressed organic coconut oil for cooking and health benefits",
      fullDescription:
        "Our Organic Coconut Oil is extracted using traditional cold-pressing methods to preserve all the natural nutrients and flavor. Made from fresh coconuts sourced from organic farms, this oil is perfect for cooking, baking, and even skincare routines.",
      category: "Organic & Health Foods",
      price: 320,
      originalPrice: 380,
      discount: 15,
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600&text=Oil2",
        "/placeholder.svg?height=600&width=600&text=Oil3",
      ],
      inStock: true,
      stockCount: 30,
      features: [
        {
          title: "100% Organic",
          description: "Certified organic coconut oil with no additives",
          icon: "🌱",
        },
        {
          title: "Cold Pressed",
          description: "Traditional extraction method preserves nutrients",
          icon: "❄️",
        },
        {
          title: "Multi-Purpose",
          description: "Perfect for cooking, baking, and skincare",
          icon: "✨",
        },
        {
          title: "Rich in MCTs",
          description: "Contains healthy medium-chain triglycerides",
          icon: "💪",
        },
      ],
      specifications: {
        "Net Volume": "500ml",
        "Extraction Method": "Cold Pressed",
        Certification: "Organic Certified",
        Origin: "Organic Farms",
        "Shelf Life": "24 months",
        Storage: "Store at room temperature",
        "Smoke Point": "350°F (175°C)",
        "Saturated Fat": "86g per 100g",
      },
      benefits: [
        "Boosts metabolism and energy levels",
        "Supports heart health with good cholesterol",
        "Natural moisturizer for skin and hair",
        "Contains antioxidants and vitamins",
        "Antimicrobial and antifungal properties",
      ],
      testimonials: [
        {
          name: "Fatima Khan",
          location: "Sylhet",
          rating: 5,
          comment:
            "Amazing quality coconut oil! I use it for cooking and my skin feels so soft.",
          image: "/placeholder.svg?height=60&width=60",
        },
      ],
      faqs: [
        {
          question: "Is this oil suitable for high-heat cooking?",
          answer:
            "Yes, coconut oil has a smoke point of 350°F (175°C), making it suitable for most cooking methods including sautéing and baking.",
        },
        {
          question: "Can I use this oil on my skin?",
          answer:
            "Our organic coconut oil is pure and safe for topical use as a natural moisturizer.",
        },
      ],
    },
  };

  return products[slug as keyof typeof products];
}

export default function ProductLandingPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductLandingData(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ProductLandingHero product={product} />

      {/* Features Section */}
      <ProductFeatures
        features={product.features}
        benefits={product.benefits}
      />

      {/* Specifications */}
      <ProductSpecifications specifications={product.specifications} />

      {/* Order Form */}
      <ProductOrderForm product={product} />

      {/* Testimonials */}
      <ProductTestimonials testimonials={product.testimonials} />

      {/* FAQ */}
      <ProductFAQ faqs={product.faqs} />
    </div>
  );
}
