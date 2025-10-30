// src/data/vehicleData.ts

export interface Vehicle {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: string;
  passengers: number;
  transmission: "Automatic" | "Manual";
  fuel: "Petrol" | "Diesel" | "Electric";
  airConditioning: boolean;
  mileage: string;
  extraCharge: string;
  originalPrice: string;
  price: string;
  pricePerDay: number;
  available: boolean;
  category?: "Cars" | "SUVs" | "Vans" | "Scooty" | "Safari Jeep" | "Luxury";
}

export const allVehicles: Vehicle[] = [
  {
    id: 1,
    name: "Mercedes-Benz V-Class",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
    rating: 4,
    reviews: "2K Reviews",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    airConditioning: true,
    mileage: "350 km (daily)",
    extraCharge: "$0.50/km",
    originalPrice: "RS. 15,000",
    price: "RS. 12,000",
    pricePerDay: 12000,
    available: true,
    category: "Vans",
  },
  {
    id: 2,
    name: "Mercedes-Benz EQS",
    image:
      "https://images.unsplash.com/photo-1617654112368-307921291f42?w=400&h=300&fit=crop",
    rating: 4,
    reviews: "2K Reviews",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Electric",
    airConditioning: true,
    mileage: "450 km (daily)",
    extraCharge: "$0.50/km",
    originalPrice: "RS. 18,000",
    price: "RS. 15,000",
    pricePerDay: 15000,
    available: true,
    category: "Luxury",
  },
  {
    id: 3,
    name: "Honda Dio",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    rating: 4,
    reviews: "2K Reviews",
    passengers: 2,
    transmission: "Manual",
    fuel: "Petrol",
    airConditioning: false,
    mileage: "80 km (daily)",
    extraCharge: "$0.30/km",
    originalPrice: "RS. 3,500",
    price: "RS. 3,000",
    pricePerDay: 3000,
    available: true,
    category: "Scooty",
  },
  {
    id: 4,
    name: "Toyota Camry",
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
    rating: 4,
    reviews: "1.8K Reviews",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    airConditioning: true,
    mileage: "400 km (daily)",
    extraCharge: "$0.45/km",
    originalPrice: "RS. 14,000",
    price: "RS. 11,500",
    pricePerDay: 11500,
    available: true,
    category: "Cars",
  },
  {
    id: 5,
    name: "BMW X5",
    image:
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&h=300&fit=crop",
    rating: 5,
    reviews: "2.5K Reviews",
    passengers: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    airConditioning: true,
    mileage: "300 km (daily)",
    extraCharge: "$0.60/km",
    originalPrice: "RS. 20,000",
    price: "RS. 16,000",
    pricePerDay: 16000,
    available: true,
    category: "SUVs",
  },
  {
    id: 6,
    name: "Tesla Model 3",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop",
    rating: 5,
    reviews: "3K Reviews",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Electric",
    airConditioning: true,
    mileage: "450 km (daily)",
    extraCharge: "$0.40/km",
    originalPrice: "RS. 18,000",
    price: "RS. 15,000",
    pricePerDay: 15000,
    available: true,
    category: "Luxury",
  },
  {
    id: 7,
    name: "Safari Jeep",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop",
    rating: 4,
    reviews: "1.5K Reviews",
    passengers: 8,
    transmission: "Manual",
    fuel: "Diesel",
    airConditioning: false,
    mileage: "250 km (daily)",
    extraCharge: "$0.70/km",
    originalPrice: "RS. 10,000",
    price: "RS. 8,500",
    pricePerDay: 8500,
    available: true,
    category: "Safari Jeep",
  },
  {
    id: 8,
    name: "Audi A6",
    image:
      "https://images.unsplash.com/photo-1610768764270-790fbec18178?w=400&h=300&fit=crop",
    rating: 5,
    reviews: "2.2K Reviews",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    airConditioning: true,
    mileage: "380 km (daily)",
    extraCharge: "$0.55/km",
    originalPrice: "RS. 17,000",
    price: "RS. 14,500",
    pricePerDay: 14500,
    available: true,
    category: "Luxury",
  },
  {
    id: 9,
    name: "Toyota Land Cruiser",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
    rating: 5,
    reviews: "3.5K Reviews",
    passengers: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    airConditioning: true,
    mileage: "320 km (daily)",
    extraCharge: "$0.65/km",
    originalPrice: "RS. 22,000",
    price: "RS. 18,000",
    pricePerDay: 18000,
    available: true,
    category: "SUVs",
  },
  {
    id: 10,
    name: "Honda City",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop",
    rating: 4,
    reviews: "1.9K Reviews",
    passengers: 5,
    transmission: "Manual",
    fuel: "Petrol",
    airConditioning: true,
    mileage: "420 km (daily)",
    extraCharge: "$0.40/km",
    originalPrice: "RS. 9,000",
    price: "RS. 7,500",
    pricePerDay: 7500,
    available: true,
    category: "Cars",
  },
  {
    id: 11,
    name: "Yamaha Fascino",
    image:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop",
    rating: 4,
    reviews: "1.2K Reviews",
    passengers: 2,
    transmission: "Manual",
    fuel: "Petrol",
    airConditioning: false,
    mileage: "90 km (daily)",
    extraCharge: "$0.25/km",
    originalPrice: "RS. 3,000",
    price: "RS. 2,500",
    pricePerDay: 2500,
    available: true,
    category: "Scooty",
  },
  {
    id: 12,
    name: "Toyota Hiace",
    image:
      "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=400&h=300&fit=crop",
    rating: 4,
    reviews: "1.7K Reviews",
    passengers: 8,
    transmission: "Manual",
    fuel: "Diesel",
    airConditioning: true,
    mileage: "280 km (daily)",
    extraCharge: "$0.55/km",
    originalPrice: "RS. 13,000",
    price: "RS. 11,000",
    pricePerDay: 11000,
    available: true,
    category: "Vans",
  },
];

// Helper function to get vehicle by ID
export const getVehicleById = (id: number): Vehicle | undefined => {
  return allVehicles.find((vehicle) => vehicle.id === id);
};

// Helper function to filter vehicles by category
export const getVehiclesByCategory = (category: string): Vehicle[] => {
  if (category === "All") return allVehicles;
  return allVehicles.filter((vehicle) => vehicle.category === category);
};

// Helper function to get vehicles by multiple filters
export const filterVehicles = (filters: {
  category?: string;
  transmission?: string[];
  passengers?: number[];
  airConditioning?: boolean[];
  priceRange?: [number, number];
}): Vehicle[] => {
  let filtered = allVehicles;

  // Category filter
  if (filters.category && filters.category !== "All") {
    filtered = filtered.filter((v) => v.category === filters.category);
  }

  // Transmission filter
  if (filters.transmission && filters.transmission.length > 0) {
    filtered = filtered.filter((v) =>
      filters.transmission!.includes(v.transmission)
    );
  }

  // Passengers filter
  if (filters.passengers && filters.passengers.length > 0) {
    filtered = filtered.filter((v) =>
      filters.passengers!.includes(v.passengers)
    );
  }

  // Air Conditioning filter
  if (filters.airConditioning && filters.airConditioning.length > 0) {
    filtered = filtered.filter((v) =>
      filters.airConditioning!.includes(v.airConditioning)
    );
  }

  // Price Range filter
  if (filters.priceRange) {
    filtered = filtered.filter(
      (v) =>
        v.pricePerDay >= filters.priceRange![0] &&
        v.pricePerDay <= filters.priceRange![1]
    );
  }

  return filtered;
};
