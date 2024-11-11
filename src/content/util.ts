import { getCollection } from "astro:content";

export const getSortedBlogEntries = async () => {
  const blogEntries = await getCollection("blog");
  blogEntries.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
  return blogEntries;
};
