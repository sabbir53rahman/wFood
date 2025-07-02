
import { Star } from "lucide-react";
import StarRating from "./StarRating";

interface Review {
  id: string;
  name: string;
  email: string;
  message: string;
  rating: number;
  date: string;
}

interface ReviewListProps {
  reviews: Review[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // ✅ Ensure the returned average rating is always a string
  const getAverageRating = (): string => {
    if (reviews.length === 0) return "0";
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1); // returns string like "4.3"
  };

  const getRatingDistribution = () => {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach((review) => {
      distribution[review.rating as keyof typeof distribution]++;
    });
    return distribution;
  };

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">
          No reviews yet. Be the first to review this product!
        </p>
      </div>
    );
  }

  const averageRating = getAverageRating(); // now a string like "4.1"
  const distribution = getRatingDistribution();

  return (
    <div className="space-y-6">
      {/* Review Summary */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {averageRating}
            </div>
            <StarRating
              rating={parseFloat(averageRating)}
              readonly
              size="lg"
            />
            <p className="text-gray-600 mt-2">
              Based on {reviews.length} review{reviews.length > 1 ? "s" : ""}
            </p>
          </div>

          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-2">
                <span className="text-sm w-6">{star}</span>
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{
                      width: `${
                        reviews.length > 0
                          ? (distribution[star as keyof typeof distribution] /
                              reviews.length) *
                            100
                          : 0
                      }%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-8">
                  {distribution[star as keyof typeof distribution]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-200 pb-6 last:border-b-0"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h5 className="font-semibold text-gray-800">{review.name}</h5>
                <p className="text-sm text-gray-500">
                  {formatDate(review.date)}
                </p>
              </div>
              <StarRating rating={review.rating} readonly />
            </div>
            <p className="text-gray-600 leading-relaxed">{review.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
