import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1];

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay,
      ease: easing,
    },
  }),
};

const Reveal = ({
  children,
  className = "",
  delay = 0,
  amount = 0.2,
  once = true,
  as = "div",
}) => {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (shouldReduceMotion) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      custom={delay}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
