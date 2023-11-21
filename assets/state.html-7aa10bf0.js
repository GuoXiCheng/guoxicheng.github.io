import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-866cd06e.js";const e={},p=t(`<h1 id="状态模式" tabindex="-1"><a class="header-anchor" href="#状态模式" aria-hidden="true">#</a> 状态模式</h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>状态模式允许一个对象在其内部状态改变时改变它的行为，使其看上去就像改变了自身所属的类。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="订单管理" tabindex="-1"><a class="header-anchor" href="#订单管理" aria-hidden="true">#</a> 订单管理</h3><p>在订单管理系统中，订单会有不同的状态: 新订单、已支付、已发货、已完成、已取消。每个状态会有不同的处理逻辑。</p><p>在这个例子中，每个具体的订单状态类都知道如何处理当前状态并将上下文移至下一状态，这种方式使得添加新的状态或改变状态转换逻辑变得非常容易，因为每个状态的逻辑都封装在自己的类中。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/state/order.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 为所有具体状态定义一个共同的接口</span>
<span class="token keyword">interface</span> <span class="token class-name">OrderState</span> <span class="token punctuation">{</span>
    <span class="token function">handleOrder</span><span class="token punctuation">(</span>orderContext<span class="token operator">:</span> OrderContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 为每个可能的订单状态定义一个具体状态类，每个类都实现抽象的状态接口</span>
<span class="token keyword">class</span> <span class="token class-name">NewOrderState</span> <span class="token keyword">implements</span> <span class="token class-name">OrderState</span> <span class="token punctuation">{</span>
    <span class="token function">handleOrder</span><span class="token punctuation">(</span>orderContext<span class="token operator">:</span> OrderContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Handling new order&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        orderContext<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PaidOrderState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PaidOrderState</span> <span class="token keyword">implements</span> <span class="token class-name">OrderState</span> <span class="token punctuation">{</span>
    <span class="token function">handleOrder</span><span class="token punctuation">(</span>orderContext<span class="token operator">:</span> OrderContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Handling paid order&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        orderContext<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ShippedOrderState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ShippedOrderState</span> <span class="token keyword">implements</span> <span class="token class-name">OrderState</span> <span class="token punctuation">{</span>
    <span class="token function">handleOrder</span><span class="token punctuation">(</span>orderContext<span class="token operator">:</span> OrderContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Handling shipped order&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        orderContext<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CompletedOrderState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CompletedOrderState</span> <span class="token keyword">implements</span> <span class="token class-name">OrderState</span> <span class="token punctuation">{</span>
    <span class="token function">handleOrder</span><span class="token punctuation">(</span>orderContext<span class="token operator">:</span> OrderContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Order is completed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CancelledOrderState</span> <span class="token keyword">implements</span> <span class="token class-name">OrderState</span> <span class="token punctuation">{</span>
    <span class="token function">handleOrder</span><span class="token punctuation">(</span>orderContext<span class="token operator">:</span> OrderContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Order has been cancelled&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建一个上下文类，它将维护当前状态，并允许状态切换</span>
<span class="token keyword">class</span> <span class="token class-name">OrderContext</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> state<span class="token operator">:</span> OrderState<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>state<span class="token operator">:</span> OrderState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">setState</span><span class="token punctuation">(</span>state<span class="token operator">:</span> OrderState<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">handleOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">handleOrder</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderContext</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">NewOrderState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
order<span class="token punctuation">.</span><span class="token function">handleOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 处理新建订单</span>
order<span class="token punctuation">.</span><span class="token function">handleOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 处理已支付订单</span>
order<span class="token punctuation">.</span><span class="token function">handleOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 处理已发货订单</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","state.html.vue"]]);export{d as default};
