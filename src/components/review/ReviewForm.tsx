"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import StarRating from "./StarRating";

export interface Review {
  id: string;
  productId: string;
  name: string;
  email: string;
  message: string;
  rating: number;
  date: string;
}

interface ReviewFormProps {
  productId: string;
  onReviewSubmit?: (review: Review) => void;
}

export default function ReviewForm({
  productId,
  onReviewSubmit,
}: ReviewFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 0,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.rating === 0) {
      alert("Please select a rating");
      return;
    }

    setIsSubmitting(true);

    try {
      const newReview: Review = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        message: formData.message,
        rating: formData.rating,
        date: new Date().toISOString(),
        productId,
      };

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (onReviewSubmit) {
        onReviewSubmit(newReview);
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        rating: 0,
      });

      alert("Review submitted successfully!");
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h4 className="text-lg font-bold text-gray-800 mb-4">Write a Review</h4>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-gray-700 font-medium">
              Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Your name"
              className="mt-1"
              required
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Your email"
              className="mt-1"
              required
            />
          </div>
        </div>

        <div>
          <Label className="text-gray-700 font-medium">
            Rating <span className="text-red-500">*</span>
          </Label>
          <div className="mt-2">
            <StarRating
              rating={formData.rating}
              onRatingChange={(rating) => handleInputChange("rating", rating)}
              size="lg"
            />
            <p className="text-sm text-gray-500 mt-1">
              {formData.rating > 0
                ? `You rated ${formData.rating} star${
                    formData.rating > 1 ? "s" : ""
                  }`
                : "Click to rate"}
            </p>
          </div>
        </div>

        <div>
          <Label htmlFor="message" className="text-gray-700 font-medium">
            Review Message <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            placeholder="Write your review here..."
            rows={4}
            className="mt-1 resize-none"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
        >
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </Button>
      </form>
    </div>
  );
}
