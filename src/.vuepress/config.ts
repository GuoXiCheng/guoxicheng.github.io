import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import knowledgeGraphPlugin from '../../../vuepress-plugin-knowledge-graph/dist/node/index.js'

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Guo's Page",
  description: "vuepress-theme-hope 的文档演示",
  
  theme,
  plugins: [
    // knowledgeGraphPlugin({
    //   include: [],
    //   exclude: ['guide', 'demo', 'reading'],
    //   excludeReadme: true
    // })
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
