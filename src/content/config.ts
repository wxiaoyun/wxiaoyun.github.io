import { MediumItemSchema } from "@/schema/medium";
import { defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: MediumItemSchema,
});

export const collections = {
  blog: blogCollection,
};
