'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
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
    <footer className="bg-foreground text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-12"
        >
          {/* About */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">
              Lic. Ana Alessandra Tang Bernilla
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Psicóloga Licenciada especializada en atención infantil, adolescentes y familias con enfoque empático y basado en evidencia.
            </p>
          </motion.div>

            initial={false}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-white transition-colors"
                >
                  Experiencia
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto</h4>
            <div className="space-y-3 text-white/70 text-sm">
              <a
                href="tel:962327662"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone size={18} />
                962 327 662
              </a>
              <a
                href="mailto:anatangbernilla@gmail.com"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail size={18} />
                anatangbernilla@gmail.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Lima, Perú</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/20 mt-12 pt-8 flex justify-center gap-6"
        >
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-8 text-white/50 text-sm"
        >
          <p>
            &copy; 2025 Lic. Ana Alessandra Tang Bernilla. Todos los derechos
            reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
