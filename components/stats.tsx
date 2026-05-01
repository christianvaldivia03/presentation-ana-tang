"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "framer-motion";
import {
  sectionTitleVariants,
  sectionTitleItemVariants,
  EASE_OUT_QUART,
} from "@/lib/animation-variants";

// ─── Animated counter ─────────────────────────────────────────────────────────
interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2.2,
}: CounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      count.set(target);
      return;
    }
    const controls = animate(count, target, {
      duration,
      ease: EASE_OUT_QUART,
    });
    return () => controls.stop();
  }, [isInView, target, duration, count, shouldReduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

// ─── Stats data ───────────────────────────────────────────────────────────────
const STATS = [
  {
    value: 8,
    suffix: "+",
    label: "Años de experiencia",
    description: "acompañando familias y niños",
  },
  {
    value: 500,
    suffix: "+",
    label: "Pacientes atendidos",
    description: "con resultados comprobados",
  },
  {
    value: 15,
    suffix: "+",
    label: "Colegios intervenidos",
    description: "en programas preventivos",
  },
  {
    value: 98,
    suffix: "%",
    label: "Satisfacción familiar",
    description: "según seguimiento post-consulta",
  },
];

// ─── Card variants ─────────────────────────────────────────────────────────────
const statCardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.14,
      duration: 0.72,
      ease: EASE_OUT_QUART,
    },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────
const Stats = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="stats"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent to-primary/5"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
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
            En números
          </motion.h2>
          <motion.div
            variants={sectionTitleItemVariants}
            className="w-20 h-1 bg-primary mx-auto rounded-full"
          />
          <motion.p
            variants={sectionTitleItemVariants}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Resultados que reflejan dedicación y compromiso con cada familia
          </motion.p>
        </motion.div>

        {/* Counter grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              variants={statCardVariants}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative flex flex-col items-center text-center gap-2 rounded-2xl border border-primary/10 bg-white/70 backdrop-blur-sm p-8 shadow-sm"
            >
              {/* Decorative ring */}
              <span
                aria-hidden
                className="absolute inset-0 rounded-2xl ring-1 ring-primary/10 pointer-events-none"
              />

              <p className="text-4xl sm:text-5xl font-serif font-bold text-primary leading-none">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2 + index * 0.15}
                />
              </p>

              <p className="font-semibold text-foreground text-sm sm:text-base leading-tight">
                {stat.label}
              </p>

              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
