import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import navbarEn from "./navbar-en.js";
import sidebar from "./sidebar.js";
import { getDirname, path } from "@vuepress/utils";
import sidebarEn from "./sidebar-en.js";

const __dirname = getDirname(import.meta.url);

export default hopeTheme({
  hostname: "https://guoxicheng.top",

  // author: {
  //   name: "GuoXiCheng",
  //   url: "",
  // },
  editLink: false,
  pageInfo: ["Date", "Word", "Tag"],

  iconAssets: ["fontawesome-with-brands", "//at.alicdn.com/t/c/font_4381716_dtn01hmwmvf.css"],

  logo: "/logo.png",

  repo: "GuoXiCheng",

  docsDir: "src",

  docsBranch: "master",

  locales: {
    '/': {
      navbar: navbar,
      sidebar: sidebar
    },
    '/en/': {
      navbar: navbarEn,
      sidebar: sidebarEn
    },
  },

  sidebarSorter: "order",
  // sidebar: "heading",

  footer: "Made With <a href='https://github.com/vuepress-theme-hope/vuepress-theme-hope' target='_blank'>vuepress-theme-hope</a> Theme <br/> Copyright © 2023-present GuoXiCheng",

  displayFooter: true,

  encrypt: {
    config: {

    },
  },

  // page meta
  // metaLocales: {
  //   editLink: "在 GitHub 上编辑此页",
  // },

  plugins: {
    prismjs: {
      light: "one-dark"
    },

    comment: {
      provider: 'Giscus',
      repo: 'GuoXiCheng/guoxicheng.github.io',
      repoId: 'MDEwOlJlcG9zaXRvcnkyNTQ1Nzk0ODc=',
      category: 'Announcements',
      categoryId: 'DIC_kwDODyyTH84Cdco8',
      strict: true,
      lazyLoading: true,
      reactionsEnabled: true,
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      component: true,
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: {
        resolvePath: (filePath: string, cwd: string | null) => {
          if (filePath.startsWith("@src"))
            return filePath.replace("@src", path.resolve(__dirname, ".."));

          return filePath;
        },
      },
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      // presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      themeColor: "#000000",
      update: "available",
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },

    git: {
      contributors: false,
      updatedTime: true,
      createdTime: true
    },
    searchPro: true
  },
});
