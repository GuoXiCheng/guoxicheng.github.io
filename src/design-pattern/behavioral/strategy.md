# 策略模式

## 核心思想

策略模式允许定义一系列的算法，并将每种算法放入独立的类中，以使算法对象能够相互替换。

## 典型用例

### 会员定价策略

在付费平台会依据不同等级的会员来制定不同的定价策略，例如: 一般用户无折扣、普通会员享有九折、高级会员享有八折。

在这个例子中，购物车计算折扣的方式取决于它使用的策略，通过改变策略，可以改变折扣的计算方式，而不需要修改购物车本身。

```ts
// npm run code src/code/design-pattern/strategy/member-pricing.ts

<!-- @include:@src/code/design-pattern/strategy/member-pricing.ts -->
```