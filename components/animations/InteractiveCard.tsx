'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function InteractiveCard({
  children,
  className = '',
  onClick,
}: InteractiveCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.015, y: -2 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`transition-shadow hover:shadow-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
