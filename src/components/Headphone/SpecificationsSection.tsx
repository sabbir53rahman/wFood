"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function SpecificationsSection() {
  const specifications = [
    "ব্লুটুথ সংস্করণ: 5.0",
    "প্লেব্যাক সময়: 40ঘন্টা",
    "চার্জিং সময়: 2ঘন্টা",
    "ব্যাটারি ক্ষমতা: 400mAh",
    "ফ্রিকোয়েন্সি রেঞ্জ: 20Hz-20000Hz",
    "ইমপিডেন্স: 32Ω",
    "সেনসিটিভিটি: 110dB",
    "ড্রাইভার সাইজ: 40mm",
    "ওজন: 230g",
    "চার্জিং পোর্ট: Type-C",
    "কলার সময়: 40ঘন্টা",
    "স্ট্যান্ডবাই সময়: 200ঘন্টা",
    "ওয়ারেন্টি: 1 বছর",
  ];

  return (
    <motion.section
      className="py-20 bg-white relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative background shape */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-40 -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          হোকো W35 ওয়ারলেস হেডফোনের বৈশিষ্ট্য
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {specifications.map((spec, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{spec}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="relative bg-blue-100 p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:rotate-1 hover:scale-105"
              whileHover={{ rotate: 1, scale: 1.05 }}
            >
              <div className="text-center mb-4">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow">
                  Multiple playback modes
                </span>
              </div>
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Headphones with multiple playback modes"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="text-center flex items-center justify-center mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 text-lg rounded-md shadow-md">
              অর্ডার করুন
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
