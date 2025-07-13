"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HeadphoneOrderFormSection() {
  return (
    <motion.section
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            অর্ডার করতে নিচের ফর্মটি পূরণ করুন এবং অর্ডার বাটনে ক্লিক করুন।
          </h2>
        </motion.div>

        <Card className="border-2 border-gray-300">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Product Summary */}
              <div>
                <h3 className="text-xl font-bold mb-4">Your Products</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Product"
                      width={60}
                      height={60}
                      className="rounded"
                    />
                    <div>
                      <p className="font-medium">
                        Landing Page Design by Himel × 1
                      </p>
                      <p className="text-gray-600">300.00৳</p>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-bold mb-4">Your order</h4>
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div className="flex justify-between">
                    <span>Product</span>
                    <span>Subtotal</span>
                  </div>

                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-sm">
                      Landing Page Design by Himel × 1
                    </span>
                    <span>300.00৳</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>300.00৳</span>
                  </div>

                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total</span>
                    <span>300.00৳</span>
                  </div>
                </div>
              </div>

              {/* Order Details */}
              <div>
                <h4 className="text-lg font-bold mb-4">Billing details</h4>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">নাম *</Label>
                    <Input id="name" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="phone">ফোন *</Label>
                    <Input id="phone" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="address">ঠিকানা *</Label>
                    <Input id="address" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="area">এলাকা *</Label>
                    <Input id="area" className="mt-1" />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="p-3 bg-gray-100 rounded">
                    <span>Cash on delivery</span>
                  </div>

                  <div className="p-3 bg-gray-100 rounded">
                    <span>Pay with cash upon delivery</span>
                  </div>

                  <p className="text-xs text-gray-600">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 mt-6 text-lg">
                    🔒 অর্ডার করুন 300.00৳
                  </Button>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
