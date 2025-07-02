import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string | StaticImageData;
}

export default function ProductCard({
  id,
  name,
  category,
  price,
  originalPrice,
  discount,
  image,
}: ProductCardProps) {
  // Create URL-friendly slug from product name
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return (
    <Link href={`/products/${slug}-${id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md hover:border hover:border-purple-600 transition-all duration-300 overflow-hidden group cursor-pointer border-gray-200 border">
        <div className="relative">
          {discount && (
            <Badge className="absolute top-2 left-2 bg-purple-600 text-white z-10">
              -{discount}%
            </Badge>
          )}
          <div className="aspect-square bg-gray-100 overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={300}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="p-4 space-y-3">
          <Badge
            variant="secondary"
            className="bg-purple-100 text-purple-700 text-xs"
          >
            {category}
          </Badge>

          <h3 className="font-medium text-gray-800 line-clamp-2 text-sm">
            {name}
          </h3>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-purple-600">৳ {price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ৳ {originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
