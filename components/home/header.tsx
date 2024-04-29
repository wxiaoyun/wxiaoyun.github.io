import React from "react";
import { NavItem } from "./nav-item";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Experience",
    href: "/experience",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Resume",
    href: "/resume",
  },
];

export const Header: React.FC = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Wu Xiaoyun
      </h2>
      <nav className="flex gap-6 bg-stone-50 rounded-full items-center px-6 py-2 shadow-sm hover:shadow-md transition-shadow">
        {navItems.map(({ title, href }) => (
          <NavItem key={href} title={title} href={href} />
        ))}
      </nav>
    </div>
  );
};
