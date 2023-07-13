# CSS 弹性布局

## flex-direction

### row

<figure markdown>
![Image title](/static/css-flex-flex-direction-row.png)
</figure>

```html linenums="1" hl_lines="15"
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

<style>
  .container {
    width: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
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
```

### row-reverse

<figure markdown>
![Image title](/static/css-flex-flex-direction-row-reverse.png)
</figure>

```html linenums="1" hl_lines="15"
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

<style>
  .container {
    width: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row-reverse;
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
```

### column

<figure markdown>
![Image title](/static/css-flex-flex-direction-column.png)
</figure>

```html linenums="1" hl_lines="16"
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

<style>
  .container {
    width: 50%;
    height: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: column;
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
```

### column-reverse

<figure markdown>
![Image title](/static/css-flex-flex-direction-column-reverse.png)
</figure>

```html linenums="1" hl_lines="16"
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

<style>
  .container {
    width: 50%;
    height: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: column-reverse;
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
```

## flex-wrap

### nowrap

<figure markdown>
![Image title](/static/css-flex-flex-wrap-nowrap.png)
</figure>

```html linenums="1" hl_lines="26"
<div class="container">
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

<style>
  .container {
    width: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
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
```

### wrap

<figure markdown>
![Image title](/static/css-flex-flex-wrap-wrap.png)
</figure>

```html linenums="1" hl_lines="26"
<div class="container">
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

<style>
  .container {
    width: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
```

### wrap-reverse

<figure markdown>
![Image title](/static/css-flex-flex-wrap-wrap-reverse.png)
</figure>

```html linenums="1" hl_lines="26"
<div class="container">
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

<style>
  .container {
    width: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
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

```html linenums="1" hl_lines="16"
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

<style>
  .container {
    width: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
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
```

### flex-end

<figure markdown>
![Image title](/static/css-flex-justify-content-flex-end.png)
</figure>

```html linenums="1" hl_lines="16"
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

<style>
  .container {
    width: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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
```

### center

<figure markdown>
![Image title](/static/css-flex-justify-content-center.png)
</figure>

```html linenums="1" hl_lines="16"
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

<style>
  .container {
    width: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
    justify-content: center;
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
```

### space-between

<figure markdown>
![Image title](/static/css-flex-justify-content-space-between.png)
</figure>

```html linenums="1" hl_lines="16"
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

<style>
  .container {
    width: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
```

### space-around

<figure markdown>
![Image title](/static/css-flex-justify-content-space-around.png)
</figure>

```html linenums="1" hl_lines="16"
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

<style>
  .container {
    width: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
```

## align-items

### stretch

<figure markdown>
![Image title](/static/css-flex-align-items-stretch.png)
</figure>

```html linenums="1" hl_lines="18"
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>


<style>
  .container {
    width: 50%;
    height: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
    align-items: stretch;
  }

  .item {
    width: 50px;
    height: auto;
    background-color: lightblue;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    margin: 5px;
  }
</style>
```

### flex-start

<figure markdown>
![Image title](/static/css-flex-align-items-flex-start.png)
</figure>

```html linenums="1" hl_lines="17"
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

<style>
  .container {
    width: 50%;
    height: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .item {
    width: 50px;
    height: auto;
    background-color: lightblue;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    margin: 5px;
  }
</style>
```

### flex-end

<figure markdown>
![Image title](/static/css-flex-align-items-flex-end.png)
</figure>

```html linenums="1" hl_lines="17"
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

<style>
  .container {
    width: 50%;
    height: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }

  .item {
    width: 50px;
    height: auto;
    background-color: lightblue;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    margin: 5px;
  }
</style>
```

### center

<figure markdown>
![Image title](/static/css-flex-align-items-center.png)
</figure>

```html linenums="1" hl_lines="17"
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

<style>
  .container {
    width: 50%;
    height: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .item {
    width: 50px;
    height: auto;
    background-color: lightblue;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    margin: 5px;
  }
</style>
```

### baseline

<figure markdown>
![Image title](/static/css-flex-align-items-baseline.png)
</figure>

```html linenums="1" hl_lines="17"
<div class="container">
  <div class="item" style="font-size: 50px;">1</div>
  <div class="item" style="font-size: 10px;">2</div>
  <div class="item" style="font-size: 40px;">3</div>
  <div class="item" style="font-size: 5px;">4</div>
  <div class="item" style="font-size: 30px;">5</div>
</div>

<style>
  .container {
    width: 50%;
    height: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
    align-items: baseline;
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

```html linenums="1" hl_lines="6"
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item" style="order: -1">5</div>
</div>

<style>
  .container {
    width: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
  }

  .item {
    width: 50px;
    height: auto;
    background-color: lightblue;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    margin: 5px;
  }
</style>
```

### flex-grow

<figure markdown>
![Image title](/static/css-flex-items-flex-grow.png)
</figure>

```html linenums="1" hl_lines="2-4"
<div class="container">
  <div class="item" style="flex-grow: 1">1</div>
  <div class="item" style="flex-grow: 1">2</div>
  <div class="item" style="flex-grow: 1">3</div>
</div>

<style>
  .container {
    width: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
  }

  .item {
    width: 50px;
    height: auto;
    background-color: lightblue;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    margin: 5px;
  }
</style>
```

### flex-shrink

<figure markdown>
![Image title](/static/css-flex-items-flex-shrink.png)
</figure>

```html linenums="1" hl_lines="2-4"
<div class="container">
  <div class="item" style="flex-shrink: 1">1</div>
  <div class="item" style="flex-shrink: 1">2</div>
  <div class="item" style="flex-shrink: 1">3</div>
</div>

<style>
  .container {
    width: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
  }

  .item {
    width: 500px;
    height: auto;
    background-color: lightblue;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    margin: 5px;
  }
</style>
```

### flex-basis

<figure markdown>
![Image title](/static/css-flex-items-flex-basis.png)
</figure>

```html linenums="1" hl_lines="2-4"
<div class="container">
  <div class="item" style="flex-basis: 100px">1</div>
  <div class="item" style="flex-basis: 200px">2</div>
  <div class="item" style="flex-basis: 300px">3</div>
</div>

<style>
  .container {
    width: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
  }

  .item {
    width: 50px;
    height: auto;
    background-color: lightblue;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    margin: 5px;
  }
</style>
```

### flex

flex 属性是 flex-grow、flex-shrink 以及 flex-basis 的简写形式，默认值为 flex: 0 1 auto。

flex 属性有两个快捷值 ① flex: auto 等价于 flex: 1 1 auto；② flex: none 等价于 flex: 0 0 auto。

建议优先使用该属性而不是单独使用三个分离的属性，因为浏览器会推送相关值。

### align-self

<figure markdown>
![Image title](/static/css-flex-items-align-self.png)
</figure>

```html linenums="1" hl_lines="2-4"
<div class="container">
  <div class="item" style="align-self: flex-start;">1</div>
  <div class="item" style="align-self: center">2</div>
  <div class="item" style="align-self: flex-end">3</div>
</div>

<style>
  .container {
    width: 50%;
    height: 50%;
    background-color: lightcoral;

    display: flex;
    flex-direction: row;
  }

  .item {
    width: 50px;
    height: auto;
    background-color: lightblue;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    margin: 5px;
  }
</style>
```
