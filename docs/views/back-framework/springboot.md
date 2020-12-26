## springboot
## SpringBoot配置资源文件
```java
//与SpringBoot启动器同目录
@Configuration
public class WebConfig extends WebMvcConfigurationSupport{
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry){
        //将所有/static/** 访问都映射到classpath:/static/ 目录下
        registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
    }
}
```
## SpringBoot打包部署
### 1.把pom中的jar改成war
```xml
<packaging>war</packaging>
```
### 2.在pom中排除tomcat
```xml
<!--打包时排除tomcat-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-tomcat</artifactId>
    <scope>provided</scope>
</dependency>
```
### 3.在启动类同目录下添加
```java
public class WarStartApplication extends SpringBootServletInitializer {

    //重写configure
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        //使用web.xml运行应用程序，指向Application，最后启动springboot
        return builder.sources(SpringBoot启动类名称.class);
    }
}
```
### 4.使用mvn打包
- mvn clean 清理target目录
- mvn install 打包
- 把target目录下生成的war放到tomcat的webapps目录下即可。

## springboot生产与开发环境隔离
```yml
spring:
  profiles:
    active: prod #或 dev
```

## springboot配置拦截器
```java
//与SpringBoot启动器同目录
@Configuration
public class WebConfig extends WebMvcConfigurationSupport {//与SpringBoot启动器同目录
    //实现拦截器 要拦截的路径以及不拦截的路径
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        //.addPathPatterns("/**")   添加拦截路径
        //.excludePathPatterns("/login");   排除拦截路径
        registry.addInterceptor(new InterceptorConfig()).addPathPatterns("/cart/*").addPathPatterns("/order/*");

    }
}
```
```java
public class InterceptorConfig implements HandlerInterceptor {
    private static final Logger log = LoggerFactory.getLogger(InterceptorConfig.class);

    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse response, Object o) throws Exception {
        log.info("---------------------开始进入请求地址拦截----------------------------");
        if (UserSessionUtil.getUser(httpServletRequest) == null) {
            System.out.println("用户为空！");
            returnErrorResponse(response,ServerResponse.createByErrorCodeMessage(10,"用户未登录!"));
            return false;
        }
        return true;
    }

    private void returnErrorResponse(HttpServletResponse response, ServerResponse serverResponse) throws IOException {
        OutputStream out = null;
        try{
            response.setCharacterEncoding("utf-8");
            response.setContentType("text/json");
            out = response.getOutputStream();
            out.write(JsonUtils.objectToJson(serverResponse).getBytes("utf-8"));
            out.flush();
        }finally {
            if(out != null){
                out.close();
            }
        }
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}
```
## Juint测试注解
```java
import org.junit.Test;

@RunWith(SpringRunner.class)
@SpringBootTest
```