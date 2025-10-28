// ========================================
// BookingCard.tsx
// ========================================
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Car } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface BookingData {
  id: string;
  vehicle: string;
  vehicleType: string;
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  status?: "past" | "ongoing" | "future";
}

interface BookingCardProps {
  booking: BookingData;
  onEndJourney?: (id: string) => void;
  onStartJourney?: (id: string) => void;
  onCancel?: (id: string) => void;
}

const BookingCard = ({
  booking,
  onEndJourney,
  onStartJourney,
  onCancel,
}: BookingCardProps) => {
  const isOngoing = booking.status === "ongoing";
  const isFuture = booking.status === "future";
  const isPast = booking.status === "past";

  const borderColor = isOngoing
    ? "border-[#EDA200]"
    : isPast
    ? "border-gray-300"
    : "border-gray-200";

  return (
    <Card className={`bg-white border-2 ${borderColor} shadow-sm rounded-2xl`}>
      <CardContent className="p-5">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-[#FFF4E0] p-3 rounded-lg">
            <Car className="w-6 h-6 text-[#EDA200]" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-[16px]">{booking.vehicle}</h3>
                <p className="text-[12px] text-gray-600">
                  Vehicle Type : {booking.vehicleType}
                </p>
              </div>
              {isOngoing && (
                <Badge className="bg-[#EDA200] text-white hover:bg-[#EDA200] text-[11px] px-3 py-1">
                  In Progress
                </Badge>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 text-gray-500 shrink-0" />
            <div>
              <p className="text-[12px] text-gray-500">Pickup Location</p>
              <p className="text-[14px] font-medium">
                {booking.pickupLocation}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 text-gray-500 shrink-0" />
            <div>
              <p className="text-[12px] text-gray-500">Drop-off Location</p>
              <p className="text-[14px] font-medium">
                {booking.dropoffLocation}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-[14px]">{booking.date}</span>
          </div>
        </div>

        {/* Ongoing booking buttons */}
        {isOngoing && (
          <Button
            onClick={() => onEndJourney?.(booking.id)}
            className="w-full mt-4 bg-[#EDA200] hover:bg-[#d89200] text-white font-medium rounded-lg h-11"
          >
            End Journey
          </Button>
        )}

        {/* Future booking buttons */}
        {isFuture && (
          <div className="flex flex-col gap-2 mt-4">
            <Button
              onClick={() => onStartJourney?.(booking.id)}
              className="w-full bg-black hover:bg-gray-800 text-white font-medium rounded-lg h-11"
            >
              Start Journey
            </Button>
            <Button
              onClick={() => onCancel?.(booking.id)}
              variant="ghost"
              className="w-full text-gray-600 hover:text-gray-900 hover:bg-transparent font-medium h-11"
            >
              Cancel
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BookingCard;
