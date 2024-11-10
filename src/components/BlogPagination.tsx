import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "@components/ui/pagination";
import type { CollectionEntry } from "astro:content";
import type { Component } from "solid-js";

export type BlogPaginationProps = {
  blogEntries: CollectionEntry<"blog">[];
  index: number;
};

export const BlogPagination: Component<BlogPaginationProps> = (props) => {
  const isFirstPage = () => props.index === 0;
  const isLastPage = () => props.index === props.blogEntries.length - 1;

  return (
    <Pagination
      count={props.blogEntries.length}
      page={props.index + 1}
      itemComponent={(itemProps) => (
        <PaginationItem page={itemProps.page}>
          {/* Page is 1 indexed */}
          <a href={`/blog/${props.blogEntries[itemProps.page - 1].slug}`}>
            {itemProps.page}
          </a>
        </PaginationItem>
      )}
      ellipsisComponent={() => <PaginationEllipsis />}
    >
      <a
        href={
          isFirstPage()
            ? undefined
            : `/blog/${props.blogEntries[props.index - 1].slug}`
        }
      >
        <PaginationPrevious disabled={isFirstPage()} />
      </a>
      <PaginationItems />
      <a
        href={
          isLastPage()
            ? undefined
            : `/blog/${props.blogEntries[props.index + 1].slug}`
        }
      >
        <PaginationNext disabled={isLastPage()} />
      </a>
    </Pagination>
  );
};
