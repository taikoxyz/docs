import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  // site: "https://docs.taiko.xyz",
  redirects: {
    "/": "/start-here/getting-started",
  },
  integrations: [
    starlight({
      components: {
        SiteTitle: "./src/components/starlight/SiteTitle.astro",
      },
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
          // items: [
          //   { label: "Why Taiko?", link: "/core-concepts/what-is-taiko/" },
          //   {
          //     label: "Rollup architecture",
          //     link: "/core-concepts/booster-rollups/",
          //   },
          //   {
          //     label: "ZK-EVM architecture",
          //     link: "/core-concepts/multi-proofs/",
          //   },
          //   {
          //     label: "Differences from Ethereum",
          //     link: "/core-concepts/differences-from-ethereum/",
          //   },
          // ],
          autogenerate: { directory: "core-concepts" },
        },
        {
          label: "Guides",
          // items: [
          //   { label: "Setup your wallet", link: "/guides/setup-your-wallet/" },
          //   { label: "Receive tokens", link: "/guides/receive-tokens/" },
          //   { label: "Deploy a contract", link: "/guides/deploy-a-contract/" },
          //   { label: "Run a node", link: "/guides/run-a-node/" },
          // ],
          autogenerate: { directory: "guides" },
        },
        {
          label: "Network Reference",
          autogenerate: { directory: "network-reference" },
        },
        {
          label: "API Reference",
          autogenerate: { directory: "api-reference" },
        },
      ],
    }),
  ],
});
