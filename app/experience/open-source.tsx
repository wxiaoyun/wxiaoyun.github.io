import { BentoGridProps } from "@/components/aceternity/bento-grid";
import { BentoSkeletonWide } from "@/components/common";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";
import Rspack from "/public/rspack.svg";

export const openSourceContrib: BentoGridProps[] = [
  {
    header: (
      <ExportedImage
        src={Rspack}
        alt="Rspack logo"
        width={96}
        height={96}
        className="m-auto group-hover/bento:rotate-3 transition-all rounded-md"
      />
    ),
    title: "Rspack",
    icon: (
      <Link
        href="https://www.rspack.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TbExternalLink className="hover:opacity-65 transition-opacity" />
      </Link>
    ),
    description:
      "Made contribution to Webpack alignments and Javascript to Typescript migrations.",
    className: "bg-neutral-50",
  },
  BentoSkeletonWide,
];
