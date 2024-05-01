"use client";

import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { ChunkArray } from "@/util";
import { SkillCell } from "./skill-cell";
import { SkillsIcons } from "./skills";

const size = 60;
const gap = 5;
const columns = 5;

const Skills2D: React.FC<Props>[][] = ChunkArray(SkillsIcons, columns);

export const SkillGrid: React.FC<Props> = ({ className }) => {
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
              <Skill className="w-10 h-10 opacity-60 hover:opacity-80  transition-opacity" />
            </SkillCell>
          )),
        )}
      </motion.div>
    </motion.div>
  );
};

export default SkillGrid;
