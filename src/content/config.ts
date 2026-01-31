import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    title_te: z.string(), // Telugu Title
    pubDate: z.date(),
    description: z.string(),
    image: z.string(),
    category: z.string(),
  }),
});

const products = defineCollection({
  schema: z.object({
    title: z.string(),
    title_te: z.string(),
    category: z.string(),
    image: z.string(),
    features: z.array(z.string()),
    isRecommended: z.boolean().default(false),
    whatsapp_message: z.string().optional()
  })
});

export const collections = { blog, products };