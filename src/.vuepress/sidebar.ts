import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/knowledge": "structure",
  "/reading": "structure",
  "/projects": "structure",
  "/cloud-native": "structure",
  "/design-pattern": "structure",
  "/develop": "structure"
  // "/": [
  //   "",
  //   {
  //     text: "案例",
  //     icon: "laptop-code",
  //     prefix: "demo/",
  //     link: "demo/",
  //     children: "structure",
  //   },
  //   {
  //     text: "文档",
  //     icon: "book",
  //     prefix: "guide/",
  //     children: "structure",
  //   }
  // ],
});
