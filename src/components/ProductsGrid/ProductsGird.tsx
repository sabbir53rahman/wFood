import ProductCard from "../ProductCard/ProductCard";


const products = [
  {
    id: "1",
    name: "ACI Pure Aromatic Chinigura Rice – 2 kg",
    category: "Grocery & Staples",
    price: 260,
    originalPrice: 300,
    discount: 13,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "2",
    name: "Premium Red Lentils (Masoor Dal) – 1 kg",
    category: "Grocery & Staples",
    price: 120,
    originalPrice: 130,
    discount: 8,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "3",
    name: "Sun Chips – Mix Masala Flavored Potato Chips (75g)",
    category: "Snacks & Packaged Foods",
    price: 25,
    originalPrice: 30,
    discount: 17,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "4",
    name: "Mi ABC Fried Instant Noodle – Mi Instan Goreng (5 Packs)",
    category: "Snacks & Packaged Foods",
    price: 160,
    originalPrice: 165,
    discount: 3,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "5",
    name: "Fresh Orange Juice – Sourced from the best farms around the world",
    category: "Beverages",
    price: 85,
    originalPrice: 95,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "6",
    name: "Fresh Premium Green Tea",
    category: "Beverages",
    price: 180,
    originalPrice: 190,
    discount: 5,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "7",
    name: "Pure Milk – Pasteurized (1 Liter)",
    category: "Dairy & Eggs",
    price: 65,
    originalPrice: 70,
    discount: 6,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "8",
    name: "Fresh Red Apple – Premium Quality",
    category: "Fruits & Vegetables",
    price: 120,
    originalPrice: 135,
    discount: 10,
    image: "/placeholder.svg?height=300&width=300",
  },
];

export default function ProductsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
