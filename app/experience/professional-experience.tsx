import { BentoGridProps } from "@/components/aceternity/bento-grid";
import { BentoSkeleton, CvwoLogo } from "@/components/common";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

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
    description: (
      <ul className="list-inside list-disc">
        <li>
          {
          "Led a cross-functional team collaboration to migrate Money-Platform from Webpack to Rspack, reducing bundling time by 50%."
          }
        </li>
        <li>
          {
          "Developed on whitescreen alarms and alarm handling system, streamlined the process of handling alarms. The whitescreen alarm caught and report a major bug released to production."
          }
        </li>
      </ul>
    ),
    className: "bg-neutral-50 sm:col-span-2",
    footer: (
      <small className="text-xs text-muted-foreground">05/2024 - 09/2024</small>
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
      "Reduced backend response time by 5 times by porting a Case Management System backend from Ruby on Rails to Golang. Features ported include RBAC, Auth, 2FA and Masquerading.",
    className: "bg-neutral-50 sm:col-span-2",
    footer: (
      <small className="text-xs text-muted-foreground">05/2023 - 08/2023</small>
    ),
  },
];
