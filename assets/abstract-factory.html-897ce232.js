import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as p}from"./app-0a1d14b0.js";const e={},t=p(`<h1 id="抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式" aria-hidden="true">#</a> 抽象工厂模式</h1><h2 id="真实世界类比" tabindex="-1"><a class="header-anchor" href="#真实世界类比" aria-hidden="true">#</a> 真实世界类比</h2><p>假设你要去开通88VIP服务，有生活卡、购物卡和全能卡三种套餐供你选择，生活卡包含视频会员权益，购物卡包含天天红包权益，全能卡包含生活卡和购物卡的所有权益。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">VIPCard</span> <span class="token punctuation">{</span>
    <span class="token function">createLifeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> AbstractLifeService<span class="token punctuation">;</span>

    <span class="token function">createShoppingService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> AbstractShoppingService<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LifeCardVIP</span> <span class="token keyword">implements</span> <span class="token class-name">VIPCard</span> <span class="token punctuation">{</span>
    <span class="token function">createLifeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">LifeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">createShoppingService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">NoShoppingService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ShoppingCardVIP</span> <span class="token keyword">implements</span> <span class="token class-name">VIPCard</span> <span class="token punctuation">{</span>
    <span class="token function">createLifeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">NoLifeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">createShoppingService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ShoppingService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">AllInOneCardVIP</span> <span class="token keyword">implements</span> <span class="token class-name">VIPCard</span> <span class="token punctuation">{</span>
    <span class="token function">createLifeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">LifeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">createShoppingService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ShoppingService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">AbstractLifeService</span> <span class="token punctuation">{</span>
    <span class="token function">useLifeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">AbstractShoppingService</span> <span class="token punctuation">{</span>
    <span class="token function">useLifeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LifeService</span> <span class="token keyword">implements</span> <span class="token class-name">AbstractLifeService</span> <span class="token punctuation">{</span>
    <span class="token function">useLifeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;享有视频会员服务权益&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">NoLifeService</span> <span class="token keyword">implements</span> <span class="token class-name">AbstractLifeService</span> <span class="token punctuation">{</span>
    <span class="token function">useLifeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;没有享有生活服务权益&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ShoppingService</span> <span class="token keyword">implements</span> <span class="token class-name">AbstractShoppingService</span> <span class="token punctuation">{</span>
    <span class="token function">useLifeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;享有天天红包服务权益&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">NoShoppingService</span> <span class="token keyword">implements</span> <span class="token class-name">AbstractShoppingService</span> <span class="token punctuation">{</span>
    <span class="token function">useLifeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;没有享有购物服务权益&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">clientNode</span><span class="token punctuation">(</span>vip<span class="token operator">:</span> VIPCard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> life <span class="token operator">=</span> vip<span class="token punctuation">.</span><span class="token function">createLifeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>life<span class="token punctuation">.</span><span class="token function">useLifeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> shopping <span class="token operator">=</span> vip<span class="token punctuation">.</span><span class="token function">createShoppingService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>shopping<span class="token punctuation">.</span><span class="token function">useLifeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;如果我选择生活卡&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">clientNode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LifeCardVIP</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;如果我选择购物卡&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">clientNode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ShoppingCardVIP</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;如果我选择全能卡&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">clientNode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AllInOneCardVIP</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[t];function o(i,l){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","abstract-factory.html.vue"]]);export{r as default};
