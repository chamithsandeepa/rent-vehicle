// ========================================
// App.tsx
// ========================================
import Home from "./pages/Home";
import CarRentalSection from "./pages/AboutVehicle";
import ProfileBookingPage from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page route - shows the fleet */}
        <Route path="/" element={<Home />} />

        {/* Vehicle details page with dynamic ID parameter */}
        <Route path="/vehicle/:id" element={<CarRentalSection />} />

        {/* Profile and booking page */}
        <Route path="/profile" element={<ProfileBookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
