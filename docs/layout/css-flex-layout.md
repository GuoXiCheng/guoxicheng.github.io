# CSS 弹性布局

<style>
  .container {
    background-color: lightcoral;
    display: flex;
  }
  .item {
    width: 50px;
    height: 50px;
    background-color: lightblue;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    margin: 5px;
  }
  .auto-height {
    height: auto;
  }
</style>

## flex-direction

### row


  <div id="app">
    <div class="container" style="flex-direction: row;">
      <div class="item" v-for="item in items" :key="item">{{ item }}</div>
    </div>
  </div>

<div class="container" style="flex-direction: row;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

### row-reverse

<div class="container" style="flex-direction: row-reverse;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

### column

<div class="container" style="flex-direction: column;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

### column-reverse

<div class="container" style="flex-direction: column-reverse;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

## flex-wrap

### nowrap

<div class="container" style="flex-direction: row;flex-wrap: nowrap;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
  <div class="item">9</div>
  <div class="item">10</div>
  <div class="item">11</div>
  <div class="item">12</div>
  <div class="item">13</div>
  <div class="item">14</div>
  <div class="item">15</div>
</div>

### wrap

<div class="container" style="flex-direction: row;flex-wrap: wrap;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
  <div class="item">9</div>
  <div class="item">10</div>
  <div class="item">11</div>
  <div class="item">12</div>
  <div class="item">13</div>
  <div class="item">14</div>
  <div class="item">15</div>
</div>

### wrap-reverse

<div class="container" style="flex-direction: row;flex-wrap: wrap-reverse;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
  <div class="item">9</div>
  <div class="item">10</div>
  <div class="item">11</div>
  <div class="item">12</div>
  <div class="item">13</div>
  <div class="item">14</div>
  <div class="item">15</div>
</div>

## flex-flow

```html linenums="1" hl_lines="12"
<style>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
</style>
<!-- 等价于 -->
<style>
  .container {
    display: flex;
    flex-flow: row nowrap;
  }
</style>
```

## justify-content

### flex-start

<div class="container" style="display: flex;flex-direction: row;justify-content: flex-start;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

### flex-end

<div class="container" style="display: flex;flex-direction: row;justify-content: flex-end;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

### center

<div class="container" style="display: flex;flex-direction: row;justify-content: center;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

### space-between

<div class="container" style="display: flex;flex-direction: row;justify-content: space-between;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

### space-around

<div class="container" style="display: flex;flex-direction: row;justify-content: space-around;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

## align-items

### stretch

<div class="container" style="height: 100px;display: flex;flex-direction: row;align-items: stretch;">
  <div class="item auto-height">1</div>
  <div class="item auto-height">2</div>
  <div class="item auto-height">3</div>
  <div class="item auto-height">4</div>
  <div class="item auto-height">5</div>
</div>

### flex-start

<div class="container" style="height:100px;display: flex;flex-direction: row;align-items: flex-start;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

### flex-end

<div class="container" style="height: 100px;display: flex;flex-direction: row;align-items: flex-end;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

### center

<div class="container" style="height: 100px;display: flex;flex-direction: row;align-items: center;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

### baseline

<div class="container" style="display: flex;flex-direction: row;align-items: baseline;">
  <div class="item" style="font-size: 50px;">1</div>
  <div class="item" style="font-size: 10px;">2</div>
  <div class="item" style="font-size: 40px;">3</div>
  <div class="item" style="font-size: 5px;">4</div>
  <div class="item" style="font-size: 30px;">5</div>
</div>

## align-content

### stretch

<div class="container" style="height:200px;flex-flow: row wrap;align-content: stretch;">
  <div class="item auto-height">1</div>
  <div class="item auto-height">2</div>
  <div class="item auto-height">3</div>
  <div class="item auto-height">4</div>
  <div class="item auto-height">5</div>
  <div class="item auto-height">6</div>
  <div class="item auto-height">7</div>
  <div class="item auto-height">8</div>
  <div class="item auto-height">9</div>
  <div class="item auto-height">10</div>
  <div class="item auto-height">11</div>
  <div class="item auto-height">12</div>
  <div class="item auto-height">13</div>
  <div class="item auto-height">14</div>
  <div class="item auto-height">15</div>
</div>

### flex-start

<div class="container" style="height: 200px;flex-flow: row wrap;align-content: flex-start;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
  <div class="item">9</div>
  <div class="item">10</div>
  <div class="item">11</div>
  <div class="item">12</div>
  <div class="item">13</div>
  <div class="item">14</div>
  <div class="item">15</div>
</div>

### flex-end

<div class="container" style="height: 200px;flex-flow: row wrap;align-content: flex-end;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
  <div class="item">9</div>
  <div class="item">10</div>
  <div class="item">11</div>
  <div class="item">12</div>
  <div class="item">13</div>
  <div class="item">14</div>
  <div class="item">15</div>
</div>

### center

<div class="container" style="height: 200px;flex-flow: row wrap;align-content: center;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
  <div class="item">9</div>
  <div class="item">10</div>
  <div class="item">11</div>
  <div class="item">12</div>
  <div class="item">13</div>
  <div class="item">14</div>
  <div class="item">15</div>
</div>

### space-between

<div class="container" style="height: 200px;flex-flow: row wrap;align-content: space-between;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
  <div class="item">9</div>
  <div class="item">10</div>
  <div class="item">11</div>
  <div class="item">12</div>
  <div class="item">13</div>
  <div class="item">14</div>
  <div class="item">15</div>
</div>

### space-around

<div class="container" style="height: 200px;flex-flow: column wrap;align-content: space-between;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
  <div class="item">9</div>
  <div class="item">10</div>
  <div class="item">11</div>
  <div class="item">12</div>
  <div class="item">13</div>
  <div class="item">14</div>
  <div class="item">15</div>
</div>


## 定义单个项目的属性
### order

<div class="container" style="display: flex;flex-direction: row;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item" style="order: -1">5</div>
</div>

### flex-grow

<div class="container" style="display: flex;flex-direction: row;">
  <div class="item" style="flex-grow: 1">1</div>
  <div class="item" style="flex-grow: 2">2</div>
  <div class="item" style="flex-grow: 3">3</div>
</div>

### flex-shrink

<div class="container" style="display: flex;flex-direction: row;">
  <div class="item" style="flex-shrink: 1;width: 500px;">1</div>
  <div class="item" style="flex-shrink: 2;width: 500px;">2</div>
  <div class="item" style="flex-shrink: 3;width: 500px;">3</div>
</div>

### flex-basis

<div class="container" style="display: flex;flex-direction: row;">
  <div class="item" style="flex-basis: 100px">1</div>
  <div class="item" style="flex-basis: 200px">2</div>
  <div class="item" style="flex-basis: 300px">3</div>
</div>

### flex

flex 属性是 flex-grow、flex-shrink 以及 flex-basis 的简写形式，默认值为 flex: 0 1 auto。

flex 属性有两个快捷值 ① flex: auto 等价于 flex: 1 1 auto；② flex: none 等价于 flex: 0 0 auto。

建议优先使用该属性而不是单独使用三个分离的属性，因为浏览器会推送相关值。

### align-self

<div class="container" style="height: 100px;display: flex;flex-direction: row;">
  <div class="item" style="align-self: flex-start;">1</div>
  <div class="item" style="align-self: center">2</div>
  <div class="item" style="align-self: flex-end">3</div>
</div>
