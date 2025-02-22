import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sol Company",
  description: "A Mobile App and Software Company",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],
    logo: {
      light: "/logo-black.png",
      dark: "/logo-white.png",
      alt: "Sol Company Logo",
    },
  },
});
