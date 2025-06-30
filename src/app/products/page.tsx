import ProductsGrid from "@/components/ProductsGrid/ProductsGird";
import ProductsSidebar from "@/components/ProductsSidebar/ProductsSidebar";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Home className="w-4 h-4" />
          <Link href="/" className="hover:text-purple-600">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800">Products</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <ProductsSidebar />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <ProductsGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
