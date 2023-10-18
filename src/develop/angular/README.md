---
title: Angular
index: false
dir:
  link: true
---

## 渲染一个长度为10的数组

```html
<ng-container *ngFor="let _ of [].constructor(10); let i = index">
  <div>{{ i }}</div>
</ng-container>

```