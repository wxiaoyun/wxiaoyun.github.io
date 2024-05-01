import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { BentoGrid, BentoGridItem } from "@/components/aceternity/bento-grid";
import { projects } from "./project";
import { professionalExperiences } from "./professional-experience";

export const metadata: Metadata = {
  title: "Wu Xiaoyun - Experience",
  description: "Wu Xiaoyun's experience",
};

export default function Page() {
  return (
    <main className="flex flex-col gap-12 py-6">
      <section>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Professional Experience
        </h3>
        <BentoGrid className="mt-6">
          {professionalExperiences.map((props, index) => (
            <BentoGridItem key={index} {...props} />
          ))}
        </BentoGrid>
      </section>
      <Separator />
      <section>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Projects
        </h3>
        <BentoGrid className="mt-6">
          {projects.map((props, index) => (
            <BentoGridItem key={index} {...props} />
          ))}
        </BentoGrid>
      </section>
    </main>
  );
}
