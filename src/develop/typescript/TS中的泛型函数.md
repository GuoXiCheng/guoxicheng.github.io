# TS 中的泛型函数

## keyof

用于获取一个类型的所有属性键的联合类型。作用于类型。

```ts
interface Person {
    name: string;
    age: number;
    gender: string;
}

type P = keyof Person; // "name" | "age" | "gender"
```

## typeof

用于获取一个值的类型。作用于值

```ts
const person = {
    name: "Alice",
    age: 30,
    gender: "female",
};

/**
type P = {
    name: string;
    age: number;
    gender: string;
}
 */
type P = typeof person;
```

## keyof typeof

用于获取一个值的类型

```ts
const person = {
    name: "Alice",
    age: 30,
    gender: "female",
};

type P = keyof typeof person; // "name" | "age" | "gender"
```

## Omit

以一个类型为基础类型，从中排除指定的属性

```ts
interface Person {
    name: string;
    age: number;
    gender: string;
}

/**
type P = {
    gender: string;
}
 */
type P = Omit<Person, "name" | "age">;
```

## Pick

从一个类型中挑选出指定的属性

```ts
interface Person {
    name: string;
    age: number;
    gender: string;
}

/**
type P = {
    name: string;
    age: number;
}
 */
type P = Pick<Person, "name" | "age">;
```

## Required

将一个类型中的所有属性变为必选项

```ts
interface Person {
    name?: string;
    age?: number;
    gender?: string;
}

/**
type P = {
    name: string;
    age: number;
    gender: string;
}
 */
type P = Required<Person>;
```

## Partial

将一个类型中的所有属性变为可选项

```ts
interface Person {
    name: string;
    age: number;
    gender: string;
}

/**
type P = {
    name?: string | undefined;
    age?: number | undefined;
    gender?: string | undefined;
}
 */
type P = Partial<Person>;
```

## Record

用于创建一个具有指定属性键和对应类型的对象类型

```ts
type Person = Record<"name" | "age" | "gender", string | number>;

const person: Person = {
    name: "Alice",
    age: 30,
    gender: "female",
};
```

## Exclude

用于从联合类型中排除指定的类型

```ts
type Color = "red" | "green" | "blue";
type RedOrGreen = Exclude<Color, "blue">; // "red" | "green"
```

## Extract

用于从联合类型中提取指定的类型

```ts
type Color = "red" | "green" | "blue";
type RedOrGreen = Extract<Color, "red" | "green">; // "red" | "green"
```

## Readonly

将一个类型中的所有属性变为只读属性

```ts
interface Person {
    name: string;
    age: number;
}

const readOnlyPerson: Readonly<Person> = {
    name: "Alice",
    age: 30,
};

readOnlyPerson.name = "Bob"; // 错误：无法分配给 "name"，因为它是只读属性。
```

## Mutable

Mutable 不是的内置类型，用于表示将对象的属性设置为可变（可修改）的状态

```ts
interface Person {
    readonly name: string;
    readonly age: number;
}

type MutablePerson = Mutable<Person>;

type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};


const mutablePerson: MutablePerson = {
    name: "Alice",
    age: 30,
};

mutablePerson.name = "Bob"; // 可以修改 "name" 属性
mutablePerson.age = 31; // 可以修改 "age" 属性
```