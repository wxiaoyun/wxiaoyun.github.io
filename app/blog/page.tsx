import type { Metadata } from "next";
import { BlogPost } from "./blog-post";
import { fetchMediumData } from "./helper";

export const metadata: Metadata = {
  title: "Wu Xiaoyun - Blog",
  description: "Wu Xiaoyun's blog posts",
};

export default async function Page() {
  const mediumData = await fetchMediumData();
  return (
    <main className="flex flex-col gap-12 py-6">
      <section>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Blogs
        </h3>
        <div className="mt-6">
          {mediumData.items.map((item) => (
            <BlogPost key={item.guid} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
