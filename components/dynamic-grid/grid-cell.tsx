import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

type GridCellProps = {
  rows?: number;
  cols?: number;
} & Props;

export const GridCell: React.FC<GridCellProps> = ({
  children,
  className,
  rows = 1,
  cols = 2,
}) => {
  return (
    <Card
      className={cn(
        "bg-primary rounded-sm sm:rounded-md p-4 overflow-clip hover:shadow-md transition-shadow duration-300 ease-in-out",
        `col-span-${cols} row-span-${rows}`,
        className,
      )}
    >
      {children}
    </Card>
  );
};
