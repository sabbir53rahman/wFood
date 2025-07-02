"use client";

import { useState } from "react";
import {
  ChevronRight,
  Home,
  Facebook,
  Twitter,
  MessageCircle,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import product1 from "@/assets/product1.webp";
import product2 from "@/assets/product2.webp";
import product3 from "@/assets/product3.webp";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewForm, { Review } from "@/components/review/ReviewForm";
import ReviewList from "@/components/review/ReviewList";
import ImageGalleryModal from "../../../components/ImageGalleryModal";

function getProductIdFromSlug(slug: string): string {
  return slug.split("-").at(-1) || "1";
}

const mockReviews: Review[] = [
  {
    id: "1",
    productId: "1",
    name: "Ahmed Rahman",
    email: "ahmed@example.com",
    message:
      "Excellent quality rice! The aroma is amazing and it cooks perfectly. Highly recommended for biryani and pulao.",
    rating: 5,
    date: "2024-12-15T10:30:00Z",
  },
  {
    id: "2",
    productId: "1",
    name: "Fatima Khan",
    email: "fatima@example.com",
    message:
      "Good quality rice, but the packaging could be better. Overall satisfied with the purchase.",
    rating: 4,
    date: "2024-12-10T14:20:00Z",
  },
  {
    id: "3",
    productId: "1",
    name: "Mohammad Ali",
    email: "mohammad@example.com",
    message:
      "Perfect for making traditional dishes. The rice grains are long and aromatic. Will buy again!",
    rating: 5,
    date: "2024-12-05T09:15:00Z",
  },
];

const relatedProducts = [
  {
    id: "2",
    name: "Premium Red Lentils (Masoor...",
    price: 120,
    image: "/placeholder.svg?height=80&width=80",
  },
];

const categories = [
  { name: "Grocery & Staples", icon: "🏪" },
  { name: "Snacks & Packaged Foods", icon: "🍿" },
  { name: "Beverages", icon: "🥤" },
  { name: "Dairy & Eggs", icon: "🥛" },
  { name: "Fruits & Vegetables", icon: "🍎" },
  { name: "Meat & Seafood", icon: "🐟" },
  { name: "Bakery & Cakes", icon: "🍰" },
  { name: "Organic & Health Foods", icon: "🌱" },
];

function getProductData(id: string) {
  const products = {
    "1": {
      id: "1",
      name: "ACI Pure Aromatic Chinigura Rice – 2 kg",
      category: "Grocery & Staples",
      price: 260,
      originalPrice: 300,
      discount: 13,
      images: [product1, product2, product3, product1], // ✅ use imported images
      total: 100,
      sold: 21,
      inStock: true,
      description:
        "Enjoy the rich aroma and exceptional quality of ACI Pure Chinigura Rice, a staple in Bangladeshi households.",
      fullDescription:
        "Perfect for biryani, pulao, khichuri or plain steamed rice. Finely milled rice delivers both taste and fragrance.",
      sizes: ["1kg - 2kg"],
      colors: [],
    },
    "2": {
      id: "2",
      name: "Premium Red Lentils (Masoor Dal) – 1 kg",
      category: "Grocery & Staples",
      price: 120,
      originalPrice: 130,
      discount: 8,
      images: [product2, product3, product1], // can mix as needed
      total: 50,
      sold: 15,
      inStock: true,
      description: "Premium quality red lentils perfect for daily cooking.",
      fullDescription:
        "Rich in protein and perfect for preparing dal, curry and other traditional dishes.",
      sizes: ["500g", "1kg"],
      colors: [],
    },
  };
  return products[id as keyof typeof products] || products["1"];
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const productId = getProductIdFromSlug(params.slug);
  const product = getProductData(productId);
  const [reviews, setReviews] = useState(mockReviews);

  // Modal for gallery
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleReviewSubmit = (newReview: Review) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  if (!product) return <div>Product not found</div>;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Home className="w-4 h-4" />
          <Link href="/" className="hover:text-purple-600">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/products" className="hover:text-purple-600">
            {product.category}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-9">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Images */}
              <div>
                <div
                  className="relative w-full aspect-square cursor-pointer rounded-lg overflow-hidden border"
                  onClick={() => {
                    setIsModalOpen(true);
                    setSelectedImageIndex(0);
                  }}
                >
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 flex gap-2">
                  {product.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative w-16 h-16 cursor-pointer rounded-md overflow-hidden border hover:border-purple-600"
                      onClick={() => {
                        setIsModalOpen(true);
                        setSelectedImageIndex(i);
                      }}
                    >
                      <Image
                        src={img}
                        alt={`Thumb ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product details */}
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-gray-600">Category:</span>
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-700"
                  >
                    {product.category}
                  </Badge>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-purple-600">
                    ৳{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      ৳{product.originalPrice}
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex gap-4">
                    <span className="text-gray-600">
                      Total:{" "}
                      <span className="font-semibold">{product.total}</span>
                    </span>
                    <span className="text-gray-600">
                      Sold:{" "}
                      <span className="font-semibold">{product.sold}</span>
                    </span>
                  </div>
                  {product.inStock && (
                    <span className="text-green-600 font-semibold">
                      In Stock
                    </span>
                  )}
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {product.sizes.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-700">
                      Size:
                    </span>
                    <div className="flex gap-2">
                      {product.sizes.map((size) => (
                        <Button
                          key={size}
                          variant="default"
                          className="bg-purple-600 hover:bg-purple-700 text-white"
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3">
                    Add To Cart
                  </Button>
                  <Button className="flex-1 bg-black hover:bg-gray-800 text-white py-3">
                    Buy Now
                  </Button>
                </div>

                <div className="space-y-3">
                  <span className="text-sm font-medium text-gray-700">
                    Share Social Media:-
                  </span>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger
                  value="description"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="additional"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  Additional Info
                </TabsTrigger>
                <TabsTrigger
                  value="review"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  Review ({reviews.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.fullDescription}
                </p>
              </TabsContent>

              <TabsContent value="additional" className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Additional Information
                </h3>
                <div className="space-y-2">
                  <div className="flex gap-4">
                    <span className="font-medium text-gray-700 w-24">
                      Weight:
                    </span>
                    <span className="text-gray-600">2 kg</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-medium text-gray-700 w-24">
                      Brand:
                    </span>
                    <span className="text-gray-600">ACI Pure</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-medium text-gray-700 w-24">
                      Origin:
                    </span>
                    <span className="text-gray-600">Bangladesh</span>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="review" className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">
                    Customer Reviews
                  </h3>
                  <ReviewList reviews={reviews} />
                </div>
                <ReviewForm
                  productId={product.id}
                  onReviewSubmit={handleReviewSubmit}
                />
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Related Products
                </h3>
                <div className="w-8 h-0.5 bg-purple-600"></div>
              </div>
              <div className="space-y-4">
                {relatedProducts.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-800 mb-1">
                        {item.name}
                      </h4>
                      <span className="text-purple-600 font-bold">
                        ৳ {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <h3 className="text-xl font-bold text-gray-800">Categories</h3>
                <div className="w-8 h-0.5 bg-purple-600"></div>
              </div>
              <div className="space-y-4">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={`/products?category=${encodeURIComponent(cat.name)}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    <span className="text-xl">{cat.icon}</span>
                    <span className="text-sm font-medium">{cat.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ImageGalleryModal
        images={product.images}
        isOpen={isModalOpen}
        initialIndex={selectedImageIndex}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
