'use client'

import { motion } from 'framer-motion'
import { BookOpen, Zap, Target, Share2 } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: BookOpen, value: '+4 años', label: 'de experiencia' },
    { icon: Target, value: 'Infantil', label: 'y adolescente' },
    { icon: Zap, value: 'Conductual', label: 'Intervención' },
    { icon: Share2, value: 'Psicoeducativos', label: 'Talleres' },
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
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
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
              Sobre mí
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-primary mx-auto rounded-full"
            ></motion.div>
          </div>

          {/* About Content */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-primary/10"
          >
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              <span className="font-semibold text-foreground">
                Licenciada en Psicología por la Universidad Privada del Norte.
              </span>{' '}
              Profesional comprometida con el bienestar emocional, el desarrollo integral y la salud mental. Destaco por mi empatía, comunicación asertiva, liderazgo, pensamiento crítico y capacidad para acompañar procesos terapéuticos efectivos.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl p-8 border border-primary/10 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="flex justify-center mb-4">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
