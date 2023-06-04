# Other

## 停用K8S命名空间下的所有资源

```bash
kubectl scale --replicas=0 deployment --all -n <namespace-name>
```

## 启用K8S命名空间下的所有资源
```bash
kubectl scale --replicas=1 deployment --all -n <namespace-name>
```