import React from "react";
import SkillCarousel from "./skill-carousel";
import { splitArray } from "@/util";

type SkillGridProps = {
  skills: React.ReactNode[];
  autoplayInterval?: number;
  rowsDelay?: number;
  rowSize?: number;
} & Props;

export const SkillGrid: React.FC<SkillGridProps> = ({
  skills,
  autoplayInterval = 1500,
  rowsDelay = 300,
  rowSize = 6,
  className,
}) => {
  const skillMatrix = splitArray(skills, rowSize);
  return (
    <div className={className}>
      {skillMatrix.map((row, i) => (
        <SkillCarousel
          key={i}
          skills={row}
          autoplayInterval={autoplayInterval}
          initDelay={rowsDelay * i}
        />
      ))}
    </div>
  );
};
