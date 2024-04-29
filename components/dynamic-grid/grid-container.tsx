import React from "react";
import { cn } from "@/lib/utils";

export const GridContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid auto-rows-fr grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 md:gap-12",
        className,
      )}
    >
      {children}
    </div>
  );
};
