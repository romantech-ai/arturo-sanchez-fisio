"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  className?: string;
  hover?: boolean;
  children: ReactNode;
}

export default function Card({ className, hover = true, children }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "bg-white rounded-2xl p-6 shadow-soft transition-shadow duration-300",
        hover && "hover:shadow-soft-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
