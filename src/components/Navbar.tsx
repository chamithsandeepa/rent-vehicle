// ========================================
// Navbar.tsx
// ========================================
import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Steps", href: "#steps" },
    { name: "Book Car", href: "#fleet" },
    { name: "Why Choose Us", href: "#why-choose" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact Us", href: "#get-in-touch" },
  ];

  // Detect scroll position (only for home page)
  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(false); // Always reset scroll state on other pages
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Handle navigation to profile page
  const handleProfileClick = () => {
    navigate("/profile");
    setMenuOpen(false);
  };

  // Handle navigation to home with section scroll
  const handleNavClick = (href: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  // Determine navbar style based on page + scroll
  const navbarClass =
    location.pathname !== "/"
      ? "backdrop-blur-md bg-gray-900/90 border border-gray-700 shadow-lg" // Always white-glass on other pages
      : isScrolled
      ? "backdrop-blur-md bg-gray-900/90 border border-gray-700 shadow-lg" // Dark after scroll
      : "backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg"; // White-glass initially on home

  const textColorClass =
    location.pathname !== "/"
      ? "text-gray-100 hover:text-[#f5a623]"
      : isScrolled
      ? "text-gray-100 hover:text-[#f5a623]"
      : "text-white hover:text-[#f5a623]";

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%] rounded-2xl transition-all duration-500 ${navbarClass}`}
    >
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo Section */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/logo.png"
            alt="logo"
            className="w-50 h-10 object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`text-[16px] font-medium transition-all duration-300 ${textColorClass} ${
                link.name === "Home" && location.pathname === "/"
                  ? "text-[#f5a623]"
                  : ""
              }`}
            >
              {link.name}
            </button>
          ))}
          <User
            onClick={handleProfileClick}
            className={`w-5 h-5 cursor-pointer transition-colors duration-300 ${textColorClass}`}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors ${textColorClass}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`md:hidden flex flex-col items-center gap-4 pb-4 border-t rounded-b-3xl transition-all ${
              location.pathname !== "/"
                ? "bg-white/10 border-white/20"
                : isScrolled
                ? "bg-gray-900/90 border-gray-700"
                : "bg-white/10 border-white/20"
            }`}
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-[16px] font-medium transition-all duration-300 ${textColorClass}`}
              >
                {link.name}
              </button>
            ))}
            <User
              onClick={handleProfileClick}
              className={`w-5 h-5 mt-2 cursor-pointer transition-colors ${textColorClass}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
