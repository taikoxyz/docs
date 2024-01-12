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
        [132, 24, 75], // Darker magenta, complementing your brand's pink
        [25, 3, 20], // Nearly black, for a deep dark mode compatible background
      ],
      border: {
        width: 30,
        color: [232, 24, 153],
      },
    };
  },
});
