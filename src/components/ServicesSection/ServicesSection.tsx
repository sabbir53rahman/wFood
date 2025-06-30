import Image from "next/image";
import service1 from "@/assets/support1.png";
import service2 from "@/assets/support2.png";
import service3 from "@/assets/support3.png";

const services = [
  {
    id: 1,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over 1000 BDT",
    image: service1,
  },
  {
    id: 2,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    image: service2,
  },
  {
    id: 3,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    image: service3,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-300"
            >
              {/* Service Image */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={80}
                    height={80}
                    className="filter invert"
                  />
                </div>
              </div>

              {/* Service Content */}
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
