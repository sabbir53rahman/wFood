"use client";

import Image from "next/image";
import banner1 from "@/assets/banner-item-1.webp";
import banner2 from "@/assets/banner-item-2.webp";
import banner3 from "@/assets/banner-item-3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: banner1,
    alt: "Banner Image 1",
  },
  {
    id: 2,
    image: banner2,
    alt: "Banner Image 2",
  },
  {
    id: 3,
    image: banner3,
    alt: "Banner Image 3",
  },
];

export default function HeroBanner() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={slide.id === 1}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.3);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }

        .hero-swiper .swiper-button-next:after,
        .hero-swiper .swiper-button-prev:after {
          font-size: 20px;
        }

        .hero-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          width: 12px;
          height: 12px;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          background: white;
        }

        .hero-swiper .swiper-pagination {
          bottom: 20px;
        }
      `}</style>
    </section>
  );
}
