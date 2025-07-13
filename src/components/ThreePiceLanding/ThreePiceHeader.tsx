"use client";
import { motion } from "framer-motion";

export default function ThreePiceHeader() {
  return (
    <motion.header
      className="text-center py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-2xl font-bold text-gray-800">▲ logipsum</div>
    </motion.header>
  );
}
