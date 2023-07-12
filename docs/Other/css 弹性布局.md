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