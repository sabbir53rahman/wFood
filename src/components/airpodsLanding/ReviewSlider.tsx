"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ReviewSlider: React.FC = () => {
  const reviews = [
    "/review-1.jpg",
    "/review-2.jpg",
    "/review-3.jpg",
    "/review-4.jpg",
  ];

  return (
    <section className="bg-pink-100 px-4 py-14 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-xl font-bold text-blue-900 mb-6">
          কাস্টমার রিভিউ দেখলেই বুঝবেন প্রোডাক্টের কোয়ালিটি সব থেকে সেরা
        </h2>

        <div className="flex overflow-x-auto gap-6 snap-x px-4">
          {reviews.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`review-${idx + 1}`}
              height={250}
              width={275}
              className="w-72 min-w-[16rem] h-80 object-cover rounded shadow snap-start"
            />
          ))}
        </div>

        <button className="bg-[#002b45] text-white px-6 py-2 rounded mt-8 font-semibold hover:bg-[#00385d]">
          হ্যাঁ অর্ডার করতে চাই
        </button>
      </motion.div>
    </section>
  );
};

export default ReviewSlider;
