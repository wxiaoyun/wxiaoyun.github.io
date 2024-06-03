import { CgGym } from "react-icons/cg";
import { FaPersonRunning } from "react-icons/fa6";
import { MdOutlineGolfCourse, MdLocalMovies } from "react-icons/md";
import { BentoGridProps } from "@/components/aceternity/bento-grid";

export const interests: BentoGridProps[] = [
  {
    header: (
      <FaPersonRunning className="w-24 h-24 m-auto opacity-60 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Running",
    description: "I love running and I am training for a marathon.",
    className: "bg-neutral-50 sm:col-span-2",
  },
  {
    header: (
      <MdLocalMovies className="w-24 h-24 m-auto opacity-60 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Movies",
    description: "I enjoy watching movies and TV shows.",
    className: "bg-neutral-50",
  },
  {
    header: (
      <CgGym className="w-24 h-24 m-auto opacity-60 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Gym",
    description: "I never skip leg day.",
    className: "bg-neutral-50",
  },
  {
    header: (
      <MdOutlineGolfCourse className="w-24 h-24 m-auto opacity-60 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Golf",
    description: "I enjoy playing golf on weekends.",
    className: "bg-neutral-50 sm:col-span-2",
  },
];
