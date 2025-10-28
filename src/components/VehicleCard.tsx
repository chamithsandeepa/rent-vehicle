import { motion } from "framer-motion";
import { Star, User, Fuel, Gauge } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface Vehicle {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: string;
  passengers: number;
  fuel: string;
  mileage: string;
  extraCharge: string;
  originalPrice: string;
  price: string;
  available: boolean;
}

interface Props {
  vehicle: Vehicle;
  onViewDetails: (vehicle: Vehicle) => void;
}

const VehicleCard: React.FC<Props> = ({ vehicle, onViewDetails }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
    >
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

      <div className="p-6">
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
          <span className="text-[14px] text-gray-600">({vehicle.reviews})</span>
        </div>

        {/* Details */}
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

        {/* Extra charge */}
        <div className="bg-[#EDA200]/10 rounded-3xl p-3 mb-4">
          <p className="text-[14px] text-gray-700 text-center">
            Extra km Charge :{" "}
            <span className="font-semibold">{vehicle.extraCharge}</span>
          </p>
        </div>

        <hr className="border-gray-200 mb-4" />

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 line-through text-[14px]">
              {vehicle.originalPrice}
            </p>
            <p className="text-[20px] font-bold text-[#EDA200]">
              {vehicle.price}
              {" / "}
              <span className="text-[14px] font-normal text-gray-600">day</span>
            </p>
          </div>
          <Button
            onClick={() => onViewDetails(vehicle)}
            className="bg-[#EDA200] hover:bg-[#EDA200]/90 text-white px-6 py-2 rounded-md font-medium"
          >
            View details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleCard;
