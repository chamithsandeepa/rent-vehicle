import { Star, Users, Fuel, Gauge, Wifi, Battery } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

interface Specification {
  icon: LucideIcon;
  label: string;
}

interface SimilarCar {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: string;
  seats: string;
  persons: string;
  fuel: string;
  range: string;
  price: string;
  period: string;
}

const VehicleDetails: React.FC = () => {
 const [showMore, setShowMore] = useState(false);

  const specifications: Specification[] = [
    { icon: Users, label: "5 Seat" },
    { icon: Users, label: "5 Person" },
    { icon: Fuel, label: "Petrol" },
    { icon: Gauge, label: "80 km" },
    { icon: Wifi, label: "Wi-Fi hotspot" },
    { icon: Battery, label: "Charging ports" },
  ];

  const similarCars: SimilarCar[] = [
    {
      id: 1,
      name: "Mercedes-Benz V-Class",
      image:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80",
      rating: 4,
      reviews: "2K Reviews",
      seats: "4 Seat",
      persons: "5 Person",
      fuel: "Petrol",
      range: "80 km",
      price: "RS. 12,000",
      period: "day",
    },
    {
      id: 2,
      name: "Mercedes-Benz V-Class",
      image:
        "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=400&q=80",
      rating: 4,
      reviews: "2K Reviews",
      seats: "4 Seat",
      persons: "5 Person",
      fuel: "Petrol",
      range: "80 km",
      price: "RS. 12,000",
      period: "day",
    },
    {
      id: 3,
      name: "Honda Dio",
      image:
        "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=400&q=80",
      rating: 4,
      reviews: "2K Reviews",
      seats: "2 Seat",
      persons: "2 Person",
      fuel: "Petrol",
      range: "80 km",
      price: "RS. 12,000",
      period: "day",
    },
  ];

  return (
    <div className="w-full space-y-8">
      {/* Description and Specifications Row */}
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8">
        {/* Description Section */}
        <div>
          <h2 className="text-[24px] font-semibold text-gray-900 mb-4">
            Description
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Experience luxury, comfort, and space with the Mercedes-Benz
            V-Class. Perfect for family trips, group travel, or executive rides,
            this premium van offers plush seating, advanced safety features, and
            a smooth, powerful drive. Enjoy ample legroom, modern infotainment,
            and a stylish{" "}
            {showMore ? (
              <>
                interior that reflects Mercedes-Benz craftsmanship at its
                finest. Whether you’re cruising through city streets or gliding
                across scenic highways, every moment inside the V-Class feels
                first-class. From adaptive climate control to ambient lighting
                and sleek design lines, it’s more than just a vehicle — it’s
                your personal luxury suite on wheels.{" "}
                <span
                  className="text-yellow-500 cursor-pointer hover:underline"
                  onClick={() => setShowMore(false)}
                >
                  see less
                </span>
              </>
            ) : (
              <span
                className="text-yellow-500 cursor-pointer hover:underline"
                onClick={() => setShowMore(true)}
              >
                see more
              </span>
            )}
          </p>
        </div>

        {/* Car Specifications */}
        <div className="pl-2">
          <h2 className="text-[24px] font-semibold text-gray-900 mb-4 ">
            Car Specifications
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {specifications.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
                >
                  <Icon className="w-8 h-8 text-gray-700 mb-2" />
                  <span className="text-[16px] text-gray-600 text-center">
                    {spec.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Browse Another Section */}
      <div className="pt-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[24px] font-bold text-[#808080]">
            Browse another
          </h2>
          <button className="text-[#808080] text-[24px] font-regular hover:text-gray-700">
            view more
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {similarCars.map((car) => (
            <div
              key={car.id}
              className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-lg transition-shadow"
            >
              <div className="bg-gray-50 rounded-xl mb-4 p-0 h-60 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">{car.name}</h3>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < car.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
                <span className="text-xs text-gray-500 ml-1">
                  ({car.reviews})
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{car.seats}</span>
                  <Users className="w-4 h-4 ml-2" />
                  <span>{car.persons}</span>
                  <Fuel className="w-4 h-4 ml-2" />
                  <span>{car.fuel}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Gauge className="w-4 h-4" />
                  <span>{car.range}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-yellow-500">
                    {car.price}
                  </span>
                  <span className="text-xs text-gray-500">/ {car.period}</span>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                  View details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
