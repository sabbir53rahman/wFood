"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import saffron from '@/assets/saffron.jpg'

export default function SaffronIngredientsSection() {
  const ingredients = [
    { name: "জাফরান", image: saffron },
    { name: "পেস্তা বাদাম", image: saffron },
    { name: "আখরোট", image: saffron },
    { name: "কাজু বাদাম", image: saffron },
    { name: "দেশী চিনাবাদাম", image: saffron },
    { name: "খুরমা বাদাম", image: saffron },
    { name: "কাঠ বাদাম", image: saffron },
    { name: "পেস্তা বাদাম", image: saffron },
  ];

  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative blurred circle */}
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-orange-200 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-10 w-80 h-80 bg-yellow-300 opacity-20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-800 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          যে সকল উপাদানে তৈরি
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 max-w-6xl mx-auto">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-4 border-4 border-orange-300 rounded-full p-2">
                <Image
                  src={ingredient.image}
                  alt={ingredient.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <p className="text-gray-700 font-semibold text-sm text-center">
                {ingredient.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
