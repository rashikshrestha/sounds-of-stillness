import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    cover: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

const home = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
    coverImage: z.string().optional(),
    aboutTitle: z.string().optional(),
    aboutImage: z.string().optional(),
    galleryTitle: z.string().optional(),
    connectImage: z.string().optional(),
    connectTitle: z.string().optional(),
    connectSubtitle: z.string().optional(),
    connectHandle: z.string().optional(),
    connectHandleUrl: z.string().optional(),
    connectQuote: z.string().optional(),
  }),
});

const gallery = defineCollection({
  type: 'data',
  schema: z.object({
    images: z.array(
      z.object({
        image: z.string(),
        caption: z.string().optional(),
      })
    ),
  }),
});

const quotes = defineCollection({
  type: 'data',
  schema: z.object({
    quotes: z.array(
      z.object({
        text: z.string(),
        attribution: z.string().optional(),
      })
    ),
  }),
});

export const collections = { posts, home, gallery, quotes };
