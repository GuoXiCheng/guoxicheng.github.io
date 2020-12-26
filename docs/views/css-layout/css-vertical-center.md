---
date: 2020-12-19
---

## css 垂直居中

:::tip
右击 → 检查 → 查看样式代码
:::

### 行内元素在块级元素垂直居中

设置父元素 **height:50px;line-height:50px** ，一般用于文字

<div class="vertical-border vertical-container" style="height:50px;line-height:50px">
    <span class="vertical-border vertical-inline-color">行内元素</span>
</div>

### 父元素高度确定时

父元素相对定位，**父元素需要有高度**，子元素绝对定位，并使用transform使子元素移动自身的-50%

<div class="vertical-border vertical-container" style="position:relative;height:50px">
    <div class="vertical-border vertical-block-color" style="position:absolute;top:50%;transform:translateY(-50%);">
        块级元素
    </div>
</div>

<div class="vertical-border vertical-container" style="position:relative;height:50px">
    <span class="vertical-border vertical-inline-color" style="position:absolute;top:50%;transform:translateY(-50%);">
        行内元素
    </span>
</div>

### 父元素高度不确定时

设置父元素 **padding:20px 0** ，**父元素不能指定高度**，适用于父元素高度不确定，或父元素高度是根据子元素高度确定的情况

<div class="vertical-border vertical-container" style="padding:20px 0;">
    <div class="vertical-border vertical-block-color">块级元素</div>
</div>

<div class="vertical-border vertical-container" style="padding:20px 0;">
    <span class="vertical-border vertical-inline-color">行内元素</span>
</div>

### 父元素和子元素高度都确定时

父元素相对定位，指定父元素高度；子元素绝对定位，指定子元素高度并使用 **top:0;bottom:0;margin:auto**

<div class="vertical-border vertical-container" style="position:relative;height:50px;">
    <div class="vertical-border vertical-block-color" style="position:absolute;top:0;bottom:0;margin:auto;height:25px;">
        块级元素
    </div>
</div>

<div class="vertical-border vertical-container" style="position:relative;height:50px;">
    <span class="vertical-border vertical-inline-color" style="position:absolute;top:0;bottom:0;margin:auto;height:25px;">
        行内元素
    </span>
</div>

### flex布局下的垂直居中

**display:flex;align-items:center** ：适用于flex布局，父元素需要有高度

<div class="vertical-border vertical-container" style="height:50px;display:flex;align-items:center">
    <div class="vertical-border vertical-block-color">块级元素</div>
</div>

<div class="vertical-border vertical-container" style="height:50px;display:flex;align-items:center">
    <span class="vertical-border vertical-inline-color">行内元素</span>
</div>



<style>
.vertical-border{
    border: 2px grey solid;
    border-radius: 5px;
}
.vertical-container{
    background-color: lightpink;
    margin-bottom: 10px;
    padding:5px;
}
.vertical-block-color{
    background-color: lightblue;
}
.vertical-inline-color{
    background-color: lightgreen;
}
</style>
