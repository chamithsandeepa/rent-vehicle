// src/types/vehicle.ts

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
  pricePerDay: number; // Numeric price for filtering
  available: boolean;
  category?: "Cars" | "SUVs" | "Vans" | "Scooty" | "Safari Jeep" | "Luxury";
}

export interface FilterOptions {
  transmission: string[];
  seats: string[];
  airConditioning: string[];
  priceRange: [number, number];
}

export interface Specification {
  icon: any;
  label: string;
  value?: string;
}
