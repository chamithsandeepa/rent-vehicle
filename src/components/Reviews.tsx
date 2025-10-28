import { useState } from "react";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  verified: boolean;
  text: string;
}

const Reviews: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Ahmed S.",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 4,
      verified: true,
      text: "Our family of seven loved the V-Class. Spacious seating, smooth ride, and plenty of luggage space made our road trip comfortable from start to finish.",
    },
    {
      id: 2,
      name: "Ahmed S.",
      avatar: "https://i.pravatar.cc/150?img=2",
      rating: 3,
      verified: true,
      text: "Booked for a business transfer and was impressed by the quiet cabin and luxury feel. Sliding doors and extra legroom made travel easy for everyone.",
    },
    {
      id: 3,
      name: "Ahmed S.",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 3,
      verified: true,
      text: "Booked for a business transfer and was impressed by the quiet cabin and luxury feel. Sliding doors and extra legroom made travel easy for everyone.",
    },
    {
      id: 4,
      name: "Priya K.",
      avatar: "https://i.pravatar.cc/150?img=4",
      rating: 5,
      verified: false,
      text: "Clean, stylish, and very comfortable. The adjustable seats and smooth drive turned a long journey into a relaxing experience.",
    },
  ];

  const handleSubmitReview = (): void => {
    console.log({ name, message, rating });
    setName("");
    setMessage("");
    setRating(0);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8">
        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="flex gap-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[20px] font-semibold text-gray-900">
                    {review.name}
                  </h3>
                  {review.verified && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-[16px] leading-relaxed">
                  {review.text}
                </p>
              </div>
            </div>
          ))}

          <button className="relative group mx-auto block text-center py-3 text-gray-900 font-medium">
            <span className="inline-block relative">
              Load more
              <span className="block mx-auto mt-1 h-0.5 w-full bg-gray-900 group-hover:bg-yellow-500 transition-all duration-300"></span>
            </span>
          </button>
        </div>

        {/* Add Review Form */}
        <div className="bg-white border rounded-2xl p-6 shadow-xl">
          <h2 className="text-[24px] font-semibold text-gray-900 mb-6">
            Add your review
          </h2>

          <div className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="text-[20px] font-regular block text-gray-900  mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="text-[20px] font-regular block text-gray-900 mb-2">
                Message
              </label>
              <textarea
                placeholder="Type your review"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
              />
            </div>

            {/* Ratings */}
            <div>
              <label className="text-[20px] font-regular block text-gray-900 mb-3">
                Ratings
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-6 h-6 cursor-pointer transition-colors ${
                      star <= rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmitReview}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Add Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
