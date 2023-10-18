# 经典布局

## 空间居中布局

空间居中是指不管容器大小，内容总是占据容器的中心。

::: normal-demo 空间居中布局

```html
<div class="container">
    <div class="content"></div>
</div>
```

```css
.container {
    display: grid;
    place-items: center;
    width: 10rem;
    height: 10rem;
    background-color: lightblue;
}
.content {
    width: 25%;
    height: 25%;
    background-color: lightcoral;
}
```

:::

## 两栏式布局

两栏指的是一个主栏，一个边栏。

边栏宽度为 `minmax(2rem, 25%)`: 最小宽度为 2rem，最大宽度为 25%。

主栏宽度为 `1fr`: 占满剩余空间。

::: normal-demo 两栏式布局

```html
<div class="container">
    <div class="side"></div>
    <div class="main"></div>
</div>
```

```css
.container {
    display: grid;
    grid-template-columns: minmax(2rem, 25%) 1fr;
    width: 10rem;
    height: 10rem;
}
.side {
    background-color: lightgreen;
}
.main {
    background-color: lightcoral;
}
```

:::

## 三明治布局

三明治布局指的是页面在垂直方向上分为页眉、内容和页脚。

::: normal-demo 三明治布局

```html
<div class="container">
    <div class="header"></div>
    <div class="content"></div>
    <div class="footer"></div>
</div>
```

```css
.container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    width: 10rem;
    height: 10rem;
}
.header {
    height: 2rem;
    background-color: lightgreen;
}
.content {
    background-color: lightcoral;
}
.footer {
    height: 2rem;
    background-color: lightblue;
}
```

:::

## 圣杯布局

圣杯布局指的是页面分为五个部分，除了页眉和页脚，内容区分为左边栏、主栏和右边栏。

::: normal-demo 圣杯布局

```html
<div class="container">
    <div class="header"></div>
    <div class="left_content"></div>
    <div class="content"></div>
    <div class="right_content"></div>
    <div class="footer"></div>
</div>
```

```css
.container {
    display: grid;
    grid-template: auto 1fr auto/auto 1fr auto;
    width: 10rem;
    height: 10rem;
}
.header {
    height: 2rem;
    background-color: lightgreen;
    grid-column: 1/4;
}
.left_content {
    width: 2rem;
    background-color: lightgray;
    grid-column: 1/2;
}
.content {
    background-color: lightcoral;
    grid-column: 2/3;
}
.right_content {
    width: 2rem;
    background-color: lightsalmon;
    grid-column: 3/4;
}
.footer {
    height: 2rem;
    background-color: lightblue;
    grid-column: 1/4;
}
```
:::
