# Grid 布局

## justify-content

::: normal-demo justify-content: start

```html
<link rel="stylesheet" href="/assets/styles/grid-layout.css">
<div class="grid-container" style="justify-content: start">
    <div class="grid-item" style="background-color: lightblue">1</div>
    <div class="grid-item" style="background-color: lightgreen">2</div>
    <div class="grid-item" style="background-color: lightyellow">3</div>
    <div class="grid-item" style="background-color: lightcyan">4</div>
    <div class="grid-item" style="background-color: snow">5</div>
    <div class="grid-item" style="background-color: lightsalmon">6</div>
    <div class="grid-item" style="background-color: silver">7</div>
    <div class="grid-item" style="background-color: lightskyblue">8</div>
    <div class="grid-item" style="background-color: lavender">9</div>
</div>
```

:::

::: normal-demo justify-content: end

```html
<link rel="stylesheet" href="/assets/styles/grid-layout.css">
<div class="grid-container" style="justify-content: end">
    <div class="grid-item" style="background-color: lightblue">1</div>
    <div class="grid-item" style="background-color: lightgreen">2</div>
    <div class="grid-item" style="background-color: lightyellow">3</div>
    <div class="grid-item" style="background-color: lightcyan">4</div>
    <div class="grid-item" style="background-color: snow">5</div>
    <div class="grid-item" style="background-color: lightsalmon">6</div>
    <div class="grid-item" style="background-color: silver">7</div>
    <div class="grid-item" style="background-color: lightskyblue">8</div>
    <div class="grid-item" style="background-color: lavender">9</div>
</div>
```

:::

::: normal-demo justify-content: center

```html
<link rel="stylesheet" href="/assets/styles/grid-layout.css">
<div class="grid-container" style="justify-content: center">
    <div class="grid-item" style="background-color: lightblue">1</div>
    <div class="grid-item" style="background-color: lightgreen">2</div>
    <div class="grid-item" style="background-color: lightyellow">3</div>
    <div class="grid-item" style="background-color: lightcyan">4</div>
    <div class="grid-item" style="background-color: snow">5</div>
    <div class="grid-item" style="background-color: lightsalmon">6</div>
    <div class="grid-item" style="background-color: silver">7</div>
    <div class="grid-item" style="background-color: lightskyblue">8</div>
    <div class="grid-item" style="background-color: lavender">9</div>
</div>
```

:::

::: normal-demo justify-content: stretch

```html
<link rel="stylesheet" href="/assets/styles/grid-layout.css">
<div class="grid-container" style="justify-content: stretch;grid-template-columns: 50px auto 50px">
    <div class="grid-item" style="background-color: lightblue;">1</div>
    <div class="grid-item" style="background-color: lightgreen;width: auto">2</div>
    <div class="grid-item" style="background-color: lightyellow">3</div>
    <div class="grid-item" style="background-color: lightcyan">4</div>
    <div class="grid-item" style="background-color: snow;width: auto">5</div>
    <div class="grid-item" style="background-color: lightsalmon">6</div>
    <div class="grid-item" style="background-color: silver">7</div>
    <div class="grid-item" style="background-color: lightskyblue;width: auto">8</div>
    <div class="grid-item" style="background-color: lavender">9</div>
</div>
```

:::

::: normal-demo justify-content: space-around

```html
<link rel="stylesheet" href="/assets/styles/grid-layout.css">
<div class="grid-container" style="justify-content: space-around">
    <div class="grid-item" style="background-color: lightblue">1</div>
    <div class="grid-item" style="background-color: lightgreen">2</div>
    <div class="grid-item" style="background-color: lightyellow">3</div>
    <div class="grid-item" style="background-color: lightcyan">4</div>
    <div class="grid-item" style="background-color: snow">5</div>
    <div class="grid-item" style="background-color: lightsalmon">6</div>
    <div class="grid-item" style="background-color: silver">7</div>
    <div class="grid-item" style="background-color: lightskyblue">8</div>
    <div class="grid-item" style="background-color: lavender">9</div>
</div>
```

:::

::: normal-demo justify-content: space-between

```html
<link rel="stylesheet" href="/assets/styles/grid-layout.css">
<div class="grid-container" style="justify-content: space-between">
    <div class="grid-item" style="background-color: lightblue">1</div>
    <div class="grid-item" style="background-color: lightgreen">2</div>
    <div class="grid-item" style="background-color: lightyellow">3</div>
    <div class="grid-item" style="background-color: lightcyan">4</div>
    <div class="grid-item" style="background-color: snow">5</div>
    <div class="grid-item" style="background-color: lightsalmon">6</div>
    <div class="grid-item" style="background-color: silver">7</div>
    <div class="grid-item" style="background-color: lightskyblue">8</div>
    <div class="grid-item" style="background-color: lavender">9</div>
</div>
```

:::

::: normal-demo justify-content: space-evenly

```html
<link rel="stylesheet" href="/assets/styles/grid-layout.css">
<div class="grid-container" style="justify-content: space-evenly">
    <div class="grid-item" style="background-color: lightblue">1</div>
    <div class="grid-item" style="background-color: lightgreen">2</div>
    <div class="grid-item" style="background-color: lightyellow">3</div>
    <div class="grid-item" style="background-color: lightcyan">4</div>
    <div class="grid-item" style="background-color: snow">5</div>
    <div class="grid-item" style="background-color: lightsalmon">6</div>
    <div class="grid-item" style="background-color: silver">7</div>
    <div class="grid-item" style="background-color: lightskyblue">8</div>
    <div class="grid-item" style="background-color: lavender">9</div>
</div>
```

:::

## align-content

::: normal-demo align-content: start

```html
<link rel="stylesheet" href="/assets/styles/grid-layout.css">
<div class="grid-container" style="align-content: start">
    <div class="grid-item" style="background-color: lightblue">1</div>
    <div class="grid-item" style="background-color: lightgreen">2</div>
    <div class="grid-item" style="background-color: lightyellow">3</div>
    <div class="grid-item" style="background-color: lightcyan">4</div>
    <div class="grid-item" style="background-color: snow">5</div>
    <div class="grid-item" style="background-color: lightsalmon">6</div>
    <div class="grid-item" style="background-color: silver">7</div>
    <div class="grid-item" style="background-color: lightskyblue">8</div>
    <div class="grid-item" style="background-color: lavender">9</div>
</div>
```

:::

::: normal-demo align-content: end

```html
<link rel="stylesheet" href="/assets/styles/grid-layout.css">
<div class="grid-container" style="align-content: end">
    <div class="grid-item" style="background-color: lightblue">1</div>
    <div class="grid-item" style="background-color: lightgreen">2</div>
    <div class="grid-item" style="background-color: lightyellow">3</div>
    <div class="grid-item" style="background-color: lightcyan">4</div>
    <div class="grid-item" style="background-color: snow">5</div>
    <div class="grid-item" style="background-color: lightsalmon">6</div>
    <div class="grid-item" style="background-color: silver">7</div>
    <div class="grid-item" style="background-color: lightskyblue">8</div>
    <div class="grid-item" style="background-color: lavender">9</div>
</div>
```

:::

::: normal-demo align-content: center

```html
<link rel="stylesheet" href="/assets/styles/grid-layout.css">
<div class="grid-container" style="align-content: center">
    <div class="grid-item" style="background-color: lightblue">1</div>
    <div class="grid-item" style="background-color: lightgreen">2</div>
    <div class="grid-item" style="background-color: lightyellow">3</div>
    <div class="grid-item" style="background-color: lightcyan">4</div>
    <div class="grid-item" style="background-color: snow">5</div>
    <div class="grid-item" style="background-color: lightsalmon">6</div>
    <div class="grid-item" style="background-color: silver">7</div>
    <div class="grid-item" style="background-color: lightskyblue">8</div>
    <div class="grid-item" style="background-color: lavender">9</div>
</div>
```

:::

::: normal-demo align-content: stretch

```html
<link rel="stylesheet" href="/assets/styles/grid-layout.css">
<div class="grid-container" style="align-content: stretch;grid-template-rows: 50px auto 50px;">
    <div class="grid-item" style="background-color: lightblue">1</div>
    <div class="grid-item" style="background-color: lightgreen">2</div>
    <div class="grid-item" style="background-color: lightyellow">3</div>
    <div class="grid-item" style="background-color: lightcyan;height: auto;">4</div>
    <div class="grid-item" style="background-color: snow;height: auto;">5</div>
    <div class="grid-item" style="background-color: lightsalmon;height: auto;">6</div>
    <div class="grid-item" style="background-color: silver">7</div>
    <div class="grid-item" style="background-color: lightskyblue">8</div>
    <div class="grid-item" style="background-color: lavender">9</div>
</div>
```

:::

::: normal-demo align-content: space-around

```html
<link rel="stylesheet" href="/assets/styles/grid-layout.css">
<div class="grid-container" style="align-content: space-around">
    <div class="grid-item" style="background-color: lightblue">1</div>
    <div class="grid-item" style="background-color: lightgreen">2</div>
    <div class="grid-item" style="background-color: lightyellow">3</div>
    <div class="grid-item" style="background-color: lightcyan">4</div>
    <div class="grid-item" style="background-color: snow">5</div>
    <div class="grid-item" style="background-color: lightsalmon">6</div>
    <div class="grid-item" style="background-color: silver">7</div>
    <div class="grid-item" style="background-color: lightskyblue">8</div>
    <div class="grid-item" style="background-color: lavender">9</div>
</div>
```

:::

::: normal-demo align-content: space-between

```html
<link rel="stylesheet" href="/assets/styles/grid-layout.css">
<div class="grid-container" style="align-content: space-between">
    <div class="grid-item" style="background-color: lightblue">1</div>
    <div class="grid-item" style="background-color: lightgreen">2</div>
    <div class="grid-item" style="background-color: lightyellow">3</div>
    <div class="grid-item" style="background-color: lightcyan">4</div>
    <div class="grid-item" style="background-color: snow">5</div>
    <div class="grid-item" style="background-color: lightsalmon">6</div>
    <div class="grid-item" style="background-color: silver">7</div>
    <div class="grid-item" style="background-color: lightskyblue">8</div>
    <div class="grid-item" style="background-color: lavender">9</div>
</div>
```

:::

::: normal-demo align-content: space-evenly

```html
<link rel="stylesheet" href="/assets/styles/grid-layout.css">
<div class="grid-container" style="align-content: space-evenly">
    <div class="grid-item" style="background-color: lightblue">1</div>
    <div class="grid-item" style="background-color: lightgreen">2</div>
    <div class="grid-item" style="background-color: lightyellow">3</div>
    <div class="grid-item" style="background-color: lightcyan">4</div>
    <div class="grid-item" style="background-color: snow">5</div>
    <div class="grid-item" style="background-color: lightsalmon">6</div>
    <div class="grid-item" style="background-color: silver">7</div>
    <div class="grid-item" style="background-color: lightskyblue">8</div>
    <div class="grid-item" style="background-color: lavender">9</div>
</div>
```

:::
