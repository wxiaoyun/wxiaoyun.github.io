"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type NavItemProps = {
  title: string;
  href: string;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean;
} & Props;

export const NavItem: React.FC<NavItemProps> = ({
  title,
  href,
  replace,
  scroll,
  prefetch,
  className,
}) => {
  const pathname = usePathname();
  // Any path will always start with "/"
  const isActive = href === "/" ? href === pathname : pathname.startsWith(href);

  return (
    <Link
      href={href}
      passHref
      replace={replace}
      scroll={scroll}
      prefetch={prefetch}
      className="relative px-2 sm:px-3"
    >
      {isActive && (
        <motion.div
          layoutId="active-pill"
          className="absolute inset-0 bg-neutral-800 z-0"
          style={{ borderRadius: 9999 }}
          transition={{ duration: 0.7, type: "spring" }}
        />
      )}
      <span
        className={cn(
          "relative z-10 mix-blend-exclusion text-md sm:text-lg text-muted-foreground hover:text-background transition-colors duration-300",
          isActive && "text-background hover:text-muted-foreground",
          className,
        )}
      >
        {title}
      </span>
    </Link>
  );
};
