export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          {/* Breadcrumb skeleton */}
          <div className="h-4 bg-gray-200 rounded w-96 mb-8"></div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-9">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Image skeleton */}
                <div className="space-y-4">
                  <div className="aspect-square bg-gray-200 rounded-lg"></div>
                  <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
                </div>

                {/* Details skeleton */}
                <div className="space-y-6">
                  <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-10 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-20 bg-gray-200 rounded"></div>
                  <div className="flex gap-4">
                    <div className="h-12 bg-gray-200 rounded flex-1"></div>
                    <div className="h-12 bg-gray-200 rounded flex-1"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar skeleton */}
            <div className="lg:col-span-3 space-y-8">
              <div className="h-64 bg-gray-200 rounded-lg"></div>
              <div className="h-96 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
