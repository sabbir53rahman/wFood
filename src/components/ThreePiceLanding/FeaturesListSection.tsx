"use client";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesListSection() {
  const features = [
    "আমার নিজের ডিজাইনার ইনস্টিটিউট আমাদের নিজের ডিজাইনার ডেভেলপমেন্টের জন্য আরো",
    "কাজ আমরা আমাদের সম্পূর্ণ অভিজ্ঞতা নিয়ে এসেছি আরো কাজের জন্য এবং আমাদের কাজের সম্পূর্ণ সুবিধা কাজের।",
    "আমার আমাদের ডেলিভারি পদ্ধতি সময় মতো এবং আমার পছন্দ মতো কাজের আমাদের।",
    "আমি ডেলিভারি দেওয়া আমাদের আগে তিন ডেলিভারি কাজের পরিষ্কার কাজ আমাদের আমাদের ডেলিভারি পেইজের নোটিশ দেওয়া আমাদের ডেলিভারি।",
  ];

  return (
    <motion.section
      className="bg-pink-50 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-pink-600 text-center mb-8">
          আনহিজ ও পিস এর বৈশিষ্ট্য
        </h2>

        <div className="space-y-4 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-6 h-6 text-pink-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "inline-block" }}
          >
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg rounded-md">
              🛒 অর্ডার করুন এখনি
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
