"use client";

import { motion, easeOut } from "framer-motion";
import { Button } from "@/components/ui/button";

// ✅ Animation Variants with proper easing types
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut, // ✅ use imported easing function
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

const GetInTouch = () => {
  return (
    <section id="get-in-touch" className="py-16 px-4 bg-white overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={textVariants}>
          <h2 className="text-[40px] font-bold mb-3">
            Get <span style={{ color: "#EDA200" }}>In</span> Touch
          </h2>
          <p className="text-[20px] text-gray-600">
            Have questions or need assistance? Our team is just a message away.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            className="space-y-8"
            variants={textVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            <p className="text-[20px] text-gray-700 leading-relaxed">
              Let's make your journey smooth! Message us for fast support and
              guidance.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: easeOut }}
            >
              <Button
                className="text-white text-[18px] font-semibold px-8 py-6 rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#EDA200" }}
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="flex justify-center items-center"
            variants={imageVariants}
          >
            <motion.img
              src="/images/amico.png"
              alt="Contact Us Illustration"
              className="w-full max-w-md h-auto"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5, ease: easeOut }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default GetInTouch;
