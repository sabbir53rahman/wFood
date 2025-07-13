"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          প্রোডাক্ট অর্ডার
        </motion.h2>

        <motion.div
          className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-md inline-block text-xl mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          📞 01794000000000
        </motion.div>
      </div>
    </motion.section>
  );
}
