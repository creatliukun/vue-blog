import { defineConfig } from "vuepress/config";
export default defineConfig({
  // ...
  /**
   * Type is `DefaultThemeConfig`
   */
  themeConfig: {
    repo: "vuejs/vuepress",
    editLinks: true,
    docsDir: "packages/docs/docs",
  },
});
