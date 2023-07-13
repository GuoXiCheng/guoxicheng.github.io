# CSS 弹性布局

<style>
  .container {
    background-color: lightcoral;
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
</style>

## flex-direction

### row

<figure markdown>
![Image title](/static/css-flex-flex-direction-row.png)
</figure>

<div class="container" style="display: flex;flex-direction: row;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

```html linenums="1" hl_lines="1"
<div class="container" style="display: flex;flex-direction: row;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```

### row-reverse

<figure markdown>
![Image title](/static/css-flex-flex-direction-row-reverse.png)
</figure>

<div class="container" style="display: flex;flex-direction: row-reverse;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

```html linenums="1" hl_lines="1"
<div class="container" style="display: flex;flex-direction: row-reverse;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```

### column

<figure markdown>
![Image title](/static/css-flex-flex-direction-column.png)
</figure>

<div class="container" style="display: flex;flex-direction: column;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

```html linenums="1" hl_lines="1"
<div class="container" style="display: flex;flex-direction: column;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```

### column-reverse

<figure markdown>
![Image title](/static/css-flex-flex-direction-column-reverse.png)
</figure>

<div class="container" style="display: flex;flex-direction: column-reverse;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

```html linenums="1" hl_lines="1"
<div class="container" style="display: flex;flex-direction: column-reverse;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```

## flex-wrap

### nowrap

<figure markdown>
![Image title](/static/css-flex-flex-wrap-nowrap.png)
</figure>

<div class="container" style="display: flex;flex-direction: row;flex-wrap: nowrap;">
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

```html linenums="1" hl_lines="1"
<div class="container" style="display: flex;flex-direction: row;flex-wrap: nowrap;">
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
```

### wrap

<figure markdown>
![Image title](/static/css-flex-flex-wrap-wrap.png)
</figure>

<div class="container" style="display: flex;flex-direction: row;flex-wrap: wrap;">
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

```html linenums="1" hl_lines="1"
<div class="container" style="display: flex;flex-direction: row;flex-wrap: wrap;">
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
```

### wrap-reverse

<figure markdown>
![Image title](/static/css-flex-flex-wrap-wrap-reverse.png)
</figure>

<div class="container" style="display: flex;flex-direction: row;flex-wrap: wrap-reverse;">
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

```html linenums="1" hl_lines="1"
<div class="container" style="display: flex;flex-direction: row;flex-wrap: wrap-reverse;">
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
```

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

<figure markdown>
![Image title](/static/css-flex-justify-content-flex-start.png)
</figure>

<div class="container" style="display: flex;flex-direction: row;justify-content: flex-start;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

```html linenums="1" hl_lines="1"
<div class="container" style="display: flex;flex-direction: row;justify-content: flex-start;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```

### flex-end

<figure markdown>
![Image title](/static/css-flex-justify-content-flex-end.png)
</figure>

<div class="container" style="display: flex;flex-direction: row;justify-content: flex-end;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

```html linenums="1" hl_lines="1"
<div class="container" style="display: flex;flex-direction: row;justify-content: flex-end;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```

### center

<figure markdown>
![Image title](/static/css-flex-justify-content-center.png)
</figure>

<div class="container" style="display: flex;flex-direction: row;justify-content: center;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

```html linenums="1" hl_lines="1"
<div class="container" style="display: flex;flex-direction: row;justify-content: center;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```

### space-between

<figure markdown>
![Image title](/static/css-flex-justify-content-space-between.png)
</figure>

<div class="container" style="display: flex;flex-direction: row;justify-content: space-between;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

```html linenums="1" hl_lines="1"
<div class="container" style="display: flex;flex-direction: row;justify-content: space-between;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```

### space-around

<figure markdown>
![Image title](/static/css-flex-justify-content-space-around.png)
</figure>

<div class="container" style="display: flex;flex-direction: row;justify-content: space-around;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

```html linenums="1" hl_lines="1"
<div class="container" style="display: flex;flex-direction: row;justify-content: space-around;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```

## align-items

### stretch

<figure markdown>
![Image title](/static/css-flex-align-items-stretch.png)
</figure>

<div class="container" style="height: 100px;display: flex;flex-direction: row;align-items: stretch;">
  <div class="item item-height">1</div>
  <div class="item item-height">2</div>
  <div class="item item-height">3</div>
  <div class="item item-height">4</div>
  <div class="item item-height">5</div>
</div>

<style>
  .item-height {
    height: auto;
  }
</style>

```html linenums="1" hl_lines="1"
<div class="container" style="height: 100px;display: flex;flex-direction: row;align-items: stretch;">
  <div class="item item-height">1</div>
  <div class="item item-height">2</div>
  <div class="item item-height">3</div>
  <div class="item item-height">4</div>
  <div class="item item-height">5</div>
</div>

<style>
  .item-height {
    height: auto;
  }
</style>
```

### flex-start

<figure markdown>
![Image title](/static/css-flex-align-items-flex-start.png)
</figure>

<div class="container" style="height:100px;display: flex;flex-direction: row;align-items: flex-start;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

```html linenums="1" hl_lines="17"
<div class="container" style="height:100px;display: flex;flex-direction: row;align-items: flex-start;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```

### flex-end

<figure markdown>
![Image title](/static/css-flex-align-items-flex-end.png)
</figure>

<div class="container" style="height: 100px;display: flex;flex-direction: row;align-items: flex-end;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

```html linenums="1" hl_lines="1"
<div class="container" style="height: 100px;display: flex;flex-direction: row;align-items: flex-end;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```

### center

<figure markdown>
![Image title](/static/css-flex-align-items-center.png)
</figure>

<div class="container" style="height: 100px;display: flex;flex-direction: row;align-items: center;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

```html linenums="1" hl_lines="1"
<div class="container" style="height: 100px;display: flex;flex-direction: row;align-items: center;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```

### baseline

<figure markdown>
![Image title](/static/css-flex-align-items-baseline.png)
</figure>

<div class="container" style="display: flex;flex-direction: row;align-items: baseline;">
  <div class="item" style="font-size: 50px;">1</div>
  <div class="item" style="font-size: 10px;">2</div>
  <div class="item" style="font-size: 40px;">3</div>
  <div class="item" style="font-size: 5px;">4</div>
  <div class="item" style="font-size: 30px;">5</div>
</div>

```html linenums="1" hl_lines="1"
<div class="container" style="display: flex;flex-direction: row;align-items: baseline;">
  <div class="item" style="font-size: 50px;">1</div>
  <div class="item" style="font-size: 10px;">2</div>
  <div class="item" style="font-size: 40px;">3</div>
  <div class="item" style="font-size: 5px;">4</div>
  <div class="item" style="font-size: 30px;">5</div>
</div>
```

## align-content

### stretch

### flex-start

### flex-end

### center

### space-between

### space-around


## 定义单个项目的属性
### order

<figure markdown>
![Image title](/static/css-flex-items-order.png)
</figure>

<div class="container" style="display: flex;flex-direction: row;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item" style="order: -1">5</div>
</div>

```html linenums="1" hl_lines="1"
<div class="container" style="display: flex;flex-direction: row;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item" style="order: -1">5</div>
</div>
```

### flex-grow

<figure markdown>
![Image title](/static/css-flex-items-flex-grow.png)
</figure>

<div class="container" style="display: flex;flex-direction: row;">
  <div class="item" style="flex-grow: 1">1</div>
  <div class="item" style="flex-grow: 1">2</div>
  <div class="item" style="flex-grow: 1">3</div>
</div>


```html linenums="1" hl_lines="2-4"
<div class="container" style="display: flex;flex-direction: row;">
  <div class="item" style="flex-grow: 1">1</div>
  <div class="item" style="flex-grow: 1">2</div>
  <div class="item" style="flex-grow: 1">3</div>
</div>
```

### flex-shrink

<figure markdown>
![Image title](/static/css-flex-items-flex-shrink.png)
</figure>

<div class="container" style="display: flex;flex-direction: row;">
  <div class="item" style="flex-shrink: 1;width: 500px;">1</div>
  <div class="item" style="flex-shrink: 1;width: 500px;">2</div>
  <div class="item" style="flex-shrink: 1;width: 500px;">3</div>
</div>

```html linenums="1" hl_lines="2-4"
<div class="container" style="display: flex;flex-direction: row;">
  <div class="item" style="flex-shrink: 1;width: 500px;">1</div>
  <div class="item" style="flex-shrink: 1;width: 500px;">2</div>
  <div class="item" style="flex-shrink: 1;width: 500px;">3</div>
</div>
```

### flex-basis

<figure markdown>
![Image title](/static/css-flex-items-flex-basis.png)
</figure>

<div class="container" style="display: flex;flex-direction: row;">
  <div class="item" style="flex-basis: 100px">1</div>
  <div class="item" style="flex-basis: 200px">2</div>
  <div class="item" style="flex-basis: 300px">3</div>
</div>

```html linenums="1" hl_lines="2-4"
<div class="container" style="display: flex;flex-direction: row;">
  <div class="item" style="flex-basis: 100px">1</div>
  <div class="item" style="flex-basis: 200px">2</div>
  <div class="item" style="flex-basis: 300px">3</div>
</div>
```

### flex

flex 属性是 flex-grow、flex-shrink 以及 flex-basis 的简写形式，默认值为 flex: 0 1 auto。

flex 属性有两个快捷值 ① flex: auto 等价于 flex: 1 1 auto；② flex: none 等价于 flex: 0 0 auto。

建议优先使用该属性而不是单独使用三个分离的属性，因为浏览器会推送相关值。

### align-self

<figure markdown>
![Image title](/static/css-flex-items-align-self.png)
</figure>

<div class="container" style="height: 100px;display: flex;flex-direction: row;">
  <div class="item" style="align-self: flex-start;">1</div>
  <div class="item" style="align-self: center">2</div>
  <div class="item" style="align-self: flex-end">3</div>
</div>

```html linenums="1" hl_lines="2-4"
<div class="container" style="height: 100px;display: flex;flex-direction: row;">
  <div class="item" style="align-self: flex-start;">1</div>
  <div class="item" style="align-self: center">2</div>
  <div class="item" style="align-self: flex-end">3</div>
</div>
```
