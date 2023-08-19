# Flex Layout

## 主轴与交叉轴

在 flex 布局中，存在两个重要的轴：主轴（main axis）和交叉轴（cross axis）。

主轴是 flex 容器的主要方向。它可以是水平方向或垂直方向。

交叉轴是与主轴垂直的轴：

- 如果主轴是水平方向，则交叉轴是垂直方向
- 如果主轴是垂直方向，则交叉轴是水平方向


## flex-direction 决定主轴方向

=== "row"
    主轴方向为水平方向，项目从左到右依次排列。
    <div class="flex-container" style="flex-direction: row;">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>
      <div class="flex-item">5</div>
    </div>


=== "row-reverse"
    主轴方向为水平方向，项目从右到左依次排列。
    <div class="flex-container" style="flex-direction: row-reverse;">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>
      <div class="flex-item">5</div>
    </div>

=== "column"
    主轴方向为垂直方向，项目从上到下依次排列。
    <div class="flex-container" style="flex-direction: column;">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>
      <div class="flex-item">5</div>
    </div>

=== "column-reverse"
    主轴方向为垂直方向，项目从下到上依次排列。
    <div class="flex-container" style="flex-direction: column-reverse;">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>
      <div class="flex-item">5</div>
    </div>

## flex-wrap 决定换行行为

=== "nowrap（默认值）"
    所有 flex 项目将放在一行内，可能会导致容器溢出。
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

=== "wrap"
    当 flex 项目的总宽度超过容器宽度时，会将项目进行换行排列。
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

=== "wrap-reverse"
    当 flex 项目的总宽度超过容器宽度时，项目会从尾部开始换行排列。
    <div class="flex-container" style="flex-direction: row;flex-wrap: wrap-reverse;">
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

## justify-content 决定主轴对齐方式

=== "flex-start"
    项目在主轴起始端对齐。
    <div class="flex-container" style="flex-direction: row;justify-content: flex-start;">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>
      <div class="flex-item">5</div>
    </div>

=== "flex-end"
    项目在主轴末尾端对齐。
    <div class="flex-container" style="flex-direction: row;justify-content: flex-end;">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>
      <div class="flex-item">5</div>
    </div>

=== "center"
    项目在主轴中心对齐。
    <div class="flex-container" style="flex-direction: row;justify-content: center;">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>
      <div class="flex-item">5</div>
    </div>

=== "space-between"
    项目在主轴上平均分布，首尾项目与容器边缘对齐。
    <div class="flex-container" style="flex-direction: row;justify-content: space-between;">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>
      <div class="flex-item">5</div>
    </div>

=== "space-around"
    项目在主轴上平均分布，项目之间和首尾项目与容器边缘之间的间隔相等。
    <div class="flex-container" style="flex-direction: row;justify-content: space-around;">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>
      <div class="flex-item">5</div>
    </div>

=== "space-evenly"
    项目在主轴上平均分布，包括首尾项目与容器边缘之间的间隔。
    <div class="flex-container" style="flex-direction: row;justify-content: space-evenly;">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>
      <div class="flex-item">5</div>
    </div>

## align-items 决定交叉轴对齐方式

=== "stretch（默认值）"
    项目被拉伸以填充整个交叉轴。
    <div class="flex-container" style="height: 200px;flex-direction: row;align-items: stretch;">
      <div class="flex-item flex-auto-height">1</div>
      <div class="flex-item flex-auto-height">2</div>
      <div class="flex-item flex-auto-height">3</div>
      <div class="flex-item flex-auto-height">4</div>
      <div class="flex-item flex-auto-height">5</div>
    </div>

=== "flex-start"
    项目在交叉轴起始端对齐。
    <div class="flex-container" style="height:200px;flex-direction: row;align-items: flex-start;">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>
      <div class="flex-item">5</div>
    </div>

=== "flex-end"
    项目在交叉轴末尾端对齐。
    <div class="flex-container" style="height: 200px;flex-direction: row;align-items: flex-end;">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>
      <div class="flex-item">5</div>
    </div>

=== "center"
    项目在交叉轴中心对齐。
    <div class="flex-container" style="height: 200px;flex-direction: row;align-items: center;">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>
      <div class="flex-item">5</div>
    </div>

=== "baseline"
    项目在交叉轴上以基线对齐（以项目的基线对齐）。
    <div class="flex-container" style="align-items: baseline;">
      <div class="flex-item" style="font-size: 50px;">1</div>
      <div class="flex-item" style="font-size: 10px;">2</div>
      <div class="flex-item" style="font-size: 40px;">3</div>
      <div class="flex-item" style="font-size: 5px;">4</div>
      <div class="flex-item" style="font-size: 30px;">5</div>
    </div>

##  align-content 决定整个容器在交叉轴的对齐方式

### row wrap

=== "stretch"
    <div class="flex-container" style="height:200px;flex-flow: row wrap;align-content: stretch;">
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

=== "flex-start"
    <div class="flex-container" style="height: 200px;flex-flow: row wrap;align-content: flex-start;">
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

=== "flex-end"
    <div class="flex-container" style="height: 200px;flex-flow: row wrap;align-content: flex-end;">
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

=== "center"
    <div class="flex-container" style="height: 200px;flex-flow: row wrap;align-content: center;">
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

=== "space-between"
    <div class="flex-container" style="height: 200px;flex-flow: row wrap;align-content: space-between;">
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
  
=== "space-around"
    <div class="flex-container" style="height: 200px;flex-flow: row wrap;align-content: space-around;">
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

### column wrap

=== "stretch"
    <div class="flex-container" style="height: 200px;flex-flow: column wrap;align-content: stretch;">
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

=== "flex-start"
    <div class="flex-container" style="height: 200px;flex-flow: column wrap;align-content: flex-start;">
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

=== "flex-end"
    <div class="flex-container" style="height: 200px;flex-flow: column wrap;align-content: flex-end;">
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

=== "center"
    <div class="flex-container" style="height: 200px;flex-flow: column wrap;align-content: center;">
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

=== "space-between"
    <div class="flex-container" style="height: 200px;flex-flow: column wrap;align-content: space-between;">
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

=== "space-around"
    <div class="flex-container" style="height: 200px;flex-flow: column wrap;align-content: space-around;">
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

## 定义单个项目的属性

### order

<div class="flex-container" style="flex-direction: row;">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
  <div class="flex-item" style="order: -1">5</div>
</div>

### flex-grow

<div class="flex-container" style="flex-direction: row;">
  <div class="flex-item" style="flex-grow: 1">1</div>
  <div class="flex-item" style="flex-grow: 2">2</div>
  <div class="flex-item" style="flex-grow: 3">3</div>
</div>

### flex-shrink

<div class="flex-container" style="flex-direction: row;">
  <div class="flex-item" style="flex-shrink: 1;width: 500px;">1</div>
  <div class="flex-item" style="flex-shrink: 2;width: 500px;">2</div>
  <div class="flex-item" style="flex-shrink: 3;width: 500px;">3</div>
</div>

### flex-basis

<div class="flex-container" style="flex-direction: row;">
  <div class="flex-item" style="flex-basis: 100px">1</div>
  <div class="flex-item" style="flex-basis: 200px">2</div>
  <div class="flex-item" style="flex-basis: 300px">3</div>
</div>

### flex

flex 属性是 flex-grow、flex-shrink 以及 flex-basis 的简写形式，默认值为 flex: 0 1 auto。

flex 属性有两个快捷值 ① flex: auto 等价于 flex: 1 1 auto；② flex: none 等价于 flex: 0 0 auto。

建议优先使用该属性而不是单独使用三个分离的属性，因为浏览器会推送相关值。

### align-self

<div class="flex-container" style="height: 200px;flex-direction: row;">
  <div class="flex-item" style="align-self: flex-start;">1</div>
  <div class="flex-item" style="align-self: center">2</div>
  <div class="flex-item" style="align-self: flex-end">3</div>
</div>