'use client'

import { motion } from 'framer-motion'
import { Heart, Award, Users, BookOpen } from 'lucide-react'
import { GenerateImage } from '@/components/generate-image'

const Hero = () => {
  const badges = [
    { icon: BookOpen, text: 'Licenciada en Psicología' },
    { icon: Award, text: 'UPN' },
    { icon: Heart, text: 'Atención Personalizada' },
    { icon: Users, text: 'Terapia Infantil' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 via-background to-transparent relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <motion.div
        variants={containerVariants}
        initial={false}
        animate="visible"
        className="max-w-7xl w-full mx-auto relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                <span className="text-primary">Acompañamiento</span> psicológico profesional
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Atención psicológica especializada para niños, adolescentes y familias, con un enfoque humano, empático y basado en evidencia.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => {
                  const element = document.getElementById('contact')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-accent transition-colors text-center"
              >
                Reservar Consulta
              </button>
              <a
                href="https://wa.me/51962327662"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/5 transition-colors text-center"
              >
                WhatsApp
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 pt-8">
              {badges.map((badge, index) => {
                const Icon = badge.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur rounded-lg border border-primary/10"
                  >
                    <Icon size={20} className="text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {badge.text}
                    </span>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="relative h-full min-h-[400px] md:min-h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl"></div>
            <div className="relative z-10 w-full h-full bg-gradient-to-br from-primary/30 to-secondary rounded-3xl flex items-center justify-center overflow-hidden">
              <GenerateImage />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-12"
        >
          <div className="text-primary">↓</div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
