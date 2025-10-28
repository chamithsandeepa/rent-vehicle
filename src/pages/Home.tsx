import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import BookVehicle from "@/components/BookVehicle";
import VehicleFleet from "@/components/Vehicles";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQ from "../components/FAQs";
import GetInTouch from "../components/GetInTouch";
import CTABanner from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative pb-20">
        <HeroSection />
      </div>
      <div className="relative z-20 -mt-32 px-4 mb-16">
        <div className="max-w-5xl mx-auto">
          <BookVehicle />
        </div>
      </div>
      <HowItWorks />
      <VehicleFleet />
      <WhyChooseUs />
      <FAQ />
      <GetInTouch />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Home;
