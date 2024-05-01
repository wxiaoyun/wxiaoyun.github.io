import React from "react";
import { SiBun, SiNextdotjs, SiShadcnui } from "react-icons/si";
import { FaAngleRight } from "react-icons/fa6";
import { LinkIcon } from "../common";

const year = new Date().getFullYear();
const techStack = [
  {
    label: "Next.js",
    href: "https://nextjs.org/",
    icon: <SiNextdotjs className="inline w-4 h-4" />,
  },
  {
    label: "Shadcn UI",
    href: "https://ui.shadcn.com/",
    icon: <SiShadcnui className="inline w-4 h-4" />,
  },
  {
    label: "Aceternity UI",
    href: "https://ui.aceternity.com/",
    icon: <FaAngleRight className="inline w-4 h-4" />,
  },
  {
    label: "Bun",
    href: "https://bun.sh/",
    icon: <SiBun className="inline w-4 h-4" />,
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col items-center gap-3">
      <small className="text-xs text-muted-foreground">
        {`Copyright (c) ${year} Wu Xiaoyun. All rights reserved.`}
      </small>

      <div className="text-sm text-muted-foreground flex gap-2">
        <span>About this website: built with</span>
        {techStack.map((props) => (
          <LinkIcon key={props.href} {...props} />
        ))}
      </div>
    </footer>
  );
};
