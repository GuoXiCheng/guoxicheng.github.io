# Flex 布局

## 主轴与交叉轴

在 flex 布局中，存在两个重要的轴：主轴（main axis）和交叉轴（cross axis）。

主轴是 flex 容器的主要方向。它可以是水平方向或垂直方向。

交叉轴是与主轴垂直的轴：

-   如果主轴是水平方向，则交叉轴是垂直方向
-   如果主轴是垂直方向，则交叉轴是水平方向

## flex-direction 决定主轴方向

主轴方向为水平方向，项目从左到右依次排列。
::: normal-demo flex-direction: row

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div class="flex-container" style="flex-direction: row;">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>
```

:::

主轴方向为水平方向，项目从右到左依次排列。
::: normal-demo flex-direction: row-reverse

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div class="flex-container" style="flex-direction: row-reverse;">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>
```

:::

主轴方向为垂直方向，项目从上到下依次排列。
::: normal-demo flex-direction: column

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div class="flex-container" style="flex-direction: column;">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>
```

:::

主轴方向为垂直方向，项目从下到上依次排列。
::: normal-demo flex-direction: column-reverse

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div class="flex-container" style="flex-direction: column-reverse;">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>
```

:::

## flex-wrap 决定换行行为

所有 flex 项目将放在一行内，可能会导致容器溢出。
::: normal-demo flex-wrap: nowrap

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div class="flex-container" style="flex-direction: row;flex-wrap: nowrap;">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
</div>
```

:::

当 flex 项目的总宽度超过容器宽度时，会将项目进行换行排列。
::: normal-demo flex-wrap: wrap

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div class="flex-container" style="flex-direction: row;flex-wrap: wrap;">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
</div>
```

:::

当 flex 项目的总宽度超过容器宽度时，项目会从尾部开始换行排列。
::: normal-demo flex-wrap: wrap-reverse

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="flex-direction: row;flex-wrap: wrap-reverse;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
</div>
```

:::

## justify-content 决定主轴对齐方式

项目在主轴起始端对齐。
::: normal-demo justify-content: flex-start

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="flex-direction: row;justify-content: flex-start;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>
```

:::

项目在主轴末尾端对齐。
::: normal-demo justify-content: flex-end

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="flex-direction: row;justify-content: flex-end;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>
```

:::

项目在主轴中心对齐。
::: normal-demo justify-content: center

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="flex-direction: row;justify-content: center;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>
```

:::

项目在主轴上平均分布，首尾项目与容器边缘对齐。
::: normal-demo justify-content: space-between

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="flex-direction: row;justify-content: space-between;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>
```

:::

项目在主轴上平均分布，项目之间和首尾项目与容器边缘之间的间隔相等。
::: normal-demo justify-content: space-around

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="flex-direction: row;justify-content: space-around;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>
```

:::

项目在主轴上平均分布，包括首尾项目与容器边缘之间的间隔。
::: normal-demo justify-content: space-evenly

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="flex-direction: row;justify-content: space-evenly;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>
```

:::

## align-items 决定交叉轴对齐方式

项目被拉伸以填充整个交叉轴。
::: normal-demo align-items: stretch

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="height: 200px;flex-direction: row;align-items: stretch;"
>
    <div class="flex-item flex-auto-height">1</div>
    <div class="flex-item flex-auto-height">2</div>
    <div class="flex-item flex-auto-height">3</div>
    <div class="flex-item flex-auto-height">4</div>
    <div class="flex-item flex-auto-height">5</div>
</div>
```

:::

项目在交叉轴起始端对齐。
::: normal-demo align-items: flex-start

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="height:200px;flex-direction: row;align-items: flex-start;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>
```

:::

项目在交叉轴末尾端对齐。
::: normal-demo align-items: flex-end

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="height: 200px;flex-direction: row;align-items: flex-end;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>
```

:::

项目在交叉轴中心对齐。
::: normal-demo align-items: center

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="height: 200px;flex-direction: row;align-items: center;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
</div>
```

:::

项目在交叉轴上以基线对齐（以项目的基线对齐）。
::: normal-demo align-items: baseline

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div class="flex-container" style="align-items: baseline;">
    <div class="flex-item" style="font-size: 50px;">1</div>
    <div class="flex-item" style="font-size: 10px;">2</div>
    <div class="flex-item" style="font-size: 40px;">3</div>
    <div class="flex-item" style="font-size: 5px;">4</div>
    <div class="flex-item" style="font-size: 30px;">5</div>
</div>
```

:::

## align-content 决定整个容器在交叉轴的对齐方式

### flex-flow: row wrap

::: normal-demo align-content: stretch

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="height:200px;flex-flow: row wrap;align-content: stretch;"
>
    <div class="flex-item flex-auto-height">1</div>
    <div class="flex-item flex-auto-height">2</div>
    <div class="flex-item flex-auto-height">3</div>
    <div class="flex-item flex-auto-height">4</div>
    <div class="flex-item flex-auto-height">5</div>
    <div class="flex-item flex-auto-height">6</div>
    <div class="flex-item flex-auto-height">7</div>
    <div class="flex-item flex-auto-height">8</div>
    <div class="flex-item flex-auto-height">9</div>
    <div class="flex-item flex-auto-height">10</div>
    <div class="flex-item flex-auto-height">11</div>
    <div class="flex-item flex-auto-height">12</div>
    <div class="flex-item flex-auto-height">13</div>
    <div class="flex-item flex-auto-height">14</div>
    <div class="flex-item flex-auto-height">15</div>
</div>
```

:::

::: normal-demo align-content: flex-start

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="height: 200px;flex-flow: row wrap;align-content: flex-start;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
</div>
```

:::

::: normal-demo align-content: flex-end

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="height: 200px;flex-flow: row wrap;align-content: flex-end;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
</div>
```

:::

::: normal-demo align-content: center

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="height: 200px;flex-flow: row wrap;align-content: center;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
</div>
```

:::

::: normal-demo align-content: space-between

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="height: 200px;flex-flow: row wrap;align-content: space-between;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
</div>
```

:::

::: normal-demo align-content: space-around

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="height: 200px;flex-flow: row wrap;align-content: space-around;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
</div>
```

:::

### flex-flow: column wrap

::: normal-demo align-content: stretch

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="height: 200px;flex-flow: column wrap;align-content: stretch;"
>
    <div class="flex-item flex-auto-width">1</div>
    <div class="flex-item flex-auto-width">2</div>
    <div class="flex-item flex-auto-width">3</div>
    <div class="flex-item flex-auto-width">4</div>
    <div class="flex-item flex-auto-width">5</div>
    <div class="flex-item flex-auto-width">6</div>
    <div class="flex-item flex-auto-width">7</div>
    <div class="flex-item flex-auto-width">8</div>
    <div class="flex-item flex-auto-width">9</div>
    <div class="flex-item flex-auto-width">10</div>
    <div class="flex-item flex-auto-width">11</div>
    <div class="flex-item flex-auto-width">12</div>
    <div class="flex-item flex-auto-width">13</div>
    <div class="flex-item flex-auto-width">14</div>
    <div class="flex-item flex-auto-width">15</div>
</div>
```

:::

::: normal-demo align-content: flex-start

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="height: 200px;flex-flow: column wrap;align-content: flex-start;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
</div>
```

:::

::: normal-demo align-content: flex-end

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="height: 200px;flex-flow: column wrap;align-content: flex-end;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
</div>
```

:::

::: normal-demo align-content: center

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="height: 200px;flex-flow: column wrap;align-content: center;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
</div>
```

:::

::: normal-demo align-content: space-between

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="height: 200px;flex-flow: column wrap;align-content: space-between;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
</div>
```

:::

::: normal-demo align-content: space-around

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div
    class="flex-container"
    style="height: 200px;flex-flow: column wrap;align-content: space-around;"
>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
    <div class="flex-item">9</div>
    <div class="flex-item">10</div>
    <div class="flex-item">11</div>
    <div class="flex-item">12</div>
    <div class="flex-item">13</div>
    <div class="flex-item">14</div>
    <div class="flex-item">15</div>
</div>
```

:::

## 定义单个项目的属性

### order

::: normal-demo order

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div class="flex-container" style="flex-direction: row;">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item" style="order: -1">5</div>
</div>
```

:::

### flex-grow

::: normal-demo flex-grow

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div class="flex-container" style="flex-direction: row;">
    <div class="flex-item" style="flex-grow: 1">1</div>
    <div class="flex-item" style="flex-grow: 2">2</div>
    <div class="flex-item" style="flex-grow: 3">3</div>
</div>
```

:::

### flex-shrink

::: normal-demo flex-shrink

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div class="flex-container" style="flex-direction: row;">
    <div class="flex-item" style="flex-shrink: 1;width: 500px;">1</div>
    <div class="flex-item" style="flex-shrink: 2;width: 500px;">2</div>
    <div class="flex-item" style="flex-shrink: 3;width: 500px;">3</div>
</div>
```

:::

### flex-basis

::: normal-demo flex-basis

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div class="flex-container" style="flex-direction: row;">
    <div class="flex-item" style="flex-basis: 100px">1</div>
    <div class="flex-item" style="flex-basis: 200px">2</div>
    <div class="flex-item" style="flex-basis: 300px">3</div>
</div>
```

:::

### flex

flex 属性是 flex-grow、flex-shrink 以及 flex-basis 的简写形式，默认值为 flex: 0 1 auto。

flex 属性有两个快捷值 ① flex: auto 等价于 flex: 1 1 auto；② flex: none 等价于 flex: 0 0 auto。

建议优先使用该属性而不是单独使用三个分离的属性，因为浏览器会推送相关值。

### align-self

::: normal-demo align-self

```html
<link rel="stylesheet" href="/assets/styles/flex-layout.css">
<div class="flex-container" style="height: 200px;flex-direction: row;">
  <div class="flex-item" style="align-self: flex-start;">1</div>
  <div class="flex-item" style="align-self: center">2</div>
  <div class="flex-item" style="align-self: flex-end">3</div>
</div>
```

:::