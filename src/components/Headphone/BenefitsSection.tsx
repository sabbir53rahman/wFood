"use client";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function BenefitsSection() {
  const benefits = [
    "সম্পূর্ণ ওয়ারলেস এবং ব্লুটুথ, কোন তারের ঝামেলা নেই",
    "দীর্ঘ ব্যাটারি লাইফ, একবার চার্জে ৪০ ঘন্টা ব্যবহার",
    "আরামদায়ক ও হালকা ডিজাইন এবং দীর্ঘক্ষণ ব্যবহার",
    "আমাদের প্রোডাক্ট অরিজিনাল এবং কোন নকল পণ্য নয় ১০০% গ্যারান্টি",
  ];

  return (
    <motion.section
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          আমাদের উপার কেন আমরা সেরা?
        </motion.h2>

        <div className="space-y-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 text-lg">{benefit}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: "inline-block" }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 text-lg rounded-md">
              অর্ডার করুন
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
