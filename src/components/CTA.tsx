import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const CTABanner = () => {
  // ✅ Type-safe variants (fixes variant issue)
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.1 },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  const buttonVariants: Variants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      className="py-20 px-4"
      style={{
        background: "linear-gradient(135deg, #EDA200 0%, #FFD375 100%)",
      }}
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Main Heading */}
        <motion.h2
          className="text-[48px] font-bold text-white mb-4 leading-tight"
          variants={headingVariants}
        >
          Have Questions or Need Assistance?
        </motion.h2>

        {/* Sub Heading */}
        <motion.p
          className="text-[24px] text-white mb-8"
          variants={textVariants}
        >
          Our Friendly Team is Here to Help You Every Step of the Way!
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          className="inline-block"
        >
          <Button
            className="bg-white hover:bg-gray-50 text-[16px] font-semibold px-8 py-6 rounded-md shadow-lg flex items-center gap-2 mx-auto transition-all duration-300"
            style={{ color: "#EDA200" }}
          >
            Call Us Now
            <Phone className="w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
