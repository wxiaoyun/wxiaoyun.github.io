import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { BentoSkeleton } from "@/components/common";
import { BentoGridProps } from "@/components/aceternity/bento-grid";

export const projects: BentoGridProps[] = [
  {
    header: (
      <Image
        src="/RustScript.png"
        alt="Rustscript logo"
        placeholder="blur"
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
      "A statically typed, interpreted, concurrent programming lanugag combining Rust’s syntax with the simplicity of TypeScript and Go. Rustscript is first compiled to bytecode, akin to Java, and then interpreted by a virtual machine. The core features include a type system, higher order functions, concurrency, and a garbage collector.",
    className: "bg-neutral-50 hover:shadow-md sm:col-span-2",
  },
  {
    header: (
      <BsFillPersonBadgeFill className="w-24 h-24 m-auto opacity-60 group-hover/bento:rotate-3 transition-all" />
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
    className: "bg-neutral-50 hover:shadow-md",
  },
  BentoSkeleton,
  {
    header: (
      <IoLibrary className="w-24 h-24 m-auto opacity-60 group-hover/bento:rotate-3 transition-all" />
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
      "A two year school project aimed to improve literacy level in Ou Ruessei, a village located at Cambodia. I built a Digital Library Management System with User Interface to let the locals use our library with ease. Users can borrow, return renew and reserve books while staff can carry out administrative actions. All resources are managed with Role Based Access Control.",
    className: "bg-neutral-50 hover:shadow-md sm:col-span-2",
  },
];
