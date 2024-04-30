"use client";

import React from "react";
import { motion, useSpring, MotionValue } from "framer-motion";
import { distance } from "popmotion";

type SkillCellProps = {
  active: { row: number; col: number };
  setActive: UnaryHandler<{ row: number; col: number }>;
  colIndex: number;
  rowIndex: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
  size: number;
  gap: number;
} & Props;

export const SkillCell: React.FC<SkillCellProps> = ({
  active,
  setActive,
  colIndex,
  rowIndex,
  x,
  y,
  size,
  gap,
  className,
  children,
}) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;

  const d = distance(
    { x: active.col, y: active.row },
    { x: colIndex, y: rowIndex },
  );
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5,
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      style={{
        width: size,
        height: size,
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        position: "absolute",
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
