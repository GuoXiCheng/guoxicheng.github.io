# Other

## 启停K8S命名空间下的所有部署

```bash title="停用K8S命名空间下的所有部署副本"
kubectl scale --replicas=0 deployment --all -n <namespace-name>
```

```bash title="启用K8S命名空间下的所有部署副本"
kubectl scale --replicas=1 deployment --all -n <namespace-name>
```

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
