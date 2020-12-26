---
date: 2020-12-19
---

## css Flex布局

:::tip
右击 → 检查 → 查看样式代码
:::

## 决定容器内的排列方向

### flex-direction：row

在X轴方向排列，起点在左端

<div class="flex-border flex-container" style="display:flex;flex-direction:row">
    <div class="flex-border flex-item flex-item-width" v-for="i in 5">{{i}}</div>
</div>

### flex-direction：row-reverse

在X轴方向排列，起点在右端

<div class="flex-border flex-container" style="display:flex;flex-direction:row-reverse">
    <div class="flex-border flex-item flex-item-width" v-for="i in 5">{{i}}</div>
</div>

### flex-direction：column

在Y轴方向排列，起点在上沿

<div class="flex-border flex-container flex-container-height" style="display:flex;flex-direction:column">
    <div class="flex-border flex-item" v-for="i in 3">{{i}}</div>
</div>

### flex-direction：column-reverse

在Y轴方向排列，起点在下沿

<div class="flex-border flex-container flex-container-height" style="display:flex;flex-direction:column-reverse">
    <div class="flex-border flex-item" v-for="i in 3">{{i}}</div>
</div>

## 决定容器内如何换行

### flex-wrap：nowrap

如果一条轴线排列不下，不换行

<div class="flex-border flex-container" style="display:flex;flex-wrap: nowrap">
    <div class="flex-border flex-item flex-item-width" v-for="i in 20">{{i}}</div>
</div>

### flex-wrap：wrap

如果一条轴线排列不下，换行且第一行在上方

<div class="flex-border flex-container" style="display:flex;flex-wrap: wrap">
    <div class="flex-border flex-item flex-item-width" v-for="i in 20">{{i}}</div>
</div>

### flex-wrap：wrap-reverse

如果一条轴线排列不下，换行且第一行在下方

<div class="flex-border flex-container" style="display:flex;flex-wrap: wrap-reverse">
    <div class="flex-border flex-item flex-item-width" v-for="i in 20">{{i}}</div>
</div>

## 排列方向及换行方式简写

### flex-flow：row  nowrap

flex-direction属性和flex-wrap属性的简写形式

## 决定容器内的对齐方式：X轴

### justify-content：flex-start

在X轴方向上，左对齐

<div class="flex-border flex-container" style="display:flex;justify-content:flex-start">
    <div class="flex-border flex-item flex-item-width" v-for="i in 5">{{i}}</div>
</div>

### justify-content：flex-end

在X轴方向上，右对齐

<div class="flex-border flex-container" style="display:flex;justify-content:flex-end">
    <div class="flex-border flex-item flex-item-width" v-for="i in 5">{{i}}</div>
</div>

### justify-content：center

在X轴方向上，居中对齐

<div class="flex-border flex-container" style="display:flex;justify-content:center">
    <div class="flex-border flex-item flex-item-width" v-for="i in 5">{{i}}</div>
</div>

### justify-content：space-between

在X轴方向上，两端对齐，子项目之间的间隔都相等

<div class="flex-border flex-container" style="display:flex;justify-content:space-between">
    <div class="flex-border flex-item flex-item-width" v-for="i in 5">{{i}}</div>
</div>

### justify-content：space-around

在X轴方向上，每个子项目两侧的间隔相等，子项目之间的间隔会比子项目与边框的间隔大一倍

<div class="flex-border flex-container" style="display:flex;justify-content:space-around">
    <div class="flex-border flex-item flex-item-width" v-for="i in 5">{{i}}</div>
</div>

## 决定容器内的对齐方式：Y轴

### align-items：stretch

在Y轴方向上，如果子项目未设置高度或设为auto，将占满整个容器的高度

<div class="flex-border flex-container" style="height:100px;display:flex;align-items:stretch">
    <div class="flex-border flex-item flex-item-width" v-for="i in 5">{{i}}</div>
</div>

### align-items：flex-start

在Y轴方向上，与上沿对齐

<div class="flex-border flex-container" style="height:100px;display:flex;align-items:flex-start">
    <div class="flex-border flex-item flex-item-width flex-item-height" v-for="i in 5">{{i}}</div>
</div>

### align-items：flex-end

在Y轴方向上，与下沿对齐

<div class="flex-border flex-container" style="height:100px;display:flex;align-items:flex-end">
    <div class="flex-border flex-item flex-item-width flex-item-height" v-for="i in 5">{{i}}</div>
</div>

### align-items：center

在Y轴方向上，居中对齐

<div class="flex-border flex-container" style="height:100px;display:flex;align-items:center">
    <div class="flex-border flex-item flex-item-width flex-item-height" v-for="i in 5">{{i}}</div>
</div>

### align-items：baseline

与子项目的第一行文字的基线对齐

<div class="flex-border flex-container" style="height:100px;display:flex;align-items:baseline">
    <div class="flex-border flex-item flex-item-width" style="font-size:20px;">1</div>
    <div class="flex-border flex-item flex-item-width" style="font-size:25px;">2</div>
    <div class="flex-border flex-item flex-item-width" style="font-size:15px;">3</div>
    <div class="flex-border flex-item flex-item-width" style="font-size:35px;">4</div>
    <div class="flex-border flex-item flex-item-width" style="font-size:40px;">5</div>
</div>

## 决定容器内的对齐方式：XY轴

定义整个项目在多行排列或多列排列时的对齐方式

如果整个项目只排满一行或一列，则该属性不起作用

### align-content：stretch

**flex-flow: row wrap**：所有子项目在X轴优先排满

**align-content：stretch**：整个项目在Y轴方向上自动拉伸

<div class="flex-border flex-container flex-container-height" style="display:flex;flex-flow: row wrap;align-content:stretch">
    <div class="flex-border flex-item flex-item-width" v-for="i in 20">{{i}}</div>
</div>

**flex-flow: column wrap**：所有子项目在Y轴优先排满

**align-content：stretch**：整个项目在X轴方向上自动拉伸

<div class="flex-border flex-container flex-container-height" style="display:flex;flex-flow: column wrap;align-content:stretch">
    <div class="flex-border flex-item" v-for="i in 15">{{i}}</div>
</div>

### align-content：flex-start

**flex-flow：row wrap**：所有子项目在X轴优先排满

**align-content：flex-start**：整个项目在Y轴方向上与上沿对齐

<div class="flex-border flex-container flex-container-height" style="display:flex;flex-flow: row wrap;align-content:flex-start">
    <div class="flex-border flex-item flex-item-width" v-for="i in 30">{{i}}</div>
</div>

**flex-flow：column wrap**：所有子项目在Y轴优先排满

**align-content：flex-start**：整个项目在X轴方向上左对齐

<div class="flex-border flex-container flex-container-height" style="height:150px;display:flex;flex-flow: column wrap;align-content:flex-start">
    <div class="flex-border flex-item flex-item-width" v-for="i in 30">{{i}}</div>
</div>

### align-content：flex-end

**flex-flow：row wrap**：所有子项目在X轴优先排满

**align-content：flex-end**：整个项目在Y轴方向上与下沿对齐

<div class="flex-border flex-container flex-container-height" style="display:flex;flex-flow: row wrap;align-content:flex-end">
    <div class="flex-border flex-item flex-item-width" v-for="i in 30">{{i}}</div>
</div>

**flex-flow：column wrap**：所有子项目在Y轴优先排满

**align-content：flex-end**：整个项目在X轴方向上右对齐

<div class="flex-border flex-container flex-container-height" style="display:flex;flex-flow: column wrap;align-content:flex-end">
    <div class="flex-border flex-item flex-item-width" v-for="i in 30">{{i}}</div>
</div>

### align-content：center

**flex-flow：row wrap**：所有子项目在X轴优先排满

**align-content：center**：整个项目在Y轴方向上居中对齐

<div class="flex-border flex-container flex-container-height" style="display:flex;flex-flow: row wrap;align-content:center">
    <div class="flex-border flex-item flex-item-width" v-for="i in 30">{{i}}</div>
</div>

**flex-flow：column wrap**：所有子项目在Y轴优先排满

**align-content：center**：整个项目在X轴方向上居中对齐

<div class="flex-border flex-container flex-container-height" style="display:flex;flex-flow: column wrap;align-content:center">
    <div class="flex-border flex-item flex-item-width" v-for="i in 30">{{i}}</div>
</div>

### align-content：space-between

**flex-flow：row wrap**：所有子项目在X轴优先排满

**align-content：space-between**：整个项目在Y轴方向上两端对齐

<div class="flex-border flex-container flex-container-height" style="display:flex;flex-flow: row wrap;align-content:space-between">
    <div class="flex-border flex-item flex-item-width" v-for="i in 30">{{i}}</div>
</div>

**flex-flow：column wrap**：所有子项目在Y轴优先排满

**align-content：space-between**：整个项目在X轴方向上两端对齐

<div class="flex-border flex-container flex-container-height" style="display:flex;flex-flow: column wrap;align-content:space-between">
    <div class="flex-border flex-item flex-item-width" v-for="i in 30">{{i}}</div>
</div>

### align-content：space-around

**flex-flow：row wrap**：所有子项目在X轴优先排满

**align-content：space-around**：整个项目在Y轴方向上两侧间隔相等

<div class="flex-border flex-container flex-container-height" style="display:flex;flex-flow: row wrap;align-content:space-around">
    <div class="flex-border flex-item flex-item-width" v-for="i in 30">{{i}}</div>
</div>

**flex-flow：column wrap**：所有子项目在Y轴优先排满

**align-content：space-around**：整个项目在X轴方向上两侧间隔相等

<div class="flex-border flex-container flex-container-height" style="display:flex;flex-flow: column wrap;align-content:space-around">
    <div class="flex-border flex-item flex-item-width" v-for="i in 30">{{i}}</div>
</div>

## 定义单个子项目的属性

### 排列顺序：order

属性数值越小，排列越靠前，默认值为0

<div class="flex-border flex-container" style="display:flex;">
    <div class="flex-border flex-item flex-item-width" v-for="i in 5">{{i}}</div>
    <div class="flex-border flex-item flex-item-width" style="order: -1">6</div>
</div>

### 放大比例：flex-grow

默认值为0：即使存在剩余空间，也不放大

如果所有子项目的flex-grow都为1，则它们将等分剩余空间

<div class="flex-border flex-container" style="display:flex;">
    <div class="flex-border flex-item" style="flex-grow: 1">1</div>
    <div class="flex-border flex-item" style="flex-grow: 1">2</div>
    <div class="flex-border flex-item" style="flex-grow: 1">3</div>
</div>

如果一个子项目的flex-grow为2，其余为1，则前者占据的剩余空间是其他子项目的一倍

<div class="flex-border flex-container" style="display:flex;">
    <div class="flex-border flex-item" style="flex-grow: 1">1</div>
    <div class="flex-border flex-item" style="flex-grow: 2">2</div>
    <div class="flex-border flex-item" style="flex-grow: 1">3</div>
</div>

### 缩小比例：flex-shrink

默认值为1，即如果空间不足，该子项目将缩小；负值对该属性无效

如果所有子项目的flex-shrink都为1，当剩余空间不足时，都将等比例缩小

<div class="flex-border flex-container" style="display:flex;">
    <div class="flex-border flex-item" style="flex-basis:1000px;flex-shrink:1">1</div>
    <div class="flex-border flex-item" style="flex-basis:1000px;flex-shrink:1">2</div>
</div>

如果一个子项目的flex-shrink为0，其余为1，则空间不足时，前者不缩小

<div class="flex-border flex-container" style="display:flex;">
    <div class="flex-border flex-item" style="flex-basis:600px;flex-shrink:0">1</div>
    <div class="flex-border flex-item" style="flex-basis:600px;flex-shrink:1">2</div>
</div>

### 初始大小：flex-basis

该属性定义在分配多余空间之前，子项目占据的空间。

浏览器根据该属性计算是否有多余空间。它的默认值为auto，即子项目内容的大小

<div class="flex-border flex-container" style="display:flex;">
    <div class="flex-border flex-item" style="flex-basis:auto">0</div>
    <div class="flex-border flex-item" style="flex-basis:100px">1</div>
    <div class="flex-border flex-item" style="flex-basis:200px">2</div>
    <div class="flex-border flex-item" style="flex-basis:300px">3</div>
</div>

### 缩放比例及初始大小简写：flex

flex 属性是flex-grow、flex-shrink和flex-basis的简写，默认值 0 1 auto；后两个属性为可选值

flex 属性有两个快捷值：**auto**（1 1 auto）和 **none**（0 0 auto）

建议优先使用该属性，而不是单独写三个分离的属性，因为浏览器会推算相关值

### 对齐方式：align-self

align-self 属性允许单个子项目有与其他子项目不一样的对齐方式，可覆盖align-items属性

align-self 属性默认值为auto，表示继承父元素align-items属性，如果没有父元素，则等同于stretch

<div class="flex-border flex-container flex-container-height" style="display:flex;">
    <div class="flex-border flex-item flex-item-width" style="align-self: flex-end">1</div>
    <div class="flex-border flex-item flex-item-width" style="align-self: center">2</div>
    <div class="flex-border flex-item flex-item-width" style="align-self: flex-start">3</div>
</div>

<style>
.flex-border{
    border: 2px grey solid;
    border-radius: 5px;
}
.flex-container{
    background-color: lightpink;
}
.flex-container-height{
    height:200px;
}
.flex-item{
    background-color: lightblue;
    text-align:center;
    margin: 5px 5px;
    padding: 5px 5px;
    font-weight:bold;
}
.flex-item-width{
    width:20px;
}
.flex-item-height{
    height:20px;
}
</style>
