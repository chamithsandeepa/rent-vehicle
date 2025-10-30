import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FloatingSupport = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating WhatsApp Icon */}
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#EDA200] text-white p-4 rounded-full shadow-lg hover:bg-[#d89200] focus:outline-none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 10 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Center Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="relative w-[500px] max-w-[90%]"
            >
              <Card className="shadow-xl rounded-2xl">
                <CardContent className="p-6 relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <div className="bg-[#FFF4E0] p-2 rounded-full">
                      <MessageCircle className="w-5 h-5 text-[#EDA200]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[16px] text-gray-900">
                        Need Help?
                      </h3>
                      <p className="text-[13px] text-gray-600">
                        We’re here to assist you!
                      </p>
                    </div>
                  </div>

                  {/* Body */}
                  <p className="text-[13px] text-gray-500 mt-3">
                    Have questions about booking, pricing, or our vehicles? Chat
                    with us on WhatsApp for instant support!
                  </p>

                  <Button
                    onClick={() =>
                      window.open("https://wa.me/94771234567", "_blank")
                    }
                    className="w-full mt-5 bg-[#EDA200] hover:bg-[#d89200] text-white rounded-lg font-medium"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingSupport;
