type MediumData = {
  status: string;
  feed: MediumFeed;
  items: MediumItem[];
};

type MediumFeed = {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
};

type MediumItem = {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: unknown;
  categories: string[];
};

type BlogFetchStatus = "idle" | "loading" | "succeeded" | "failed";

type BlogState = {
  data?: MediumData;
  fetchState: BlogFetchStatus;
};
