# react 跨域

如果要访问的API为：`https://test.com.cn/api/user`

## 在本地开发环境时

```json title="在package.json中添加" linenums="1" hl_lines="2"
{
  "proxy": "https://test.com.cn"
}
```

## 部署到Nginx中时

```nginx title="编辑nginx.conf文件" linenums="1" hl_lines="3"
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