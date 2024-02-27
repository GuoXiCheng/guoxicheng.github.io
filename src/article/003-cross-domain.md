# 跨域问题

## 问题产生原因

跨域问题主要源于浏览器的同源策略，同源策略是浏览器的一种安全策略，它用于限制一个源的文档或者它加载的脚本如何能与另一个源的资源进行交互。这里的源指的是协议、域名和端口号的组合，只有当两个URL的协议、域名和端口号都相同的时候，这两个URL就是同源。

同源策略的目的是为了保证用户信息的安全，防止恶意的网站窃取或操作另一个源的文档或数据。

## 常用解决方法

### CORS（Cross-Origin Resource Sharing）跨域资源共享

服务器设置特定的HTTP头，如 Access-Control-Allow-Origin，来允许或拒绝来自不同源的请求。

适用于大多数现代Web应用。

### JSONP（JSON with Padding）跨域资源共享

利用`<script>`标签没有跨域限制的特性，通过动态创建`<script>`来请求一个带有回调函数的JSON数据。

主要用于老旧系统，只支持GET请求。

### 代理

在服务器端设置代理，接收前端的请求，然后由服务器向目标服务器请求数据，最后返回给前端。

适用于需要绕过某些限制的场景。

### WebSocket

提供全双工通信通道，可以跨域通信。

适合需要实时数据交换的应用。

### window.postMessage

允许来自不同源的窗口之间的安全通信。

适用于不同域之间的iframe或窗口通信。

### document.domain

当两个不同的子域需要通信时，可以通过设置相同的document.domain来实现。

仅适用于相同主域下的不同子域。


## Django 中的跨域
### 安装

```bash
pip install django-cors-headers
```

### 配置

```py
INSTALLED_APPS = [ 
  'corsheaders', 
] 

MIDDLEWARE = [ 
  'corsheaders.middleware.CorsMiddleware', 
]

# 配置允许所有域名 
CORS_ORIGIN_ALLOW_ALL = True 

# 配置白名单域名
CORS_ORIGIN_WHITELIST = ( '127.0.0.1:8080', 'localhost:8080', ) 

# 指明在跨域访问中，后端是否支持对cookie的操作
CORS_ALLOW_CREDENTIALS = True

# 允许的请求方式 
CORS_ALLOW_METHODS = ( 
  'DELETE', 
  'GET', 
  'OPTIONS', 
  'PATCH', 
  'POST', 
  'PUT', 
  'VIEW', 
) 

# 允许的请求头 
CORS_ALLOW_HEADERS = ( 
  'XMLHttpRequest', 
  'X_FILENAME', 
  'accept-encoding', 
  'authorization', 
  'content-type', 
  'dnt', 
  'origin', 
  'user-agent', 
  'x-csrftoken', 
  'x-requested-with', 
  'Pragma', 
)
```

## React 中的跨域


如果要访问的API为：`https://test.com.cn/api/user`

### 在本地开发环境时
在package.json中添加
```json
{
  "proxy": "https://test.com.cn"
}
```

### 部署到Nginx中时
编辑nginx.conf文件
```nginx
location /api/ {
  proxy_read_timeout 150;
  proxy_pass https://test.com.cn;
  #将原请求的http链接header头中的Host信息放到转发请求中
  proxy_set_header Host $http_host;
  proxy_set_header X-Real-Ip $remote_addr;
  proxy_set_header REMOTE-HOST $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

## SpringBoot 中的跨域

在Application启动器同目录下新建：CorsConfig

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").
                        allowedOrigins("*"). //允许跨域的域名，可以用*表示允许任何域名使用
                        allowedMethods("*"). //允许任何方法（post、get等）
                        allowedHeaders("*"). //允许任何请求头
                        allowCredentials(true). //带上cookie信息
                        exposedHeaders(HttpHeaders.SET_COOKIE).maxAge(3600L); //maxAge(3600)表明在3600秒内，不需要再发送预检验请求，可以缓存该结果
            }
        };
    }
}
```