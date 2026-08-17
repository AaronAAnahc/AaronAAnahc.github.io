import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    id: z.string(),
    lang: z.enum(["en", "zh"]),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    github: z.string().url(),
    tech: z.string().optional(),
    cover: z.string().optional(),
    date: z.string().optional(),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    id: z.string(),
    lang: z.enum(["en", "zh"]),
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
  }),
});

export const collections = { projects, blog };
