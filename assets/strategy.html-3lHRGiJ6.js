import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-pwK2AyOM.js";const p={},e=t(`<h1 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>策略模式允许定义一系列的算法，并将每种算法放入独立的类中，以使算法对象能够相互替换。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="会员定价策略" tabindex="-1"><a class="header-anchor" href="#会员定价策略" aria-hidden="true">#</a> 会员定价策略</h3><p>在付费平台会依据不同等级的会员来制定不同的定价策略，例如: 一般用户无折扣、普通会员享有九折、高级会员享有八折。</p><p>在这个例子中，购物车计算折扣的方式取决于它使用的策略，通过改变策略，可以改变折扣的计算方式，而不需要修改购物车本身。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/strategy/member-pricing.ts</span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="排序和搜索" tabindex="-1"><a class="header-anchor" href="#排序和搜索" aria-hidden="true">#</a> 排序和搜索</h3><p>在数据处理应用中，策略模式可以根据不同的数据集或性能要求选择不同的排序或搜索算法。例如，对小数据集使用插入排序，而对大数据集使用快速排序。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/strategy/sort-and-search.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 排序策略接口</span>
<span class="token keyword">interface</span> <span class="token class-name">SortStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">sort</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 插入排序策略</span>
<span class="token keyword">class</span> <span class="token class-name">InsertionSortStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">SortStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">sort</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token comment">// 插入排序的实现</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Using Insertion Sort&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ...排序逻辑</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 快速排序策略</span>
<span class="token keyword">class</span> <span class="token class-name">QuickSortStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">SortStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">sort</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token comment">// 快速排序的实现</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Using Quick Sort&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ...排序逻辑</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 上下文类</span>
<span class="token keyword">class</span> <span class="token class-name">SortContext</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> strategy<span class="token operator">:</span> SortStrategy<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>strategy<span class="token operator">:</span> SortStrategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">setStrategy</span><span class="token punctuation">(</span>strategy<span class="token operator">:</span> SortStrategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">sortData</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>strategy<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例使用</span>
<span class="token keyword">const</span> smallDataSet <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> largeDataSet <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SortContext</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InsertionSortStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Sorting small data set:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
context<span class="token punctuation">.</span><span class="token function">sortData</span><span class="token punctuation">(</span>smallDataSet<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 更改策略用于大数据集</span>
context<span class="token punctuation">.</span><span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">QuickSortStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Sorting large data set:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
context<span class="token punctuation">.</span><span class="token function">sortData</span><span class="token punctuation">(</span>largeDataSet<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导航和路由选择" tabindex="-1"><a class="header-anchor" href="#导航和路由选择" aria-hidden="true">#</a> 导航和路由选择</h3><p>策略模式可以用于选择不同的导航和路线。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/strategy/navigation.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 路线规划策略接口</span>
<span class="token keyword">interface</span> <span class="token class-name">RouteStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">planRoute</span><span class="token punctuation">(</span>startPoint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> endPoint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 最短路线策略</span>
<span class="token keyword">class</span> <span class="token class-name">ShortestRouteStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">RouteStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">planRoute</span><span class="token punctuation">(</span>startPoint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> endPoint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Planning the shortest route from </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>startPoint<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>endPoint<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 避开拥堵路线策略</span>
<span class="token keyword">class</span> <span class="token class-name">AvoidTrafficRouteStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">RouteStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">planRoute</span><span class="token punctuation">(</span>startPoint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> endPoint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Planning a route from </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>startPoint<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>endPoint<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> that avoids traffic</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 最节能路线策略</span>
<span class="token keyword">class</span> <span class="token class-name">EcoFriendlyRouteStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">RouteStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">planRoute</span><span class="token punctuation">(</span>startPoint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> endPoint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Planning an eco-friendly route from </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>startPoint<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>endPoint<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 导航上下文类</span>
<span class="token keyword">class</span> <span class="token class-name">NavigationContext</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> strategy<span class="token operator">:</span> RouteStrategy<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>strategy<span class="token operator">:</span> RouteStrategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">setStrategy</span><span class="token punctuation">(</span>strategy<span class="token operator">:</span> RouteStrategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">planRoute</span><span class="token punctuation">(</span>startPoint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> endPoint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>strategy<span class="token punctuation">.</span><span class="token function">planRoute</span><span class="token punctuation">(</span>startPoint<span class="token punctuation">,</span> endPoint<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例使用</span>
<span class="token keyword">const</span> navigation <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NavigationContext</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ShortestRouteStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigation<span class="token punctuation">.</span><span class="token function">planRoute</span><span class="token punctuation">(</span><span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Office&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 更改策略为避开拥堵</span>
navigation<span class="token punctuation">.</span><span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AvoidTrafficRouteStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigation<span class="token punctuation">.</span><span class="token function">planRoute</span><span class="token punctuation">(</span><span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Office&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 更改策略为最节能</span>
navigation<span class="token punctuation">.</span><span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">EcoFriendlyRouteStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigation<span class="token punctuation">.</span><span class="token function">planRoute</span><span class="token punctuation">(</span><span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Office&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据压缩和加密" tabindex="-1"><a class="header-anchor" href="#数据压缩和加密" aria-hidden="true">#</a> 数据压缩和加密</h3><p>在需要对数据进行压缩或加密的应用中，策略模式可以根据不同的场景或需求选择不同的压缩或加密算法。在这个例子中，定义了一个策略接口，然后实现几个具体的策略：一种是用于数据压缩的策略，另一种是用于数据加密的策略。最后，创建一个上下文类来根据不同的需求使用这些策略。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/strategy/data-compression-and-encryption.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 数据处理策略接口</span>
<span class="token keyword">interface</span> <span class="token class-name">DataStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">processData</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 压缩策略</span>
<span class="token keyword">class</span> <span class="token class-name">CompressionStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">DataStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">processData</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这里只是一个示意，实际压缩逻辑会更复杂</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Compressed data: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 加密策略</span>
<span class="token keyword">class</span> <span class="token class-name">EncryptionStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">DataStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">processData</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这里只是一个示意，实际加密逻辑会更复杂</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Encrypted data: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 数据处理上下文类</span>
<span class="token keyword">class</span> <span class="token class-name">DataContext</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> strategy<span class="token operator">:</span> DataStrategy<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>strategy<span class="token operator">:</span> DataStrategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">setStrategy</span><span class="token punctuation">(</span>strategy<span class="token operator">:</span> DataStrategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">process</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>strategy<span class="token punctuation">.</span><span class="token function">processData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例使用</span>
<span class="token keyword">const</span> dataContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataContext</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CompressionStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dataContext<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token string">&quot;Example data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 更改策略为加密</span>
dataContext<span class="token punctuation">.</span><span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">EncryptionStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dataContext<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token string">&quot;Example data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日志记录" tabindex="-1"><a class="header-anchor" href="#日志记录" aria-hidden="true">#</a> 日志记录</h3><p>策略模式适合用于实现灵活的日志记录机制。在这个例子中，定义一个日志策略接口，然后为记录到文件、数据库和通过网络发送实现不同的策略。最后，创建一个上下文类来使用这些策略，根据当前的上下文或配置选择合适的日志记录方法。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/strategy/log-recording.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 日志策略接口</span>
<span class="token keyword">interface</span> <span class="token class-name">LogStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 文件日志策略</span>
<span class="token keyword">class</span> <span class="token class-name">FileLogStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">LogStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Writing to file: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 实际文件写入逻辑</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 数据库日志策略</span>
<span class="token keyword">class</span> <span class="token class-name">DatabaseLogStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">LogStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Saving to database: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 实际数据库保存逻辑</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 网络日志策略</span>
<span class="token keyword">class</span> <span class="token class-name">NetworkLogStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">LogStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Sending over network: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 实际网络发送逻辑</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 日志上下文类</span>
<span class="token keyword">class</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> strategy<span class="token operator">:</span> LogStrategy<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>strategy<span class="token operator">:</span> LogStrategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">setStrategy</span><span class="token punctuation">(</span>strategy<span class="token operator">:</span> LogStrategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strategy<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例使用</span>
<span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Logger</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileLogStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;File log example&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 更改策略为数据库日志</span>
logger<span class="token punctuation">.</span><span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DatabaseLogStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Database log example&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 更改策略为网络日志</span>
logger<span class="token punctuation">.</span><span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">NetworkLogStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Network log example&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户界面渲染" tabindex="-1"><a class="header-anchor" href="#用户界面渲染" aria-hidden="true">#</a> 用户界面渲染</h3><p>策略模式可以用来处理不同的用户界面UI渲染策略。在这个例子中，定义一个UI渲染策略接口，并为不同的用户偏好或设备特性实现具体的策略，比如简洁版UI或高互动版UI。最后，创建一个上下文类来根据用户偏好或设备特性选择相应的渲染策略。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/strategy/user-interface-rendering.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// UI渲染策略接口</span>
<span class="token keyword">interface</span> <span class="token class-name">UIRenderStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 简洁版UI策略</span>
<span class="token keyword">class</span> <span class="token class-name">SimpleUIRenderStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">UIRenderStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Rendering Simple UI&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 高互动版UI策略</span>
<span class="token keyword">class</span> <span class="token class-name">InteractiveUIRenderStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">UIRenderStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Rendering Interactive UI&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// UI上下文类</span>
<span class="token keyword">class</span> <span class="token class-name">UIContext</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> strategy<span class="token operator">:</span> UIRenderStrategy<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>strategy<span class="token operator">:</span> UIRenderStrategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">setStrategy</span><span class="token punctuation">(</span>strategy<span class="token operator">:</span> UIRenderStrategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">renderUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>strategy<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例使用</span>
<span class="token keyword">const</span> userPreference <span class="token operator">=</span> <span class="token string">&#39;interactive&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 假设这是从用户配置中获得的</span>

<span class="token keyword">const</span> uiContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UIContext</span><span class="token punctuation">(</span>
    userPreference <span class="token operator">===</span> <span class="token string">&#39;interactive&#39;</span> <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">InteractiveUIRenderStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SimpleUIRenderStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>uiContext<span class="token punctuation">.</span><span class="token function">renderUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","strategy.html.vue"]]);export{k as default};
