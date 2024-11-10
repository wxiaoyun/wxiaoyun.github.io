import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

let blogs: CollectionEntry<"blog">[] | undefined = undefined;

export const getSortedBlogEntries = async () => {
  if (blogs) {
    return blogs;
  }

  const blogEntries = await getCollection("blog");
  blogEntries.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
  blogs = blogEntries;
  return blogEntries;
};
