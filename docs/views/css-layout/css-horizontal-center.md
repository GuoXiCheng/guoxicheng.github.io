---
date: 2020-12-19
---

## css 水平居中

:::tip
右击 → 检查 → 查看样式代码
:::

### 行内元素在块级元素水平居中

设置父元素 **text-align: center**，一般用于文字

<div class="horizontal-border horizontal-container" style="text-align:center">
    <span class="horizontal-border horizontal-inline">行内元素</span>
</div>

### 块级元素在块级元素水平居中

设置子元素 **margin: 0px auto**，**子元素需要指定宽度**

<div class="horizontal-border horizontal-container">
    <div class="horizontal-border horizontal-block" style="width:65px;margin:0px auto;">块级元素</div>
</div>

### 子元素宽度确定时

父元素相对定位，子元素绝对定位，指定子元素宽度并使用 **left:0;right:0;margin:auto**

<div class="horizontal-border horizontal-container" style="height:25px;position:relative">
    <div class="horizontal-border horizontal-block" style="position:absolute;width:70px;left:0;right:0;margin:auto">
        块级元素
    </div>
</div>

<div class="horizontal-border horizontal-container" style="height:25px;position:relative">
    <span class="horizontal-border horizontal-inline" style="position:absolute;width:70px;left:0;right:0;margin:auto">
        行内元素
    </span>
</div>

### 父元素和子元素宽度都不确定时

父元素相对定位，子元素绝对定位，并使用transform使子元素移动自身的-50%

<div class="horizontal-border horizontal-container" style="height:25px;position:relative">
    <div class="horizontal-border horizontal-block" style="position:absolute;left:50%;transform:translateX(-50%);">块级元素</div>
</div>

<div class="horizontal-border horizontal-container" style="height:25px;position:relative">
    <span class="horizontal-border horizontal-inline" style="position:absolute;left:50%;transform:translateX(-50%);">行内元素</span>
</div>

### flex布局下的水平居中

父元素设置 **display: flex; justify-content: center**，适用于flex布局

<div class="horizontal-border horizontal-container" style="display:flex;justify-content:center">
    <div class="horizontal-border horizontal-block">块级元素</div>
</div>

<div class="horizontal-border horizontal-container" style="display:flex;justify-content:center">
    <span class="horizontal-border horizontal-inline">行内元素</span>
</div>

<style>
.horizontal-border{
    border: 2px grey solid;
    border-radius: 5px;
}
.horizontal-container{
    background-color: lightpink;
    margin-bottom: 10px;
    padding:5px;
}
.horizontal-block{
    background-color: lightblue;
}
.horizontal-inline{
    background-color: lightgreen;
}
</style>
