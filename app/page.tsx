import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wu Xiaoyun - Home",
  description: "Wu Xiaoyun's personal website",
};

const intro =
  "Hi there, I am Wu Xiaoyun.\n I enjoy writing Rust 🦀, Go and Typescript. I am interested in Programming Languages and Parallel Computing.";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 py-6">
      <section>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          About me
        </h3>
        <TextGenerateEffect
          words={intro}
          className="scroll-m-20 text-xl font-semibold tracking-tight"
        />
      </section>
    </main>
  );
}
