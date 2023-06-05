# Argocd的安装与部署

## Step 1 安装argocd
```bash title="创建命名空间"
kubectl create namespace argocd
```

```bash title="执行安装命令"
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/core-install.yaml
```

## Step 2 创建访问入口

### 方式一：由K8S分配端口

```bash title="修改service类型为NodePort"
kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "NodePort"}}'
```

```bash title="查看生成的NodePort端口"
kubectl get svc argocd-server -n argocd
```

### 方式二：分配指定端口

```bash
sudo k3s kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "NodePort", "ports": [{"name": "http", "port": 80, "targetPort": 8080, "nodePort": 30001}]}}'
```

## Step 3 查询Admin登录密码
```bash
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
```