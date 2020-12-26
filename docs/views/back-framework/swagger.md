## swagger
## swagger
[github项目地址](https://github.com/SpringForAll/spring-boot-starter-swagger)
### 依赖引入
```xml
<dependency>
	<groupId>com.spring4all</groupId>
	<artifactId>swagger-spring-boot-starter</artifactId>
	<version>1.9.1.RELEASE</version>
</dependency>
```
### 在应用主类中增加 @EnableSwagger2Doc 注解
### Demo-User
```java
@Data
@NoArgsConstructor
@AllArgsConstructor
@ApiModel("用户基本信息")
public class User {

    @ApiModelProperty("姓名")
    @Size(max = 20)
    private String name;

    @ApiModelProperty("年龄")
    @Max(150)
    @Min(1)
    private Integer age;

    @NotNull
    private String address;

    @Pattern(regexp = "^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$")
    private String email;
}
```
### Demo-UserController
```java
@Api(tags="用户管理")
@RestController
public class UserController {

    @ApiOperation("创建用户")
    @PostMapping("/users")
    public User create(@RequestBody @Valid User user) {
        return user;
    }

    @ApiOperation("用户详情")
    @GetMapping("/users/{id}")
    public User findById(@PathVariable Long id) {
        return new User("bbb", 21, "上海", "aaa@bbb.com");
    }

    @ApiOperation("用户列表")
    @GetMapping("/users")
    public List<User> list(@ApiParam("查看第几页") @RequestParam int pageIndex,
                           @ApiParam("每页多少条") @RequestParam int pageSize) {
        List<User> result = new ArrayList<>();
        result.add(new User("aaa", 50, "北京", "aaa@ccc.com"));
        result.add(new User("bbb", 21, "广州", "aaa@ddd.com"));
        return result;
    }

    @ApiIgnore
    @DeleteMapping("/users/{id}")
    public String deleteById(@PathVariable Long id) {
        return "delete user : " + id;
    }
}
```
项目启动后swagger文档访问：http://localhost:8080/swagger-ui.html
## 解决swagger访问404
```java
//与SpringBoot启动器同目录
@Configuration
public class WebConfig extends WebMvcConfigurationSupport{
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry){
        //解决swagger访问404
        registry.addResourceHandler("swagger-ui.html").addResourceLocations(
                "classpath:/META-INF/resources/");
        registry.addResourceHandler("/webjars/**").addResourceLocations(
                "classpath:/META-INF/resources/webjars/");
        super.addResourceHandlers(registry);
    }
}
```