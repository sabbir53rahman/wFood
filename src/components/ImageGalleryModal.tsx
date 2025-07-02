"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryModalProps {
  images: (string | StaticImageData)[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export default function ImageGalleryModal({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}: ImageGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      role="dialog"
      aria-modal="true"
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-purple-400 transition-colors"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </>
      )}

      {/* Image */}
      <div className="relative w-full h-full max-w-4xl max-h-[85vh] p-4 animate-fadeInScale">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Image ${currentIndex + 1}`}
          fill
          className="object-contain rounded-xl shadow-xl"
          priority
        />

        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-1 rounded-full text-xs">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 overflow-x-auto px-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => goToImage(i)}
              className={`relative w-14 h-14 rounded overflow-hidden transition-all ${
                i === currentIndex
                  ? " scale-110"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Click outside */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
        aria-label="Close modal"
      />
    </div>
  );
}
