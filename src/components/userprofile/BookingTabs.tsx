// ========================================
// BookingTabs.tsx
// ========================================
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import BookingCard from "./BookingCard";
import type { BookingData } from "./BookingCard";

interface BookingTabsProps {
  bookings: Record<string, BookingData[]>;
}

const BookingTabs = ({ bookings }: BookingTabsProps) => {
  const [activeTab, setActiveTab] = useState("ongoing");

  const handleEndJourney = (id: string) => {
    console.log("Ending journey for booking:", id);
    // Add your end journey logic here
    // For example: API call to end the journey, move to past bookings, etc.
  };

  const handleStartJourney = (id: string) => {
    console.log("Starting journey for booking:", id);
    // Add your start journey logic here
    // For example: API call to start the journey, move to ongoing bookings, etc.
  };

  const handleCancel = (id: string) => {
    console.log("Cancelling booking:", id);
    // Add your cancel logic here
    // For example: Show confirmation dialog, API call to cancel booking, etc.
  };

  return (
    <Card className="bg-white border-2 border-blue-500 rounded-2xl">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">My Booking</h2>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 bg-gray-200 border border-gray-300 rounded-full p-1 h-auto">
            <TabsTrigger
              value="past"
              className="data-[state=active]:bg-white rounded-full px-8 py-2.5 text-[15px] font-medium transition-all"
            >
              Past
            </TabsTrigger>
            <TabsTrigger
              value="ongoing"
              className="data-[state=active]:bg-white rounded-full px-8 py-2.5 text-[15px] font-medium transition-all"
            >
              Ongoing
            </TabsTrigger>
            <TabsTrigger
              value="future"
              className="data-[state=active]:bg-white rounded-full px-8 py-2.5 text-[15px] font-medium transition-all"
            >
              Future
            </TabsTrigger>
          </TabsList>

          {["past", "ongoing", "future"].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-0">
              {bookings[tab].length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  No {tab} bookings
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {bookings[tab].map((booking) => (
                    <BookingCard
                      key={booking.id}
                      booking={{
                        ...booking,
                        status: tab as "past" | "ongoing" | "future",
                      }}
                      onEndJourney={
                        tab === "ongoing" ? handleEndJourney : undefined
                      }
                      onStartJourney={
                        tab === "future" ? handleStartJourney : undefined
                      }
                      onCancel={tab === "future" ? handleCancel : undefined}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BookingTabs;
