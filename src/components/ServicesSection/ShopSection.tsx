import Image from "next/image";
import React from "react";
import shop1 from "@/assets/shop.webp";
import shop2 from "@/assets/shop2.webp";
import shop3 from "@/assets/shop3.webp";

function ShopSection() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Image
          src={shop1}
          alt="Shop Now"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-[15px]"
        />
        <Image
          src={shop2}
          alt="Shop Now"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-[15px]"
        />
        <Image
          src={shop3}
          alt="Shop Now"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-[15px]"
        />
      </div>
    </div>
  );
}

export default ShopSection;
