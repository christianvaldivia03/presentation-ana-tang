'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Centro Psicológico Integral Didáctica',
      period: 'Feb 2025 - Actualidad',
      role: 'Psicóloga Clínica',
      description: 'Terapia con niños de 3 a 12 años con trastornos del neurodesarrollo, modificación de conducta e intervención individualizada.',
    },
    {
      company: 'I.E. San Marcos Comas',
      period: 'May 2024 - Ene 2025',
      role: 'Psicóloga Escolar',
      description: 'Tutorías, salud mental, talleres, intervención con docentes y padres.',
    },
    {
      company: 'Consultoría CSCC',
      period: 'Mar 2023 - Jul 2023',
      role: 'Especialista en Recursos Humanos',
      description: 'Reclutamiento y selección masiva, atracción de talento y evaluación de perfiles.',
    },
    {
      company: 'Centro Psicológico Waywa Kuna',
      period: 'Jul 2022 - Sep 2023',
      role: 'Psicóloga Organizacional',
      description: 'Recursos Humanos, clima laboral, talleres e informes.',
    },
    {
      company: 'I.E Fe y Alegría N°2',
      period: 'Mar 2021 - Dic 2022',
      role: 'Psicóloga Educativa',
      description: 'Talleres escolares, atención psicológica, escuela para padres.',
    },
    {
      company: 'Santa María de Nazareth',
      period: 'Mar 2021 - Dic 2021',
      role: 'Psicóloga Educativa',
      description: 'Acompañamiento emocional y educación virtual.',
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
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
              Experiencia Profesional
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-primary mx-auto rounded-full"
            ></motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            className="space-y-8 relative"
          >
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent md:transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white transform -translate-x-1.5 md:-translate-x-2 top-4"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/10 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase size={20} className="text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.company}
                        </h3>
                        <p className="text-sm text-primary font-medium">{exp.period}</p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-accent mb-2">
                      {exp.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
