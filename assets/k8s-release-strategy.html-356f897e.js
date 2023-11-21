import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,b as t}from"./app-866cd06e.js";const r="/assets/image/k8s-release-strategy/recreate.png",l="/assets/image/k8s-release-strategy/rolling-update.png",s="/assets/image/k8s-release-strategy/blue-green.png",n="/assets/image/k8s-release-strategy/canary.png",c="/assets/image/k8s-release-strategy/a-b-test.jpg",o={},g=t('<h1 id="k8s应用发布策略" tabindex="-1"><a class="header-anchor" href="#k8s应用发布策略" aria-hidden="true">#</a> K8S应用发布策略</h1><h2 id="重建部署" tabindex="-1"><a class="header-anchor" href="#重建部署" aria-hidden="true">#</a> 重建部署</h2><ul><li>定义：重建部署是最简单的发布策略</li><li>部署方式：先停止并删除旧版本容器，再创建并启动新版本容器，部署中会导致应用程序短暂不可用</li><li>适用场景：无需保证应用持续可用，例如开发环境</li></ul><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="滚动更新" tabindex="-1"><a class="header-anchor" href="#滚动更新" aria-hidden="true">#</a> 滚动更新</h2><ul><li>定义：滚动更新是一种逐步替换旧容器的策略</li><li>部署方式：逐步将新版本的容器添加到集群中，同时逐步删除旧版本的容器</li><li>适用场景：确保应用程序持续可用</li></ul><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="蓝绿部署" tabindex="-1"><a class="header-anchor" href="#蓝绿部署" aria-hidden="true">#</a> 蓝绿部署</h2><ul><li>定义：蓝绿部署是一种将新版本应用与旧版本应用完全隔离的策略</li><li>部署方式：先在集群中部署一个与旧版本完全独立的新版本环境（绿色环境）中运行并进行验证。然后，通过将流量从旧环境（蓝色环境）切换到新环境来进行更新</li><li>适用场景：应用程序的无缝升级</li></ul><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="金丝雀部署" tabindex="-1"><a class="header-anchor" href="#金丝雀部署" aria-hidden="true">#</a> 金丝雀部署</h2><ul><li>定义：金丝雀部署是一种逐步引入新版本应用的策略，以限制潜在问题的影响范围</li><li>部署方式：将一小部分流量路由到新版本应用，而大部分流量仍然路由到旧版本应用。通过监测新版本的性能和稳定性，可以逐步增加流量份额，直到完全切换到新版本</li><li>适用场景：在应用早期阶段发现和解决潜在问题，减轻对整个用户群体的影响</li></ul><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="a-b测试" tabindex="-1"><a class="header-anchor" href="#a-b测试" aria-hidden="true">#</a> A/B测试</h2><ul><li>定义：A/B测试是一种用于比较不同版本应用程序的部署策略</li><li>部署方式：使用K8S的服务发现和负载均衡功能，将一部分用户或流量请求路由到B版本的应用，而其余用户或流量请求仍然路由到A版本的应用</li><li>适用场景：分析、评估不同版本应用程序的性能指标、用户反馈</li></ul><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',16),d=[g];function h(f,u){return i(),e("div",null,d)}const m=a(o,[["render",h],["__file","k8s-release-strategy.html.vue"]]);export{m as default};