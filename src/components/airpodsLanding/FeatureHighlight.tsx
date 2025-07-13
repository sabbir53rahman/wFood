"use client";
import React from "react";
import { motion } from "framer-motion";

const FeatureHighlight: React.FC = () => {
  return (
    <section className="bg-pink-100 px-4 py-14 text-center">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl md:text-2xl font-bold text-blue-900">
          আমাদের প্রোডাক্ট এবং অন্যান্য প্রোডাক্টের মধ্যে পার্থক্য কোথায়?
        </h2>
        <p className="mt-4 text-base text-gray-700">
          আমাদের পণ্যের মান, ANC, লুক, ফিনিশিং, ও সাউন্ড কোয়ালিটির দিক থেকে
          বাজারের অন্যান্য প্রোডাক্ট থেকে অনেক গুন উন্নত। আপনি দেখলেই বুঝতে
          পারবেন! আর যদি চিন্তা করেন - এটা কি আসলেই A1 কপি? তাহলে নিচের রিভিউ
          দেখুন, প্রমাণ নিজে পান।
        </p>

        <button className="bg-[#002b45] mt-6 text-white px-6 py-2 rounded font-semibold hover:bg-[#00385d]">
          হ্যাঁ অর্ডার করতে চাই
        </button>
      </motion.div>
    </section>
  );
};

export default FeatureHighlight;
