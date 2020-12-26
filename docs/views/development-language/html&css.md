## html/css
## 光标显示链接指针(一只手)
### 方式一
```html
<a href="#"></a>
```
### 方式二
```css
div{
    cursor: pointer
}
```
## css样式的引用方式
### 方式一：内联式
```html
<div style="color:red">设置文字的颜色为红色</div>
```
### 方式二：嵌入式
```html
<head>
<style>
div{
    color: red;
}
</style>
</head>
```
### 方式二：外部式
```html
<head>
<link href="style.css" rel="stylesheet" type="text/css" />
</head>
```
## JQuery设置css属性
```javascript
$("#id").css("属性名","属性值");
```
## input标签
### 获取input的值
```javascript
var value = $("#inputId").val();
```
### 设置input的值
```javascript
$("#inputId").val("value");
```
### input标签获取焦点事件
```javascript
$("#inputId").focus(function () {
    //添加代码
});
```
### input标签失去焦点事件
```javascript
$("#inputId").blur(function () {
    //添加代码
});
```
## Label标签
### 设置Label的值
```javascript
$("#labelId").text("value");
```
## 跳转url
```javascript
window.location.href = "http://localhost:8080";
```
## 去除html自带样式
```css
body,div,p,h1,h2,h3,h4,h5,h6,ul,li,dl,dt,a,input,button,textarea,select{
    margin: 0;
    padding: 0;
    outline: none;
  }
  html,body{
    font-family:Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
    color: #333333;
    background-color: #ffffff;
    min-width: 1226px;
    font-size: 12px;
  }
  a{
    text-decoration: none;
  }
  ul,li{
    list-style: none;
  }
  input{
    font: normal;
  }
  input:focus,a:focus{
    outline: none;
  }
```

### 水平居中

- 设置父元素`text-align: center`：设置 **行内元素** 在 **块级元素** 水平居中

  ```html
  <div style="text-align:center">
        <a>居中行内元素</a>
  </div>
  ```

- 设置子元素`margin: 0px auto`：设置**定宽** **块级元素** 在 **块级元素** 水平居中

  ```html
  <div>
      <div style="width:50px;margin:0px auto">居中块级元素</div>
  </div>
  ```

- 给父元素设置`display: flex; justify-content: center;`：适用于flex布局

  ```html
  <div style="display:flex;justify-content:center">
      <a>居中行内元素</a>
      <div>居中块级元素</div>
  </div>
  ```

- 父元素相对定位，子元素绝对定位，并使用transform使子元素移动自身的-50%

  ```html
  <div style="position:relative">
      <div style="position:absolute;left:50%;transform:translateX(-50%);">居中元素</div>
  </div>
  ```

- 父元素相对定位，子元素绝对定位，指定子元素宽度并使用`left:0;right:0;margin:auto`

  ```html
  <div style="position:relative">
      <div style="position:absolute;width:100px;left:0;right:0;margin:auto">
          居中元素
      </div>
  </div>
  ```

### 垂直居中

- 设置父元素`height:100px;line-height:100px;`：设置 **行内元素** 在 **块级元素** 垂直居中，一般用于文字

  ```html
  <div style="height:100px;line-height:100px">
      <a>居中行内元素</a>
  </div>
  ```

- 设置父元素`padding:20px 0;`：父元素不能指定高度，适用于父元素高度不确定，或父元素高度是根据子元素高度确定的情况

  ```html
  <div style="padding:20px 0;">
      <div>居中元素</div>
  </div>
  ```

- 父元素相对定位（父元素需要有高度），子元素绝对定位，并使用transform使子元素移动自身的-50%

  ```html
  <div style="position:relative;height:100px">
      <div style="position:absolute;top:50%;transform:translateY(-50%);">
          居中元素
      </div>
  </div>
  ```

- `display:flex;align-items:center;`：适用于flex布局，父元素需要有高度

  ```html
  <div style="display:flex;align-items:center">
      <a>居中元素</a>
      <div>居中元素</div>
  </div>
  ```

- 父元素相对定位，子元素绝对定位，指定子元素高度并使用`top:0;bottom:0;margin:auto;`

  ```html
  <div style="display:relative;height:100px">
      <div style="display:absolute;top:0;bottom:0;margin:auto;height:30px;">
          居中元素
      </div>
  </div>
  ```

## css内容超出后显示省略号
```
1. 设置内容宽度 width，高度 height
2. 使用 overflow: hidden 隐藏超出内容
3. 使用 white-space: nowrap 设置内容不换行
4. 使用 text-overflow: ellipsis 设置超出内容显示省略号
```

## css经典布局

### 空间居中布局

- 空间居中指不管容器大小，项目总是占据中心：`display: grid; place-items: center;`

```html
<div class="container" style="display: grid; place-items: center;">
    <div class="content">1</div>
</div>
```

### 两栏式布局

- 两栏式指一个边栏，一个主栏：`display: grid; grid-template-columns: minmax(150px, 25%) 1fr;`
- 第一列宽度是`minmax(150px,25%)`,即最小宽度为150px，最大宽度为25%；
- 第二列为`1fr`，即所有剩余宽度。

```html
<div class="container" style="display: grid; grid-template-columns: minmax(150px, 25%) 1fr;">
    <div style="background-color: pink;">1</div>
    <div style="background-color: lightgreen;">2</div>
</div>
```

### 三明治布局

- 三明治指页面在垂直放心上分为页眉、内容和页脚：`display: grid; grid-template-rows: auto 1fr auto;`
- grid-template-rows指定垂直高度怎么划分：第一部分（页眉）和第三部分（页脚）的高度都为auto，第二部分（内容区）的高度为1fr，即剩余的所有高度。

```html
<div class="container" style="display: grid; grid-template-rows: auto 1fr auto;">
    <div style="background-color: yellow;">1</div>
    <div style="background-color: pink;">2</div>
    <div style="background-color: lightgreen;">3</div>
</div>
```

### 圣杯布局

- 圣杯指页面分成五个部分，除了页眉和页脚，内容区分成左边栏、主栏和右边栏：`display: grid; grid-template-rows: auto 1fr auto;`
- grid-template指定垂直和水平高度如何划分：第一部分（页眉和左边栏）和第三部分（页脚和右边栏）都是内容高度或宽度，第二部分（内容区和主栏）占满剩余高度或宽度。

```html
<div class="container" style="display: grid; grid-template: auto 1fr auto / auto 1fr auto;">
    <div style="background-color: yellow;grid-column: 1 / 4;">1</div>
    <div style="background-color: pink;grid-column: 1 / 2;">2</div>
    <div style="background-color: lightgreen;grid-column: 2 / 3;">3</div>
    <div style="background-color: red;grid-column: 3 / 4;">4</div>
    <div style="background-color: purple;grid-column: 1 / 4;">5</div>
</div>
```

## Flex布局

### 基本概念

- 采用Flex布局的元素，称为Flex容器；它的所有子元素自动成为容器成员，称为Flex项目。
- Flex容器默认存在两根轴：水平的主轴和垂直的交叉轴。

### 容器的属性

- flex-direction：决定主轴的方向

  ```
  row（默认值）：主轴为水平方向，起点在左端。
  row-reverse：主轴为水平方向，起点在右端。
  column：主轴为垂直方向，起点在上沿。
  column-reverse：主轴为垂直方向，起点在下沿。
  ```

- flex-wrap：如果一条轴线排不下，如何换行

  ```
  nowrap（默认值）：不换行。
  wrap：换行，第一行在上方。
  wrap-reverse：换行，第一行在下方。
  ```

- flex-flow：flex-direction属性和flex-wrap属性的简写形式，默认值row  nowrap

- justify-content：定义项目在主轴上的对齐方式

  ```
  flex-start（默认值）：左对齐
  flex-end：右对齐
  center： 居中
  space-between：两端对齐，项目之间的间隔都相等。
  space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
  ```

- align-items：定义项目在交叉轴上的对齐方式

  ```
  flex-start：交叉轴的起点对齐。
  flex-end：交叉轴的终点对齐。
  center：交叉轴的中点对齐。
  baseline: 项目的第一行文字的基线对齐。
  stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
  ```

- align-content：定义多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

  ```
  flex-start：与交叉轴的起点对齐。
  flex-end：与交叉轴的终点对齐。
  center：与交叉轴的中点对齐。
  space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
  space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
  stretch（默认值）：轴线占满整个交叉轴。
  ```

### 容器的属性

- order：定义项目的排列顺序。数值越小，排列越靠前，默认为0。
- flex-grow：定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
  - 如果所有项目的flex-grow都为1，则它们将等分剩余空间。
  - 如果一个项目的flex-grow为2，其余为1，则前者占据的剩余空间是其他项目的一倍。
- flex-shrink：定义项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
  - 如果所有项目的flex-shrink都为1，当剩余空间不足时，都将等比例缩小。
  - 如果一个项目的flex-shrink为0，其余为1，则空间不足时，前者不缩小。
  - 负值对该属性无效。
- flex-basis：定义在分配多余空间之前，项目占据的主轴空间。浏览器根据该属性计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

- flex：它是flex-grow、flex-shrink和flex-basis的简写，默认值0 1 auto。后两个属性可选。
  - 该属性有两个快捷值：auto（1 1 auto）和none（0 0 auto）。
  - 建议优先使用该属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

- align-self：允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性
  - 默认值为auto，表示继承父元素align-items属性，如果没有父元素，则等同于stretch。
  - 该属性可取6个值，除了auto，其他都与align-items属性完全一致。