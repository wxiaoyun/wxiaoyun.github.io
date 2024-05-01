import { BentoGridProps } from "../aceternity/bento-grid";
import { Skeleton } from "../ui/skeleton";

export const BentoSkeleton: BentoGridProps = {
  isPlaceHolder: true,
  header: <Skeleton className="w-full h-full m-auto bg-neutral-200" />,
  title: <Skeleton className="w-24 h-4 bg-neutral-200" />,
  description: <Skeleton className="w-full h-4 bg-neutral-200" />,
  className: "bg-neutral-50",
};
