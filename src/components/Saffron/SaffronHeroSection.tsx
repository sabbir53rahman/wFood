"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import mainSaffron from "@/assets/mainsaffron.jpg";

export default function SaffronHeroSection() {
  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-100 py-16 md:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative circle */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-amber-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6 leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              জাফরান বাদাম মিক্সটোক <br /> ও মিল্কি পাউডার
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-700 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              আমাদের দুধি বাদাম ও জাফরান পাউডার কাশমীরের খাঁটি জাফরান দিয়ে তৈরি।
              এতে আছে কাজু, পেস্তা, আখরোট ও প্রাকৃতিক উপাদান যা স্বাস্থ্যকর ও
              পুষ্টিকর।
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg">
                  অর্ডার করুন এখনি
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="flex justify-center md:justify-end relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-yellow-200 rounded-xl -z-10 rotate-3"></div>
              <Image
                src={mainSaffron}
                alt="Saffron and Nuts Milk Powder Jar"
                width={400}
                height={500}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
