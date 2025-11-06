# Java 反射

> 面向需要在运行时“查看”“构造”“调用”“修改”类与成员的场景：框架、AOP、序列化、对象映射、插件化与脚手架代码生成等。

## 基本概念与适用场景

- 反射（Reflection）：在运行时检查类型信息（类、接口、字段、方法、注解）、构造对象、访问或调用成员。
- 适合：框架/库（Spring、Hibernate、Jackson）、序列化/反序列化、对象映射、插件化系统、通用工具。
- 不建议业务代码中频繁使用反射（考虑性能与可维护性），优先使用普通调用/接口/泛型/设计模式。

## 快速上手：Class/构造/字段/方法

### 获取 Class 的 3 种方式

```java
// 1) 类字面量（编译期已知）
Class<String> c1 = String.class;

// 2) 对象实例获取（运行期）
Object o = "hi";
Class<?> c2 = o.getClass();

// 3) 名称加载（配合配置/插件）
Class<?> c3 = Class.forName("java.util.ArrayList");
```

### 构造实例

```java
Class<?> clazz = Class.forName("com.example.User");

// 无参构造
Object u1 = clazz.getDeclaredConstructor().newInstance();

// 有参构造
Constructor<?> cons = clazz.getDeclaredConstructor(String.class, int.class);
cons.setAccessible(true); // 如为非 public
Object u2 = cons.newInstance("Tom", 18);
```

### 访问字段（读/写）

```java
Field f = clazz.getDeclaredField("age");
f.setAccessible(true); // 绕过可见性（见下文模块章节）
Object age = f.get(u2);
f.set(u2, 20);
```

### 调用方法

```java
Method m = clazz.getDeclaredMethod("greet", String.class);
m.setAccessible(true);
Object ret = m.invoke(u2, "Morning");
```

### 获取成员与层级差异

- `getFields()/getMethods()/getConstructors()`：仅 public，含父类 public 成员。
- `getDeclaredXxx()`：当前类声明的全部（含 private/protected/default），不含父类。
- `Modifier` 可判断 `public/private/static/final/abstract` 等修饰符。

## 访问控制与模块强封装（JDK 9+）

- `AccessibleObject#setAccessible(true)` 在 JDK 9 引入强封装后可能抛出 `InaccessibleObjectException`。
- 解决思路：
  - 在命令行/测试时添加 `--add-opens module/package=ALL-UNNAMED` 或打开到具体模块；
  - 使用公共 API 替代，或设计为接口/公开访问器；
  - 在库内尽量避免反射到 JDK 内部类型；
  - 尽量用 `MethodHandle/VarHandle`（见下文）。
- SecurityManager 已在新版本逐步弃用；模块系统是新的边界。

## 注解反射与参数信息

注解需具有 `@Retention(RetentionPolicy.RUNTIME)` 才能在运行时通过反射读取。

```java
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE, ElementType.FIELD, ElementType.METHOD, ElementType.PARAMETER})
public @interface Label {
	String value();
}

@Label("entity")
class User {
	@Label("username")
	private String name;

	@Label("setter")
	public void setName(@Label("param:name") String name) { this.name = name; }
}

Class<User> cls = User.class;
Label classAnno = cls.getAnnotation(Label.class);

Field nameField = cls.getDeclaredField("name");
Label fieldAnno = nameField.getAnnotation(Label.class);

Method setName = cls.getDeclaredMethod("setName", String.class);
Label methodAnno = setName.getAnnotation(Label.class);

// 参数注解
Annotation[][] paramAnnos = setName.getParameterAnnotations();
```

参数名称在编译期默认丢失。需要用 `javac -parameters` 保留，随后可通过：

```java
for (Parameter p : setName.getParameters()) {
	System.out.println(p.getName());  // 需要 -parameters，否则是 arg0/arg1
}
```

`@Repeatable` 可声明可重复注解；`getAnnotationsByType` 可合并读取。

## 泛型反射与类型擦除

Java 泛型在运行时大多被擦除，但签名仍可在 `Field/Method/Parameter` 的 `getGenericType/getGenericParameterTypes` 中看到类型镜像：

```java
class Box<T> { List<T> list; }

Field listField = Box.class.getDeclaredField("list");
Type gt = listField.getGenericType(); // 可能是 ParameterizedType

if (gt instanceof ParameterizedType) {
	ParameterizedType pt = (ParameterizedType) gt;
	Type raw = pt.getRawType();             // List
	Type arg = pt.getActualTypeArguments()[0]; // T（TypeVariable）
}
```

常见 `Type` 子类型：

- `Class`：原始类型（如 `String`、`List` 原始）
- `ParameterizedType`：带泛型实参的如 `List<String>`
- `TypeVariable`：类型变量如 `T`
- `WildcardType`：通配符如 `? extends Number`
- `GenericArrayType`：泛型数组如 `T[]`

注意：很多时候运行时拿到的是擦除后的 `Class`，无法区分 `List<String>` 与 `List<Integer>` 的实例内容；需要在更外层（如字段/方法签名）解析。

## 动态代理（Proxy/InvocationHandler）

适用于“接口”代理（JDK 动态代理仅支持接口）。

```java
interface Hello { String hi(String name); }

class HelloImpl implements Hello {
	public String hi(String name) { return "Hi, " + name; }
}

Hello target = new HelloImpl();
Hello proxy = (Hello) Proxy.newProxyInstance(
		Hello.class.getClassLoader(),
		new Class[]{Hello.class},
		(Object p, Method method, Object[] args) -> {
			long t0 = System.nanoTime();
			try { return method.invoke(target, args); }
			finally { System.out.println(method.getName()+" took " + (System.nanoTime()-t0) + "ns"); }
		}
);

System.out.println(proxy.hi("Tom"));
```

若需代理“类”（非接口），需使用 CGLIB 或 ByteBuddy 等库（不在本文范围）。

## MethodHandle 与 VarHandle（更快的反射）

`MethodHandle`（Java 7/8）通过 `LambdaMetafactory` 等可获得接近直接调用的性能；`VarHandle`（Java 9）用于字段/数组元素的高性能访问（含原子/内存序语义）。

```java
// MethodHandle 示例
MethodHandles.Lookup lookup = MethodHandles.lookup();
MethodType mt = MethodType.methodType(String.class, String.class);
MethodHandle mh = lookup.findVirtual(String.class, "toUpperCase", MethodType.methodType(String.class));

String s = (String) mh.invokeExact("hi"); // "HI"
```

```java
// VarHandle 示例
class Counter { volatile int v; }
VarHandle VH;
try {
	VH = MethodHandles.lookup().in(Counter.class)
			.findVarHandle(Counter.class, "v", int.class);
} catch (NoSuchFieldException | IllegalAccessException e) { throw new RuntimeException(e); }

Counter c = new Counter();
VH.setVolatile(c, 1);
boolean updated = VH.compareAndSet(c, 1, 2);
```

优势：

- 更少的安全检查与适配成本，JIT 更易内联；
- `VarHandle` 提供原子性/内存序操作（类似 `Unsafe` 的安全替代）。

## 性能建议与常见陷阱

性能建议：

- 缓存 `Field/Method/Constructor` 与 `MethodHandle/VarHandle`，避免重复查找。
- 批量操作时，提前设置 `setAccessible(true)`（若允许）并重用；
- 热路径优先考虑接口/策略模式或代码生成（注解处理器、代码生成库）。

常见陷阱：

- `getMethod` 仅找 public，且会搜索父类；`getDeclaredMethod` 不搜索父类。
- 基本类型与装箱：反射参数匹配需精确（`int.class` ≠ `Integer.class`）。
- 可变参数方法调用：需要按实际 JVM 方法签名传参数（如传 `Object[]`）。
- 修改 `final` 字段未必生效（尤其在 JIT 优化或 `static final` 常量内联情况下）。
- 模块封装导致 `setAccessible(true)` 失败（需 `--add-opens`）。
- 桥接/合成方法：编译器可能生成 bridge/synthetic 方法（泛型/内部类），注意过滤 `method.isBridge()`/`method.isSynthetic()`。

## 实战示例

### 1) 基于同名字段的“浅拷贝”（演示反射字段读写）

```java
public static void shallowCopy(Object src, Object dst) {
	Class<?> sc = src.getClass();
	Class<?> dc = dst.getClass();
	for (Field sf : sc.getDeclaredFields()) {
		if (Modifier.isStatic(sf.getModifiers())) continue;
		try {
			Field df = dc.getDeclaredField(sf.getName());
			if (Modifier.isStatic(df.getModifiers())) continue;
			if (!df.getType().isAssignableFrom(sf.getType())) continue;
			sf.setAccessible(true);
			df.setAccessible(true);
			df.set(dst, sf.get(src));
		} catch (NoSuchFieldException | IllegalAccessException ignored) {}
	}
}
```

限制：仅“浅拷贝”，不处理集合/嵌套对象、null 安全与循环引用。

### 2) 极简 AOP：方法调用耗时记录（JDK 动态代理）

```java
@FunctionalInterface
interface Service { void work(String name); }

class ServiceImpl implements Service {
	public void work(String name) { try { Thread.sleep(10); } catch (InterruptedException ignored) {} }
}

static <T> T timeProxy(Class<T> intf, T target) {
	return intf.cast(Proxy.newProxyInstance(
			intf.getClassLoader(), new Class[]{intf},
			(p, m, a) -> {
				long t0 = System.nanoTime();
				try { return m.invoke(target, a); }
				finally { System.out.println(m.getName()+": "+(System.nanoTime()-t0)+" ns"); }
			}));
}

Service s = timeProxy(Service.class, new ServiceImpl());
s.work("job");
```
