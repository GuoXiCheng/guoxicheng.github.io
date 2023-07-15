# K8S应用发布策略

## 重建部署（适合用于开发环境）

重建部署策略会先删除现有的Pod，然后再创建新版本的Pod。这种部署策略会导致应用程序在部署过程中短暂的不可用，因此不适合生产环境。但是，它非常适合开发环境，因为它可以确保每次部署都是从头开始的，从而避免了由于旧版本的残留状态而导致的问题。

<figure markdown>
![Image title](/static/k8s-release-strategy/recreate.png)
</figure>

## 滚动部署（保证应用持续可用）

滚动部署是一种逐步更新应用程序的部署策略。它通过逐步替换现有的Pod实例来实现无缝的应用程序更新。在滚动部署期间，旧版本的Pod逐渐被新版本的Pod替换，以确保应用程序持续可用。

<figure markdown>
![Image title](/static/k8s-release-strategy/rolling-update.png)
</figure>


## 蓝绿部署（适合应用无缝升级）

蓝绿部署是一种将新版本的应用程序部署到与当前版本完全相同的环境中的策略。新版本在一个“绿色”环境中运行并进行验证，一旦验证成功，可以将流量切换到新版本，同时停止旧版本的流量。这种方式可以实现无缝的应用程序升级。

<figure markdown>
![Image title](/static/k8s-release-strategy/blue-green.png)
</figure>


## 金丝雀部署（让部分用户参与测试）

金丝雀部署是一种逐步扩展新版本的部署策略。它首先在生产环境中引入新版本的应用程序，但只将部分流量路由到新版本，以验证其性能和稳定性。随着验证的成功，逐步增加新版本的流量比例，直到完全将流量切换到新版本。

<figure markdown>
![Image title](/static/k8s-release-strategy/canary.png)
</figure>

## A/B测试（适合评估新功能）

A/B测试是一种部署策略，其中两个（或多个）版本的应用程序同时运行，并且不同的用户或用户群体被随机分配到这些版本中的一个。通过比较不同版本的用户反馈、性能指标等，可以评估新版本的效果，并根据结果做出决策。

<figure markdown>
![Image title](/static/k8s-release-strategy/a-b-test.jpg)
</figure>

