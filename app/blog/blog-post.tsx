import jsdom from "jsdom";
import { cn } from "@/lib/utils";
import Link from "next/link";

type BlogPostProps = {
  item: MediumItem;
} & Props;

export const BlogPost: React.FC<BlogPostProps> = ({ item, className }) => {
  const pubDate = new Date(item.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const content = new jsdom.JSDOM(item.content);
  const paragraphs = content.window.document.getElementsByTagName("p");
  const firstParagraph = paragraphs[0].textContent;

  return (
    <article className={cn("flex flex-col", className)}>
      <div className="flex justify-between">
        <Link href={"/blog/" + item.guid.split("/").pop()}>
          <h4 className="scroll-m-20 text-md font-semibold tracking-tight">
            {item.title}
          </h4>
        </Link>
        <time dateTime={item.pubDate} className="text-sm text-neutral-500">
          {pubDate}
        </time>
      </div>
      <p className="text-sm text-muted-foreground truncate">{firstParagraph}</p>
    </article>
  );
};
