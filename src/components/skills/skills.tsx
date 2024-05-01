import React from "react";
import { GrArchlinux } from "react-icons/gr";
import { TbBrandGolang } from "react-icons/tb";
import { FaGitAlt, FaDocker, FaJava, FaPython } from "react-icons/fa6";
import {
  SiRust,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNeovim,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiHtml5,
  SiCss3,
  SiRedis,
  SiPostgresql,
  SiNodedotjs,
  SiBun,
} from "react-icons/si";

const SkillsFCs: React.FC<Props>[] = [
  GrArchlinux,
  SiNeovim,
  FaGitAlt,
  SiRust,
  SiTypescript,
  TbBrandGolang,
  FaJava,
  SiJavascript,
  FaPython,
  SiHtml5,
  SiCss3,
  FaDocker,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiPostgresql,
  SiRedis,
  SiNodedotjs,
  SiBun,
];

export const SkillsIcons = SkillsFCs.map((Icon, index) => (
  <Icon
    key={index}
    className="w-10 h-10 opacity-60 hover:opacity-80  transition-opacity"
  />
));
