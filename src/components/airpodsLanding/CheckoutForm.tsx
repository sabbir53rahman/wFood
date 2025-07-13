// components/CheckoutForm.tsx
import Image from "next/image";
import React from "react";

const CheckoutForm: React.FC = () => {
  return (
    <section className="px-4 py-10">
      <div className="border-2 border-[#002b45] rounded-xl max-w-7xl mx-auto flex flex-col md:flex-row gap-10 p-6 md:p-10 bg-white">
        {/* Left: Billing Details */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Billing details</h2>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold text-sm mb-1">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-sm mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-sm mb-1">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Your order</h2>
          <table className="w-full text-sm mb-4">
            <thead>
              <tr>
                <th className="text-left font-medium">Product</th>
                <th className="text-right font-medium">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dotted border-gray-300">
                <td className="flex gap-3 py-4 items-center">
                  <Image
                    src="/product-thumb.jpg"
                    alt="Product"
                    className="w-12 h-12 object-cover rounded"
                    height={48}
                    width={48}
                  />
                  <div>
                    <p>Landing Page Design by Himel</p>
                    <span className="text-gray-500 text-sm">× 1</span>
                  </div>
                </td>
                <td className="text-right font-medium">300.00৳</td>
              </tr>
              <tr>
                <td className="pt-3">Subtotal</td>
                <td className="text-right pt-3">300.00৳</td>
              </tr>
              <tr>
                <td className="pt-2 font-semibold text-[15px]">Total</td>
                <td className="text-right font-semibold text-[15px]">
                  300.00৳
                </td>
              </tr>
            </tbody>
          </table>

          <div className="bg-gray-100 p-4 mb-3">
            <h3 className="font-semibold">Cash on delivery</h3>
            <div className="bg-gray-200 px-3 py-2 mt-2 text-sm">
              Pay with cash upon delivery.
            </div>
          </div>

          <p className="text-xs text-gray-600 mb-3">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our{" "}
            <a href="#" className="text-red-500 font-semibold underline">
              privacy policy
            </a>
            .
          </p>

          <button className="w-full bg-[#002b45] hover:bg-[#003b5f] text-white font-semibold py-3 rounded flex justify-center items-center text-sm">
            🔒 Place Order 300.00৳
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
