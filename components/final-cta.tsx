"use client";

import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";
import { useState } from "react";

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

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
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-secondary/10"
    >
      <div className="max-w-5xl mx-auto">
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
              Da el primer paso hacia tu bienestar emocional
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Estoy aquí para acompañarte en tu camino hacia el bienestar mental
              y emocional. Contáctame hoy mismo.
            </motion.p>
          </div>

          {/* Content Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Quick Contact */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Contacto Rápido
              </h3>

              <a
                href="https://wa.me/51962327662?text=Hola,%20me%20gustaría%20agendar%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-white rounded-xl border-2 border-primary hover:border-accent transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Send size={28} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      WhatsApp
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Envía un mensaje rápido y recibirás respuesta pronto
                    </p>
                    <p className="text-primary font-semibold mt-2">
                      962 327 662
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="tel:962327662"
                className="group block p-6 bg-white rounded-xl border-2 border-accent hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Phone size={28} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Llamar
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Llama directamente para agendar tu cita
                    </p>
                    <p className="text-accent font-semibold mt-2">
                      962 327 662
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-4 bg-white rounded-xl p-8 border border-primary/10 shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-foreground">
                Envía tu mensaje
              </h3>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Tu teléfono"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Cuéntame sobre tu situación..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors"
              >
                {submitted ? "✓ Mensaje enviado" : "Enviar mensaje"}
              </button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
