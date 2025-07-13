"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Heart } from "lucide-react";
import shahiBadam from '@/assets/shahiBadam.jpg'

export default function SaffronTestimonialsSection() {
  return (
    <motion.section
      className="relative py-24 bg-gray-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative blur circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-orange-400">
          আমাদের কাস্টমারদের কথা
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* First testimonial */}
          <motion.div
            className="bg-gray-800 rounded-xl p-8 shadow-lg relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Quote className="w-10 h-10 text-orange-400 mb-4" />
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              আমি আমার পরিবার নিয়ে অনেক দিন ধরে এই জাফরান বাদাম মিক্সটোক
              ব্যবহার করছি। আমাদের পরিবারের স্বাস্থ্যের উন্নতি হয়েছে। বিশেষ করে
              আমার ছেলে মেয়েদের স্মৃতিশক্তি বৃদ্ধি পেয়েছে এবং তারা আগের চেয়ে
              অনেক বেশি সুস্থ।
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={shahiBadam}
                alt="Testimonial"
                width={60}
                height={60}
                className="rounded-full border-2 border-orange-400"
              />
              <div>
                <h4 className="font-semibold text-orange-300">
                  মোঃ রফিকুল ইসলাম
                </h4>
                <span className="text-sm text-gray-400">ঢাকা, বাংলাদেশ</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src={shahiBadam}
              alt="Saffron milk"
              width={300}
              height={300}
              className="rounded-xl shadow-xl"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <motion.div
            className="flex justify-center order-1 md:order-none"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src={shahiBadam}
              alt="Customer happy"
              width={300}
              height={300}
              className="rounded-xl shadow-xl"
            />
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-xl p-8 shadow-lg relative order-2 md:order-none"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Heart className="w-10 h-10 text-orange-400 mb-4" />
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              আমাদের কাস্টমাররা বলছেন এই পণ্যটি অত্যন্ত কার্যকর এবং উপকারী।
              অনেকেই তাদের স্বাস্থ্যের উল্লেখযোগ্য উন্নতি দেখেছেন। বিশেষ করে
              শিশুদের বৃদ্ধি এবং বিকাশে এই পণ্যটি অসাধারণভাবে সহায়ক প্রমাণিত
              হয়েছে।
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Customer"
                width={60}
                height={60}
                className="rounded-full border-2 border-orange-400"
              />
              <div>
                <h4 className="font-semibold text-orange-300">সাবিনা আক্তার</h4>
                <span className="text-sm text-gray-400">
                  চট্টগ্রাম, বাংলাদেশ
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
