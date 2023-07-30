## 把数据发送到子组件

### 配置子组件

=== "item-detail.component.html"
    ```html linenums="1"
    <p>
        Today's item: {{item}}
    </p>
    ```

=== "item-detail.component.ts"

    ```typescript linenums="1"
    import { Component, Input } from '@angular/core'; // First, import Input
    export class ItemDetailComponent {
        @Input() item = ''; // decorate the property with @Input()
    }
    ```


### 配置父组件

=== "app.component.html"
    ```html linenums="1"
    <app-item-detail [item]="currentItem"></app-item-detail>
    ```

=== "app.component.ts"

    ```typescript linenums="1"
    export class AppComponent {
        currentItem = 'Television';
    }
    ```

## 把数据发送到父组件

### 配置子组件

=== "item-detail.component.html"
    ```html linenums="1"
    <label for="item-input">
        Add an item:
    </label>
    <input type="text" id="item-input" #newItem>
    <button type="button" (click)="addNewItem(newItem.value)">
        Add to parent's list
    </button>
    ```

=== "item-detail.component.ts"

    ```typescript linenums="1"
    import { Output, EventEmitter } from '@angular/core';
    export class ItemOutputComponent {

        @Output() newItemEvent = new EventEmitter<string>();

        addNewItem(value: string) {
            this.newItemEvent.emit(value);
        }
    }
    ```


### 配置父组件

=== "app.component.html"
    ```html linenums="1"
    <app-item-output (newItemEvent)="addItem($event)"></app-item-output>
    ```

=== "app.component.ts"

    ```typescript linenums="1"
    export class AppComponent {
        items = ['item1', 'item2', 'item3', 'item4'];

        addItem(newItem: string) {
            this.items.push(newItem);
        }
    }
    ```