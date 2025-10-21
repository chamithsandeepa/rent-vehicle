import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Car, MapPin, CheckCircle } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Choose Your Vehicle",
    description:
      "Browse our full collection and pick the car, van, or SUV that suits your trip.",
    image: "/images/step1.png",
    icon: Car,
  },
  {
    id: 2,
    title: "Select Date & Location",
    description:
      "Set your pickup and return dates and choose your preferred location.",
    image: "/images/step2.png",
    icon: MapPin,
  },
  {
    id: 3,
    title: "Confirm Your Booking",
    description: "Submit your request and receive instant confirmation.",
    image: "/images/step3.png",
    icon: CheckCircle,
  },
];

// Animation Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: ["easeInOut"] },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: ["easeInOut"] },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: ["easeInOut"] },
  },
};

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const ActiveIcon = steps[activeStep].icon;

  return (
    <motion.section
      id="steps"
      className="py-20 bg-white select-none"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-[40px] font-bold text-gray-900">
          How <span className="text-[#EDA200]">It</span> Works
        </h2>
        <p className="text-[20px] text-[#838383] mt-2">
          Explore the following steps and we will help you find the type of
          vehicle you need.
        </p>
      </motion.div>

      {/* Step Container */}
      <motion.div
        className="relative bg-[#FFFBF0] rounded-2xl shadow-sm w-full max-w-6xl mx-auto overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-12 transition-all duration-500"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Content */}
        <motion.div
          className="flex-1 transition-all duration-500"
          key={steps[activeStep].id}
          variants={fadeRight}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-2 font-semibold mb-3">
            <div className="bg-[#EDA200] text-white w-10 h-10 flex items-center justify-center rounded-full">
              <ActiveIcon className="w-5 h-5" />
            </div>
            <span className="uppercase tracking-wide text-[#EDA200]">
              Step 0{steps[activeStep].id}
            </span>
          </div>

          <h3 className="text-[32px] font-bold text-gray-900 mb-4 transition-all duration-500">
            {steps[activeStep].title}
          </h3>
          <p className="text-[24px] text-[#696969] leading-relaxed transition-all duration-500">
            {steps[activeStep].description}
          </p>
        </motion.div>

        {/* Right Image + Dots */}
        <motion.div
          className="flex items-center gap-4 mt-10 md:mt-0 md:ml-12"
          key={`img-${activeStep}`}
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
        >
          {/* Image */}
          <motion.img
            src={steps[activeStep].image}
            alt={steps[activeStep].title}
            className="w-[300px] h-auto rounded-2xl object-contain transition-all duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: ["easeInOut"] }}
          />

          {/* Dots */}
          <div className="flex flex-col gap-2">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.2 }}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                  index === activeStep
                    ? "bg-[#EDA200] w-3 h-3"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              ></motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HowItWorks;
