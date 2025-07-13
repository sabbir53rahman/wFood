"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function PinkFeaturesSection() {
  const features = [
    "আমার নাম দিন বাড়ি এসে",
    "আমাদের কাজের পেমেন্ট ২৪ ঘন্টা (১ দিন)",
    "প্রতিটি কাজের পেমেন্ট আমরা ৪২ ঘন্টা",
    "সম্পূর্ণ আমাদের প্রিন্ট কাজ",
    "পেইজের কাজের সুবিধা",
  ];

  return (
    <motion.section
      className="bg-pink-100 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-pink-600 mb-6">
              আনহিজ ও পিস এর বৈশিষ্ট্য
            </h2>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: "inline-block" }}
            >
              <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg rounded-md mt-6">
                🛒 অর্ডার করুন এখনি
              </Button>
            </motion.div>
          </div>

          <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Featured product"
              width={400}
              height={500}
              className="rounded-lg mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
