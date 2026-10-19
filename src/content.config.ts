import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    /** 标记为示例/占位文章，前端可据此展示"示例"徽标 */
    sample: z.boolean().default(false),
  }),
});

export const collections = { posts };
