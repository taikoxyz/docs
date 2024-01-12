import { z, defineCollection } from "astro:content";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        description: z.string().length(160, "Must be 160 characters or less."),
      }),
    }),
  }),
  i18n: defineCollection({ type: "data", schema: i18nSchema() }),
};
