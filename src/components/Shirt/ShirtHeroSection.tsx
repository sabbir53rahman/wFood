"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ShirtHeroSection() {
  return (
    <motion.section
      className="py-16 bg-gradient-to-br from-green-50 to-green-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          কেউ যদি আপনাদের কাছে শার্ট কিনতে চান তাহলে আপনারা এই সব শার্ট কিনতে
          পারেন। এই শার্টগুলি খুব সুন্দর এবং দেখতে খুব ভাল লাগে এবং দামও
          <span className="text-red-600 font-extrabold mx-1">অনেক কম</span>।
        </motion.p>

        <motion.div
          className="relative bg-black rounded-xl aspect-video max-w-3xl mx-auto mb-8 flex items-center justify-center shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute inset-0 rounded-xl bg-green-400 opacity-10 blur-2xl"></div>
          <div className="text-white text-center z-10">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-0 h-0 border-l-[14px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
            </div>
            <p className="text-lg">ভিডিও লোড হচ্ছে...</p>
          </div>
        </motion.div>

        <motion.p
          className="text-blue-600 mb-6 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          এখানে আপনি আমাদের শার্ট এর ভিডিও দেখতে পাবেন
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: "inline-block" }}
        >
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 text-lg rounded-md shadow-md">
              অর্ডার করুন
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
