# Java 中的序列化和反序列化

## 1. 核心概念

- 序列化 (Serialization)：将对象的“状态”转为可持久化或可传输的二进制（或文本）表示。
- 反序列化 (Deserialization)：从该表示重建对象实例。
- 主要用途：缓存、跨 JVM/进程/网络传输、持久化、消息中间件、快照、深拷贝（副作用大，慎用）。

## 2. Java 原生序列化框架概览

- 入口类：ObjectOutputStream / ObjectInputStream
- 参与条件：类实现 java.io.Serializable 或 Externalizable
- 对象图：支持递归；同一对象引用多次写出时通过句柄保持引用一致性（避免重复实例）
- 格式：Java 规范定义的二进制协议（非跨语言友好）

## 3. Serializable 的工作方式

```java
import java.io.Serializable;

class User implements Serializable {
    private static final long serialVersionUID = 1L; // 强烈建议显式声明
    private String name;
    private int age;
    // transient 字段不会被序列化
    private transient String sessionToken;

    public User(String name, int age, String sessionToken) {
        this.name = name;
        this.age = age;
        this.sessionToken = sessionToken;
    }
}
```

要点：

- 未显式提供 serialVersionUID 时，JVM 会根据类结构计算（易导致版本不兼容）
- 序列化包含：非 transient、非 static 字段
- static 属于类，不参与实例状态；transient 用于敏感/临时/缓存性字段

## 4. serialVersionUID

- 用于版本兼容校验。反序列化时 UID 不匹配将抛 InvalidClassException
- 变更策略：
  - 向后兼容的字段新增（可选 transient 或提供默认值）保持不变
  - 不兼容修改（删除字段、字段类型改变）需调整 UID
- 建议：显式声明 long 常量，避免自动计算不稳定

## 5. 自定义序列化流程

通过以下“钩子”方法控制读写（仅在实现 Serializable 时生效）：

```java
private void writeObject(java.io.ObjectOutputStream out) throws Exception {
    out.defaultWriteObject(); // 写入默认字段
    out.writeInt(computeExtra()); // 附加数据
}

private void readObject(java.io.ObjectInputStream in) throws Exception {
    in.defaultReadObject(); // 读取默认字段
    int extra = in.readInt();
    rebuildFromExtra(extra);
}

// 替换反序列化后返回的对象（单例、缓存复用）
private Object readResolve() {
    return InternPool.intern(this);
}

// 在序列化前替换要写出的对象（代理、降级）
private Object writeReplace() {
    return new UserProxy(name); // 返回另一个可序列化对象
}
```

顺序：

- writeReplace -> writeObject/defaultWriteObject
- readObject/defaultReadObject -> readResolve（返回最终实例）

## 6. Externalizable

完全手动控制（无自动字段处理），需 public 无参构造器：

```java
import java.io.*;

class Conf implements Externalizable {
    String key;
    int timeout;

    public Conf() {} // 必须

    public Conf(String key, int timeout) {
        this.key = key; this.timeout = timeout;
    }

    @Override
    public void writeExternal(ObjectOutput out) throws IOException {
        out.writeUTF(key);
        out.writeInt(timeout);
    }

    @Override
    public void readExternal(ObjectInput in) throws IOException {
        this.key = in.readUTF();
        this.timeout = in.readInt();
    }
}
```

适用：性能敏感 + 格式可控 + 版本演进自管理。缺点：冗长、易出错。

## 7. 序列化/反序列化示例

```java
public static <T> byte[] serialize(T obj) {
    try (var bos = new java.io.ByteArrayOutputStream();
         var oos = new java.io.ObjectOutputStream(bos)) {
        oos.writeObject(obj);
        return bos.toByteArray();
    } catch (Exception e) {
        throw new RuntimeException(e);
    }
}

@SuppressWarnings("unchecked")
public static <T> T deserialize(byte[] data, Class<T> type) {
    try (var bis = new java.io.ByteArrayInputStream(data);
         var ois = new java.io.ObjectInputStream(bis)) {
        Object o = ois.readObject();
        return (T) o;
    } catch (Exception e) {
        throw new RuntimeException(e);
    }
}
```

## 8. 对象图特性与引用处理

- 同一对象多次被引用：写一次，后续写“句柄”编号
- 循环引用：自动处理（图遍历 + 句柄缓存）
- transient：跳过；可在 readObject 中恢复（如重新生成 token）

## 9. 性能与内存

瓶颈来源：

- 反射 + 元数据缓存建立
- 对象图深度与重复引用处理
- 频繁分配临时缓冲区

优化建议：

- 避免在高频（如 RPC 热路径）使用原生序列化
- 复用 ObjectOutputStream? 不可长期复用同一实例写不同逻辑（句柄状态残留），可重置：oos.reset()
- 考虑替代框架：Kryo、Protostuff、Protobuf、FlatBuffers、Avro、Jackson（JSON / Smile）、FST

## 10. 安全风险（高优先级）

原生反序列化是“代码执行入口”：

- 历史 Gadget 链（Commons Collections 等）可触发任意代码执行
- 风险点：攻击者伪造字节流发送到 ObjectInputStream

防御：

- JEP 290：ObjectInputFilter 过滤类
- 限制可信来源
- 避免从外部输入直接反序列化
- 使用白名单类型系统

示例（JEP 290）：

```java
import java.io.*;

ObjectInputFilter filter = ObjectInputFilter.Config.createFilter("maxbytes=1048576;java.base/*;com.example.model.*;!*");
try (var ois = new ObjectInputStream(in)) {
    ois.setObjectInputFilter(filter);
    Object obj = ois.readObject();
}
```

## 11. 版本演进策略

问题：新增字段、删除字段、类型变更

策略：

- 新增：保持 serialVersionUID，不破坏兼容；反序列化时默认值（对象 null / primitive 0）
- 删除：仍可保持 UID，但旧流包含多余数据被忽略
- 变更类型：通常视为不兼容，调整 UID 或提供自定义 readObject 兼容迁移
- 使用 writeReplace / readResolve 做旧对象升级迁移

## 12. transient 与敏感数据

- 标记不需持久化或不应泄漏的字段：密码、会话、缓存、文件句柄、线程池、锁对象
- 反序列化后需重建：如重新分配连接、重新计算派生值

```java
class TokenHolder implements Serializable {
    private transient String plaintext; // 不写出
    private String hash; // 写出用于验证
}
```

## 13. 常见坑

| 坑                          | 描述                             | 对策                     |
| --------------------------- | -------------------------------- | ------------------------ |
| 忘记 serialVersionUID       | 不同编译器/环境导致 UID 不稳定   | 显式声明                 |
| 使用原生序列化做 RPC        | 性能低 + 安全风险                | 换 Protobuf/Kryo         |
| 反序列化任意来源数据        | Gadget 链攻击                    | 白名单过滤               |
| 深拷贝用序列化滥用          | 性能昂贵                         | 使用拷贝构造或手写深拷贝 |
| Externalizable 忘记无参构造 | 反序列化失败                     | 添加 public 无参构造     |
| 修改字段类型未改 UID        | InvalidClassException 或逻辑错误 | 调整 UID + 迁移逻辑      |
| transient 字段未恢复        | 业务空指针                       | readObject 中重建        |

## 14. 替代与对比速览

| 技术              | 格式   | 速度  | 跨语言 | 模式/Schema | 典型场景         |
| ----------------- | ------ | ----- | ------ | ----------- | ---------------- |
| Java Serializable | 二进制 | 慢/中 | 否     | 无          | 旧系统、快速原型 |
| Externalizable    | 自定义 | 中/快 | 否     | 自定义      | 性能 + 控制格式  |
| JSON (Jackson)    | 文本   | 中    | 是     | 无（可加）  | Web/API/日志     |
| Protobuf          | 二进制 | 快    | 是     | 必须        | RPC/消息         |
| Kryo              | 二进制 | 快    | 否     | 可选注册    | 高性能缓存       |
| Avro              | 二进制 | 快    | 是     | Schema      | 数据管道         |
| FlatBuffers       | 二进制 | 很快  | 是     | Schema      | 零拷贝场景       |

## 15. 何时不该用原生序列化

- 公网输入
- 微服务间通信
- 长期演进的模型（需稳定可读格式）
- 性能敏感缓存
- 安全红线系统（金融、风控）除非白名单严格控制

## 16. 简易基准建议（示意）

```java
// JMH 伪代码：比较不同序列化方案
@Benchmark
public byte[] testJavaSerialize() { return serialize(user); }

@Benchmark
public byte[] testKryo() { return kryoWrite(user); }

@Benchmark
public byte[] testJson() { return jackson.writeValueAsBytes(user); }
```

常见结果：Kryo/Protobuf > Java 原生 > JSON（依赖结构与配置）

## 17. record / sealed 类（JDK 16+）

- record 默认实现 Serializable（如果显式声明接口）
- 不变 + 全参构造再建，版本演进更受限制（添加组件需兼容策略）
- 序列化仍基于字段；可用 readResolve 做驻留

## 18. 最佳实践清单

- 显式 serialVersionUID
- 严格限制反序列化来源 + JEP 290 过滤
- 仅在确实需要对象图语义时使用原生序列化
- 优先选择跨语言/高性能框架进行系统集成
- 不将业务逻辑放入 readObject（只做恢复/校验），避免副作用
- 重写 equals/hashCode 不依赖 transient 字段
- 深拷贝第一选择：拷贝构造器 / 工具方法，而非序列化

## 19. 快速演示：安全过滤+版本兼容

```java
class V1 implements Serializable {
    private static final long serialVersionUID = 1L;
    String name;
}

class V2 implements Serializable {
    private static final long serialVersionUID = 1L; // 兼容新增
    String name;
    int level; // 新增字段 -> 旧数据反序列化时为 0
}

// 过滤白名单
ObjectInputFilter filter = ObjectInputFilter.Config.createFilter("com.example.*;java.base/*;!*");
```
