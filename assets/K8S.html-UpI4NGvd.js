import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as s,b as n}from"./app--xdMrcUJ.js";const r={},t=n(`<h1 id="k8s" tabindex="-1"><a class="header-anchor" href="#k8s" aria-hidden="true">#</a> K8S</h1><h2 id="启停k8s命名空间下的所有部署" tabindex="-1"><a class="header-anchor" href="#启停k8s命名空间下的所有部署" aria-hidden="true">#</a> 启停K8S命名空间下的所有部署</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl scale <span class="token parameter variable">--replicas</span><span class="token operator">=</span><span class="token number">0</span> deployment <span class="token parameter variable">--all</span> <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>namespace-name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl scale <span class="token parameter variable">--replicas</span><span class="token operator">=</span><span class="token number">1</span> deployment <span class="token parameter variable">--all</span> <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>namespace-name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),l=[t];function c(p,o){return e(),s("div",null,l)}const m=a(r,[["render",c],["__file","K8S.html.vue"]]);export{m as default};