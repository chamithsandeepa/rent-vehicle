"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, easeOut } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

const FAQ = () => {
  // ✅ Start with all boxes closed
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How do I book a vehicle?",
      answer:
        "Browse our collection, select your preferred vehicle, set the pickup and return dates, and submit your booking request. Payment is made in person when you collect the vehicle.",
    },
    {
      id: 2,
      question: "What types of vehicles are available?",
      answer:
        "We offer a range of vehicles to suit your needs, including vans, cars, SUVs, jeeps, and scooties.",
    },
    {
      id: 3,
      question: "How do I pay for my booking?",
      answer:
        "Payment is done face-to-face on site when you pick up the vehicle.",
    },
    {
      id: 4,
      question: "How can I contact you for assistance?",
      answer:
        "You can reach us anytime through the “Contact Us” button in the Get in Touch section. When you click it, you’ll be automatically redirected to our WhatsApp chat to talk directly with our support team.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-4 bg-white overflow-hidden scroll-mt-7">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-[40px] font-bold mb-3">
            Got <span style={{ color: "#EDA200" }}>Questions?</span> We've Got
            Answers!
          </h2>
          <p className="text-[20px] text-gray-600">
            Find solutions to common queries fast
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image */}
          <motion.div
            className="flex justify-center items-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: easeOut }}
          >
            <motion.img
              src="/images/cuate.png"
              alt="FAQ Illustration"
              className="w-full max-w-md h-auto"
              whileHover={{ rotate: 1, scale: 1.05 }}
              transition={{ duration: 0.5, ease: easeOut }}
            />
          </motion.div>

          {/* Right Side - FAQ Accordion */}
          <motion.div className="space-y-4" variants={containerVariants}>
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: easeOut }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[18px] font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: easeOut }}
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-gray-700" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-700" />
                    )}
                  </motion.div>
                </button>

                {/* Animated Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: easeOut }}
                  className="overflow-hidden"
                >
                  {openIndex === index && (
                    <div className="px-5 pb-5">
                      <div
                        className="border-l-4 pl-4 py-2"
                        style={{ borderColor: "#EDA200" }}
                      >
                        <p className="text-[16px] text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
