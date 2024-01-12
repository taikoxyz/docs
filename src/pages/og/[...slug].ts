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
        [15, 2, 15], // Very dark purple, almost black, for the uppermost part
        [58, 12, 36], // Medium dark purple as a transitional color
        [132, 24, 75], // Your brand's darker magenta towards the bottom
      ],
      border: {
        width: 30,
        color: [232, 24, 153],
      },
    };
  },
});
