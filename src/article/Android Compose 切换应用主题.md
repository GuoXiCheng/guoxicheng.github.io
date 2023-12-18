# Android Compose 切换应用主题

## 实现思路

Android 中常见的切换深色主题和浅色主题的方式：在使用 Compose 绘制的界面中，可以使用一个状态来标识当前的主题。当用户切换主题时，使用 DataStore 保存并更新主题状态，UI 会自动刷新。

## MaterialTheme

在 ui.theme. Theme.kt 文件中，定义好了深色和浅色主题的样式：

```kotlin
private val darkColorScheme = darkColorScheme(
    // ...
)

private val lightColorScheme = lightColorScheme(
    // ...
)

@Composable
fun AppTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    // Dynamic color is available on Android 12+
    dynamicColor: Boolean = true,
    content: @Composable () -> Unit
) {
    // ...
}
```

在 Activity 中只需要使用定义好的主题色，传递一个 boolean 值给 darkTheme 来决定使用深色或浅色主题：

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    DataStoreUtils.init(applicationContext)
    setContent {
        AppTheme(darkTheme = false) {
            Column(
                    modifier = Modifier
                        .fillMaxSize()
                        .background(MaterialTheme.colorScheme.background) // 使用主题色
                ) {
                    // ...
                }
        }
    }
}
```

## 检查当前系统主题

可以使用 Configuration.uiMode 来检查当前系统的主题：

```kotlin
val nightModeFlags: Int = resources.configuration.uiMode and Configuration.UI_MODE_NIGHT_MASK
when (nightModeFlags) {
    Configuration.UI_MODE_NIGHT_YES -> // 深色模式启用
    Configuration.UI_MODE_NIGHT_NO -> // 深色模式未启用
    Configuration.UI_MODE_NIGHT_UNDEFINED -> // 深色模式未定义
}
```

## 使用 DataStore 保存主题状态

### 添加依赖

在 app/build.gradle 文件中添加依赖：

```groovy
dependencies {
    // ...
    implementation "androidx.datastore:datastore-preferences:1.0.0"
}
```

### 创建 DataStore 工具类

在 utils/DataStoreUtils.kt 文件中创建 DataStore 工具类：

```kotlin
/*
This file contains code from Project PlayAndroid (https://github.com/zhujiang521/PlayAndroid)
*/
val Context.dataStore: DataStore<Preferences> by preferencesDataStore(name = "APPDataStore")

object DataStoreUtils {

    private lateinit var dataStore: DataStore<Preferences>

    /**
     * init Context
     * @param context Context
     */
    fun init(context: Context) {
        dataStore = context.dataStore
    }

    @Suppress("UNCHECKED_CAST")
    fun <U> getSyncData(key: String, default: U): U {
        val res = when (default) {
            is Long -> readLongData(key, default)
            is String -> readStringData(key, default)
            is Int -> readIntData(key, default)
            is Boolean -> readBooleanData(key, default)
            is Float -> readFloatData(key, default)
            else -> throw IllegalArgumentException("This type can be saved into DataStore")
        }
        return res as U
    }

    @Suppress("UNCHECKED_CAST")
    fun <U> getData(key: String, default: U): Flow<U> {
        val data = when (default) {
            is Long -> readLongFlow(key, default)
            is String -> readStringFlow(key, default)
            is Int -> readIntFlow(key, default)
            is Boolean -> readBooleanFlow(key, default)
            is Float -> readFloatFlow(key, default)
            else -> throw IllegalArgumentException("This type can be saved into DataStore")
        }
        return data as Flow<U>
    }

    suspend fun <U> putData(key: String, value: U) {
        when (value) {
            is Long -> saveLongData(key, value)
            is String -> saveStringData(key, value)
            is Int -> saveIntData(key, value)
            is Boolean -> saveBooleanData(key, value)
            is Float -> saveFloatData(key, value)
            else -> throw IllegalArgumentException("This type can be saved into DataStore")
        }
    }

    fun <U> putSyncData(key: String, value: U) {
        when (value) {
            is Long -> saveSyncLongData(key, value)
            is String -> saveSyncStringData(key, value)
            is Int -> saveSyncIntData(key, value)
            is Boolean -> saveSyncBooleanData(key, value)
            is Float -> saveSyncFloatData(key, value)
            else -> throw IllegalArgumentException("This type can be saved into DataStore")
        }
    }

    fun readBooleanFlow(key: String, default: Boolean = false): Flow<Boolean> =
        dataStore.data
            .catch {
                //当读取数据遇到错误时，如果是 `IOException` 异常，发送一个 emptyPreferences 来重新使用
                //但是如果是其他的异常，最好将它抛出去，不要隐藏问题
                if (it is IOException) {
                    it.printStackTrace()
                    emit(emptyPreferences())
                } else {
                    throw it
                }
            }.map {
                it[booleanPreferencesKey(key)] ?: default
            }

    fun readBooleanData(key: String, default: Boolean = false): Boolean {
        var value = false
        runBlocking {
            dataStore.data.first {
                value = it[booleanPreferencesKey(key)] ?: default
                true
            }
        }
        return value
    }

    fun readIntFlow(key: String, default: Int = 0): Flow<Int> =
        dataStore.data
            .catch {
                if (it is IOException) {
                    it.printStackTrace()
                    emit(emptyPreferences())
                } else {
                    throw it
                }
            }.map {
                it[intPreferencesKey(key)] ?: default
            }

    fun readIntData(key: String, default: Int = 0): Int {
        var value = 0
        runBlocking {
            dataStore.data.first {
                value = it[intPreferencesKey(key)] ?: default
                true
            }
        }
        return value
    }

    fun readStringFlow(key: String, default: String = ""): Flow<String> =
        dataStore.data
            .catch {
                if (it is IOException) {
                    it.printStackTrace()
                    emit(emptyPreferences())
                } else {
                    throw it
                }
            }.map {
                it[stringPreferencesKey(key)] ?: default
            }

    fun readStringData(key: String, default: String = ""): String {
        var value = ""
        runBlocking {
            dataStore.data.first {
                value = it[stringPreferencesKey(key)] ?: default
                true
            }
        }
        return value
    }

    fun readFloatFlow(key: String, default: Float = 0f): Flow<Float> =
        dataStore.data
            .catch {
                if (it is IOException) {
                    it.printStackTrace()
                    emit(emptyPreferences())
                } else {
                    throw it
                }
            }.map {
                it[floatPreferencesKey(key)] ?: default
            }

    fun readFloatData(key: String, default: Float = 0f): Float {
        var value = 0f
        runBlocking {
            dataStore.data.first {
                value = it[floatPreferencesKey(key)] ?: default
                true
            }
        }
        return value
    }

    fun readLongFlow(key: String, default: Long = 0L): Flow<Long> =
        dataStore.data
            .catch {
                if (it is IOException) {
                    it.printStackTrace()
                    emit(emptyPreferences())
                } else {
                    throw it
                }
            }.map {
                it[longPreferencesKey(key)] ?: default
            }

    fun readLongData(key: String, default: Long = 0L): Long {
        var value = 0L
        runBlocking {
            dataStore.data.first {
                value = it[longPreferencesKey(key)] ?: default
                true
            }
        }
        return value
    }

    suspend fun saveBooleanData(key: String, value: Boolean) {
        dataStore.edit { mutablePreferences ->
            mutablePreferences[booleanPreferencesKey(key)] = value
        }
    }

    fun saveSyncBooleanData(key: String, value: Boolean) =
        runBlocking { saveBooleanData(key, value) }

    suspend fun saveIntData(key: String, value: Int) {
        dataStore.edit { mutablePreferences ->
            mutablePreferences[intPreferencesKey(key)] = value
        }
    }

    fun saveSyncIntData(key: String, value: Int) = runBlocking { saveIntData(key, value) }

    suspend fun saveStringData(key: String, value: String) {
        dataStore.edit { mutablePreferences ->
            mutablePreferences[stringPreferencesKey(key)] = value
        }
    }

    fun saveSyncStringData(key: String, value: String) = runBlocking { saveStringData(key, value) }

    suspend fun saveFloatData(key: String, value: Float) {
        dataStore.edit { mutablePreferences ->
            mutablePreferences[floatPreferencesKey(key)] = value
        }
    }

    fun saveSyncFloatData(key: String, value: Float) = runBlocking { saveFloatData(key, value) }

    suspend fun saveLongData(key: String, value: Long) {
        dataStore.edit { mutablePreferences ->
            mutablePreferences[longPreferencesKey(key)] = value
        }
    }

    fun saveSyncLongData(key: String, value: Long) = runBlocking { saveLongData(key, value) }

    suspend fun clear() {
        dataStore.edit {
            it.clear()
        }
    }

    fun clearSync() {
        runBlocking {
            dataStore.edit {
                it.clear()
            }
        }
    }

}
```

### 初始化 DataStore

在 Activity 中初始化 DataStore：

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    DataStoreUtils.init(applicationContext)
    setContent {
        AppTheme(darkTheme = false) {
            // ...
        }
    }
}
```

## 添加主题状态

在 ui.theme.Theme.kt 文件中添加主题状态：

```kotlin
// ...

val themeTypeState: MutableState<Int> by lazy(mode = LazyThreadSafetyMode.SYNCHRONIZED) {
    mutableStateOf(getDefaultThemeId())
}

fun getDefaultThemeId(): Int = DataStoreUtils.getSyncData("APP_THEME", Configuration.UI_MODE_NIGHT_NO)

// ...
```

## 应主题状态

```kotlin
class SettingsActivity : AppCompatActivity() {
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            AppTheme(darkTheme = themeTypeState.value == Configuration.UI_MODE_NIGHT_YES) {
                Button(onClick = { toggleTheme() }) {
                    Text(text = if (themeTypeState.value == Configuration.UI_MODE_NIGHT_YES) "浅色主题" else "深色主题")
                }
            }
        }
    }
}

private fun toggleTheme() {
    val newTheme = if (themeTypeState.value == Configuration.UI_MODE_NIGHT_YES) {
        Configuration.UI_MODE_NIGHT_NO
    } else {
        Configuration.UI_MODE_NIGHT_YES
    }

    themeTypeState.value = newTheme
    DataStoreUtils.putSyncData("APP_THEME", newTheme)
}
```