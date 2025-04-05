// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({
  // `loader` can accept an array of multiple patterns as well as string patterns
  // Load all markdown files in the space-probes directory, except for those that start with "voyager-"
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    category: z.enum(['guias', 'noticias', 'otros']),
    title: z.string(),
    description: z.string(),
    author: z.string(),
    pubDatetime: z.coerce.date(),
    modDatetime: z.coerce.date().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()),
    ogImage: z.string().optional(),
    canonicalUrl: z.string().optional(),
  }),
});

// Define changelog collection
const changelog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/changelog' }),
  schema: z.object({
    version: z.string(),
    date: z.coerce.date(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, changelog };
