import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";
import { FaTiktok } from "react-icons/fa";
import { BentoGridProps } from "@/components/aceternity/bento-grid";
import { BentoSkeleton, CvwoLogo } from "@/components/common";

export const professionalExperiences: BentoGridProps[] = [
  {
    header: (
      <FaTiktok
        size={96}
        className="m-auto opacity-70 group-hover/bento:rotate-3 transition-all rounded-md"
      />
    ),
    title: "Software Engineer Intern @ ByteDance",
    icon: (
      <Link
        href="https://www.bytedance.com/en/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TbExternalLink />
      </Link>
    ),
    description:
      "Pushed the Tiktok app to adopt Rspack from webpack as bundler, reducing build time by 3 times and improving the developer productivity.",
    className: "bg-neutral-50 sm:col-span-2",
    footer: (
      <small className="text-xs text-muted-foreground">05/2024 - Present</small>
    ),
  },
  BentoSkeleton,
  BentoSkeleton,
  {
    header: (
      <CvwoLogo className="group-hover/bento:scale-105 transition-transform" />
    ),
    title: "Software Engineer @ Computing for Voluntary Welfare Organisations",
    icon: (
      <Link
        href="https://www.comp.nus.edu.sg/~vwo/projects/2023-cms.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TbExternalLink />
      </Link>
    ),
    description:
      "Contributed in porting a Case Management System backend from Ruby on Rails to Golang, building features including: RESTful api, RBAC, Auth and 2FA, Masquerading. The new backend has significant performance improvements: reduced response time from 5 - 20 times, depending on the module",
    className: "bg-neutral-50 sm:col-span-2",
    footer: (
      <small className="text-xs text-muted-foreground">05/2023 - 08/2023</small>
    ),
  },
];
