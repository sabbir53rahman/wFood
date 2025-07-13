"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ShirtCustomerReviews() {
  const reviews = [
    { image: "/placeholder.svg?height=150&width=150" },
    { image: "/placeholder.svg?height=150&width=150" },
    { image: "/placeholder.svg?height=150&width=150" },
    { image: "/placeholder.svg?height=150&width=150" },
  ];

  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-green-50 to-green-100 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-green-700 mb-14 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          আমাদের <span className="text-red-600">কাস্টমার রিভিউ</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="aspect-square flex items-center justify-center">
                <Image
                  src={review.image || "/placeholder.svg"}
                  alt={`Customer review ${index + 1}`}
                  width={150}
                  height={150}
                  className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-gray-700 mt-12 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          আমাদের কাস্টমার রিভিউ দেখুন এবং আমাদের শার্ট সম্পর্কে জানুন <br />
          কেমন মানের শার্ট আমরা বিক্রি করি এবং আমাদের কাস্টমাররা কি বলেছেন।
        </motion.p>
      </div>
    </motion.section>
  );
}
