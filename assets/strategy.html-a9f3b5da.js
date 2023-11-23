import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-928a61b2.js";const e={},p=t(`<h1 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>策略模式允许定义一系列的算法，并将每种算法放入独立的类中，以使算法对象能够相互替换。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="会员定价策略" tabindex="-1"><a class="header-anchor" href="#会员定价策略" aria-hidden="true">#</a> 会员定价策略</h3><p>在付费平台会依据不同等级的会员来制定不同的定价策略，例如: 一般用户无折扣、普通会员享有九折、高级会员享有八折。</p><p>在这个例子中，购物车计算折扣的方式取决于它使用的策略，通过改变策略，可以改变折扣的计算方式，而不需要修改购物车本身。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/strategy/member-pricing.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 定义一个策略接口，用于所有具体策略的共同行为</span>
<span class="token keyword">interface</span> <span class="token class-name">DiscountStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">calculateDiscount</span><span class="token punctuation">(</span>amount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 为不同类型的用户创建具体的策略类，每个类都实现抽象的策略接口</span>
<span class="token keyword">class</span> <span class="token class-name">RegularUserDiscount</span> <span class="token keyword">implements</span> <span class="token class-name">DiscountStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">calculateDiscount</span><span class="token punctuation">(</span>amount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
        <span class="token comment">// 普通用户可能没有折扣</span>
        <span class="token keyword">return</span> amount<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MemberUserDiscount</span> <span class="token keyword">implements</span> <span class="token class-name">DiscountStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">calculateDiscount</span><span class="token punctuation">(</span>amount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
        <span class="token comment">// 会员用户享受一定的折扣</span>
        <span class="token keyword">return</span> amount <span class="token operator">*</span> <span class="token number">0.9</span><span class="token punctuation">;</span> <span class="token comment">// 假设会员用户享有10%的折扣</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PremiumMemberDiscount</span> <span class="token keyword">implements</span> <span class="token class-name">DiscountStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">calculateDiscount</span><span class="token punctuation">(</span>amount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
        <span class="token comment">// 高级会员用户享受更高的折扣</span>
        <span class="token keyword">return</span> amount <span class="token operator">*</span> <span class="token number">0.8</span><span class="token punctuation">;</span> <span class="token comment">// 假设高级会员享有20%的折扣</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建一个上下文，用于管理策略，并根据策略计算出折扣价</span>
<span class="token keyword">class</span> <span class="token class-name">ShoppingCart</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> strategy<span class="token operator">:</span> DiscountStrategy<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>strategy<span class="token operator">:</span> DiscountStrategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">setStrategy</span><span class="token punctuation">(</span>strategy<span class="token operator">:</span> DiscountStrategy<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">calculateDiscountedTotal</span><span class="token punctuation">(</span>amount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>strategy<span class="token punctuation">.</span><span class="token function">calculateDiscount</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> regularCart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ShoppingCart</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegularUserDiscount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>regularCart<span class="token punctuation">.</span><span class="token function">calculateDiscountedTotal</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 100</span>

<span class="token keyword">const</span> memberCart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ShoppingCart</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MemberUserDiscount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>memberCart<span class="token punctuation">.</span><span class="token function">calculateDiscountedTotal</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 90</span>

<span class="token keyword">const</span> premiumCart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ShoppingCart</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PremiumMemberDiscount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>premiumCart<span class="token punctuation">.</span><span class="token function">calculateDiscountedTotal</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 80</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[p];function o(l,i){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","strategy.html.vue"]]);export{k as default};
