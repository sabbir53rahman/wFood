"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ShoppingCart, MapPin, User } from "lucide-react";

interface ProductOrderFormProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    inStock: boolean;
  };
}

export default function ProductOrderForm({ product }: ProductOrderFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    area: "",
    quantity: 1,
    paymentMethod: "",
    specialInstructions: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Create order object
      const order = {
        id: Date.now().toString(),
        product: {
          id: product.id,
          name: product.name,
          price: product.price,
        },
        customer: formData,
        total: product.price * formData.quantity,
        orderDate: new Date().toISOString(),
        status: "pending",
      };

      console.log("Order submitted:", order);
      alert("Order placed successfully! We will contact you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        area: "",
        quantity: 1,
        paymentMethod: "",
        specialInstructions: "",
      });
    } catch (error) {
      console.error("Order placement failed:", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalPrice = product.price * formData.quantity;
  const savings = (product.originalPrice - product.price) * formData.quantity;

  return (
    <section
      id="order-form"
      className="py-16 px-4 bg-gradient-to-br from-purple-50 to-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Now</h2>
          <p className="text-gray-600 text-lg">
            Fill out the form below to place your order
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Order Summary */}
          <div className="bg-purple-600 text-white p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Order Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>{product.name}</span>
                <span>৳{product.price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Quantity</span>
                <span>{formData.quantity}</span>
              </div>
              {savings > 0 && (
                <div className="flex justify-between items-center text-green-200">
                  <span>You Save</span>
                  <span>৳{savings}</span>
                </div>
              )}
              <div className="border-t border-purple-400 pt-3">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total</span>
                  <span>৳{totalPrice}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Personal Information */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Personal Information
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="mt-1"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  className="mt-1"
                />
              </div>
            </div>

            {/* Delivery Information */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Delivery Information
              </h4>
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="address"
                    className="text-gray-700 font-medium"
                  >
                    Full Address <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    placeholder="House/Flat no, Road, Area"
                    rows={3}
                    className="mt-1 resize-none"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city" className="text-gray-700 font-medium">
                      City <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      onValueChange={(value: string | number) =>
                        handleInputChange("city", value)
                      }
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dhaka">Dhaka</SelectItem>
                        <SelectItem value="chittagong">Chittagong</SelectItem>
                        <SelectItem value="sylhet">Sylhet</SelectItem>
                        <SelectItem value="rajshahi">Rajshahi</SelectItem>
                        <SelectItem value="khulna">Khulna</SelectItem>
                        <SelectItem value="barisal">Barisal</SelectItem>
                        <SelectItem value="rangpur">Rangpur</SelectItem>
                        <SelectItem value="mymensingh">Mymensingh</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="area" className="text-gray-700 font-medium">
                      Area/Thana <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="area"
                      type="text"
                      value={formData.area}
                      onChange={(e) =>
                        handleInputChange("area", e.target.value)
                      }
                      placeholder="Enter your area/thana"
                      className="mt-1"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Order Details
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="quantity"
                    className="text-gray-700 font-medium"
                  >
                    Quantity <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    onValueChange={(value: string) =>
                      handleInputChange("quantity", parseInt(value))
                    }
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="payment"
                    className="text-gray-700 font-medium"
                  >
                    Payment Method <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    onValueChange={(value: string | number) =>
                      handleInputChange("paymentMethod", value)
                    }
                    required
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cod">Cash on Delivery</SelectItem>
                      <SelectItem value="bkash">bKash</SelectItem>
                      <SelectItem value="nagad">Nagad</SelectItem>
                      <SelectItem value="rocket">Rocket</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <Label
                htmlFor="instructions"
                className="text-gray-700 font-medium"
              >
                Special Instructions (Optional)
              </Label>
              <Textarea
                id="instructions"
                value={formData.specialInstructions}
                onChange={(e) =>
                  handleInputChange("specialInstructions", e.target.value)
                }
                placeholder="Any special delivery instructions..."
                rows={3}
                className="mt-1 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t">
              <Button
                type="submit"
                disabled={isSubmitting || !product.inStock}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 text-lg font-semibold"
              >
                {isSubmitting ? (
                  "Processing Order..."
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Place Order - ৳{totalPrice}
                  </>
                )}
              </Button>

              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <span className="text-green-500">✓</span>
                  Secure Checkout
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-green-500">✓</span>
                  Free Delivery
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-green-500">✓</span>
                  Money Back Guarantee
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
