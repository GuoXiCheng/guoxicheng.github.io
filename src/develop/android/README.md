---
title: Android
index: false
icon: fa-brands fa-android
dir:
  link: true
---

## kotlin 测量代码耗时

```kotlin
import kotlin.system.measureTimeMillis

val elapsedTime = measureTimeMillis {
    // 将您想要测量的代码放在这里
    // 例如：
    Thread.sleep(1000) // 延迟一秒钟
}

println("The code took $elapsedTime milliseconds to execute")
```