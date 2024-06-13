import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/article/",
  "/develop/",
  "/cloud-native/",
  "/design-pattern/",
  "/software-engineering/",
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
        link: "https://play.kotlinlang.org",
      },
      {
        text: "Mermaid",
        link: "https://mermaid.live/edit",
      },
    ],
  },
]);
