"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Leaf, Star, Truck } from "lucide-react";

export default function SaffronWhyChooseSection() {
  return (
    <motion.section
      className="py-20 relative overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative blur shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-amber-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          আমাদের কাছে থেকে কেন নিবেন?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <Shield className="w-10 h-10" />,
              title: "খাঁটি ও নিরাপদ",
              color: "bg-green-100",
            },
            {
              icon: <Leaf className="w-10 h-10" />,
              title: "প্রাকৃতিক উপাদান",
              color: "bg-emerald-100",
            },
            {
              icon: <Star className="w-10 h-10" />,
              title: "উচ্চমানের স্বাদ",
              color: "bg-yellow-100",
            },
            {
              icon: <Truck className="w-10 h-10" />,
              title: "দ্রুত ডেলিভারি",
              color: "bg-orange-100",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`p-6 rounded-xl shadow-md hover:shadow-xl transition ${item.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="flex justify-center mb-4 text-amber-600">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative aspect-video max-w-3xl mx-auto mb-14 rounded-xl overflow-hidden group shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-amber-300 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
              <div className="w-0 h-0 border-l-[20px] border-l-amber-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ display: "inline-block" }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 text-lg rounded-full shadow-md">
              অর্ডার করুন এখনি
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
