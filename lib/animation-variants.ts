import type { Variants, Transition } from "framer-motion";

// ─── Easing curves ────────────────────────────────────────────────────────────
/** Long ease-out — serene, therapeutic feel */
export const EASE_OUT_QUART: [number, number, number, number] = [
  0.25, 0.46, 0.45, 0.94,
];

/** Spring preset — low stiffness for a calm, floating sensation */
export const SPRING_GENTLE: Transition = {
  type: "spring",
  stiffness: 55,
  damping: 20,
  mass: 1,
};

/** Spring preset — slightly snappier, for hover/interactive feedback */
export const SPRING_SOFT: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 22,
};

// ─── Section title group ──────────────────────────────────────────────────────
export const sectionTitleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.05,
    },
  },
};

export const sectionTitleItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_QUART },
  },
};

// ─── Staggered card (per-card whileInView, custom index delay) ────────────────
/**
 * Usage:
 *   <motion.div
 *     custom={index}
 *     variants={cardVariants}
 *     initial="hidden"
 *     whileInView="visible"
 *     viewport={{ once: true, amount: 0.15 }}
 *   />
 */
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.13,
      duration: 0.75,
      ease: EASE_OUT_QUART,
    },
  }),
};

/** Subtle lift on hover — spring-driven */
export const cardHoverVariants = {
  rest: { y: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" },
  hover: {
    y: -8,
    boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
    transition: SPRING_SOFT,
  },
};

// ─── Fade-slide up (generic) ──────────────────────────────────────────────────
export const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE_OUT_QUART },
  },
};
