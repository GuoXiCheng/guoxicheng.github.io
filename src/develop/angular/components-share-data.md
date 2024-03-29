---
date: 2023-10-18
---

# 组件间共享数据

## 把数据发送到子组件

### 配置子组件

::: code-tabs

@tab item-detail.component.html

```html
<p>Today's item: {{item}}</p>
```

@tab item-detail.component.ts

```typescript
import { Component, Input } from "@angular/core"; // First, import Input
export class ItemDetailComponent {
    @Input() item = ""; // decorate the property with @Input()
}
```

:::

### 配置父组件

::: code-tabs

@tab app.component.html

```html
<app-item-detail [item]="currentItem"></app-item-detail>
```

@tab app.component.ts

```typescript
export class AppComponent {
    currentItem = "Television";
}
```

:::

## 把数据发送到父组件

### 配置子组件

::: code-tabs

@tab item-detail.component.html

```html
<label for="item-input"> Add an item: </label>
<input type="text" id="item-input" #newItem />
<button type="button" (click)="addNewItem(newItem.value)">
    Add to parent's list
</button>
```

@tab item-detail.component.ts

```typescript
import { Output, EventEmitter } from "@angular/core";
export class ItemOutputComponent {
    @Output() newItemEvent = new EventEmitter<string>();

    addNewItem(value: string) {
        this.newItemEvent.emit(value);
    }
}
```

:::

### 配置父组件

::: code-tabs

@tab app.component.html

```html
<app-item-output (newItemEvent)="addItem($event)"></app-item-output>
```

@tab app.component.ts

```typescript
export class AppComponent {
    items = ["item1", "item2", "item3", "item4"];

    addItem(newItem: string) {
        this.items.push(newItem);
    }
}
```

:::

## 双向绑定：父子组件同步更新值

为使双向数据绑定有效，`@Output()`属性的名字必须遵循`inputChange`的模式，其中`input`是相应`@Input()`属性的名字。

例如：`@Input()`属性为`size`，则`@Output()`属性必须为`sizeChange`

### 配置子组件

::: code-tabs

@tab sizer.component.html

```html
<div>
    <button type="button" (click)="dec()" title="smaller">-</button>
    <button type="button" (click)="inc()" title="bigger">+</button>
    <span [style.font-size.px]="size">FontSize: {{size}}px</span>
</div>
```

@tab sizer.component.ts

```typescript
export class SizerComponent {
    @Input() size!: number | string;
    @Output() sizeChange = new EventEmitter<number>();

    dec() {
        this.resize(-1);
    }
    inc() {
        this.resize(+1);
    }

    resize(delta: number) {
        this.size = Math.min(40, Math.max(8, +this.size + delta));
        this.sizeChange.emit(this.size);
    }
}
```

:::

### 配置父组件

::: code-tabs

@tab app.component.html

```html
<app-sizer [(size)]="fontSizePx"></app-sizer>
<div [style.font-size.px]="fontSizePx">Resizable Text</div>
```

@tab app.component.ts

```typescript
export class AppComponent {
    fontSizePx = 12;
}
```

:::

## 双向绑定：表单中的 NgModel

因为没有任何原生 HTML 元素遵循了`x`值和`xChange`事件的命名模式，所以表单元素的双向绑定需要使用`NgModel`。

首先导入`FormsModule`

```typescript{6}
import { FormsModule } from "@angular/forms";

@NgModule({
    /* . . . */

    imports: [BrowserModule, FormsModule],
    /* . . . */
})
export class AppModule {}
```

再在 HTML 的`<form>`元素上添加`[(ngModel)]`属性

```html{2}
<label for="example-ngModel">[(ngModel)]:</label>
<input [(ngModel)]="currentItem.name" id="example-ngModel" />
```
