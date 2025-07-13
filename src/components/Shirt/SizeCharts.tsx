"use client";
import { motion } from "framer-motion";

export default function SizeCharts() {
  const fullSleeveData = [
    { size: "M", chest: "৩৮", length: "২৭", shoulder: "১৬" },
    { size: "L", chest: "৪০", length: "২৮", shoulder: "১৭" },
    { size: "XL", chest: "৪২", length: "২৯", shoulder: "১৮" },
    { size: "XXL", chest: "৪৪", length: "৩০", shoulder: "১৯" },
  ];

  const hawaiianData = [
    { size: "M", chest: "৩৮", length: "২৭", shoulder: "১৬" },
    { size: "L", chest: "৪০", length: "২৮", shoulder: "১৭" },
    { size: "XL", chest: "৪২", length: "২৯", shoulder: "১৮" },
    { size: "XXL", chest: "৪৪", length: "৩০", shoulder: "১৯" },
  ];

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Full Sleeve */}
          <motion.div
            className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-md"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-center text-green-600 mb-6">
              Full Sleeve সাইজ চার্ট
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">সাইজ</th>
                    <th className="border border-gray-300 px-4 py-2">বুক</th>
                    <th className="border border-gray-300 px-4 py-2">লম্বা</th>
                    <th className="border border-gray-300 px-4 py-2">কাঁধ</th>
                  </tr>
                </thead>
                <tbody>
                  {fullSleeveData.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row.size}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row.chest}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row.length}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row.shoulder}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Hawaiian */}
          <motion.div
            className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-center text-green-600 mb-6">
              Hawaiian সাইজ চার্ট
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">সাইজ</th>
                    <th className="border border-gray-300 px-4 py-2">বুক</th>
                    <th className="border border-gray-300 px-4 py-2">লম্বা</th>
                    <th className="border border-gray-300 px-4 py-2">কাঁধ</th>
                  </tr>
                </thead>
                <tbody>
                  {hawaiianData.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row.size}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row.chest}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row.length}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row.shoulder}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
