"use client";
import React from "react";
import { motion } from "framer-motion";

const SupportSection: React.FC = () => {
  return (
    <section className="bg-white px-4 py-14 text-center">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl md:text-2xl font-bold text-blue-900">
          আমাদের মেসেঞ্জারে 24 ঘণ্টায় প্রতিনিধি একটিভ থাকে — কোন সমস্যা হলে
          সাথে সাথেই মেসেঞ্জারে মেসেজ করবেন না
        </h2>

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-5 rounded-md font-medium"
          >
            ফেসবুক
          </a>
          <a
            href="https://wa.me/01819000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-800 text-white py-2 px-5 rounded-md font-medium"
          >
            হোয়াটসঅ্যাপ
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default SupportSection;
