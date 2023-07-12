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