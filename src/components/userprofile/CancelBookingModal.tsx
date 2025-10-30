import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const CancelBookingModal = ({
  open,
  onClose,
  carName = "Mercedes-Benz",
}: {
  open: boolean;
  onClose: () => void;
  carName?: string;
}) => {
  const [selectedReason, setSelectedReason] =
    useState<string>("Change of plans");
  const [notes, setNotes] = useState<string>("");

  const reasons = [
    "Change of plans",
    "Found alternative transportation",
    "Booking made by mistake",
    "Weather condition",
    "Health issues",
    "Others",
  ];

  const handleCancel = () => {
    console.log({ reason: selectedReason, notes });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-2xl p-6 sm:p-8">
        <DialogHeader className="flex flex-col space-y-3">
          {/* Header with icon */}
          <div className="flex items-center gap-2 text-red-600">
            <AlertTriangle className="w-5 h-5" />
            <DialogTitle className="text-lg font-semibold text-gray-900">
              Cancel Booking
            </DialogTitle>
          </div>
          <DialogDescription className="text-sm text-gray-500">
            Are you sure you want to cancel your booking for{" "}
            <span className="font-semibold text-gray-800">{carName}</span>? This
            action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        {/* Form */}
        <div className="mt-5 space-y-6">
          {/* Reason for Cancellation */}
          <div>
            <p className="text-sm font-medium text-gray-800 mb-3">
              Reason for Cancellation <span className="text-red-500">*</span>
            </p>
            <div className="space-y-3">
              {reasons.map((reason) => (
                <label
                  key={reason}
                  className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-gray-900"
                >
                  <input
                    type="radio"
                    name="reason"
                    value={reason}
                    checked={selectedReason === reason}
                    onChange={() => setSelectedReason(reason)}
                    className="w-4 h-4 text-yellow-500 border-gray-300 focus:ring-yellow-500"
                  />
                  <span className="text-sm">{reason}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <p className="text-sm font-medium text-gray-800 mb-2">
              Additional Notes{" "}
              <span className="text-gray-500 text-xs">(Optional)</span>
            </p>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Please provide any additional details about your cancellation……"
              className="w-full min-h-[100px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EDA200] focus:outline-none text-sm text-gray-800 resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between gap-3 pt-2">
            <Button
              variant="outline"
              className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-lg"
              onClick={onClose}
            >
              Keep Booking
            </Button>
            <Button
              className="flex-1 bg-[#E53935] hover:bg-[#c62828] text-white font-medium rounded-lg"
              onClick={handleCancel}
            >
              Cancel Booking
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CancelBookingModal;
