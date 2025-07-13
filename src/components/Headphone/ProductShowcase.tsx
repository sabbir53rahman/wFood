"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Hoco1 from "@/assets/Hoco1.png";
import Hoco2 from "@/assets/Hoco2.jpg";

export default function ProductShowcase() {
  return (
    <motion.section
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-8 md:gap-16 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <Image
              src={Hoco2}
              alt="Black Hoco W35 Headphones"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <Image
              src={Hoco1}
              alt="White Hoco W35 Headphones"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
