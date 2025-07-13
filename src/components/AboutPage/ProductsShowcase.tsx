"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ShoppingCart } from "lucide-react";
import page1 from "@/assets/page1.png";

export default function ProductsShowcase() {
  const products = [
    {
      id: 1,
      title: "থ্রিপিস - এমব্রয়ডারি ডিজাইন",
      description:
        "উচ্চ মানের সুতি কাপড়ে এমব্রয়ডারি কাজ। যেকোনো অনুষ্ঠানে পরার জন্য দারুণ উপযোগী।",
      image: page1,
      link: "/threePiceLanding",
      category: "থ্রিপিস",
      price: "১২০০ টাকা",
      bgColor: "from-pink-100 to-pink-200",
    },
    {
      id: 2,
      title: "Apple AirPods Pro (2nd Gen)",
      description:
        "অ্যাপলের সর্বাধুনিক এয়ারপডস প্রো, অ্যাক্টিভ নয়েজ ক্যানসেলিং সহ, অসাধারণ সাউন্ড ও ব্যাটারি লাইফ।",
      image: page1,
      link: "/airpodLandingPage",
      category: "ইলেকট্রনিক্স",
      price: "১৮,০০০-২০,০০০ টাকা",
      bgColor: "from-green-100 to-green-200",
    },
    {
      id: 3,
      title: "হোকো W35 ওয়ারলেস হেডফোন",
      description:
        "উচ্চ মানের সাউন্ড কোয়ালিটি সহ ব্লুটুথ হেডফোন। ৪০ ঘন্টা ব্যাটারি লাইফ এবং আরামদায়ক ডিজাইন।",
      image: page1,
      link: "/headphoneLandingPage",
      category: "ইলেকট্রনিক্স",
      price: "১৫০০-৭০০০ টাকা",
      bgColor: "from-blue-100 to-blue-200",
    },
    {
      id: 4,
      title: "জাফরান বাদাম মিল্কি পাউডার",
      description:
        "কাশমীর জাফরান ও বিভিন্ন বাদাম দিয়ে তৈরি পুষ্টিকর পাউডার। স্মৃতিশক্তি বৃদ্ধি ও শরীরের শক্তি বাড়ায়।",
      image: page1,
      link: "/saffron",
      category: "পুষ্টিকর খাবার",
      price: "৩০০ টাকা",
      bgColor: "from-orange-100 to-yellow-200",
    },
    {
      id: 5,
      title: "প্রিমিয়াম শার্ট কালেকশন",
      description:
        "উচ্চ মানের কাপড়ের তৈরি বিভিন্ন ধরনের শার্ট। Full Sleeve, Hawaiian এবং আরও অনেক ডিজাইন।",
      image: page1,
      link: "/shirt",
      category: "পোশাক",
      price: "১০০০-১২০০ টাকা",
      bgColor: "from-purple-100 to-pink-200",
    },
    {
      id: 6,
      title: "থ্রিপিস - হ্যান্ড প্রিন্ট",
      description:
        "হাতের তৈরি প্রিন্টেড থ্রিপিস, যা আপনার পোশাকে যোগ করবে অন্যরকম লুক।",
      image: page1,
      link: "/three-piece-6",
      category: "থ্রিপিস",
      price: "১১০০ টাকা",
      bgColor: "from-orange-100 to-orange-200",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            আমাদের থ্রিপিস সংগ্রহ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            এখানে আমাদের সুন্দর থ্রিপিস কালেকশন দেখুন এবং বিস্তারিত জানতে ক্লিক
            করুন।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group"
            >
              <Link href={product.link}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer relative">
                  {/* Badge */}
                  <div
                    className={`absolute top-5 left-5 z-10 bg-gradient-to-r ${product.bgColor} px-4 py-1 rounded-full backdrop-blur-sm`}
                  >
                    <span className="text-xs font-semibold text-gray-800">
                      {product.category}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative h-60 bg-gray-200 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition duration-300"></div>

                    {/* Hover icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-90 rounded-full p-3 shadow">
                        <ExternalLink className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between border-t pt-4">
                      <div className="flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4 text-green-600" />
                        <span className="text-green-700 font-semibold">
                          {product.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-blue-600 group-hover:text-blue-800 transition-colors">
                        <span className="text-xs font-medium">বিস্তারিত</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
