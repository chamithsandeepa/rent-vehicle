import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Star, User, Fuel, Gauge } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Animation variants
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
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: ["easeInOut"] },
  },
};

const VehicleFleet = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Cars",
    "SUVs",
    "Vans",
    "scooter",
    "Safari Jeep",
    "Luxury",
  ];

  const vehicles = [
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
      name: "Mercedes-Benz V-Class",
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
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-[40px] font-bold mb-3">
            Explore <span className="text-[#EDA200]">Our</span> Full Fleet
          </h2>
          <p className="text-[20px] text-gray-600">
            Compare, choose, and book in just a few clicks.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
              variants={fadeUp}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Vehicle Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {vehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              variants={cardAnimation}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-56 object-cover"
                />
                {vehicle.available && (
                  <Badge className="absolute top-4 left-4 bg-[#EDA200] hover:bg-[#EDA200] text-white px-3 py-1 text-xs font-semibold">
                    Available
                  </Badge>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Vehicle Name */}
                <h3 className="text-[24px] font-bold text-gray-900 mb-3">
                  {vehicle.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < vehicle.rating
                            ? "fill-[#EDA200] text-[#EDA200]"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[14px] text-gray-600">
                    ({vehicle.reviews})
                  </span>
                </div>

                {/* Vehicle Details */}
                <div className="flex items-center justify-between mb-4 text-[14px] text-gray-700">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{vehicle.passengers} Person</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="w-4 h-4" />
                    <span>{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4" />
                    <span>{vehicle.mileage}</span>
                  </div>
                </div>

                {/* Extra Charge */}
                <div className="bg-[#EDA200]/10 rounded-3xl p-3 mb-4">
                  <p className="text-[14px] text-gray-700 text-center">
                    Extra km Charge :{" "}
                    <span className="font-semibold">{vehicle.extraCharge}</span>
                  </p>
                </div>

                <hr className="border-gray-200 mb-4" />

                {/* Price Section */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 line-through text-[14px]">
                      {vehicle.originalPrice}
                    </p>
                    <p className="text-[20px] font-bold text-[#EDA200]">
                      {vehicle.price}
                      {" / "}
                      <span className="text-[14px] font-normal text-gray-600">
                        day
                      </span>
                    </p>
                  </div>
                  <Button className="bg-[#EDA200] hover:bg-[#EDA200] text-white px-6 py-2 rounded-md font-medium">
                    View details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VehicleFleet;
