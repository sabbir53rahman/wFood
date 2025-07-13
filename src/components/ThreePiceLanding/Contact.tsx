"use client";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      className="py-12 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-pink-600 mb-4">
        আমাদের ডেলিভারি ২৪ ঘন্টা প্রতিদিন একটিভ থাকে কোন সমস্যা হলে সাথে সাথে
        যোগাযোগ করুন
      </h2>

      <div className="flex justify-center gap-4 mb-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ display: "inline-block" }}
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center gap-2">
            <Phone className="w-4 h-4" />
            ফোনে কল
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ display: "inline-block" }}
        >
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            হোয়াটসঅ্যাপ
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
