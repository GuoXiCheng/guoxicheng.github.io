import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { removePWAPlugin } from '@vuepress/plugin-remove-pwa';
import { commentPlugin } from "vuepress-plugin-comment2";
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  head: [
    ['script', { src: '/js/snowfall.js', async: true }],
    ['script', { src: '/js/baidu-analytics.js', async: true }]
  ],
  base: "/",

  lang: "zh-CN",
  title: "Guo's Page",
  description: "",

  locales: {
    '/': {
      lang: 'zh-CN'
    },
    '/en/': {
      lang: 'en-US'
    },
  },
  
  theme,
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }),
    removePWAPlugin({
    }),
    commentPlugin({
      provider: 'Giscus',
      repo: 'GuoXiCheng/guoxicheng.github.io',
      repoId: 'MDEwOlJlcG9zaXRvcnkyNTQ1Nzk0ODc=',
      category: 'Announcements',
      categoryId: 'DIC_kwDODyyTH84Cdco8',
      strict: true,
      lazyLoading: true,
      reactionsEnabled: true,
    })
  ],

  // Enable it with pwa
  shouldPrefetch: false,

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
