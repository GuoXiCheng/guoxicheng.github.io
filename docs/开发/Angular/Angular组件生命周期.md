``` mermaid
flowchart TD
  A[constructor 创建组件] -->B[ngOnChanges 输入属性变化]
  B --> C[ngOnInit 初始化指令/组件]
  C --> D[ngDoCheck 检测变化]
  D --> E[ngAfterContentInit 组件投影内容初始化后]
  E --> F[ngAfterContentChecked 组件投影内容检查后]
  F --> G[ngAfterViewInit 组件视图初始化后]
  G --> H[ngAfterViewChecked 组件视图变更检查后]
  H --> I[ngOnDestroy 组件销毁前]
```
