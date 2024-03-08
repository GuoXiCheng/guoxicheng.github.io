import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/en/projects/",
  "/en/algorithm/",
  {
    text: "External link",
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
        text: "NodeJS Full Stack",
        link: "https://guoxicheng.top/html/js-full-stack.html"
      }
    ]
  }
]);
