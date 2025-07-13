"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      className="container mx-auto px-4 text-center mb-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-8">
        সম্পূর্ণ আউটফিট প্রিন্ট কর আনহিজ ও পিস
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <motion.div
          className="bg-gray-100 p-4 rounded-lg"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src="/placeholder.svg?height=400&width=300"
            alt="Traditional outfit 1"
            width={300}
            height={400}
            className="mx-auto rounded-lg"
          />
        </motion.div>
        <motion.div
          className="bg-gray-100 p-4 rounded-lg"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src="/placeholder.svg?height=400&width=300"
            alt="Traditional outfit 2"
            width={300}
            height={400}
            className="mx-auto rounded-lg"
          />
        </motion.div>
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed">
        আজকের রাতে দিন শেষের সময় আমাদের ব্র্যান্ড কে ধন্যবাদ জানাই না আমাদের
        নিজের ডিজাইনার ইনস্টিটিউট আমাদের নিজের ডিজাইনার ডেভেলপমেন্টের জন্য আরো
        কাজ আমরা আমাদের সম্পূর্ণ অভিজ্ঞতা নিয়ে এসেছি আরো কাজের জন্য এবং আমাদের
        কাজের সম্পূর্ণ সুবিধা কাজের।
      </p>

      <div className="text-2xl font-bold text-pink-600 mb-6">
        আজতের অফার মূল্য ১০০/- টাকা
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ display: "inline-block" }}
      >
        <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg rounded-md">
          🛒 অর্ডার করুন এখনি
        </Button>
      </motion.div>
    </motion.section>
  );
}
