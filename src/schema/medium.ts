import { z } from "astro:content";

export const MediumItemSchema = z.object({
  title: z.string(),
  pubDate: z.coerce.date(),
  link: z.string().optional(),
  thumbnail: z.string().optional(),
  description: z.string(),
  preview: z.string(),
  categories: z.array(z.string()),
});

export type MediumItem = z.infer<typeof MediumItemSchema>;
