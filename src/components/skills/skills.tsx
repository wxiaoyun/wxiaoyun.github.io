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
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiHtml5,
  SiCss3,
  SiRedis,
  SiPostgresql,
  SiNodedotjs,
  SiBun,
  SiVim,
  SiTauri,
} from "react-icons/si";
import { IconType } from "react-icons/lib";

const SkillsFCs: IconType[] = [
  GrArchlinux,
  SiVim,
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
  SiTauri,
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
    size={80}
    className="opacity-60 hover:opacity-80  transition-opacity"
  />
));
