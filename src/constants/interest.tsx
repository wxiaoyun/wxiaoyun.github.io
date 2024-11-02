import type { BentoGridItemProps } from "@/components/BentoGrid";
import { CgGym } from "solid-icons/cg";
import { FaSolidGolfBallTee, FaSolidPersonRunning } from "solid-icons/fa";
import { RiMediaMovie2Fill } from "solid-icons/ri";

export const interests: BentoGridItemProps[] = [
  {
    header: (
      <FaSolidPersonRunning class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Running",
    description: "I love running and I am training for a marathon.",
    class: "bg-neutral-50 sm:col-span-2",
  },
  {
    header: (
      <RiMediaMovie2Fill class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Movies",
    description: "I enjoy watching movies and TV shows.",
    class: "bg-neutral-50",
  },
  {
    header: (
      <CgGym class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Gym",
    description: "I never skip leg day.",
    class: "bg-neutral-50",
  },
  {
    header: (
      <FaSolidGolfBallTee class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Golf",
    description: "I enjoy playing golf on weekends.",
    class: "bg-neutral-50 sm:col-span-2",
  },
];
