import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { getDirname, path } from '@vuepress/utils'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  head: [
    ['script', { src: '/js/snowfall.js', async: true }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }]
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
    pwaPlugin(),
    pwaPopupPlugin()
  ],

  // Enable it with pwa
  shouldPrefetch: false,

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
