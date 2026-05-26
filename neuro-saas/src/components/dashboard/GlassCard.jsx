import React from "react";
import { motion } from "framer-motion";

const GlassCard = ({
  children,
  className = "",
  hover = true,
  padding = "p-5 md:p-6",
}) => {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.01,
            }
          : {}
      }
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className={`
        relative
        overflow-hidden
        rounded-2xl
        md:rounded-3xl

        border
        border-gray-200
        dark:border-white/10

        bg-white
        dark:bg-white/[0.04]

        backdrop-blur-2xl

        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]

        transition-all
        duration-300

        hover:border-blue-500/20
        hover:shadow-[0_15px_50px_rgba(59,130,246,0.12)]

        ${padding}
        ${className}
      `}
    >

      {/* TOP GRADIENT */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-blue-500/40
          to-transparent
        "
      />

      {/* GLOW */}
      <div
        className="
          absolute
          -top-24
          -right-24
          w-48
          h-48
          bg-blue-500/10
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>

    </motion.div>
  );
};

export default GlassCard;