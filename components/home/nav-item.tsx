import React from "react";
import Link from "next/link";
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
  return (
    <Link
      href={href}
      passHref
      replace={replace}
      scroll={scroll}
      prefetch={prefetch}
      className={cn(
        "text-md text-muted-foreground hover:text-foreground transition-colors",
        className,
      )}
    >
      {title}
    </Link>
  );
};
