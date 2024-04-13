import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress-sidebar.jooy2.com/api
const vitepressSidebarOptions = {
  documentRootPath: "docs",
  useTitleFromFileHeading: true,
  useFolderTitleFromIndexFile: true,
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TPP IMAS Workload",
  description: "Documentation",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/examples/markdown-examples" },
    ],
    sidebar: generateSidebar(vitepressSidebarOptions),
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/TPP-PROJECTS/IMAS_Workload_Documentation",
      },
    ],
  },
});
