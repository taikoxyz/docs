import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const entries = await getCollection("docs");
const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]));

// See https://github.com/delucis/astro-og-canvas for the full API
export const { getStaticPaths, GET } = OGImageRoute({
  pages,
  param: "slug",
  getImageOptions: (_path, page: (typeof pages)[number]) => {
    return {
      title: page.data.title,
      description: page.data.description,
      logo: {
        path: "./src/assets/taiko-og-logo.png",
      },
      // bgImage: {
      //   path: "./src/assets/taiko-og-bg.png",
      // },
      bgGradient: [
        [10, 1, 10], // Very dark purple, almost black, for the uppermost part
        [45, 10, 30], // Dark purple for the upper-middle section
        [80, 15, 45], // Medium dark purple for the middle section
        [180, 20, 120], // A subdued version of your brand's pink for the bottom
      ],
      border: {
        width: 30,
        color: [232, 24, 153],
      },
    };
  },
});
