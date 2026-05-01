"use client";

import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";

const Education = () => {
  const certifications = [
    "Evaluación psicológica en niños con TDAH",
    "Estrategias lúdicas en terapia de lenguaje",
    "Atención integral en primera infancia",
    "Técnicas de modificación de conducta en niños, adolescentes y adultos",
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
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Education */}
          <div className="space-y-8">
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-serif font-bold text-foreground text-center"
            >
              Formación Académica
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="max-w-2xl mx-auto bg-white rounded-2xl p-8 border border-primary/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <BookOpen size={32} className="text-primary flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Universidad Privada del Norte
                  </h3>
                  <p className="text-primary font-semibold mt-1">Psicología</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    2017 - 2023
                  </p>
                </div>
              </div>
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <p className="text-sm font-semibold text-primary">
                  Título Profesional otorgado en 2025
                </p>
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-serif font-bold text-foreground text-center"
            >
              Capacitación Continua
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 border border-primary/10 shadow-sm hover:shadow-md transition-shadow flex gap-4"
                >
                  <Award
                    size={24}
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                  <p className="text-foreground font-medium leading-relaxed">
                    {cert}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
