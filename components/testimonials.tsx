"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import {
  sectionTitleVariants,
  sectionTitleItemVariants,
  cardVariants,
  SPRING_SOFT,
} from "@/lib/animation-variants";

const Testimonials = () => {
  const shouldReduceMotion = useReducedMotion();

  const testimonials = [
    {
      text: "Mi hijo mejoró notablemente su conducta y autoestima. La atención de la Lic. Ana fue muy profesional y cálida.",
      author: "María G.",
      role: "Madre",
      rating: 5,
    },
    {
      text: "Recibimos orientación clara y humana como familia. Los talleres para padres fueron muy prácticos y útiles.",
      author: "Carlos L.",
      role: "Padre",
      rating: 5,
    },
    {
      text: "Excelente profesional, transmite mucha confianza. Mi adolescente se sintió cómodo desde la primera sesión.",
      author: "Ana P.",
      role: "Madre",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
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
            Testimonios
          </motion.h2>
          <motion.div
            variants={sectionTitleItemVariants}
            className="w-20 h-1 bg-primary mx-auto rounded-full"
          />
          <motion.p
            variants={sectionTitleItemVariants}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Lo que dicen mis pacientes y familias sobre el acompañamiento
            terapéutico
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
              className="bg-white rounded-2xl p-8 border border-primary/10 shadow-sm cursor-default"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground italic leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-primary/10">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
