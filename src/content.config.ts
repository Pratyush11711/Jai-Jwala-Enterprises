import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const products = defineCollection({
  // Load all markdown files in src/content/products/
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/products' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    tagline: z.string(),
    category: z.string(),
    description: z.string(),
    image: z.string(), // Name of image file in src/assets/images
    features: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    brands: z.array(z.string()),
    models: z.array(
      z.object({
        name: z.string(),
        spec: z.string(),
        price: z.string(),
      })
    ),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      keywords: z.string(),
    }),
  }),
});

export const collections = { products };
