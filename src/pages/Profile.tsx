// ========================================
// ProfileBookingPage.tsx (Updated)
// ========================================
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ProfileHeader from "@/components/userprofile/ProfileHeader";
import PersonalInfoCard from "@/components/userprofile/PersonalInfoCard";
import BookingTabs from "@/components/userprofile/BookingTabs";

const ProfileBookingPage = () => {
  const userProfile = {
    name: "Jonathan Alexander",
    email: "jonathanalexander@gmail.com",
    address: "123, First Lane, Colombo",
    phone: "(+94) 70 123 45 56",
    status: "Ongoing",
    avatar: "/images/man.png",
  };

  const bookings = {
    past: [
      {
        id: "1",
        vehicle: "Mercedes-Benz",
        vehicleType: "Car",
        pickupLocation: "123 Main Street, Downtown",
        dropoffLocation: "456 Park Avenue, Uptown",
        date: "Sep 15, 2025",
        time: "10:00 AM",
      },
      {
        id: "2",
        vehicle: "BMW",
        vehicleType: "Car",
        pickupLocation: "10 King Road, Central",
        dropoffLocation: "88 Lake View, South",
        date: "Oct 01, 2025",
        time: "9:30 AM",
      },
      {
        id: "3",
        vehicle: "Honda Vezel",
        vehicleType: "SUV",
        pickupLocation: "Kandy City Centre",
        dropoffLocation: "Nuwara Eliya",
        date: "Nov 10, 2025",
        time: "6:30 AM",
      },
    ],
    ongoing: [
      {
        id: "4",
        vehicle: "Mercedes-Benz",
        vehicleType: "Car",
        pickupLocation: "123 Main Street, Downtown",
        dropoffLocation: "456 Park Avenue, Uptown",
        date: "Sep 15, 2025",
        time: "10:00 AM",
      },
    ],
    future: [
      {
        id: "5",
        vehicle: "Mercedes-Benz",
        vehicleType: "Car",
        pickupLocation: "123 Main Street, Downtown",
        dropoffLocation: "456 Park Avenue, Uptown",
        date: "Sep 15, 2025",
        time: "10:00 AM",
      },
      {
        id: "6",
        vehicle: "Mercedes-Benz",
        vehicleType: "Car",
        pickupLocation: "123 Main Street, Downtown",
        dropoffLocation: "456 Park Avenue, Uptown",
        date: "Sep 15, 2025",
        time: "10:00 AM",
      },
    ],
  };

  return (
    <div className="py-16 px-4 min-h-screen bg-[#F7F7F7] p-6">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-muted-foreground hover:text-[#f5a623] mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-colors" />
          Back to Home
        </Link>

        <h1 className="text-[32px] font-semibold mb-10 ">
          Profile Information
        </h1>
        <ProfileHeader {...userProfile} />
        <PersonalInfoCard {...userProfile} />
        <BookingTabs bookings={bookings} />
      </div>
    </div>
  );
};

export default ProfileBookingPage;
