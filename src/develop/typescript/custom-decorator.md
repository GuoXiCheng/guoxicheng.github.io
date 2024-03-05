---
date: 2023-10-23
---

# 自定义装饰器

```ts
export function methodDecorator() {
    return function(target: unknown, propertyKey: string,
        descriptor: PropertyDescriptor) {
        // 保存原方法的引用
        const originalMethod = descriptor.value;

        // 编辑 descriptor 参数的value属性
        descriptor.value = async function(...args: unknown[]) {

            return new Promise((resolve) => {
                // 在调用原方法前做点什么

                const result = originalMethod.apply(this, args); // 调用原方法
                resolve(result);

            }).then((res) => {

                // 在调用原方法后做点什么

            }).catch((error) => {

            });
        };
        // 返回编辑后的属性描述对象
        return descriptor;
    };
}

```