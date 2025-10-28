import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import VehicleCard from "@/components/VehicleCard";
import type { Vehicle } from "@/components/VehicleCard";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: ["easeInOut"] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const VehicleFleet = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);
  const navigate = useNavigate();

  const filters = [
    "All",
    "Cars",
    "SUVs",
    "Vans",
    "Scooter",
    "Safari Jeep",
    "Luxury",
  ];

  // 🚗 Vehicles list
  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: "Mercedes-Benz V-Class",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
      rating: 4,
      reviews: "2K Reviews",
      passengers: 5,
      fuel: "Petrol",
      mileage: "350 km (daily)",
      extraCharge: "$0.50/km",
      originalPrice: "RS. 15,000",
      price: "RS. 12,000",
      available: true,
    },
    {
      id: 2,
      name: "Mercedes-Benz EQS",
      image:
        "https://images.unsplash.com/photo-1617654112368-307921291f42?w=400&h=300&fit=crop",
      rating: 4,
      reviews: "2K Reviews",
      passengers: 5,
      fuel: "Petrol",
      mileage: "350 km (daily)",
      extraCharge: "$0.50/km",
      originalPrice: "RS. 15,000",
      price: "RS. 12,000",
      available: true,
    },
    {
      id: 3,
      name: "Honda Dio",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      rating: 4,
      reviews: "2K Reviews",
      passengers: 2,
      fuel: "Petrol",
      mileage: "350 km (daily)",
      extraCharge: "$0.50/km",
      originalPrice: "RS. 15,000",
      price: "RS. 12,000",
      available: true,
    },
    {
      id: 4,
      name: "Toyota Camry",
      image:
        "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
      rating: 4,
      reviews: "1.8K Reviews",
      passengers: 5,
      fuel: "Petrol",
      mileage: "400 km (daily)",
      extraCharge: "$0.45/km",
      originalPrice: "RS. 14,000",
      price: "RS. 11,500",
      available: true,
    },
    {
      id: 5,
      name: "BMW X5",
      image:
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&h=300&fit=crop",
      rating: 5,
      reviews: "2.5K Reviews",
      passengers: 7,
      fuel: "Diesel",
      mileage: "300 km (daily)",
      extraCharge: "$0.60/km",
      originalPrice: "RS. 20,000",
      price: "RS. 16,000",
      available: true,
    },
    {
      id: 6,
      name: "Tesla Model 3",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop",
      rating: 5,
      reviews: "3K Reviews",
      passengers: 5,
      fuel: "Electric",
      mileage: "450 km (daily)",
      extraCharge: "$0.40/km",
      originalPrice: "RS. 18,000",
      price: "RS. 15,000",
      available: true,
    },
  ];

  const handleViewDetails = (vehicle: Vehicle) => {
    navigate(`/vehicle/${vehicle.id}`, { state: { vehicle } });
  };

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <motion.section
      id="fleet"
      className="py-16 px-4 bg-white select-none"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-[40px] font-bold mb-3">
            Explore <span className="text-[#EDA200]">Our</span> Full Fleet
          </h2>
          <p className="text-[20px] text-gray-600">
            Compare, choose, and book in just a few clicks.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-[#EDA200] text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {vehicles.slice(0, visibleCount).map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onViewDetails={handleViewDetails}
            />
          ))}
        </motion.div>

        {/* View More Button */}
        {visibleCount < vehicles.length && (
          <div className="flex justify-center mt-10">
            <Button
              onClick={handleViewMore}
              className="bg-[#EDA200] hover:bg-[#EDA200]/90 text-white px-8 py-3 rounded-full font-semibold"
            >
              View More
            </Button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default VehicleFleet;
