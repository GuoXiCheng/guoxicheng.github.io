import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/en/algorithm",
  {
    text: "Online Coding",
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
