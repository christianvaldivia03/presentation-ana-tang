'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Mi hijo mejoró notablemente su conducta y autoestima. La atención de la Lic. Ana fue muy profesional y cálida.',
      author: 'María G.',
      role: 'Madre',
      rating: 5,
    },
    {
      text: 'Recibimos orientación clara y humana como familia. Los talleres para padres fueron muy prácticos y útiles.',
      author: 'Carlos L.',
      role: 'Padre',
      rating: 5,
    },
    {
      text: 'Excelente profesional, transmite mucha confianza. Mi adolescente se sintió cómodo desde la primera sesión.',
      author: 'Ana P.',
      role: 'Madre',
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="testimonials"
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
          {/* Section Title */}
          <div className="text-center space-y-4">
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-serif font-bold text-foreground"
            >
              Testimonios
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-primary mx-auto rounded-full"
            ></motion.div>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Lo que dicen mis pacientes y familias sobre el acompañamiento terapéutico
            </motion.p>
          </div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 border border-primary/10 shadow-sm hover:shadow-lg transition-shadow"
              >
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
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-primary/10">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
