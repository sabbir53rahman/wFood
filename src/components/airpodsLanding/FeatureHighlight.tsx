"use client";
import React from "react";
import { motion } from "framer-motion";

const FeatureHighlight: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-pink-100 px-4 py-20 text-center">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-blue-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          আমাদের প্রোডাক্ট এবং অন্যান্য প্রোডাক্টের মধ্যে পার্থক্য কোথায়?
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          আমাদের পণ্যের মান, ANC, লুক, ফিনিশিং, ও সাউন্ড কোয়ালিটির দিক থেকে
          বাজারের অন্যান্য প্রোডাক্ট থেকে অনেক গুন উন্নত। আপনি দেখলেই বুঝতে
          পারবেন! আর যদি চিন্তা করেন - এটা কি আসলেই A1 কপি? তাহলে নিচের রিভিউ
          দেখুন, প্রমাণ নিজে পান।
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="bg-[#002b45] text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-[#00385d] hover:scale-105 transition-transform duration-300">
            হ্যাঁ অর্ডার করতে চাই
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeatureHighlight;
