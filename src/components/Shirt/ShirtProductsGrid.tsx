"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ShirtProductsGrid() {
  const products = [
    { name: "কাপড় ১ - ১০০০ টাকা", bgColor: "bg-yellow-200" },
    { name: "কাপড় ২ - ১২০০ টাকা", bgColor: "bg-green-200" },
    { name: "Full Sleeve M1", bgColor: "bg-yellow-100" },
    { name: "Full Sleeve M2", bgColor: "bg-gray-800", textColor: "text-white" },
    { name: "Full Sleeve M3", bgColor: "bg-blue-800", textColor: "text-white" },
    { name: "Hawaiian Shirt M4", bgColor: "bg-orange-400" },
    {
      name: "Hawaiian Shirt M5",
      bgColor: "bg-green-700",
      textColor: "text-white",
    },
    {
      name: "গোলাপী শার্ট টি-শার্ট",
      bgColor: "bg-gray-800",
      textColor: "text-white",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg opacity-70"
                />
                <div
                  className={`absolute inset-0 ${product.bgColor} opacity-30`}
                ></div>
              </div>
              <div
                className={`${product.bgColor} ${
                  product.textColor || "text-black"
                } text-center py-4 px-5 font-semibold text-lg`}
              >
                {product.name}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-red-600 mt-10 mb-6 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          আমি আপনাদের কাছে বলতে চাই যে আমাদের শার্ট খুব ভাল এবং দাম কম।
        </motion.p>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 text-lg rounded-md shadow">
              অর্ডার করুন
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
