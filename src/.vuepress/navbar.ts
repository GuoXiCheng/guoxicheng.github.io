import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/projects/",
  "/article/",
  "/develop/",
  "/cloud-native/",
  "/design-pattern/",
  "/algorithm/",
  "/reading/",
  {
    text: "在线编程",
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
      }
    ]
  }
]);
