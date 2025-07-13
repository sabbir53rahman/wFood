interface ProductSpecificationsProps {
  specifications: Record<string, string>;
}

export default function ProductSpecifications({
  specifications,
}: ProductSpecificationsProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Product Specifications
          </h2>
          <p className="text-gray-600 text-lg">
            Detailed information about this product
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(specifications).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
              >
                <span className="font-medium text-gray-700">{key}:</span>
                <span className="text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
