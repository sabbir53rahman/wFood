"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function OrderFormSection() {
  return (
    <motion.section
      className="py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="border-2 border-pink-200">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-pink-600 mb-2">
                অর্ডার করতে নিচের ফর্মটি সঠিক ভাবে পূরণ করুন।
              </h2>
              <p className="text-lg">
                ফোনে অর্ডার করুন <span className="font-bold">01625032937</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Billing Details */}
              <div>
                <h3 className="text-xl font-bold mb-4">Billing details</h3>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">আপনার নাম *</Label>
                    <Input id="name" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="phone">ফোন নাম্বার *</Label>
                    <Input id="phone" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="address">
                      House number and street name
                    </Label>
                    <Input id="address" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="area">এলাকার নাম *</Label>
                    <Input id="area" className="mt-1" />
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <h3 className="text-xl font-bold mb-4">Your order</h3>

                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div className="flex justify-between">
                    <span>Product</span>
                    <span>Subtotal</span>
                  </div>

                  <div className="flex justify-between items-center border-b pb-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Product"
                        width={40}
                        height={40}
                        className="rounded"
                      />
                      <span className="text-sm">Landing Page Design by</span>
                      <span className="text-xs">× 1</span>
                    </div>
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

                <div className="mt-6 space-y-3">
                  <div className="p-3 bg-gray-50 rounded">
                    <span>Cash on delivery</span>
                  </div>

                  <div className="p-3 bg-gray-50 rounded">
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
                  style={{ width: "100%" }}
                >
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 mt-6 text-lg">
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
