# CSS Flex Layout
## flex-direction

### row

<div class="flex-container" style="flex-direction: row;">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
  <div class="flex-item">5</div>
</div>

### row-reverse

<div class="flex-container" style="flex-direction: row-reverse;">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
  <div class="flex-item">5</div>
</div>

### column

<div class="flex-container" style="flex-direction: column;">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
  <div class="flex-item">5</div>
</div>

### column-reverse

<div class="flex-container" style="flex-direction: column-reverse;">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
  <div class="flex-item">5</div>
</div>

## flex-wrap

### nowrap

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

### wrap

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

### wrap-reverse

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

<div class="flex-container" style="flex-direction: row;justify-content: flex-start;">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
  <div class="flex-item">5</div>
</div>

### flex-end

<div class="flex-container" style="flex-direction: row;justify-content: flex-end;">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
  <div class="flex-item">5</div>
</div>

### center

<div class="flex-container" style="flex-direction: row;justify-content: center;">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
  <div class="flex-item">5</div>
</div>

### space-between

<div class="flex-container" style="flex-direction: row;justify-content: space-between;">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
  <div class="flex-item">5</div>
</div>

### space-around

<div class="flex-container" style="flex-direction: row;justify-content: space-around;">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
  <div class="flex-item">5</div>
</div>

## align-items

### stretch

<div class="flex-container" style="height: 200px;flex-direction: row;align-items: stretch;">
  <div class="flex-item flex-auto-height">1</div>
  <div class="flex-item flex-auto-height">2</div>
  <div class="flex-item flex-auto-height">3</div>
  <div class="flex-item flex-auto-height">4</div>
  <div class="flex-item flex-auto-height">5</div>
</div>

### flex-start

<div class="flex-container" style="height:200px;flex-direction: row;align-items: flex-start;">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
  <div class="flex-item">5</div>
</div>

### flex-end

<div class="flex-container" style="height: 200px;flex-direction: row;align-items: flex-end;">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
  <div class="flex-item">5</div>
</div>

### center

<div class="flex-container" style="height: 200px;flex-direction: row;align-items: center;">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
  <div class="flex-item">5</div>
</div>

### baseline

<div class="flex-container" style="align-items: baseline;">
  <div class="flex-item" style="font-size: 50px;">1</div>
  <div class="flex-item" style="font-size: 10px;">2</div>
  <div class="flex-item" style="font-size: 40px;">3</div>
  <div class="flex-item" style="font-size: 5px;">4</div>
  <div class="flex-item" style="font-size: 30px;">5</div>
</div>

## align-content

### stretch

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

### flex-start

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

### flex-end

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

### center

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

### space-between

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

### space-around

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