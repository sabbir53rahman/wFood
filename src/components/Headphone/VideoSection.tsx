"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          হোকো W35 ওয়ারলেস হেডফোন - আমাদের রিভিউ ভিডিও
        </motion.h2>

        <motion.p
          className="text-center text-gray-700 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          আমাদের টেকনিক্যাল এক্সপার্ট টিমের দ্বারা পরীক্ষিত এবং রিভিউ করা এই
          ভিডিওতে আপনি দেখতে পাবেন এই হেডফোনের সব ফিচার এবং কার্যকারিতা সম্পর্কে
          বিস্তারিত তথ্য। এই ভিডিওটি দেখে আপনি সহজেই বুঝতে পারবেন যে এই হেডফোনটি
          আপনার জন্য কতটা উপযুক্ত এবং এর সাউন্ড কোয়ালিটি ও অন্যান্য ফিচার
          সম্পর্কে জানতে পারবেন।
        </motion.p>

        <motion.div
          className="bg-black rounded-lg aspect-video mb-8 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-white text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
            </div>
            <p className="text-lg">ভিডিও লোড হচ্ছে...</p>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
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
