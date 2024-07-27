import { BentoGridProps } from "@/components/aceternity/bento-grid";
import { BentoSkeleton } from "@/components/common";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import RustScriptStatic from "/public/RustScript.png";

export const projects: BentoGridProps[] = [
  {
    header: (
      <ExportedImage
        src={RustScriptStatic}
        alt="Rustscript logo"
        width={96}
        height={96}
        className="m-auto group-hover/bento:rotate-3 transition-all rounded-md"
      />
    ),
    title: "Rustscript",
    icon: (
      <Link
        href="https://github.com/crabscript/rustscript"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="hover:opacity-65 transition-opacity" />
      </Link>
    ),
    description:
      "Developed a statically typed, compiled programming language combining Rust's syntax with the simplicity of TypeScript and Go with core features including primitive data types, higher-order functions, type checking, concurrency and garbage collector. The language to compile code into bytecode, akin to Java, followed by execution on a virtual machine.",
    className: "bg-neutral-50 sm:col-span-2",
  },
  {
    header: (
      <BsFillPersonBadgeFill className="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Portfolio",
    icon: (
      <Link
        href="https://github.com/ForAeons/ForAeons.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="hover:opacity-65 transition-opacity" />
      </Link>
    ),
    description:
      "The current portfolio you are viewing. A minimalist design with a focus on responsive UI.  Built with Next.js, shadcn/ui, Aceternity UI and Bunjs.",
    className: "bg-neutral-50",
  },
  BentoSkeleton,
  {
    header: (
      <IoLibrary className="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Cambodia Community Library",
    icon: (
      <Link
        href="https://github.com/ForAeons/lms-backend"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="hover:opacity-65 transition-opacity" />
      </Link>
    ),
    description:
      "Solo built a full stack Library Management System with role based access control for a village located at Cambodia. It is a two year school project aimed to improve literacy level in Ou Ruessei, a village located at Cambodia.",
    className: "bg-neutral-50 sm:col-span-2",
  },
];
