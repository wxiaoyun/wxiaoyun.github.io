import React from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";

import { LinkIcon, LinkIconProps } from "../common";
import { NavItem, NavItemProps } from "./nav-item";

const navItemProps: NavItemProps[] = [
  {
    title: "Home",
    href: "/",
    prefetch: true,
  },
  {
    title: "Experience",
    href: "/experience",
    prefetch: true,
  },
  {
    title: "Blog",
    href: "/blog",
    prefetch: true,
  },
  {
    title: "Resume",
    href: "/wu_xiaoyun_resume.pdf",
    prefetch: true,
  },
];

const socialLinkProps: LinkIconProps[] = [
  {
    label: "GitHub",
    icon: (
      <FaGithub className="h-6 w-6 opacity-40 hover:opacity-80 transition-opacity" />
    ),
    href: "https://github.com/ForAeons",
  },
  {
    label: "LinkedIn",
    icon: (
      <FaLinkedin className="h-6 w-6 opacity-40 hover:opacity-80 transition-opacity" />
    ),
    href: "https://www.linkedin.com/in/w-xiaoyun/",
  },
  {
    label: "Medium",
    icon: (
      <FaMedium className="h-6 w-6 opacity-40 hover:opacity-80 transition-opacity" />
    ),
    href: "https://medium.com/@w.xy020203",
  },
  {
    label: "Email",
    icon: (
      <MdEmail className="h-6 w-6 opacity-40 hover:opacity-80 transition-opacity" />
    ),
    href: "mailto:me@wxiaoyun.com",
  },
];

export const Header: React.FC = () => {
  return (
    <header className="w-full flex flex-col sm:flex-row gap-6 justify-between items-center">
      <nav className="w-fit flex gap-2 lg:gap-6 bg-neutral-50 rounded-full items-center p-2 shadow-sm hover:shadow-md transition-shadow">
        {navItemProps.map((props) => (
          <NavItem key={props.href} {...props} />
        ))}
      </nav>

      <div className="flex gap-6">
        {socialLinkProps.map((props) => (
          <LinkIcon key={props.href} {...props} />
        ))}
      </div>
    </header>
  );
};
