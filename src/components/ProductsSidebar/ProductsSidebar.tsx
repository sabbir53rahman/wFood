"use client";

import React from "react";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function FilterSection({
  title,
  children,
  defaultOpen = true,
}: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 pb-4 mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-semibold text-gray-800 mb-4"
      >
        {title}
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      {isOpen && <div className="space-y-3">{children}</div>}
    </div>
  );
}

export default function ProductsSidebar() {
  return (
    <div className="w-full lg:w-80 bg-white p-6 rounded-lg shadow-sm">
      <FilterSection title="Category">
        <div className="space-y-3">
          {[
            "Grocery & Staples",
            "Snacks & Packaged Foods",
            "Beverages",
            "Dairy & Eggs",
            "Fruits & Vegetables",
            "Meat & Seafood",
            "Bakery & Cakes",
            "Organic & Health Foods",
          ].map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <label
                htmlFor={category}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Size">
        <div className="space-y-3">
          {["500g – 1kg", "1kg – 2kg", "2kg+", "250ml – 500ml", "1L – 2L"].map(
            (size) => (
              <div key={size} className="flex items-center space-x-2">
                <Checkbox id={size} />
                <label
                  htmlFor={size}
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  {size}
                </label>
              </div>
            )
          )}
        </div>
      </FilterSection>

      <FilterSection title="Color">
        <div className="space-y-3">
          {["Red", "Yellow", "Green", "Orange", "White"].map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <Checkbox id={color} />
              <label
                htmlFor={color}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {color}
              </label>
            </div>
          ))}
        </div>
      </FilterSection>
    </div>
  );
}
