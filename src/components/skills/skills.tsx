import { FaDocker, FaGitAlt, FaJava, FaPython } from "react-icons/fa6";
import { GrArchlinux } from "react-icons/gr";
import { IconType } from "react-icons/lib";
import {
  SiBun,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPytorch,
  SiReact,
  SiRedis,
  SiRedux,
  SiRust,
  SiSolid,
  SiTailwindcss,
  SiTauri,
  SiTypescript,
  SiVim,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

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
  SiSolid,
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
