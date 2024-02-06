import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/projects/",
  "/reading/",
  "/cloud-native/",
  "/design-pattern/",
  "/develop/",
  "/algorithm/",
  "/article/",
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
