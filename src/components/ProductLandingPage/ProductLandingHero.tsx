"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart } from "lucide-react";

interface ProductLandingHeroProps {
  product: {
    name: string;
    shortDescription: string;
    fullDescription: string;
    price: number;
    originalPrice: number;
    discount: number;
    images: string[];
    inStock: boolean;
    stockCount: number;
    category: string;
  };
}

export default function ProductLandingHero({
  product,
}: ProductLandingHeroProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const scrollToOrderForm = () => {
    const orderForm = document.getElementById("order-form");
    if (orderForm) {
      orderForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="aspect-square relative overflow-hidden rounded-xl">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {product.discount > 0 && (
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                    -{product.discount}%
                  </Badge>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-3 justify-center">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === selectedImage
                      ? "border-purple-600 scale-105"
                      : "border-gray-200 hover:border-purple-300"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-700 mb-3"
              >
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {product.shortDescription}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-gray-600">
                (4.8/5 based on 124 reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-purple-600">
                ৳{product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-2xl text-gray-500 line-through">
                  ৳{product.originalPrice}
                </span>
              )}
              {product.discount > 0 && (
                <Badge className="bg-green-100 text-green-700">
                  Save ৳{product.originalPrice - product.price}
                </Badge>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-4">
              {product.inStock ? (
                <span className="text-green-600 font-semibold flex items-center gap-2">
                  ✅ In Stock ({product.stockCount} available)
                </span>
              ) : (
                <span className="text-red-600 font-semibold">
                  ❌ Out of Stock
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={scrollToOrderForm}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-4 text-lg font-semibold"
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Order Now
              </Button>
              <Button
                variant="outline"
                className="px-6 py-4 border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-6 border-t">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span>
                Free Delivery
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span>
                Money Back Guarantee
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span>
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
