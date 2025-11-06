# Java 8 新特性

> 面向日常开发的高价值特性速查：Lambda、函数式接口、方法引用、接口默认方法、Stream、Optional、java.time、CompletableFuture、集合与 Map 增强、注解与工具类更新等。

## Lambda 表达式与函数式接口

函数式接口：只包含一个抽象方法的接口，可用 `@FunctionalInterface` 标注。

```java
@FunctionalInterface
interface Converter<F, T> {
    T convert(F from);
}

Converter<String, Integer> c = s -> Integer.parseInt(s);
int v = c.convert("42");
```

语法要点：

- 参数类型可省略（目标类型推断）；单参数可省略括号；单语句可省略 `return` 与花括号。
- 与匿名内部类相比，更简洁且可捕获 effectively final 的外部变量。

常见函数式接口：

- `java.util.function`：`Supplier`、`Consumer`、`Function`、`Predicate`、`BiFunction`、`UnaryOperator`/`BinaryOperator` 等。

## 方法引用与构造器引用

形式与示例：

- 静态方法：`Type::staticMethod` → `Integer::parseInt`
- 实例方法（特定对象）：`instance::method` → `System.out::println`
- 实例方法（任意对象的某类型）：`Type::instanceMethod` → `String::toUpperCase`
- 构造器：`Type::new`；数组构造器：`Type[]::new`

```java
Function<String, Integer> f = Integer::parseInt;
Supplier<List<String>> s = ArrayList::new;
```

## 接口默认方法与静态方法

接口可包含 `default` 方法与 `static` 方法，便于向后兼容与提供通用实现。

```java
interface Named {
    String name();
    default String display() { return "Name=" + name(); }
    static boolean nonEmpty(String s) { return s != null && !s.isEmpty(); }
}
```

冲突规则：

- 类优先于接口；更具体的接口优先；可在实现类中显式重写或用 `Interface.super.method()` 指定。

## Stream API（流式操作）

核心理念：声明式、链式的集合处理，惰性中间操作 + 及早终止操作；可通过 `parallel()` 并行化。

常见中间操作：`map`、`filter`、`flatMap`、`distinct`、`sorted`、`peek`、`limit/skip`。

常见终止操作：`forEach`、`collect`、`reduce`、`count`、`findFirst/findAny`、`anyMatch/allMatch/noneMatch`。

```java
List<String> names = Arrays.asList("bob", "alice", "tom", "bob");
Map<Integer, List<String>> grouped = names.stream()
	.filter(Objects::nonNull)
	.map(String::trim)
	.filter(s -> !s.isEmpty())
	.distinct()
	.collect(Collectors.groupingBy(String::length));
```

收集器：`toList/toSet/toMap`、`groupingBy`、`partitioningBy`、`mapping`、`joining`、`summarizingInt` 等。

`flatMap` 适用于“集合的集合”展开。

并行流：`list.parallelStream()` 或 `stream.parallel()`，需关注数据量、任务粒度与避免共享可变状态。

## Optional（避免空指针）

```java
Optional<String> os = Optional.of("hi");
os.map(String::length)
  .filter(n -> n > 1)
  .ifPresent(System.out::println);

String v = Optional.ofNullable(System.getenv("USER"))
	.orElseGet(() -> Locale.getDefault().toString());
```

要点：

- 避免返回 `null`，用 `Optional.empty()` 表示无值；
- 谨慎用于集合元素或字段（会增加装箱开销与层级），多用于返回值；
- `orElseGet`（惰性）优于 `orElse`（即使有值也会计算参数）。

## 日期时间 API：java.time

新的、不可变、线程安全的日期时间库（吸收 JodaTime 设计）。

- `LocalDate`、`LocalTime`、`LocalDateTime`、`ZonedDateTime`、`Instant`
- `Period`（日期间隔）、`Duration`（时间间隔）
- `DateTimeFormatter`（格式化/解析）

```java
LocalDateTime now = LocalDateTime.now();
ZonedDateTime z = now.atZone(ZoneId.of("Asia/Shanghai"));
String s = z.format(DateTimeFormatter.ISO_ZONED_DATE_TIME);

LocalDate next = LocalDate.parse("2025-12-31");
Period p = Period.between(LocalDate.now(), next);
```

与旧 API 互转：`Date`/`Calendar` 与 `Instant` 之间可通过 `Date.from(instant)`、`date.toInstant()`。

## CompletableFuture（异步编程）

基于回调/组合的未来任务，支持链式与异常处理。

```java
CompletableFuture<Integer> f = CompletableFuture.supplyAsync(() -> compute())
    .thenApply(x -> x * 2)
    .exceptionally(ex -> 0);

CompletableFuture<String> a = supplyAsync(() -> fetchA());
CompletableFuture<String> b = supplyAsync(() -> fetchB());
String combined = a.thenCombine(b, (x, y) -> x + ":" + y).join();
```

要点：

- `thenApply/thenCompose`（映射 vs 展开）
- `allOf/anyOf`（并发合并）
- 自定义执行器避免 ForkJoinPool 公共池资源争用；注意阻塞操作。

## Map/集合与工具类增强

- Map 新增：`getOrDefault`、`putIfAbsent`、`compute/computeIfAbsent/computeIfPresent`、`merge`、`replaceAll`、`forEach`。
- `Comparator`：链式比较 `thenComparing`、空值优先/后置、自然/逆序。
- `Collection.removeIf`、`Iterable.forEach`、`Map.forEach`。
- `Collectors` 与 `Stream` 见上。
- `Base64`：`Base64.getEncoder()/getDecoder()` 支持基本、URL、安全 MIME。
- `Arrays.parallelSort`：对大型数组的并行排序（注意数据量与开销）。

```java
Map<String, Integer> cache = new HashMap<>();
int len = cache.computeIfAbsent("key", k -> k.length());

String s = Base64.getUrlEncoder().withoutPadding()
	.encodeToString("hello".getBytes(StandardCharsets.UTF_8));
```

## 注解改进：可重复注解与类型注解

- 可重复注解：`@Repeatable(Container.class)`；读取用 `getAnnotationsByType`。
- 类型注解（JSR 308）：可注解任何使用类型的地方（如泛型、数组、强制转换），与 Checker Framework 等工具结合提高静态检查能力。

```java
@Repeatable(Tags.class)
@interface Tag { String value(); }
@interface Tags { Tag[] value(); }

@Tag("a") @Tag("b") class C {}
C.class.getAnnotationsByType(Tag.class); // [a, b]
```

## 并行与性能：parallelStream / Arrays.parallelSort

- 并行流适合 CPU 密集、无共享可变状态、数据量较大场景；
- 避免在并行流中进行阻塞 IO；
- 自定义 `ForkJoinPool` 可通过 `CompletableFuture` 或手动提交任务实现隔离。

## 常见坑与最佳实践

- Stream 只可消费一次；中间操作惰性，调试可用 `peek`（非生产日志替代）。
- `collect(toMap)` 时键冲突需提供合并函数，否则抛异常。
- Optional 不建议用于字段或集合元素；避免 `get()`，优先 `orElse/ifPresent`。
- 接口默认方法冲突需显式消解；保持二进制兼容时谨慎演进接口。
- parallelStream 不一定更快；评估任务拆分、数据量与核数。

## 实战示例

### 1) 统计与分组

```java
record Order(String user, String category, int amount) {}

List<Order> orders = List.of(
    new Order("u1", "book", 20),
    new Order("u1", "food", 15),
    new Order("u2", "book", 30)
);

Map<String, IntSummaryStatistics> byUser = orders.stream()
	.collect(Collectors.groupingBy(Order::user,
		Collectors.summarizingInt(Order::amount)));

Map<String, Map<String, Integer>> amountByUserCategory = orders.stream()
	.collect(Collectors.groupingBy(Order::user,
		Collectors.groupingBy(Order::category,
			Collectors.summingInt(Order::amount))));
```

注意：`record` 是 Java 14+ 加入的语法糖，此处仅作结构示例；Java 8 可用普通类代替。

### 2) CompletableFuture 组合

```java
ExecutorService ioPool = Executors.newFixedThreadPool(8);

CompletableFuture<String> fa = CompletableFuture.supplyAsync(() -> api("/a"), ioPool);
CompletableFuture<String> fb = CompletableFuture.supplyAsync(() -> api("/b"), ioPool);

String res = fa.thenCombine(fb, (a, b) -> a + "+" + b)
	.orTimeout(2, TimeUnit.SECONDS)
	.exceptionally(ex -> "fallback")
	.join();
```
