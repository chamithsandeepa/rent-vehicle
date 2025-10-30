import { useState } from "react";
import { Star, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const JourneyCompletedModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [activeTab, setActiveTab] = useState<"review" | "issue">("review");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");
  const [issue, setIssue] = useState("");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-2xl p-6 sm:p-8">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Journey Completed
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Share your experience or report any issues with this booking
          </DialogDescription>
        </DialogHeader>

        {/* Tabs */}
        <div className="flex w-full rounded-full bg-gray-200 p-1 mt-4">
          <button
            onClick={() => setActiveTab("review")}
            className={cn(
              "flex-1 py-2 text-sm font-medium rounded-full transition-all",
              activeTab === "review"
                ? "bg-white shadow text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            Submit Review
          </button>
          <button
            onClick={() => setActiveTab("issue")}
            className={cn(
              "flex-1 py-2 text-sm font-medium rounded-full transition-all",
              activeTab === "issue"
                ? "bg-white shadow text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            Report Issue
          </button>
        </div>

        {/* Review Form */}
        {activeTab === "review" ? (
          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">
                Rate Your Experience
              </p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={cn(
                      "w-6 h-6 cursor-pointer transition-colors",
                      (hoverRating || rating) >= star
                        ? "fill-[#EDA200] text-[#EDA200]"
                        : "text-gray-300"
                    )}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">
                Your Review
              </p>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Share your experience with this journey……"
                className="w-full min-h-[100px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EDA200] focus:outline-none text-sm text-gray-800 resize-none"
              />
            </div>

            <Button
              className="w-full bg-[#EDA200] hover:bg-[#d79000] text-white font-medium rounded-lg mt-3"
              onClick={() => {
                console.log({ rating, review });
                onClose();
              }}
            >
              Submit Review
            </Button>
          </div>
        ) : (
          /* Report Issue Form */
          <div className="mt-6 space-y-5">
            {/* Red Alert Box */}
            <div className="flex items-start gap-2 p-3 rounded-md border border-red-300 bg-red-50 text-red-700">
              <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
              <p className="text-sm leading-relaxed">
                Please describe any issues you encountered during your journey.
                Our team will review and address your concerns.
              </p>
            </div>

            {/* Issue Description */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">
                Describe Your Issue
              </p>
              <textarea
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                placeholder="Please provide details about the issue you experienced……"
                className="w-full min-h-[120px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EDA200] focus:outline-none text-sm text-gray-800 resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              className="w-full bg-[#E53935] hover:bg-[#c62828] text-white font-medium rounded-lg mt-3"
              onClick={() => {
                console.log({ issue });
                onClose();
              }}
            >
              Submit Issue
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default JourneyCompletedModal;
