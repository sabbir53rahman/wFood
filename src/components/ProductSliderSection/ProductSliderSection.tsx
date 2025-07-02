"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../ProductCard/ProductCard";
import { StaticImageData } from "next/image";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string | StaticImageData;
}

interface ProductSliderSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  slidesPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

export default function ProductSliderSection({
  title,
  subtitle,
  products,
  slidesPerView = { mobile: 1, tablet: 2, desktop: 5 },
}: ProductSliderSectionProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-start gap-3">
            <div className="w-1 h-16 bg-purple-600 rounded-full"></div>
            <div>
              <p className="text-purple-600 font-medium text-sm mb-1">
                {subtitle}
              </p>
              <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              ref={prevRef}
              className="w-12 h-12 rounded-full bg-gray-400 hover:bg-gray-500 text-white flex items-center justify-center transition-colors duration-200"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              ref={nextRef}
              className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center transition-colors duration-200"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={slidesPerView.mobile}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            breakpoints={{
              640: {
                slidesPerView: slidesPerView.tablet,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: slidesPerView.desktop,
                spaceBetween: 24,
              },
            }}
            className="product-slider"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .product-slider .swiper-button-next,
        .product-slider .swiper-button-prev {
          display: none;
        }
      `}</style>
    </section>
  );
}
