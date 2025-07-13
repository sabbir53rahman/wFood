"use client";
import React from "react";
import { motion } from "framer-motion";

const OrderSection: React.FC = () => {
  return (
    <section className="bg-white px-4 py-14 text-center">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
          দ্রুত অর্ডার করতে নিচের ফর্মটি সঠিক ভাবে পূরণ করুন
        </h2>
        <p className="text-lg font-medium text-gray-800">
          ফোনে অর্ডার করতে কল করুন:{" "}
          <span className="font-bold text-blue-900">01819000000</span>
        </p>
      </motion.div>
    </section>
  );
};

export default OrderSection;
