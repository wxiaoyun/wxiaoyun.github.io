import React from "react";
import { SiBun, SiNextdotjs, SiShadcnui } from "react-icons/si";
import { FaChevronRight } from "react-icons/fa";
import { LinkIcon } from "../common/link-icon";

const year = new Date().getFullYear();
const techStack = [
  {
    label: "Next.js",
    href: "https://nextjs.org/",
    icon: SiNextdotjs,
  },
  {
    label: "Shadcn UI",
    href: "https://ui.shadcn.com/",
    icon: SiShadcnui,
  },
  {
    label: "Aceternity UI",
    href: "https://ui.aceternity.com/",
    icon: FaChevronRight,
  },
  {
    label: "Bun",
    href: "https://bun.sh/",
    icon: SiBun,
  },
];

export const Footer: React.FC = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <span className="text-sm text-muted-foreground">
        {`Copyright (c) ${year} Wu Xiaoyun`}
      </span>

      <div className="text-sm  text-muted-foreground flex gap-2">
        <span>Made with</span>
        {techStack.map(({ href, icon, label }) => (
          <LinkIcon
            key={href}
            href={href}
            label={label}
            icon={icon}
            className="inline w-4 h-4"
          />
        ))}
      </div>
    </div>
  );
};
