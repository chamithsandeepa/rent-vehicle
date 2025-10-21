import { useState } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { Play } from "lucide-react";

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = ["/video1.mp4", "/video2.mp4", "/video3.mp4"];

  // ✅ Corrected Variants for TypeScript
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: easeOut },
    }),
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: easeOut } },
  };

  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-10 max-w-3xl">
        <motion.h1
          custom={0}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-[48px] font-bold leading-tight mb-6"
        >
          Safe And Fast Way <br /> To{" "}
          <span className="text-[#EDA200]">Book</span> Your Vehicle
        </motion.h1>

        <motion.p
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-[16px] text-gray-200 mb-8 leading-relaxed max-w-sm"
        >
          We offer a wide range of rental vehicles to suit your needs, whether
          you're planning a weekend getaway, a business trip, or a long
          vacation.
        </motion.p>

        <motion.button
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05, backgroundColor: "#f8b835" }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#EDA200] text-black font-semibold px-6 py-3 rounded-lg transition-all w-fit"
        >
          Book ASAP
        </motion.button>

        {/* Stats Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap divide-x divide-gray-400 mt-10 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="pr-4 transition-transform"
          >
            <p className="text-[24px] font-semibold text-[#EDA200]">4.8</p>
            <p className="text-[16px] text-gray-200">AVERAGE REVIEWS</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="px-4 transition-transform"
          >
            <p className="text-[24px] font-semibold text-[#EDA200]">10,000+</p>
            <p className="text-[16px] text-gray-200">TRUSTED TRAVELERS</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="px-4 transition-transform"
          >
            <p className="text-[24px] font-semibold text-[#EDA200]">24 / 7</p>
            <p className="text-[16px] text-gray-200">SERVICES</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Slider */}
      <div className="relative z-10 w-full lg:w-[50%] flex justify-center items-center px-6 md:px-10">
        <div className="relative w-full max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVideo}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <video
                src={videos[currentVideo]}
                autoPlay
                muted
                loop
                className="w-full h-[280px] object-cover rounded-3xl"
              ></video>

              {/* Play Icon Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: easeOut }}
                className="absolute inset-0 flex items-center justify-center bg-black/30"
              >
                <Play className="w-14 h-14 text-white opacity-90 animate-pulse" />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <motion.div
            variants={fadeInUp}
            custom={3}
            initial="hidden"
            animate="visible"
            className="flex justify-center items-center gap-3 mt-5"
          >
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideo(index)}
                className={`w-5 h-2 rounded-full transition-all duration-300 ${
                  index === currentVideo
                    ? "bg-[#EDA200] w-8"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              ></button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
