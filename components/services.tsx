"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Users, Heart, BookOpen, Brain, Lightbulb, School } from "lucide-react";
import {
  sectionTitleVariants,
  sectionTitleItemVariants,
  cardVariants,
  SPRING_SOFT,
} from "@/lib/animation-variants";

const Services = () => {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      icon: Users,
      title: "Terapia Infantil",
      description:
        "Modificación de conducta, habilidades sociales y desarrollo emocional para niños de 3 a 12 años.",
      color: "from-primary/20 to-primary/10",
    },
    {
      icon: Heart,
      title: "Terapia para Adolescentes",
      description:
        "Autoestima, ansiedad, regulación emocional y orientación personal para adolescentes.",
      color: "from-accent/20 to-accent/10",
    },
    {
      icon: BookOpen,
      title: "Escuela para Padres",
      description:
        "Crianza positiva, límites saludables y comunicación familiar efectiva.",
      color: "from-secondary/40 to-secondary/20",
    },
    {
      icon: Brain,
      title: "Evaluación Psicológica",
      description:
        "Aplicación de pruebas, informes psicológicos y seguimiento profesional personalizado.",
      color: "from-primary/15 to-secondary/15",
    },
    {
      icon: Lightbulb,
      title: "Talleres y Charlas",
      description:
        "Salud mental escolar, convivencia e inteligencia emocional para diferentes espacios.",
      color: "from-accent/15 to-primary/15",
    },
    {
      icon: School,
      title: "Orientación Institucional",
      description:
        "Intervención en colegios, programas preventivos y capacitación docente.",
      color: "from-secondary/20 to-accent/10",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-primary/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Title */}
        <motion.div
          variants={sectionTitleVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center space-y-4"
        >
          <motion.h2
            variants={sectionTitleItemVariants}
            className="text-4xl sm:text-5xl font-serif font-bold text-foreground"
          >
            Servicios Psicológicos
          </motion.h2>
          <motion.div
            variants={sectionTitleItemVariants}
            className="w-20 h-1 bg-primary mx-auto rounded-full"
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -8,
                        boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
                        transition: SPRING_SOFT,
                      }
                }
                className={`bg-linear-to-br ${service.color} rounded-2xl p-8 border border-primary/10 shadow-sm group cursor-default`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/40 rounded-lg group-hover:bg-white/60 transition-colors">
                      <Icon size={28} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          variants={sectionTitleItemVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center pt-8"
        >
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-accent transition-colors"
          >
            Consulta sobre servicios
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
