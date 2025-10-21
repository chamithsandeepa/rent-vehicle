import { Car, MapPin, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";



const BookVehicle = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 w-full max-w-5xl mx-auto">
      {/* Header */}
      <h2 className="text-[24px] font-semibold mb-6">Book A Vehicle</h2>

      {/* Vehicle type & Locations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="flex items-center gap-2 text-[14px] font-medium text-gray-700 mb-2">
            <Car className="w-4 h-4 text-yellow-500" />
            Select Your Vehicle Type
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your vehicle type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="car">Car</SelectItem>
              <SelectItem value="van">Van</SelectItem>
              <SelectItem value="bus">Bus</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="flex items-center gap-2 text-[14px] font-medium text-gray-700 mb-2">
            <MapPin className="w-4 h-4 text-yellow-500" />
            Pick-Up Location
          </label>
          <div className="flex items-center gap-2">
            <Input placeholder="Weraduwa, Matara" />
            <Button variant="outline" size="icon">
              <Send className="w-4 h-4 text-yellow-500" />
            </Button>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-[14px] font-medium text-gray-700 mb-2">
            <MapPin className="w-4 h-4 text-yellow-500" />
            Drop-off Location
          </label>
          <Input placeholder="Godagama, Matara" />
        </div>
      </div>

      {/* Dates and times */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
        <div>
          <label className="flex items-center gap-2 text-[14px] font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4 text-yellow-500" />
            Pick-up date and time (+5:30 TZ)
          </label>
          <div className="flex gap-2">
            <Input placeholder="dd / mm / yyyy" />
            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="12:30 PM" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10am">10:00 AM</SelectItem>
                <SelectItem value="12pm">12:00 PM</SelectItem>
                <SelectItem value="2pm">2:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-end justify-between gap-2">
          <div className="flex-1">
            <label className="flex items-center gap-2 text-[14px] font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 text-yellow-500" />
              Drop-off date and time (+5:30 TZ)
            </label>
            <div className="flex gap-2">
              <Input placeholder="dd / mm / yyyy" />
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="12:30 PM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10am">10:00 AM</SelectItem>
                  <SelectItem value="12pm">12:00 PM</SelectItem>
                  <SelectItem value="2pm">2:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white text-[14px] font-semibold px-6 rounded-lg">
            View All Vehicles
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BookVehicle
