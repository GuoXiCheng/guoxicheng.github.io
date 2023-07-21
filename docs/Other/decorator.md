# 装饰器

## TypeScript自定义装饰器

```ts
export function clock(message = 'run time') {
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

## Python自定义装饰器

### 无参的装饰器
```py
def my_decorator(function):
    def wrapped(*args, **kwargs):
    
        # 在调用原始函数前做点什么
        result = function(*args, **kwargs)

        # 在调用原始函数后做点什么
        return result  # 返回结果

    # 返回wrapper作为装饰函数
    return wrapped


@my_decorator
def my_function():
    pass
```

### 有参的装饰器
```py
from functools import wraps


def my_decorator(message=None):
    def decorate(func):

        msg = message if message else "no message"

        @wraps(func)
        def wrapped(*args, **kwargs):
            print(msg)

            # 在调用原始函数前做点什么
            result = func(*args, **kwargs)

            # 在调用原始函数后做点什么
            return result  # 返回结果

        # 返回wrapper作为装饰函数
        return wrapped

    return decorate


@my_decorator()
def my_function_1():
    pass


@my_decorator("new message")
def my_function_2():
    pass

```