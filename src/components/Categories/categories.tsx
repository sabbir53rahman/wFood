const categories = [
  { name: "Grocery & Staples", icon: "🏪" },
  { name: "Snacks & Packaged Foods", icon: "🍿" },
  { name: "Beverages", icon: "🥤" },
  { name: "Dairy & Eggs", icon: "🥛" },
  { name: "Fruits & Vegetables", icon: "🍎" },
  { name: "Meat & Seafood", icon: "🐟" },
  { name: "Bakery & Cakes", icon: "🍰" },
  { name: "Organic & Health Foods", icon: "🌱" },
];

export default function CategoriesSection() {
  return (
    <section className="py-12 px-4bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-8 bg-purple-600"></div>
            <span className="text-purple-600 font-semibold">Categories</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">
            Browse By Category
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 border border-gray-200 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
                <span className="text-2xl">{category.icon}</span>
              </div>
              <h3 className="text-sm font-medium text-gray-700 text-center leading-tight">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
