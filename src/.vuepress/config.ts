import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { removePwaPlugin } from '@vuepress/plugin-remove-pwa';
import { getDirname, path } from '@vuepress/utils'
import { redirectPlugin } from '@vuepress/plugin-redirect';

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
    removePwaPlugin({
    }),
    redirectPlugin({
      config: {
        '/SKIP-Docs/1-introduction.html': '/projects/SKIP-Docs/'
      }
    })
  ],

  // Enable it with pwa
  shouldPrefetch: false,

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
