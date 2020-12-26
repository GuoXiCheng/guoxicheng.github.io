## 数据库
## MySQL基础

### 操作数据库

- 创建数据库

  ```sql
  CREATE DATABASE database_name;
  ```
  
- 打开数据库

  ```sql
  USE database_name;
  ```

- 查看当前数据库

  ```sql
  SELECT DATABASE();
  ```

- 查看所有数据库

  ```sql
  SHOW DATABASES;
  ```

- 查看数据库创建时所使用的命令

  ```sql
  SHOW CREATE DATABASE database_name;
  ```

- 修改数据库的编码方式

  ```sql
  ALTER DATABASE database_name CHARACTER SET = utf-8;
  ```

- 删除数据库

  ```sql
  DROP DATABASE database_name;
  ```

### 操作数据表

- 查看当前数据库下的所有数据表

  ```sql
  SHOW TABLES;
  ```
- 查看指定数据库下的所有数据表

  ```sql
  SHOW TABLES FROM database_name;
  ```
- 查看数据表结构

  ```sql
  SHOW COLUMNS FROM table_name;
  ```
- 修改数据表的编码方式

  ```sql
  ALTER TABLE table_name CONVERT TO CHARACTER SET utf8;
  ```


- 数据表更名

  ```sql
  ALTER TABLE old_table_name RENAME new_table_name;
  ```

### 建表语句模板

```sql
CREATE TABLE table_name (
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(20) NOT NULL UNIQUE KEY,
    age TINYINT NOT NULL DEFAULT '3',
    SALARY FLOAT(8,2) NOT NULL
);
```

### 内置函数

| 函数          | 描述                     | 例子                                                         |
| :------------ | :----------------------- | :----------------------------------------------------------- |
| LEFT()        | 获取左侧指定个数字符     | SELECT LEFT('MySQL', 2);                                     |
| LIKE()        | 模式匹配                 |                                                              |
| TRIM()        | 删除前后空格             | SELECT TRIM(' MySQL ');<br>TRIM(LEADING '?' FROM '??MySQL???'); //删除前导的‘？’字符<br>TRIM(TRAILING '?' FROM '??MySQL???');//删除后续的'?'字符<br>TRIM(BOTH '?' FROM '??MySQL???');//删除前导和后续的'?'字符<br> |
| LTRIM()       | 删除前导空格             | SELECT LTRIM(' MySQL');                                      |
| RIGHT()       | 获取右侧指定个数字符     | SELECT RIGHT('MySQL', 2);                                    |
| RTRIM()       | 删除后续空格             | SELECT RTRIM('MySQL ');                                      |
| UPPER()       | 转换成大写字母           | SELECT UPPER('mysql');                                       |
| LOWER()       | 转换成小写字母           | SELECT LOWER('MySQL');                                       |
| CONCAT()      | 字符连接                 | SELECT CONCAT('first', 'second');                            |
| LENGTH()      | 获取字符串长度           | SELECT LENGHT('MySQL');                                      |
| REPLACE()     | 字符串替换               | SELECT REPLACE('??My??SQL???', '?', '');                     |
| SUBSTRING()   | 字符串截取               | SUBSTRING('MySQL', 1, 2);//从第一位开始截取两位 <br/>SUBSTRING('MySQL', 3);//从第三位开始截取到最后一位<br/>SUBSTRING('MySQL', -1);//截取倒数第一位，只有位数可以为负值 |
| CONCAT_WS()   | 使用指定的分隔符连接字符 | SELECT CONCAT_WS('-', 'A', 'B', 'C');                        |
| DIV()         | 弃余数取整除法           | SELECT 4 DIV(3);                                             |
| CEIL()        | 向上取整                 | SELECT CEIL(3.01);                                           |
| MOD()         | 取余数(取模)             | SELECT 2 MOD(5);                                             |
| FLOOR()       | 向下取整                 | SELECT FLOOR(4.3);                                           |
| POWER()       | 幂运算                   | SELECT POWER(2, 3);                                          |
| ROUND()       | 四舍五入                 | SELECT ROUND(3.5);                                           |
| FORMAT()      | 四舍入五格式化小数       | SELECT FORMAT(123.45, 2); // 保留两位小数                    |
| TRUNCATE()    | 数字截取                 | SELECT TRUNCATE(120.345, 2); // 120.34 <br>SELECT TRUNCATE(120.345, -2); // 100 |
| IN()          | 在列出值范围内           |                                                              |
| IS  NULL      | 为空                     |                                                              |
| BETWEEN...AND | 在...范围内              |                                                              |
| NOW()         | 当前日期和时间           | 2020-07-31 16:01:29                                          |
| CURTIME()     | 当前时间                 | 16:01:59                                                     |
| CURDATE()     | 当前日期                 | 2020-07-31                                                   |
| DATEDIFF()    | 日期差值                 | SELECT DATEDIFF('2013-3-12','2014-3-12');                    |
| DATE_ADD()    | 日期变化                 | SELECT DATE_ADD('2014-3-12',INTERVAL 365 DAY);               |
| DATE_FORMAT() | 日期格式化               | SELECT DATE_FORMAT('2014-3-12','%m/%d/%Y');                  |
| AVG()         | 返回列平均值             | SELECT AVG(column_name) from table_name;                     |
| COUNT()       | 返回列记录个数           | SELECT COUNT(column_name) from table_name;                   |
| MAX()         | 返回列记录最大值         | SELECT MAX(column_name) from table_name                      |
| MIN()         | 返回列记录最小值         | SELECT MIN(column_name) from table_name                      |
| SUM()         | 返回列记录总和           | SELECT SUM(column_name) from table_name                      |

## 生成唯一id的方式
### 方式一：时间+随机数
```java
public class KeyUtil {
    public static synchronized String genUniqueKey(){
        Random random = new Random();
        Integer number = random.nextInt(900000) + 100000;
        return System.currentTimeMillis() + String.valueOf(number);
    }
}
```
### 方式二：使用UUID
```java
public class KeyUtil {
    public static String getUUID(){
        UUID uuid=UUID.randomUUID();
        String uuidStr=uuid.toString().replace("-","");
        return uuidStr;
    }
}
```
## MD5加密
```java
public class MD5Utils {
	public static String getMD5Str(String strValue) throws Exception {
		MessageDigest md5 = MessageDigest.getInstance("MD5");
		String newstr = Base64.encodeBase64String(md5.digest(strValue.getBytes()));
		return newstr;
	}
}
```
## 数据库连接配置
```yml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/imooc-video-dev?serverTimezone=Asia/Shanghai
    username: root
    password: 123456
```
## 数据库驱动依赖
```xml
<dependency>
	<groupId>mysql</groupId>
	<artifactId>mysql-connector-java</artifactId>
</dependency>
```
## insert时获取自增的id值
### 1.在配置文件中使用@@IDENITIY
```xml
<insert>
    <!--insert语句-->
    <selectKey resultType="int" keyProperty="id" order="AFTER">
      SELECT @@IDENTITY As id
    </selectKey>
<insert>
```
### 2.使用实体类的getId()方法
```java
//插入操作完成后
user.getId();//返回自增的id值
```

## MySQL中根据时间查询数据
### 查询今天的数据
```sql
SELECT * FROM table_name WHERE TO_DAYS(time_column_name) = TO_DAYS(NOW());
```
### 查询昨天的数据
```sql
SELECT * FROM table_name WHERE TO_DAYS(NOW( )) - TO_DAYS(time_column_name) <= 1;
```
### 查询近七天的数据
```sql
SELECT * FROM table_name WHERE DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= DATE(time_column_name);
```
### 查询本周的数据
```sql
SELECT * FROM table_name WHERE YEARWEEK(DATE_FORMAT(time_column_name, '%Y-%m-%d')) = YEARWEEK(NOW());
```
### 查询上周的数据
```sql
SELECT * FROM table_name WHERE YEARWEEK(DATE_FORMAT(time_column_name,'%Y-%m-%d')) = YEARWEEK(NOW()) - 1;
```
### 查询近三十天的数据
```sql
SELECT * FROM table_name WHERE DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= DATE(time_column_name);
```
### 查询本月的数据
```sql
SELECT * FROM table_name WHERE DATE_FORMAT(time_column_name, '%Y%m') = DATE_FORMAT(CURDATE(), '%Y%m');
```
### 查询上个月的数据
```sql
SELECT * FROM table_name WHERE PERIOD_DIFF(DATE_FORMAT(NOW(), '%Y%m'), DATE_FORMAT(time_column_name, '%Y%m')) = 1;
```
### 查询本季度的数据
```sql
SELECT * FROM table_name WHERE QUARTER(time_column_name) = QUARTER(NOW());
```
### 查询上一季度的数据
```sql
SELECT * FROM table_name WHERE QUARTER(time_column_name) = QUARTER(DATE_SUB(NOW(),INTERVAL 1 QUARTER));
```
### 查询距当前六个月的数据
```sql
SELECT * FROM table_name WHERE time_column_name between DATE_SUB(NOW(), INTERVAL 6 MONTH) AND NOW();
```
### 查询本年的数据
```sql
SELECT * FROM table_name WHERE YEAR(time_column_name) = YEAR(NOW());
```
### 查询上一年的数据
```sql
SELECT * FROM table_name WHERE YEAR(time_column_name) = YEAR(DATE_SUB(NOW(), INTERVAL 1 YEAR));
```