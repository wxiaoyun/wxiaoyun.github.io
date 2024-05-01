import type { Metadata } from "next";
import { BlogPost } from "./blog-post";

export const metadata: Metadata = {
  title: "Wu Xiaoyun - Blog",
  description: "Wu Xiaoyun's blog posts",
};

const MEDIUM_FEED_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@w.xy020203";

export const fetchMediumData = async () => {
  const res = await fetch(MEDIUM_FEED_URL);
  const data = await res.json();
  return data as MediumData;
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
