"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, MessageSquare, X } from "lucide-react";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-40 flex flex-col gap-4 pointer-events-none"
    >
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/51962327662?text=Hola,%20me%20gustaría%20agendar%20una%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto"
      >
        <div className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-colors">
          <MessageCircle size={32} className="text-white" />
        </div>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:962327662"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto"
      >
        <div className="w-16 h-16 bg-primary hover:bg-accent rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-colors">
          <MessageSquare size={32} className="text-white" />
        </div>
      </motion.a>
    </motion.div>
  );
};

export default FloatingButtons;
