"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Atiendes niños y adolescentes?",
      answer:
        "Sí, especializada en atención psicológica para niños de 3 a 12 años y adolescentes. Utilizó enfoques lúdicos y adaptados a cada edad para crear un ambiente seguro y confiable.",
    },
    {
      question: "¿Cómo se agenda una cita?",
      answer:
        "Puedes contactarme vía WhatsApp al 962 327 662 o llamar directamente. También puedes usar el formulario de contacto en la página. Respondo en menos de 24 horas.",
    },
    {
      question: "¿La atención puede ser virtual?",
      answer:
        "Sí, ofrezco sesiones presenciales en Lima y sesiones virtuales por videoconferencia, según tu comodidad y disponibilidad.",
    },
    {
      question: "¿También orientas a padres?",
      answer:
        "Por supuesto. Ofrezco escuela para padres, talleres de crianza positiva y orientación familiar para complementar el proceso terapéutico de los niños y adolescentes.",
    },
    {
      question: "¿Realizas evaluaciones psicológicas?",
      answer:
        "Sí, realizó evaluaciones psicológicas completas con aplicación de pruebas estandarizadas, informes detallados y seguimiento profesional personalizado.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Section Title */}
          <div className="text-center space-y-4">
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-serif font-bold text-foreground"
            >
              Preguntas Frecuentes
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-primary mx-auto rounded-full"
            ></motion.div>
          </div>

          {/* FAQ Items */}
          <motion.div variants={containerVariants} className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border border-primary/10 rounded-xl overflow-hidden hover:border-primary/30 transition-colors"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-colors flex items-center justify-between"
                >
                  <span className="text-left font-semibold text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 py-4 border-t border-primary/10 bg-white"
                    >
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
