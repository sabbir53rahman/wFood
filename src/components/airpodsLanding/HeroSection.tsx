// components/HeroSection.tsx
import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="text-center px-4 py-10">
      <h1 className="text-2xl md:text-4xl font-bold leading-snug">
        সব থেকে সেরা <span className="text-blue-900">AirPods Pro 2nd Gen</span>
        <br />
        প্রিমিয়াম ডুবাই A1 Grade এর মাস্টারকপি!
      </h1>

      <div className="mt-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-6 items-center">
        <Image
          src="/airpods-image.jpg"
          alt="Product"
          width={250}
          height={250}
          className="w-full md:w-[300px]"
        />

        <div className="text-left bg-gray-100 p-5 rounded-md w-full">
          <h3 className="text-lg font-bold text-blue-700 mb-2">
            আনবক্সিং ৩ পিস এর বেইশিষ্ট্য
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-base">
            <li>সব থেকে ভালো কোয়ালিটির সাউন্ড</li>
            <li>ভার্চুয়াল চার্জার থাকছে পুর্নাঙ্গ</li>
            <li>সাউন্ড কার্ডের ভিন্নতা</li>
            <li>প্রিমিয়াম মেটাল ফিনিশিং</li>
            <li>এয়ারট্যাগ সাপোর্ট</li>
            <li>অরিজিনাল 4X ANC 3X Trenchanay</li>
          </ul>
        </div>
      </div>

      <h2 className="text-xl mt-6 font-semibold">
        এটা বাজেটের মধ্যে সব থেকে সেরা মাস্টার কপি?
      </h2>
      <p className="max-w-3xl mx-auto text-sm mt-2">
        এটি বাজেটের সহিত সব থেকে বেস্ট কোয়ালিটির AirPods Pro 2nd Generation এর
        কপি। Sound, Quality, ANC সহ প্রত্যেকটা ফিচারে ভরপুর।
      </p>

      <div className="mt-4 text-lg font-bold bg-blue-100 rounded p-2 text-blue-900 inline-block">
        আজকের অফার মূল্য ১১১০৳
      </div>

      <button className="bg-blue-900 text-white py-2 px-6 mt-4 rounded font-semibold">
        অর্ডার করতে চাই
      </button>
    </section>
  );
};

export default HeroSection;
