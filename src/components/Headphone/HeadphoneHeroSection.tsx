"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Hoco from '@/assets/Hoco1.png'

export default function HeadphoneHeroSection() {
  return (
    <motion.section
      className="bg-gradient-to-br from-green-600 to-green-700 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 500 50"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path d="M0.00,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="#fff" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              হোকো W35 ওয়ারলেস হেডফোন
            </motion.h1>

            <motion.p
              className="text-lg mb-8 opacity-90 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              উচ্চ মানের সাউন্ড কোয়ালিটি সহ এই হেডফোনটি অত্যন্ত আরামদায়ক
              <br />
              ও দীর্ঘক্ষণ ব্যবহার উপযোগী। ব্লুটুথ সংযোগ এবং শক্তিশালী ব্যাটারি
              <br />
              লাইফের সাথে আসে, সাউন্ড কোয়ালিটি অসাধারণ।
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
                <Button className="bg-green-800 hover:bg-green-900 text-white font-bold px-8 py-3 text-lg rounded-md shadow-md">
                  অর্ডার করুন
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              animate={{
                rotate: [0, 1, -1, 0],
                y: [0, -5, 5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <Image
                src={Hoco}
                alt="Hoco W35 Wireless Headphones"
                width={400}
                height={400}
                className="max-w-full h-auto rounded-xl shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
