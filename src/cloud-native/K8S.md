# K8S
## 启停K8S命名空间下的所有部署

```bash title="停用K8S命名空间下的所有部署副本"
kubectl scale --replicas=0 deployment --all -n <namespace-name>
```

```bash title="启用K8S命名空间下的所有部署副本"
kubectl scale --replicas=1 deployment --all -n <namespace-name>
```