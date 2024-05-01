import { fetchMediumData } from "../page";

export async function generateStaticParams() {
  const mediumData = await fetchMediumData();

  return mediumData.items.map((item) => ({
    slug: item.guid.split("/").pop(),
  }));
}

type BlogPostProps = {
  params: { slug: string };
};

export default function Page({ params }: BlogPostProps) {
  return <div></div>;
}
