import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { LinkIcon } from "../common/link-icon";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/ForAeons",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/w-xiaoyun/",
  },
  {
    icon: FaMedium,
    href: "https://medium.com/@w.xy020203",
  },
  {
    icon: MdEmail,
    href: "mailto:me@wxiaoyun.com",
  },
];

const year = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <span className="text-sm text-muted-foreground">
        {`${year} © Wu Xiaoyun`}
      </span>
      <div className="flex gap-6">
        {socials.map(({ icon: Icon, href }) => (
          <LinkIcon key={href} href={href} icon={Icon} />
        ))}
      </div>
    </div>
  );
};
