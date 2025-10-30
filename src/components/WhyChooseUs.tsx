import {
  Car,
  CalendarCheck,
  ShieldCheck,
  DollarSign,
  HeartHandshake,
  Map,
} from "lucide-react";
import { motion, easeOut } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: Car,
      title: "Wide vehicle selection",
      description:
        "Choose from a diverse fleet of cars, SUVs, vans, and more, ensuring you find the perfect vehicle for your need.",
    },
    {
      id: 2,
      icon: CalendarCheck,
      title: "Flexible Booking",
      description:
        "Easily set your pickup and return dates and choose the location that works best for you, making planning your trip simple.",
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Reliable & Safe",
      description:
        "All vehicles are regularly inspected and maintained to ensure a safe and worry-free journey.",
    },
    {
      id: 4,
      icon: DollarSign,
      title: "Affordable Options",
      description:
        "Competitive pricing for every budget, from economy cars to premium vehicles for extra comfort.",
    },
    {
      id: 5,
      icon: HeartHandshake,
      title: "Safe-to-Face Support",
      description:
        "Friendly staff ready to assist you in person, with smooth communication and on-site payment.",
    },
    {
      id: 6,
      icon: Map,
      title: "Comfortable Travel",
      description:
        "Enjoy clean, cozy, and well-equipped vehicles designed for a comfortable and pleasant ride.",
    },
  ];

  // ✅ Framer Motion Variants (TypeScript-safe)
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.8, ease: easeOut },
    }),
  };

  return (
    <section
      id="why-choose"
      className="py-16 px-4 bg-white overflow-hidden scroll-mt-7"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] font-bold mb-3">
            Why <span style={{ color: "#EDA200" }}>Choose</span> Us
          </h2>
          <p className="text-[20px] text-gray-600">
            Your journey made simple, safe, and enjoyable.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, i) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: easeOut },
                }}
                className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-white hover:shadow-2xl transition-all"
              >
                {/* Icon Circle */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#EDA200" }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-[24px] font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[16px] text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
