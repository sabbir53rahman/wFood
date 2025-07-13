"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function PricingSection() {
  const pricingOptions = [
    { quantity: "১টি হেডফোন", price: "১৫০০ টাকা", originalPrice: "২০০০" },
    { quantity: "২টি হেডফোন", price: "২৮০০ টাকা", originalPrice: "৪০০০" },
    { quantity: "৩টি হেডফোন", price: "৪০০০ টাকা", originalPrice: "৬০০০" },
    { quantity: "৪টি হেডফোন", price: "৫০০০ টাকা", originalPrice: "৮০০০" },
    { quantity: "৫টি হেডফোন", price: "৬০০০ টাকা", originalPrice: "১০০০০" },
    { quantity: "৬টি হেডফোন", price: "৭০০০ টাকা", originalPrice: "১২০০০" },
  ];

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          হোকো W35 ওয়ারলেস হেডফোনের অফারের দাম কোন আপনার ?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              className="bg-white border-2 border-green-200 rounded-lg p-6 text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: "#16a34a" }}
            >
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{option.quantity}</h3>
              <div className="mb-2">
                <span className="text-gray-500 line-through text-sm">
                  {option.originalPrice}
                </span>
              </div>
              <div className="text-green-600 font-bold text-xl">
                {option.price}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: "" }}
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
