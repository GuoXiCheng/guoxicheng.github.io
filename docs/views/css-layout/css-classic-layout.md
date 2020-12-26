---
date: 2020-12-19
tags:
- css
---

## css 经典布局

:::tip
右击 → 检查 → 查看样式代码
:::

### 空间居中布局

空间居中指不管容器大小，项目总是占据中心

设置容器：**display: grid; place-items: center**

<div class="border container" style="display: grid; place-items: center;">
    <div class="border color-1">空间居中布局</div>
</div>

### 两栏式布局

两栏式指一个主栏，一个边栏

设置容器：**display: grid; grid-template-columns: minmax(150px, 25%) 1fr**

边栏宽度是 **minmax(150px,25%)** ，即最小宽度为150px，最大宽度为25%；

主栏为 **1fr**，即所有剩余宽度。

<div class="border container" style="display: grid; grid-template-columns: minmax(150px, 25%) 1fr;">
    <div class="border color-1">边栏</div>
    <div class="border color-2">主栏</div>
</div>

### 三明治布局

三明治布局指页面在垂直方向上分为页眉、内容和页脚

设置容器：**display: grid; grid-template-rows: auto 1fr auto**

- **grid-template-rows** 指定垂直高度怎么划分：
    - 第一部分（页眉）：高度为auto
    - 第二部分（内容区）的高度为1fr，即剩余的所有高度
    - 第三部分（页脚）：高度为auto

<div class="border container" style="display: grid; grid-template-rows: auto 1fr auto;">
    <div class="border color-1">页眉</div>
    <div class="border color-2">内容区</div>
    <div class="border color-3">页脚</div>
</div>

### 圣杯布局

圣杯布局指页面分成五个部分，除了页眉和页脚，内容区分成左边栏、主栏和右边栏

设置容器：**display: grid; grid-template-rows: auto 1fr auto**

- **grid-template** 指定垂直和水平高度如何划分：
    - 第一部分（页眉和左边栏）：内容高度或宽度
    - 第二部分（内容区和主栏）：占满剩余高度或宽度
    - 第三部分（页脚和右边栏）：内容高度或宽度

<div class="border container" style="display: grid; grid-template: auto 1fr auto / auto 1fr auto;">
    <div class="border color-1" style="grid-column: 1 / 4;">页眉</div>
    <div class="border color-2" style="grid-column: 1 / 2;">左边栏</div>
    <div class="border color-3" style="grid-column: 2 / 3;">主栏</div>
    <div class="border color-4" style="grid-column: 3 / 4;">右边栏</div>
    <div class="border color-5" style="grid-column: 1 / 4;">页脚</div>
</div>

<style>
.border{
    border: 2px grey solid;
    border-radius: 5px;
}
.container{
    background-color: lightpink;
    height: 150px;
}
.color-1 {
    background-color: lightblue;
    margin: 5px;
}
.color-2 {
    background-color: lightgreen;
    margin: 5px;
}
.color-3 {
    background-color: lightyellow;
    margin: 5px;
}
.color-4 {
    background-color: lightcyan;
    margin: 5px;
}
.color-5 {
    background-color: lightsalmon;
    margin: 5px;
}
</style>
