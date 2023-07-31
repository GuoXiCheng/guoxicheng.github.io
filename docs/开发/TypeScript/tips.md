## npm 镜像源切换

```bash title="查看当前使用的镜像源"
npm config get registry
```

```bash title="切换官方镜像源"
npm config set registry https://registry.npmjs.org
```

## 替换字符串中的回车、空格和换行

```js
string.replace(/\n|\ +|\\/g, "")
```
