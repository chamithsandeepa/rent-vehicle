// AboutVehicle.tsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Calendar } from "lucide-react";
import VehicleDetails from "../components/VehicleDetails";
import Reviews from "../components/Reviews";
import BookedVehicleDetails from "../components/BookedVehicle";
import BookingFormComponent from "../components/NewUserBooking";

type TabType = "details" | "reviews";

const AboutVehicle: React.FC = () => {
  const location = useLocation();
  const vehicle = location.state?.vehicle;

  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("12:30 PM");
  const [dropoffDate, setDropoffDate] = useState("");
  const [dropoffTime, setDropoffTime] = useState("12:30 PM");
  const [activeTab, setActiveTab] = useState<TabType>("details");
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Check if user is returning/old user
  // You can replace this with your actual authentication/user check logic
  const [isReturningUser, setIsReturningUser] = useState<boolean>(() => {
    // Check localStorage or your auth state
    const hasBookedBefore = localStorage.getItem("hasBookedBefore");
    return hasBookedBefore === "true";
  });

  const handleBookNow = () => {
    setShowBookingModal(true);
  };

  const handleCloseModal = () => {
    setShowBookingModal(false);
  };

  const handleConfirmBooking = (formData?: any) => {
    console.log("Booking confirmed:", formData);
    // Mark user as having booked before
    localStorage.setItem("hasBookedBefore", "true");
    setIsReturningUser(true);
    setShowBookingModal(false);
    // Add your booking confirmation logic here
  };

  if (!vehicle) {
    return (
      <div className="text-center py-20 text-gray-500">
        Vehicle not found. Please go back and select again.
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-[#f5a623] mb-8 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-colors" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8">
            {/* Left Section */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl shadow-2xl flex items-center justify-center">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </div>

              <div className="space-y-3">
                <h1 className="text-[36px] font-medium text-gray-900">
                  {vehicle.name}
                </h1>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < vehicle.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                  <span className="text-gray-900 font-medium">
                    {vehicle.rating}.0
                  </span>
                  <span className="text-gray-500">{vehicle.reviews}</span>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="space-y-6">
              <div className="pt-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[36px] font-bold text-gray-900">
                      {vehicle.price}
                    </span>
                    <span className="text-gray-600">/day</span>
                  </div>
                  <div className="text-gray-400 line-through text-lg">
                    {vehicle.originalPrice}
                  </div>
                </div>
              </div>

              <div
                className="rounded-2xl p-8 space-y-10 shadow-xl"
                style={{ backgroundColor: "#FEFCF6" }}
              >
                {/* Pick-up */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-gray-900 font-medium">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    <span>Pick-Up Location</span>
                  </label>
                  <input
                    type="text"
                    value="Weraduwa, Matara"
                    className="w-full px-4 py-3 text-[14px] bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    readOnly
                  />
                </div>

                {/* Drop-off */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-gray-900 font-medium">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    <span>Drop-off Location</span>
                  </label>
                  <input
                    type="text"
                    value="Godagama, Matara"
                    className="w-full px-4 py-3 text-[14px] bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    readOnly
                  />
                </div>

                {/* Pickup/Drop Dates */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-gray-900 font-medium">
                    <Calendar className="w-5 h-5 text-yellow-500" />
                    <span>Pick-up date and time</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="dd / mm / yyyy"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="px-4 py-3 bg-white text-[14px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="px-4 py-3 bg-white text-[14px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                    >
                      <option>12:00 PM</option>
                      <option>12:30 PM</option>
                      <option>01:00 PM</option>
                      <option>01:30 PM</option>
                      <option>02:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-gray-900 font-medium">
                    <Calendar className="w-5 h-5 text-yellow-500" />
                    <span>Drop-off date and time</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="dd / mm / yyyy"
                      value={dropoffDate}
                      onChange={(e) => setDropoffDate(e.target.value)}
                      className="px-4 py-3 bg-white text-[14px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                      value={dropoffTime}
                      onChange={(e) => setDropoffTime(e.target.value)}
                      className="px-4 py-3 bg-white text-[14px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                    >
                      <option>12:00 PM</option>
                      <option>12:30 PM</option>
                      <option>01:00 PM</option>
                      <option>01:30 PM</option>
                      <option>02:00 PM</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleBookNow}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 rounded-lg transition-colors text-[14px]"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-12">
            <div className="border-b border-gray-200">
              <div className="flex gap-8">
                <button
                  onClick={() => setActiveTab("details")}
                  className={`pb-3 border-b-2 ${
                    activeTab === "details"
                      ? "border-yellow-500 text-gray-900"
                      : "border-transparent text-gray-500"
                  } font-medium`}
                >
                  Vehicle details
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`pb-3 border-b-2 ${
                    activeTab === "reviews"
                      ? "border-yellow-500 text-gray-900"
                      : "border-transparent text-gray-500"
                  } font-medium`}
                >
                  Reviews
                </button>
              </div>
            </div>

            <div className="pt-6">
              {activeTab === "details" && <VehicleDetails />}
              {activeTab === "reviews" && <Reviews />}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay with Blur Effect */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-md"
            onClick={handleCloseModal}
          ></div>

          {/* Modal Content */}
          <div className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto z-10">
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-2 -right-2 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Conditional rendering based on user type */}
            {isReturningUser ? (
              <BookedVehicleDetails
                vehicleName={vehicle.name}
                vehicleImage={vehicle.image}
                pickupLocation="Weraduwa, Matara"
                pickupDateTime={`${pickupDate} ${pickupTime}`}
                dropoffLocation="Godagama, Matara"
                dropoffDateTime={`${dropoffDate} ${dropoffTime}`}
                onConfirm={handleConfirmBooking}
                onCancel={handleCloseModal}
              />
            ) : (
              <BookingFormComponent
                vehicleName={vehicle.name}
                vehicleImage={vehicle.image}
                pickupLocation="Weraduwa, Matara"
                pickupDateTime={`${pickupDate} ${pickupTime}`}
                dropoffLocation="Godagama, Matara"
                dropoffDateTime={`${dropoffDate} ${dropoffTime}`}
                onConfirm={handleConfirmBooking}
                onCancel={handleCloseModal}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AboutVehicle;
