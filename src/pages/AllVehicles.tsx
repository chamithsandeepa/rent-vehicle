import { useState, useMemo, useEffect } from "react";
import { Filter, ArrowLeft } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { allVehicles, type Vehicle } from "@/types/VehicleData";
import VehicleCard from "@/components/VehicleCard";
import FilterSidebar from "@/components/Filter";

interface FilterOptions {
  transmission: string[];
  seats: string[];
  airConditioning: string[];
  priceRange: [number, number];
}

const AllVehicles = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialFilter = location.state?.activeFilter || "All";
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<FilterOptions | null>(
    null
  );

  const filters = [
    "All",
    "Cars",
    "SUVs",
    "Vans",
    "Scooty",
    "Safari Jeep",
    "Luxury",
  ];

  // Debug on mount
  useEffect(() => {
    console.log("=== AllVehicles Component Mounted ===");
    console.log("Total vehicles available:", allVehicles?.length || 0);
    console.log("Vehicles data:", allVehicles);
    console.log("Active filter:", activeFilter);
  }, []);

  // Filter vehicles
  const filteredVehicles = useMemo(() => {
    console.log("=== Filtering Vehicles ===");

    if (!allVehicles || allVehicles.length === 0) {
      console.error("No vehicles data available!");
      return [];
    }

    let filtered = [...allVehicles];
    console.log("Starting with vehicles:", filtered.length);

    // Category filter
    if (activeFilter !== "All") {
      filtered = filtered.filter((v) => v.category === activeFilter);
      console.log(`After category filter (${activeFilter}):`, filtered.length);
    }

    // Sidebar filters
    if (appliedFilters) {
      if (appliedFilters.transmission.length > 0) {
        filtered = filtered.filter((v) =>
          appliedFilters.transmission.includes(v.transmission)
        );
      }

      if (appliedFilters.seats.length > 0) {
        filtered = filtered.filter((v) =>
          appliedFilters.seats.some((seat) => v.passengers === parseInt(seat))
        );
      }

      if (appliedFilters.airConditioning.length > 0) {
        const hasAC = appliedFilters.airConditioning.includes("With A/C");
        const hasNoAC = appliedFilters.airConditioning.includes("Without A/C");

        if (hasAC && !hasNoAC) {
          filtered = filtered.filter((v) => v.airConditioning === true);
        } else if (hasNoAC && !hasAC) {
          filtered = filtered.filter((v) => v.airConditioning === false);
        }
      }

      filtered = filtered.filter(
        (v) =>
          v.pricePerDay >= appliedFilters.priceRange[0] &&
          v.pricePerDay <= appliedFilters.priceRange[1]
      );
    }

    console.log("Final filtered vehicles:", filtered.length);
    return filtered;
  }, [activeFilter, appliedFilters]);

  const handleViewDetails = (vehicle: Vehicle) => {
    navigate(`/vehicle/${vehicle.id}`, { state: { vehicle } });
  };

  const handleApplyFilters = (filters: FilterOptions) => {
    console.log("Applying filters:", filters);
    setAppliedFilters(filters);
  };

  // Show loading state if no vehicles
  if (!allVehicles || allVehicles.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Error: No Vehicles Data
          </h2>
          <p className="text-gray-600 mb-4">
            Unable to load vehicle data. Check the import path.
          </p>
          <Link to="/" className="text-[#EDA200] hover:underline">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-[#EDA200] mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">
            Explore <span className="text-[#EDA200]">All</span> Vehicles
          </h2>
          <p className="text-xl text-gray-600">
            Choose your perfect ride from our full collection.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-[#EDA200] text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Count + Filter Button */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-gray-600">
            Showing {filteredVehicles.length} vehicle
            {filteredVehicles.length !== 1 ? "s" : ""}
          </p>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50"
          >
            <Filter size={16} />
            Filters
          </button>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onViewDetails={() => handleViewDetails(vehicle)}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-400 mb-2">
                No Vehicles Found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your filters or select a different category
              </p>
              <button
                onClick={() => {
                  setAppliedFilters(null);
                  setActiveFilter("All");
                }}
                className="bg-[#EDA200] text-white px-6 py-2 rounded-full hover:bg-[#d89200]"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Filter Sidebar */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={handleApplyFilters}
      />
    </section>
  );
};

export default AllVehicles;
