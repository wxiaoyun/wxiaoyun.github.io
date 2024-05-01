import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";
import { BentoGridProps } from "@/components/aceternity/bento-grid";
import { CvwoLogo } from "@/components/common";

export const professionalExperiences: BentoGridProps[] = [
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
