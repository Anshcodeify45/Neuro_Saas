import React from "react";
import { motion } from "framer-motion";

const GlassCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`
        rounded-3xl
        border border-white/10
        bg-white/5
        dark:bg-white/[0.03]
        backdrop-blur-xl
        shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;