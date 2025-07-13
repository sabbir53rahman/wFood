"use client";
import Image from "next/image";
import React from "react";
import airpod from "@/assets/airpod.webp";

const HeroSection: React.FC = () => {
  return (
    <section className="text-center px-4 py-14 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-6">
          সব থেকে সেরা{" "}
          <span className="text-blue-900">AirPods Pro 2nd Gen</span>
          <br />
          প্রিমিয়াম ডুবাই A1 Grade এর মাস্টারকপি!
        </h1>

        <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex justify-center">
            <Image
              src={airpod}
              alt="Product"
              width={350}
              height={350}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex-1 text-left bg-white border border-gray-200 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              আনবক্সিং ৩ পিস এর বৈশিষ্ট্য
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base">
              <li>সব থেকে ভালো কোয়ালিটির সাউন্ড</li>
              <li>ভার্চুয়াল চার্জার থাকছে পুর্নাঙ্গ</li>
              <li>সাউন্ড কার্ডের ভিন্নতা</li>
              <li>প্রিমিয়াম মেটাল ফিনিশিং</li>
              <li>এয়ারট্যাগ সাপোর্ট</li>
              <li>অরিজিনাল 4X ANC 3X Trenchanay</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">
            এটা বাজেটের মধ্যে সব থেকে সেরা মাস্টার কপি?
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 text-base">
            এটি বাজেটের সহিত সব থেকে বেস্ট কোয়ালিটির AirPods Pro 2nd Generation
            এর কপি। Sound, Quality, ANC সহ প্রত্যেকটা ফিচারে ভরপুর।
          </p>

          <div className="mt-6 inline-block bg-blue-100 px-6 py-3 rounded-full text-lg font-bold text-blue-900 shadow">
            আজকের অফার মূল্য ১১১০৳
          </div>

          <div className="mt-6">
            <button className="bg-blue-900 hover:bg-blue-950 text-white py-3 px-8 rounded-lg font-semibold shadow transition-transform duration-300 hover:scale-105">
              অর্ডার করতে চাই
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
