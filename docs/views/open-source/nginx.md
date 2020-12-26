## nginx
## vue项目部署到nginx
### 1. 修改config/index.js
```javascript
  build: {
    ......

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './', //修改为 ./

    ......
  }
```
### 2. 修改webpack.prod.conf.js
```javascript
//注释这段内容防止打包后样式发生变化
// new OptimizeCSSPlugin({
//   cssProcessorOptions: config.build.productionSourceMap
//     ? { safe: true, map: { inline: false } }
//     : { safe: true }
// }),
```
### 3. 打包成dist文件
```bash
npm run build
```
### 4. 配置nginx
```bash
nginx/conf/nginx.conf
```
```bash
server {
    listen       8088;
    server_name  guoxicheng.top;

    root html;
	index index.html index.html;
	location ^~/api/ {
		proxy_pass http://guoxicheng.top/mall/;
	}
	
	location ~ .*\.(git|jpg|jpeg|png|bmp|swf)$
	{
		root html;
	}
	location ~ .*\.(js|html|css)?$
	{
		root html;
		expires 30d;
	}
}
```
将dist中的static文件和index.html文件放在nginx/html中