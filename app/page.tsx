import type { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import { BentoGrid, BentoGridItem } from "@/components/aceternity/bento-grid";
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect";
import { SkillGrid, SkillsIcons } from "@/components/skills";
import { interests } from "./interests";

export const metadata: Metadata = {
  title: "Wu Xiaoyun - Home",
  description: "Wu Xiaoyun's personal website",
};

const intro =
  "Hi there, I am Wu Xiaoyun.\n I enjoy writing Rust 🦀, Go and Typescript. I am interested in Programming Languages and Parallel Computing.";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 py-6">
      <section>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          About me
        </h3>
        <TextGenerateEffect
          words={intro}
          className="scroll-m-20 text-lg font-semibold tracking-tight"
        />
      </section>
      <Separator />
      <section className="w-full">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Tools and Technologies
        </h3>
        <SkillGrid className="mx-auto mt-6" skills={SkillsIcons} />
      </section>
      <Separator />
      <section>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          My Interests
        </h3>
        <BentoGrid className="mt-6">
          {interests.map((props, index) => (
            <BentoGridItem key={index} {...props} />
          ))}
        </BentoGrid>
      </section>
    </main>
  );
}
