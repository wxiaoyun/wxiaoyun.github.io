"use client";

import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { ChunkArray } from "@/util";
import { SkillCell } from "./skill-cell";

type SkillGridProps = {
  size?: number;
  gap?: number;
  columns?: number;
  skills: React.ReactNode[];
} & Props;

export const SkillGrid: React.FC<SkillGridProps> = ({
  size = 60,
  gap = 5,
  columns = 5,
  skills,
  className,
}) => {
  const Skills2D: React.ReactNode[][] = ChunkArray(skills, columns);

  // use -1 to prevent element[0][0] form glitching
  const [active, setActive] = React.useState({ row: -1, col: -1 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.div transition={{ duration: 10, loop: Infinity, ease: "linear" }}>
      <motion.div
        style={{
          display: "flex",
          width: (size + gap) * Skills2D[0].length - gap,
          height: (size + gap) * Skills2D.length - gap,
          position: "relative",
          perspective: 500,
        }}
        className={className}
      >
        {Skills2D.map((row, rowIndex) =>
          row.map((Skill, colIndex) => (
            <SkillCell
              x={x}
              y={y}
              active={active}
              setActive={setActive}
              rowIndex={rowIndex}
              colIndex={colIndex}
              key={rowIndex * 31 + colIndex}
              size={size}
              gap={gap}
            >
              {Skill}
            </SkillCell>
          )),
        )}
      </motion.div>
    </motion.div>
  );
};

export default SkillGrid;
