"use client";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ShirtBenefitsSection() {
  const benefits = [
    "আমি আপনাদের কাছে বলতে চাই",
    "আমাদের শার্ট খুব ভাল",
    "দাম খুব কম এবং কোয়ালিটি ভাল",
    "আমাদের শার্ট দেখতে খুব সুন্দর",
    "আমাদের শার্ট পরতে খুব আরাম",
    "আমাদের শার্ট খুব টেকসই",
    "আমাদের শার্ট রঙ উঠে না",
  ];

  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-amber-50 to-yellow-100 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative blurred shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200 opacity-30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-300 opacity-30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-800 mb-14 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          আমাদের শার্টের <span className="text-red-600">বিশেষ সুবিধা</span>{" "}
          সম্পর্কে জানুন
        </motion.h2>

        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 bg-white rounded-xl shadow-md p-4 transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-700 text-lg font-medium">
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
