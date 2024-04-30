import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { LinkIcon } from "../common/link-icon";
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

const socials = [
  {
    label: "GitHub",
    icon: FaGithub,
    href: "https://github.com/ForAeons",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/w-xiaoyun/",
  },
  {
    label: "Medium",
    icon: FaMedium,
    href: "https://medium.com/@w.xy020203",
  },
  {
    label: "Email",
    icon: MdEmail,
    href: "mailto:me@wxiaoyun.com",
  },
];

export const Header: React.FC = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-6 justify-between items-center">
      <nav className="w-fit flex gap-2 lg:gap-6 bg-neutral-50 rounded-full items-center p-2 shadow-sm hover:shadow-md transition-shadow">
        {navItems.map(({ title, href }) => (
          <NavItem key={href} title={title} href={href} />
        ))}
      </nav>

      <div className="flex gap-6">
        {socials.map(({ icon: Icon, href, label }) => (
          <LinkIcon key={href} href={href} icon={Icon} label={label} />
        ))}
      </div>
    </div>
  );
};
