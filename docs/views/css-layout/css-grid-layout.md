---
date: 2020-12-19
---

## css grid布局

:::tip
右击 → 检查 → 查看样式代码
:::

### 定义父容器的行高列宽

**grid-template-rows:50px 50px 50px** 定义网格三行行高，绝对单位方式；

**grid-template-columns:30% 30% 30%** 定义网格三列列宽，百分比方式；

<div class="grid-border grid-container grid-layout-around">

<div style="display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>

<div style="display:grid;grid-template-columns:30% 30% 30%;grid-template-rows:30% 30% 30%;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>

</div>

### 设置网格线名称

3x3的网格布局会有4条水平网格线和4条垂直网格线

可以使用方括号为每条网格线命名 **grid-template-rows:[r1] 50px [r2] 50px [r3] 50px [r4]**

网格布局允许同一根网格线有多个名字，比如[fifth-line row-5]

<div class="grid-border grid-container" style="display:grid;grid-template-columns:[c1] 50px [c2] 50px [c3] 50px [c4];grid-template-rows:[r1] 50px [r2] 50px [r3] 50px [r4];">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>

### 设置行间距与列间距

**row-gap**：设置行间距；**column-gap**：设置列间距；

简写形式：`gap: <row-gap> <column-gap>`

<div class="grid-border grid-container grid-layout-around">

<div style="display:grid;grid-template-columns:40px 40px 40px;grid-template-rows:40px 40px 40px;row-gap:15px">
        <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
    </div>

<div style="display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;column-gap:15px">
        <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
    </div>

</div>

### 定义区域

`grid-template-areas:'header header header' 'main main side' 'footer footer footer'`

<div class="grid-border grid-container" style="display:grid;grid-template-areas:'header header header' 'main main side' 'footer footer footer';">
    <div class="grid-border grid-item grid-color-1" style="grid-area: header">header</div>
    <div class="grid-border grid-item grid-color-2" style="grid-area: main">main</div>
    <div class="grid-border grid-item grid-color-3" style="grid-area: side">side</div>
    <div class="grid-border grid-item grid-color-4" style="grid-area: footer">footer</div>
</div>

### 设置单元格放置先后顺序

**grid-auto-flow:row**：先放置行后放置列；

**grid-auto-flow:column**：先放置列后放置行；

<div class="grid-border grid-container grid-layout-around">

<div style="display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;grid-auto-flow:row;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>

<div style="display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;grid-auto-flow:column">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>

</div>

### 设置单元格稠密顺序

row dense 和 column dense 用于决定在某些单元格指定位置后，剩下的单元格怎么自动放置

**grid-auto-flow:row dense**：优先占满行

**grid-auto-flow:column dense**：优先占满列

<div class="grid-border grid-container grid-layout-around">

<div style="display:grid;grid-template-columns:40px 40px 40px;grid-template-rows:40px 40px 40px;grid-auto-flow:row dense;">
    <div class="grid-border grid-item grid-color-1" style="grid-column-start:1;grid-column-end:3">1</div>
    <div class="grid-border grid-item grid-color-2" style="grid-column-start:1;grid-column-end:3">2</div>
    <div class="grid-border grid-item" v-for="i in 7" :class="`grid-color-${i+2}`">{{i+2}}</div>
</div>

<div style="display:grid;grid-template-columns:40px 40px 40px;grid-template-rows:40px 40px 40px;grid-auto-flow:column dense">
    <div class="grid-border grid-item grid-color-1" style="grid-column-start:1;grid-column-end:3">1</div>
    <div class="grid-border grid-item grid-color-2" style="grid-column-start:1;grid-column-end:3">2</div>
    <div class="grid-border grid-item" v-for="i in 7" :class="`grid-color-${i+2}`">{{i+2}}</div>
</div>

</div>

### 自动生成网格行列 

**grid-auto-rows:50px**：自动生成行高为50px的行

**grid-auto-columns:50px**：自动生成列宽为50px的列

<div class="grid-border grid-container" style="display:grid;grid-auto-rows:50px;grid-auto-columns:50px;">
    <div class="grid-border grid-item grid-color-1" style="grid-row-start:1;grid-column-start:1">1</div>
    <div class="grid-border grid-item grid-color-2" style="grid-row-start:2;grid-column-start:2">2</div>
    <div class="grid-border grid-item grid-color-3" style="grid-row-start:3;grid-column-start:3">3</div>
</div>

### 指定单元格位置

**grid-row-start**：指定单元格上边框所在的水平网格线

**grid-row-end**：指定单元格下边框所在的水平网格线

**grid-column-start**：指定单元格左边框所在的垂直网格线

**grid-column-end**：指定单元格右边框所在的垂直网格线

<div class="grid-border grid-container" style="display:grid;grid-template-rows:50px 50px 50px;grid-template-columns:50px 50px 50px;">
    <div class="grid-border grid-item grid-color-1" style="grid-row-start:1;grid-row-end:3;grid-column-start:1;grid-column-end:3;">1</div>
    <div class="grid-border grid-item" v-for="i in 5" :class="`grid-color-${i+1}`">{{i+1}}</div>
</div>

简写形式：`grid-row: <grid-row-start> / <grid-row-end>`

简写形式：`grid-column: <grid-column-start> / <grid-column-end>`

简写形式：`grid-area: <row-start> / <column-start> / <row-end> / <column-end>;`

## 使用关键字和函数

### 自动填充：auto-fill

适用于单元格大小确定但是容器大小不确定的情况

如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充

<div class="grid-border grid-container" style="display:grid;grid-template-columns:repeat(auto-fill, 100px)">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>

### 按比例分割：fr

使用 fr 关键字（fraction的缩写，意为“片段”），表示比例关系

如果两列宽度分别是1fr和2fr，表示后者是前者的两倍

<div class="grid-border grid-container" style="display:grid;grid-template-columns:100px 1fr 2fr">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>

### 自适应：auto

auto 关键字表示由浏览器自动决定单元格的行高或列宽

<div class="grid-border grid-container" style="display:grid;grid-template-columns:100px auto 100px">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>

### 简化重复：repeat()

repeat()函数接收两个参数：① 重复的次数；② 重复的值

```css
grid-template-columns:repeat(2, 20px 30px); === grid-template-columns: 20px 30px 20px 30px;
grid-template-rows:repeat(2, 50%); === grid-template-rows:50% 50%;
```

<div class="grid-border grid-container grid-layout-center" style="display:grid;grid-template-columns:repeat(2, 40px 70px);grid-template-rows:repeat(2, 50%);">
    <div class="grid-border grid-item" v-for="i in 8" :class="`grid-color-${i}`">{{i}}</div>
</div>

### 限定长度：minmax()

minmax()函数接收两个参数：① 最小值；② 最大值

例如：minmax(100px,1fr)表示列宽最小100px，最大1fr

<div class="grid-border grid-container" style="display:grid;grid-template-columns:1fr 2fr minmax(100px, 1fr)">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>

## 定义容器的对齐方式

### 水平方向：justify-content

**justify-content:start**：对齐容器的左边框

<div class="grid-border grid-container" style="display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;justify-content:start;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>

**justify-content:end**：对齐容器的右边框

<div class="grid-border grid-container" style="display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;justify-content:end;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>

**justify-content:center**：在容器水平居中

<div class="grid-border grid-container" style="display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;justify-content:center;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>

**justify-content:stretch**：项目大小没有指定，拉伸占据整个网格容器，必须存在 auto 属性的行或列

<div class="grid-border grid-container" style="display:grid;grid-template-columns:50px auto 50px;grid-template-rows:50px 50px 50px;justify-content:stretch;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>

**justify-content:space-around**：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍

<div class="grid-border grid-container" style="display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;justify-content:space-around;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>

**justify-content:space-between**：项目与项目的间隔相等，项目与容器边框之间没有间隔

<div class="grid-border grid-container" style="display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;justify-content:space-between;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>

**justify-content:space-evenly**：项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔

<div class="grid-border grid-container" style="display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;justify-content:space-evenly;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>

### 垂直方向：justify-content

**align-content:start**：对齐容器的上沿边框

<div class="grid-border grid-container" style="height:150px;display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px;align-content:start;">
    <div class="grid-border grid-item" v-for="i in 6" :class="`grid-color-${i}`">{{i}}</div>
</div>

**align-content:end**：对齐容器的下沿边框

<div class="grid-border grid-container" style="height:150px;display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px;align-content:end;">
    <div class="grid-border grid-item" v-for="i in 6" :class="`grid-color-${i}`">{{i}}</div>
</div>

**align-content:center**：在容器垂直居中

<div class="grid-border grid-container" style="height:150px;display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px;align-content:center;">
    <div class="grid-border grid-item" v-for="i in 6" :class="`grid-color-${i}`">{{i}}</div>
</div>

**align-content:stretch**：项目大小没有指定，拉伸占据整个网格容器，必须存在 auto 属性的行或列

<div class="grid-border grid-container" style="height:150px;display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:auto 50px;align-content:stretch;">
    <div class="grid-border grid-item" v-for="i in 6" :class="`grid-color-${i}`">{{i}}</div>
</div>

**align-content:space-around**：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍

<div class="grid-border grid-container" style="height:150px;display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px;align-content:space-around;">
    <div class="grid-border grid-item" v-for="i in 6" :class="`grid-color-${i}`">{{i}}</div>
</div>

**align-content:space-between**：项目与项目的间隔相等，项目与容器边框之间没有间隔

<div class="grid-border grid-container" style="height:200px;display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;align-content:space-between;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>

**align-content:space-evenly**：项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔

<div class="grid-border grid-container" style="height:200px;display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;align-content:space-evenly;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>

### 简写形式：place-content

简写形式：`place-content: <align-content> <justify-content>;`

## 定义所有子项目的对齐方式

### 水平方向：justify-items

**justify-items:start**：左对齐

**justify-items:end**：右对齐

**justify-items:center**：居中对齐

**justify-items:stretch**：自动拉伸

<div class="grid-border grid-container grid-layout-around">

<div style="background-color:pink">
<div style="display:grid;grid-template-columns:40px 40px 40px;grid-template-rows:40px 40px 40px;justify-items:start;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>
</div>

<div style="background-color:pink">
<div style="display:grid;grid-template-columns:40px 40px 40px;grid-template-rows:40px 40px 40px;justify-items:center;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>
</div>

<div style="background-color:pink">
<div style="display:grid;grid-template-columns:40px 40px 40px;grid-template-rows:40px 40px 40px;justify-items:end;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>
</div>

<div style="background-color:pink">
<div style="display:grid;grid-template-columns:40px 40px 40px;grid-template-rows:40px 40px 40px;justify-items:stretch;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>
</div>

</div>

### 垂直方向：align-items

**align-items:start**：与上沿对齐

**align-items:end**：与下沿对齐

**align-items:center**：与中心对齐

**align-items:stretch**：自动拉伸

<div class="grid-border grid-container grid-layout-around">

<div style="background-color:pink">
<div style="display:grid;grid-template-columns:40px 40px 40px;grid-template-rows:40px 40px 40px;align-items:start;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>
</div>

<div style="background-color:pink">
<div style="display:grid;grid-template-columns:40px 40px 40px;grid-template-rows:40px 40px 40px;align-items:center;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>
</div>

<div style="background-color:pink">
<div style="display:grid;grid-template-columns:40px 40px 40px;grid-template-rows:40px 40px 40px;align-items:end;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>
</div>

<div style="background-color:pink">
<div style="display:grid;grid-template-columns:40px 40px 40px;grid-template-rows:40px 40px 40px;align-items:stretch;">
    <div class="grid-border grid-item" v-for="i in 9" :class="`grid-color-${i}`">{{i}}</div>
</div>
</div>

</div>

### 简写形式：place-items

简写形式：`place-items: <align-items> <justify-items>;`

## 定义单个子项目的对齐方式

### 水平方向：justify-self

**justify-self:start**：左对齐

**justify-self:end**：右对齐

**justify-self:center**：水平居中

**justify-self:stretch**：自动拉伸

<div class="grid-border grid-container grid-layout-around">

<div style="display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;">
    <div class="grid-border grid-item grid-color-1" style="justify-self:start">1</div>
    <div class="grid-border grid-item" v-for="i in 8" :class="`grid-color-${i+1}`">{{i+1}}</div>
</div>

<div style="display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;">
    <div class="grid-border grid-item grid-color-1" style="justify-self:end">1</div>
    <div class="grid-border grid-item" v-for="i in 8" :class="`grid-color-${i+1}`">{{i+1}}</div>
</div>

<div style="display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;">
    <div class="grid-border grid-item grid-color-1" style="justify-self:center">1</div>
    <div class="grid-border grid-item" v-for="i in 8" :class="`grid-color-${i+1}`">{{i+1}}</div>
</div>

<div style="display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;">
    <div class="grid-border grid-item grid-color-1" style="justify-self:stretch">1</div>
    <div class="grid-border grid-item" v-for="i in 8" :class="`grid-color-${i+1}`">{{i+1}}</div>
</div>

</div>

### 垂直方向：align-self

**align-self:start**：与上沿对齐

**align-self:end**：与下沿对齐

**align-self:center**：垂直居中

**align-self:stretch**：自动拉伸

<div class="grid-border grid-container grid-layout-around">

<div style="display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;">
    <div class="grid-border grid-item grid-color-1" style="align-self:start">1</div>
    <div class="grid-border grid-item" v-for="i in 8" :class="`grid-color-${i+1}`">{{i+1}}</div>
</div>

<div style="display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;">
    <div class="grid-border grid-item grid-color-1" style="align-self:end">1</div>
    <div class="grid-border grid-item" v-for="i in 8" :class="`grid-color-${i+1}`">{{i+1}}</div>
</div>

<div style="display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;">
    <div class="grid-border grid-item grid-color-1" style="align-self:center">1</div>
    <div class="grid-border grid-item" v-for="i in 8" :class="`grid-color-${i+1}`">{{i+1}}</div>
</div>

<div style="display:grid;grid-template-columns:50px 50px 50px;grid-template-rows:50px 50px 50px;">
    <div class="grid-border grid-item grid-color-1" style="align-self:stretch">1</div>
    <div class="grid-border grid-item" v-for="i in 8" :class="`grid-color-${i+1}`">{{i+1}}</div>
</div>

</div>

### 简写形式：place-self

简写形式：`place-self: <align-self> <justify-self>;`

<style>
.grid-border{
    border: 2px grey solid;
    border-radius: 5px;
}
.grid-container{
    background-color: lightpink
}
.grid-layout-around{
    display: flex;
    justify-content: space-around;
}
.grid-layout-center{
    display: flex;
    justify-content: center;
}
.grid-item{
    margin: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight:bold;
}
.grid-color-1{
    background-color: lightblue;
}
.grid-color-2{
    background-color: MediumSpringGreen;
}
.grid-color-3{
    background-color: LightCyan;
}
.grid-color-4{
    background-color: LightGrey;
}
.grid-color-5{
    background-color: Tomato;
}
.grid-color-6{
    background-color: LightSalmon;
}
.grid-color-7{
    background-color: gold;
}
.grid-color-8{
    background-color: LightYellow;
}
.grid-color-9{
    background-color: Aqua;
}
</style>
