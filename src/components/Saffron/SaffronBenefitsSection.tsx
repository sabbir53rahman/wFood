"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function SaffronBenefitsSection() {
  const leftBenefits = [
    "জাফরান বাদাম মিক্সটোক",
    "পুষ্টিকর ও এর জন্য পুষ্টি বৃদ্ধি পায়",
    "স্মৃতিশক্তি বৃদ্ধি করে এবং মানসিক চাপ কমায়",
    "শরীরের রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে",
    "হৃদযন্ত্রের কার্যকারিতা বৃদ্ধি করে এবং রক্ত চলাচল ভাল রাখে",
    "ত্বকের উজ্জ্বলতা বৃদ্ধি করে এবং চুল পড়া কমায়",
    "চোখের দৃষ্টিশক্তি বৃদ্ধি করে",
    "হাড় ও দাঁতের গঠন মজবুত করে",
    "নিয়মিত সেবনে সামগ্রিক স্বাস্থ্যের উন্নতি হয়।",
  ];

  const rightBenefits = [
    "জাফরান বাদাম কাশার মিক্সটোক",
    "শরীরের শক্তি ও সামর্থ্য বৃদ্ধি করে",
    "হজমশক্তি ও অ্যাসিডিটি দূর করে",
    "অনিদ্রা দূর করে ও গভীর ঘুমে সহায়ক",
    "মানসিক চাপ কমায় ও মন প্রফুল্ল রাখে",
    "শিশুদের মানসিক ও শারীরিক বিকাশে সহায়ক",
    "গর্ভবতী মায়েদের জন্য উপকারী",
    "বয়স্কদের বার্ধক্যজনিত সমস্যা কমায়",
    "রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি পায়",
    "দীর্ঘায়ু ও সামগ্রিক স্বাস্থ্যের উন্নতি হয়",
    "সম্পূর্ণ প্রাকৃতিক, কোন পার্শ্বপ্রতিক্রিয়া নেই",
  ];

  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative blurred circle */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-800 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          উপকারিতাসমূহ
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <motion.div
            className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-orange-600 mb-6">
              জাফরান বাদাম মিক্সটোক
            </h3>
            <div className="space-y-4">
              {leftBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-orange-600 mb-6">
              জাফরান বাদাম কাশার মিক্সটোক
            </h3>
            <div className="space-y-4">
              {rightBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 text-lg rounded-full shadow-lg">
              অর্ডার করুন এখনি
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
