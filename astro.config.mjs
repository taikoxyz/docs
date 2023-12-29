import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.taiko.xyz",
  integrations: [
    starlight({
      title: "Docs",
      editLink: {
        baseUrl: "https://github.com/taikoxyz/docs/edit/main/docs/",
      },
      customCss: ["./src/styles/custom.css"],
      logo: {
        dark: "./src/assets/logo-dark.svg",
        light: "./src/assets/logo-light.svg",
      },
      social: {
        github: "https://github.com/taikoxyz",
        "x.com": "https://x.com/taikoxyz",
        discord: "https://discord.gg/taikoxyz",
        youtube: "https://youtube.com/@taikoxyz",
      },
      sidebar: [
        {
          label: "Start Here",
          autogenerate: { directory: "start-here" },
        },
        {
          label: "Core Concepts",
          autogenerate: { directory: "core-concepts" },
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Setup Your Wallet", link: "/guides/setup-your-wallet/" },
            { label: "Deploy a Contract", link: "/guides/deploy-a-contract/" },
            { label: "Run a Node", link: "/guides/run-a-node/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
