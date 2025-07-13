"use client";
import React from "react";
import { motion } from "framer-motion";

const WhyChooseSection: React.FC = () => {
  return (
    <section className="bg-[#f5f5f5] px-4 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold leading-snug mb-4 text-blue-900">
            এটা সবথেকে বেস্ট A1 গ্রেড এর ডুবাই প্রিমিয়াম মাস্টার কপি! এই বিষয়ে
            গুলা দেখলেই ধামাকা পেয়ে যাবেন!
          </h2>

          <ul className="list-disc space-y-2 pl-6 text-base">
            <li>ওরিজিনাল Verified A1 Chip এবং H2 প্রোসেসর কপি</li>
            <li>বাজারে ৪০০+ 2X ANC এবং Transparency নিয়ন্ত্রক</li>
            <li>১০০% অরিজিনাল কপি ফিনিশিং এবং সাউন্ড কপি</li>
            <li>সবচেয়ে বেস্ট লুক, ফিনিশ এবং ডিজাইন</li>
          </ul>

          <button className="bg-[#002b45] text-white px-6 py-2 rounded mt-6 font-semibold hover:bg-[#00385d]">
            হ্যাঁ অর্ডার করতে চাই
          </button>
        </motion.div>

        {/* Image / Video Placeholder */}
        <motion.div
          className="flex-1 w-full rounded-lg h-[250px] bg-black"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* You can replace this div with a <video> or image */}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
