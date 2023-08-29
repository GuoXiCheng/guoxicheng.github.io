# django
## 安装

```bash
pip install django-cors-headers
```

## 配置

```py linenums="1"
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