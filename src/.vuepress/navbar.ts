import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/projects/",
  "/article/",
  "/develop/",
  "/cloud-native/",
  "/design-pattern/",
  "/software-engineering/",
  "/algorithm/",
  "/reading/",
  {
    text: "站外链接",
    icon: "code",
    children: [
      {
        text: "TypeScript",
        link: "https://www.typescriptlang.org/play",
      },
      {
        text: "Kotlin",
        link: "https://play.kotlinlang.org"
      },
      {
        text: "Mermaid",
        link: "https://mermaid.live/edit"
      },
      {
        text: "NodeJS全栈",
        link: "https://guoxicheng.top/html/js-full-stack.html"
      }
    ]
  }
]);
