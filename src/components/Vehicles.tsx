import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import VehicleCard from "@/components/VehicleCard";
import { allVehicles, type Vehicle } from "@/types/VehicleData";

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
  const navigate = useNavigate();

  const filters = [
    "All",
    "Cars",
    "SUVs",
    "Vans",
    "Scooty",
    "Safari Jeep",
    "Luxury",
  ];

  // Filter vehicles based on active category filter
  const filteredVehicles = useMemo(() => {
    if (activeFilter === "All") {
      return allVehicles;
    }
    return allVehicles.filter((vehicle) => vehicle.category === activeFilter);
  }, [activeFilter]);

  // Show only first 6 vehicles in the fleet section
  const displayedVehicles = filteredVehicles.slice(0, 6);

  const handleViewDetails = (vehicle: Vehicle) => {
    navigate(`/vehicle/${vehicle.id}`, { state: { vehicle } });
  };

  const handleViewMore = () => {
    // Navigate to AllVehicles page with active filter
    navigate("/vehicles", { state: { activeFilter } });
  };

  return (
    <motion.section
      id="fleet"
      className="py-16 px-4 bg-white select-none scroll-mt-5"
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

        {/* Filter Tabs */}
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

        {/* Results Count */}
        {activeFilter !== "All" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-6"
          >
            <p className="text-sm text-gray-600">
              Showing {displayedVehicles.length} of {filteredVehicles.length}{" "}
              {activeFilter} vehicles
            </p>
          </motion.div>
        )}

        {/* Vehicle Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          key={activeFilter} // Re-animate when filter changes
        >
          {displayedVehicles.length > 0 ? (
            displayedVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onViewDetails={() => handleViewDetails(vehicle)}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No {activeFilter} vehicles available at the moment.
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className="mt-4 text-[#EDA200] hover:underline font-medium"
              >
                View all vehicles
              </button>
            </div>
          )}
        </motion.div>

        {/* View All Vehicles Button */}
        {displayedVehicles.length > 0 && (
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              onClick={handleViewMore}
              className="bg-[#EDA200] hover:bg-[#EDA200]/90 text-white px-8 py-3 rounded-full font-semibold"
            >
              View All Vehicles
            </Button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default VehicleFleet;
