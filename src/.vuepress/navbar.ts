import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/article/",
  "/reading/",
  "/develop/",
  "/design-pattern/",
  {
    text: "站外链接",
    icon: "code",
    children: [
      {
        text: "SKIP",
        link: "https://skip.guoxicheng.top",
      },
      {
        text: "TinyCRUD",
        link: "https://tinycrud.guoxicheng.top",
      },
      {
        text: "JSFullStack",
        link: "https://js.guoxicheng.top",
      },
      {
        text: "净值分位",
        link: "https://fund.guoxicheng.top",
      },
    ],
  },
]);
