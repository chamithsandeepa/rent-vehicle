import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Globe } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Footer: React.FC = () => {
  // ✅ Safe variant types (no TS issues)
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  const iconHover: Variants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.15,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <section>
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Main Footer Content */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Left Section - Logo and Description */}
            <motion.div className="space-y-6" variants={fadeUp} custom={0}>
              <div className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Voyago Wheels Logo"
                  className="w-55 h-7"
                />
              </div>

              <p className="text-gray-400 text-base leading-relaxed">
                Your one-stop platform to browse, choose, and book vehicles
                easily for every trip — reliable, safe, and hassle-free.
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                    aria-label="Social Link"
                    variants={iconHover}
                    initial="rest"
                    whileHover="hover"
                    whileTap="hover"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Middle Section - Quick Links */}
            <motion.div variants={fadeUp} custom={1}>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  "Home",
                  "Simple Steps",
                  "Book Vehicles",
                  "Why Choose Us",
                  "Contact Us",
                ].map((item, idx) => (
                  <motion.li key={idx} variants={fadeUp} custom={idx + 1}>
                    <a
                      href="#"
                      className="text-base text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Section - Supports */}
            <motion.div variants={fadeUp} custom={2}>
              <h3 className="text-lg font-semibold mb-6">Supports</h3>
              <ul className="space-y-3 mb-8">
                {["Contact Us", "FAQs", "Help Center"].map((support, idx) => (
                  <motion.li key={idx} variants={fadeUp} custom={idx + 2}>
                    <a
                      href="#"
                      className="text-base text-gray-400 hover:text-white transition-colors"
                    >
                      {support}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Language Selector */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <div className="flex gap-3 text-base text-gray-400">
                    <button className="hover:text-white transition-colors">
                      EN
                    </button>
                    <button className="hover:text-white transition-colors">
                      සිංහල
                    </button>
                    <button className="hover:text-white transition-colors">
                      தமிழ்
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="pt-8 border-t border-gray-800 text-center"
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-500">
              © 2025 VoyagoWheels Sri Lanka. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
