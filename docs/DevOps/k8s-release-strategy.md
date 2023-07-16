# K8S应用发布策略

## 重建部署（适合用于开发环境）

- 定义：重建部署是最简单的发布策略
- 部署方式：先停止并删除旧版本容器，再创建并启动新版本容器，部署中会导致应用程序短暂不可用
- 适用场景：无需保证应用持续可用，例如开发环境

<figure markdown>
![Image title](/static/k8s-release-strategy/recreate.png)
</figure>

## 滚动更新（保证应用持续可用）

- 定义：滚动更新是一种逐步替换旧容器的策略
- 部署方式：逐步将新版本的容器添加到集群中，同时逐步删除旧版本的容器
- 适用场景：确保应用程序持续可用

<figure markdown>
![Image title](/static/k8s-release-strategy/rolling-update.png)
</figure>


## 蓝绿部署（适合应用无缝升级）

- 定义：蓝绿部署是一种将新版本应用与旧版本应用完全隔离的策略
- 部署方式：先在集群中部署一个与旧版本完全独立的新版本环境（绿色环境）中运行并进行验证。然后，通过将流量从旧环境（蓝色环境）切换到新环境来进行更新
- 适用场景：应用程序的无缝升级

<figure markdown>
![Image title](/static/k8s-release-strategy/blue-green.png)
</figure>


## 金丝雀部署（让部分用户参与测试）

- 定义：金丝雀部署是一种逐步引入新版本应用的策略，以限制潜在问题的影响范围
- 部署方式：将一小部分流量路由到新版本应用，而大部分流量仍然路由到旧版本应用。通过监测新版本的性能和稳定性，可以逐步增加流量份额，直到完全切换到新版本
- 适用场景：在应用早期阶段发现和解决潜在问题，减轻对整个用户群体的影响

<figure markdown>
![Image title](/static/k8s-release-strategy/canary.png)
</figure>

## A/B测试（适合评估新功能）

- 定义：A/B测试是一种用于比较不同版本应用程序的部署策略
- 部署方式：使用K8S的服务发现和负载均衡功能，将一部分用户或流量请求路由到B版本的应用，而其余用户或流量请求仍然路由到A版本的应用
- 适用场景：分析、评估不同版本应用程序的性能指标、用户反馈

<figure markdown>
![Image title](/static/k8s-release-strategy/a-b-test.jpg)
</figure>

