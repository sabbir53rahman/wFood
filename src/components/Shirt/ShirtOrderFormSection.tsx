"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ShirtOrderFormSection() {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedShirt, setSelectedShirt] = useState("Full Sleeve M1");

  const shirtOptions = [
    "কাপড় ১ - ১০০০ টাকা",
    "কাপড় ২ - ১২০০ টাকা",
    "Full Sleeve M1",
    "Full Sleeve M2",
    "Full Sleeve M3",
    "Hawaiian Shirt M4",
    "Hawaiian Shirt M5",
    "গোলাপী শার্ট টি-শার্ট",
  ];

  const sizes = ["M", "L", "XL", "XXL"];
  const basePrice = 300;
  const totalPrice = basePrice * quantity;

  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-green-50 to-green-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-4">
            অর্ডার করুন এখনি
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            আপনার পছন্দের শার্ট অর্ডার করতে নিচের ফর্মটি পূরণ করুন এবং সহজে
            অর্ডার করুন।
          </p>
        </motion.div>

        <Card className="border-2 border-green-200 shadow-lg">
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Product Summary */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-green-700">
                  আপনার প্রোডাক্ট
                </h3>

                {/* Shirt Selection */}
                <div className="mb-6">
                  <Label className="text-base font-semibold mb-2 block">
                    শার্ট নির্বাচন করুন *
                  </Label>
                  <select
                    value={selectedShirt}
                    onChange={(e) => setSelectedShirt(e.target.value)}
                    className="w-full p-3 border border-green-300 rounded-md focus:ring-2 focus:ring-green-400"
                  >
                    {shirtOptions.map((shirt, index) => (
                      <option key={index} value={shirt}>
                        {shirt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                  <Label className="text-base font-semibold mb-2 block">
                    সাইজ নির্বাচন করুন *
                  </Label>
                  <div className="flex gap-3 flex-wrap">
                    {sizes.map((size) => (
                      <label
                        key={size}
                        className={`cursor-pointer px-4 py-2 rounded border 
                        ${
                          selectedSize === size
                            ? "bg-green-600 text-white border-green-600"
                            : "border-gray-300 text-gray-700"
                        }`}
                      >
                        <input
                          type="radio"
                          name="size"
                          value={size}
                          checked={selectedSize === size}
                          onChange={(e) => setSelectedSize(e.target.value)}
                          className="hidden"
                        />
                        {size}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Quantity Selection */}
                <div className="mb-6">
                  <Label className="text-base font-semibold mb-2 block">
                    পরিমাণ *
                  </Label>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 bg-green-100 hover:bg-green-200 rounded-md flex items-center justify-center font-bold text-green-700"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-semibold text-xl">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 bg-green-100 hover:bg-green-200 rounded-md flex items-center justify-center font-bold text-green-700"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg mb-6 shadow-inner">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Product"
                      width={60}
                      height={60}
                      className="rounded"
                    />
                    <div>
                      <p className="font-semibold">
                        {selectedShirt} × {quantity}
                      </p>
                      <p className="text-gray-600">
                        {selectedSize && `সাইজ: ${selectedSize}`}
                      </p>
                      <p className="text-gray-600">
                        {basePrice}.00৳ × {quantity}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 mt-4 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{totalPrice}.00৳</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{totalPrice}.00৳</span>
                  </div>
                </div>
              </div>

              {/* Billing Details */}
              <div>
                <h4 className="text-xl font-bold mb-6 text-green-700">
                  Billing details
                </h4>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">নাম *</Label>
                    <Input
                      id="name"
                      className="mt-1 focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">ফোন নাম্বার *</Label>
                    <Input
                      id="phone"
                      className="mt-1 focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">ঠিকানা *</Label>
                    <Input
                      id="address"
                      className="mt-1 focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="district">জেলা *</Label>
                    <Input
                      id="district"
                      className="mt-1 focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                </div>

                <div className="mt-6 bg-green-50 p-4 rounded space-y-2 shadow-inner">
                  <p className="font-medium">Cash on delivery</p>
                  <p className="text-sm text-gray-600">
                    Pay with cash upon delivery
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 mt-8 text-lg shadow"
                    disabled={!selectedSize}
                  >
                    🔒 Place Order {totalPrice}.00৳
                  </Button>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>

        <motion.p
          className="text-center text-gray-600 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          আমরা সারা বাংলাদেশে হোম ডেলিভারি দিয়ে থাকি
        </motion.p>
      </div>
    </motion.section>
  );
}
