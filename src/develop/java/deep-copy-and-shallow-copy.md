# Java 中的深拷贝与浅拷贝

## 1. 基本概念

- 浅拷贝（Shallow Copy）
  - 复制对象自身的字段，但对于“引用类型字段”仅复制引用（指针），新旧对象共享同一子对象实例。
  - 适合对象图较浅、子对象不可变或明确共享语义的场景。
- 深拷贝（Deep Copy）
  - 递归复制对象图中的每一个可变子对象，使新对象拥有完全独立的对象图。
  - 适合需要隔离状态、避免共享带来的副作用的场景。

关键点：

- 基本类型（int、long、double…）和不可变类型（String、BigDecimal、LocalDateTime 等）在浅拷贝下通常没有共享风险。
- 可变引用（List/Map/数组/Date/自定义可变类）在浅拷贝下会共享，易引发“你改我也变”的隐患。

## 2. 常见拷贝途径与其深浅特性

- 直接赋值：Person p2 = p1; 仅复制引用，非拷贝。
- 构造器/工厂方法拷贝：由你决定深/浅；可读性最好、最可控。
- Object.clone() + Cloneable：
  - 默认行为类似字段级“位拷贝”，即浅拷贝；需要你在 clone 中手动深拷贝嵌套字段。
  - 易踩坑（见后文）。
- 序列化深拷贝：序列化 -> 反序列化得到新对象。通常是“深拷贝”，需所有参与对象可序列化。
  - Java 原生（ObjectOutputStream）/Apache Commons Lang/其他序列化框架（Kryo、FST）。
  - 开销较大，不适合热路径。
- JSON 转换深拷贝：使用 Jackson/Gson 将对象转为 JSON 再读回；对不可序列化对象友好，但丢失瞬态/多态细节风险更高。
- 数组/集合复制：
  - Arrays.copyOf / array.clone()：
    - 基本类型数组：元素值复制，效果“深”（元素是值）。
    - 对象数组：仅复制元素引用，浅拷贝。
  - new ArrayList<>(list)、new HashMap<>(map)：容器结构复制，元素/值引用共享，浅拷贝。
  - List.copyOf/Set.copyOf/Map.copyOf：创建不可变视图的浅拷贝（元素引用共享）。
  - Collections.unmodifiableList：仅不可变包装，不复制，浅且只读。

## 3. 示例对象

```java
// 示例实体
class Address implements Cloneable, java.io.Serializable {
    String city;
    String street;

    Address(String city, String street) { this.city = city; this.street = street; }

    // 浅 -> 深：需要自己实现
    @Override protected Address clone() {
        try { return (Address) super.clone(); } catch (CloneNotSupportedException e) { throw new AssertionError(e); }
    }

    Address deepCopy() { return new Address(this.city, this.street); }
}

class Person implements Cloneable, java.io.Serializable {
    String name;          // 不可变 String（引用可变性为否，值不可变）
    java.util.Date dob;   // 可变
    Address address;      // 可变

    Person(String name, java.util.Date dob, Address address) {
        // 构造器内的防御性拷贝
        this.name = name;
        this.dob = dob == null ? null : new java.util.Date(dob.getTime());
        this.address = address;
    }

    // 浅拷贝（仅字段级复制）
    @Override protected Person clone() {
        try { return (Person) super.clone(); } catch (CloneNotSupportedException e) { throw new AssertionError(e); }
    }

    // 深拷贝（手动处理可变字段）
    Person deepCopy() {
        return new Person(
            this.name,
            this.dob == null ? null : new java.util.Date(this.dob.getTime()),
            this.address == null ? null : this.address.deepCopy()
        );
    }
}
```

对比浅/深拷贝效果：

```java
Person p1 = new Person("Alice", new Date(), new Address("SZ", "Nanshan"));
Person shallow = p1.clone();           // 浅：shallow.address == p1.address
Person deep = p1.deepCopy();           // 深：deep.address != p1.address

p1.address.city = "SH";
System.out.println(shallow.address.city); // SH（受影响）
System.out.println(deep.address.city);    // SZ（不受影响）
```

## 4. Cloneable 的实现与坑

- 实现步骤
  - implements Cloneable
  - 覆盖 protected Object clone()，内部调用 super.clone()
  - 对可变字段进行深拷贝（数组/集合/自定义类型）
- 常见坑
  - 未调用 super.clone() 导致拷贝不完整或抛异常。
  - final 字段在 clone 后可见为同值引用，若需要深拷贝需通过构造新对象，而非简单 clone。
  - 包含集合时，new ArrayList<>(list) 只是浅拷贝，需遍历元素逐一复制。
  - Cloneable 语义模糊、可见性与可维护性差；更推荐“拷贝构造器/静态工厂”。

数组小贴士：

```java
int[] a = {1,2,3};
int[] b = a.clone();           // 深（元素值）
Address[] aa = { new Address("SZ","NS") };
Address[] bb = aa.clone();     // 浅（元素引用） -> bb[0] == aa[0]
```

## 5. 拷贝构造器与工厂（推荐）

- 可读性高：Person copy = new Person(original);
- 可控性强：明确哪些字段深拷贝，哪些共享。
- 易组合：集合深拷贝可使用 map(Person::new)。

示例：

```java
class Person2 {
    final String name;
    final Address address; // 假设 Address 是不可变或我们深拷贝

    Person2(Person2 other) {
        this.name = other.name;
        this.address = other.address == null ? null : other.address.deepCopy();
    }

    static Person2 copyOf(Person2 other) { return new Person2(other); }
}
```

## 6. 集合的深拷贝

- 列表的浅/深拷贝

```java
List<Person> shallow = new ArrayList<>(original); // 浅
List<Person> deep = original.stream().map(Person::deepCopy).toList(); // 深
```

- 通用深拷贝助手（要求元素支持 deepCopy）

```java
import java.util.*;
import java.util.function.Function;

public class DeepCopies {
    public static <T> List<T> deepCopyList(List<T> src, Function<T, T> copier) {
        if (src == null) return null;
        List<T> dst = new ArrayList<>(src.size());
        for (T t : src) dst.add(t == null ? null : copier.apply(t));
        return dst;
    }

    public static <K,V> Map<K,V> deepCopyMap(Map<K,V> src, Function<V, V> copier) {
        if (src == null) return null;
        Map<K,V> dst = new LinkedHashMap<>(src.size());
        for (Map.Entry<K,V> e : src.entrySet())
            dst.put(e.getKey(), e.getValue() == null ? null : copier.apply(e.getValue()));
        return dst;
    }
}
```

- JDK 不可变视图与浅拷贝
  - List.copyOf(list)：创建不可变的浅拷贝（元素引用共享）。
  - Collections.unmodifiableList(list)：仅包装为只读视图，不复制。

## 7. 序列化方式的深拷贝

- 原生 Java 序列化（所有对象需实现 Serializable）

```java
import java.io.*;

@SuppressWarnings("unchecked")
public static <T extends Serializable> T deepCopyByJdk(T obj) {
    try (ByteArrayOutputStream bos = new ByteArrayOutputStream();
         ObjectOutputStream oos = new ObjectOutputStream(bos)) {
        oos.writeObject(obj);
        oos.flush();
        try (ObjectInputStream ois = new ObjectInputStream(new ByteArrayInputStream(bos.toByteArray()))) {
            return (T) ois.readObject();
        }
    } catch (IOException | ClassNotFoundException e) {
        throw new RuntimeException("Deep copy by JDK serialization failed", e);
    }
}
```

- Apache Commons Lang

```java
// org.apache.commons:commons-lang3
Person copy = org.apache.commons.lang3.SerializationUtils.clone(original);
```

- Jackson JSON（注意多态/瞬态/循环引用）

```java
import com.fasterxml.jackson.databind.ObjectMapper;

public static <T> T deepCopyByJson(ObjectMapper mapper, T obj, Class<T> type) {
    try {
        byte[] json = mapper.writeValueAsBytes(obj);
        return mapper.readValue(json, type);
    } catch (Exception e) { throw new RuntimeException(e); }
}
```

提示：

- 性能：序列化方式最慢，适合便捷离线拷贝或非热点逻辑。
- 语义：JSON 可能丢失类型信息，注意 @JsonTypeInfo 或自定义模块。

## 8. 不变对象与“拷贝免疫”

- 不变对象（Immutable）天然“深拷贝免疫”：
  - String、BigDecimal、BigInteger、LocalDate/LocalDateTime/Instant、UUID 等。
  - Guava ImmutableList/Map/Set；Java 10+ List.copyOf 返回的不可变集合。
- 通过不可变设计降低拷贝需求：
  - record（JDK 16+）天然不可变；“复制修改”通过新建新对象：new R(a, b’, c)。
  - Lombok @With 生成 withXxx 方法，实现“结构共享 + 不变对象”。

## 9. 防御性拷贝（封装边界）

- 构造器参数拷贝

```java
class Event {
    private final Date when;
    private final List<String> attendees;

    Event(Date when, List<String> attendees) {
        this.when = when == null ? null : new Date(when.getTime()); // 拷贝 Date
        this.attendees = attendees == null ? List.of() : List.copyOf(attendees); // 不可变浅拷贝
    }

    public Date getWhen() { return when == null ? null : new Date(when.getTime()); }
    public List<String> getAttendees() { return attendees; } // 已不可变，可直接返回
}
```

- 数组的 getter 要返回副本

```java
class BytesHolder {
    private final byte[] data;
    public BytesHolder(byte[] data) { this.data = data == null ? null : data.clone(); }
    public byte[] getData() { return data == null ? null : data.clone(); }
}
```

## 10. 选择建议与性能

- 首选：拷贝构造器/静态工厂（清晰、可测、可维护）。
- clone：仅在明确收益时使用；务必覆盖并深拷贝可变字段。
- 序列化：便捷但慢；不用于高频路径。
- 集合深拷贝：遍历元素逐一复制；避免 new ArrayList<>(list) 误以为是深拷贝。
- 充分利用不变对象，减少拷贝需求。
- 缓存对象图时小心：深拷贝成本与对象图规模线性甚至超线性增长；避免热路径反复深拷贝。

## 11. 常见坑与对策

- JSON 深拷贝遇循环引用 -> 栈溢出/序列化失败；可改用二进制序列化或关闭循环、使用 @JsonIdentityInfo。
- BeanUtils.copyProperties/ModelMapper 等常见工具大多“浅拷贝字段值”，不要误判为深拷贝。
- 集合/数组元素为可变对象时，clone()/copyOf 仍是浅拷贝。
- transient 字段在序列化深拷贝中丢失；需要手动恢复。
- equals/hashCode 不随拷贝方式改变语义，但浅拷贝共享子对象可能导致期望外的联动修改。
- 并发场景：浅拷贝共享子对象需要同步/不可变，否则数据竞争。
