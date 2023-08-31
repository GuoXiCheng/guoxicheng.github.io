# 小记
## npm 镜像源切换

```bash title="查看当前使用的镜像源"
npm config get registry
```

```bash title="切换官方镜像源"
npm config set registry https://registry.npmjs.org
```

## 替换字符串中的回车、空格和换行

```js
string.replace(/\n|\ +|\\/g, "")
```

## 求幂运算

```ts
const result = 2 ** 10; // 1024
```

## 截取数组

```ts
const array = [1, 2, 3, 4, 5];
array.length = 3; // [1, 2, 3]
```

## 冻结对象

一个被冻结的对象不能被修改，所有属性都为只读。

```ts
const obj = {
	prop: 42,
};

Object.freeze(obj);
```

## 美化JSON

`JSON.stringify()`方法包含三个参数：

1. json: 可以是数组或Object
2. replacer: 可以是数组或过滤函数
    - 当为数组时，数组中的属性按顺序表示要被过滤的属性
    - 当为函数时，函数的返回值表示要被过滤的属性
3. space: 表示缩进

```ts
const obj = { id: 1, name: 'test', age: 10 };
JSON.stringify(obj, null, 2);
```

## 合并多个对象

合并后的对象中的键将唯一存在，后者合并的值将会覆盖已存在的键的值。

```ts
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }
```

## 简化短路运算

```ts
if (isOnline) {
	postMessage();
}

// 使用 && 简化
isOnline && postMessage();

if (name == null) {
	name = 'test';
}

// 使用 || 简化
let name = null || 'test';
```

## 创建纯净对象

```ts
// 创建的对象会继承Object的方法
const obj = {};

// 创建的对象原型链上没有任何属性
const obj = Object.create(null);
```

## 避免多条件并列

```ts
if (status === 'process' || status === 'wait' || status === 'fail') {
	doSomething();
}

// 使用 includes 简化
const enum = ['process', 'wait', 'fail'];
if (enum.includes(status)){
	doSomething();
}                                        
```

## 数组去重

```ts
const arr = [1, 1, 2, 2, 3, 3, 4, 4];
Array.from(new Set(arr));
```

## 数组转为对象

```ts
const arr = ['a', 'b', 'c', 'd'];
const obj = { ...arr }; // { 0: 'a', 1: 'b', 2: 'c', 3: 'd' }
```

## 字符串类型转数字

```ts
const age = '18';
const newAge = +age;
```

## 取得数组最后一项

```ts
const arr = [0, 1, 2, 3, 4, 5];
arr.slice(-1)[0];
```

## 通用数据类型判断方法

```ts
function getType(obj) {
  let type = typeof obj;
  if (type !== 'object') {
    // 先进行typeof判断，如果是基础数据类型，直接返回
    return type;
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');
}
```