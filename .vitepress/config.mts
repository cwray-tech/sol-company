import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sol Company",
  description: "A Mobile App and Software Company",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      { text: "Apps", link: "/apps" },
    ],
    logo: {
      light: "/logo-black.png",
      dark: "/logo-white.png",
      alt: "Sol Company Logo",
    },
    footer: {
      message: "Like the Sun.",
      copyright: "Copyright © 2017-present Soltech LLC DBA Sol Company",
    },
    search: {
      provider: "local",
    },
  },
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["meta", { property: "og:title", content: "Sol Company" }],
    ["meta", { property: "og:description", content: "Like the Sun." }],
    ["meta", { property: "og:image", content: "/sol-company-og.png" }],
    ["meta", { property: "og:image:type", content: "image/png" }],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:image", content: "/sol-company-og.png" }],
  ],
  cleanUrls: true,
});
