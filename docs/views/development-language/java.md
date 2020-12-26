---
tags:
- java
---

## Java
## 配置Java环境
### 1. 下载JDK
[下载JDK](http://www.oracle.com/technetwork/java/javase/downloads)
### 2. 配置环境变量
1. 右击计算机 → 属性 → 高级系统设置 → 环境变量
2. 新建 → 变量名：**JAVA_HOME** → 变量值：**C:\Program Files\Java\jdk1.8.0_144**
3. 选择 PATH → 在变量值最前面添加：**C:\Program Files\Java\jdk1.8.0_144\bin;**
4. 新建 → 变量名：**CLASSPATH** → 变量值：**.;C:\Program Files\Java\jdk1.8.0_144\lib**
5. 打开cmd终端测试配置是否正确：
```bash
javac -version
```
## 字符串转为基本数据类型
```java
int a = Integer.parseInt("123");
double b = Double.parseDouble("12.23");
boolean c = Boolean.parseBoolean("true");
```
## Math的常用方法
1. **Math.ceil( value )**：返回大于value的最小整数
2. **Math.floor( value )**：返回小于value的最大整数
3. **Math.round()**：四舍五入
4. **Math.pow( a, b )**：返回a的b次方
5. **Math.random()**：返回大于等于0.0且小于等于1.0的随机数

## 匿名内部类开启线程
### 方式一
```java
new Thread() {
	public void run() {
		// 要执行得代码;
	}
}.start();
```
### 方式二
```java
Runnable r=new Runnable() {
	public void run() {
		// 要执行得代码;
	}
};
new Thread(r).start();
```

## 封装BigDecimal工具类
```java
public class BigDecimalUtil {
    private BigDecimalUtil(){

    }

    public static BigDecimal add(double v1,double v2){
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return b1.add(b2);
    }

    public static BigDecimal sub(double v1,double v2){
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return b1.subtract(b2);
    }

    public static BigDecimal mul(double v1,double v2){
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return b1.multiply(b2);
    }

    public static BigDecimal div(double v1,double v2){
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return b1.divide(b2,2,BigDecimal.ROUND_HALF_UP);//除不尽的情况,保留两位小数
    }
}
```
## 封装Date工具类
```java
public class DateUtil {

    //Date转DateString
    public static String dateToString(){
        Date date = new Date();
        //可以转成 yyyy/MM/dd HH:mm:ss 等
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String dateString = format.format(date);
        return dateString;
    }

    //DateString转Date    dateString = "2019-04-30 15:59:10";
    public static Date stringToDate(String dateString) throws ParseException {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date =format.parse(dateString);
        return date;
    }
}
```
## 获取当前系统时间
```java
System.currentTimeMillis()
```
## Json工具类
```java
public class JsonUtils {
    // 定义jackson对象
    private static final ObjectMapper MAPPER = new ObjectMapper();
    /**
     * 将对象转换成json字符串。
     */
    public static String objectToJson(Object data) {
    	try {
			String string = MAPPER.writeValueAsString(data);
			return string;
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
    	return null;
    }

    /**
     * 将json结果集转化为对象
     */
    public static <T> T jsonToPojo(String jsonData, Class<T> beanType) {
        try {
            T t = MAPPER.readValue(jsonData, beanType);
            return t;
        } catch (Exception e) {
        	e.printStackTrace();
        }
        return null;
    }

    /**
     * 将json数据转换成pojo对象list
     */
    public static <T>List<T> jsonToList(String jsonData, Class<T> beanType) {
    	JavaType javaType = MAPPER.getTypeFactory().constructParametricType(List.class, beanType);
    	try {
    		List<T> list = MAPPER.readValue(jsonData, javaType);
    		return list;
		} catch (Exception e) {
			e.printStackTrace();
		}
    	return null;
    }
}
```