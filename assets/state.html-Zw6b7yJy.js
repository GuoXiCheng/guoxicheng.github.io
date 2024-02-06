import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-OwM4KWfr.js";const p={},e=t(`<h1 id="状态模式" tabindex="-1"><a class="header-anchor" href="#状态模式"><span>状态模式</span></a></h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想"><span>核心思想</span></a></h2><p>状态模式允许一个对象在其内部状态改变时改变它的行为，使其看上去就像改变了自身所属的类。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例"><span>典型用例</span></a></h2><h3 id="订单管理" tabindex="-1"><a class="header-anchor" href="#订单管理"><span>订单管理</span></a></h3><p>在订单管理系统中，订单会有不同的状态: 新订单、已支付、已发货、已完成、已取消。每个状态会有不同的处理逻辑。</p><p>在这个例子中，每个具体的订单状态类都知道如何处理当前状态并将上下文移至下一状态，这种方式使得添加新的状态或改变状态转换逻辑变得非常容易，因为每个状态的逻辑都封装在自己的类中。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/state/order.ts</span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="状态机管理" tabindex="-1"><a class="header-anchor" href="#状态机管理"><span>状态机管理</span></a></h3><p>当一个对象的行为取决于它的状态，并且它必须在运行时根据状态改变它的行为时，可以使用状态模式。例如，在游戏开发中管理游戏角色的状态（如运行、跳跃、攻击）。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/state/state-machine-management.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 状态接口</span>
<span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
    <span class="token function">handle</span><span class="token punctuation">(</span>context<span class="token operator">:</span> CharacterContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 角色上下文</span>
<span class="token keyword">class</span> <span class="token class-name">CharacterContext</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> state<span class="token operator">:</span> State<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>state<span class="token operator">:</span> State<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">setState</span><span class="token punctuation">(</span>state<span class="token operator">:</span> State<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态：运行</span>
<span class="token keyword">class</span> <span class="token class-name">RunningState</span> <span class="token keyword">implements</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
    <span class="token function">handle</span><span class="token punctuation">(</span>context<span class="token operator">:</span> CharacterContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;角色正在跑步&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 可以根据需要切换到其他状态</span>
        <span class="token comment">// context.setState(new AnotherState());</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态：跳跃</span>
<span class="token keyword">class</span> <span class="token class-name">JumpingState</span> <span class="token keyword">implements</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
    <span class="token function">handle</span><span class="token punctuation">(</span>context<span class="token operator">:</span> CharacterContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;角色正在跳跃&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态：攻击</span>
<span class="token keyword">class</span> <span class="token class-name">AttackingState</span> <span class="token keyword">implements</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
    <span class="token function">handle</span><span class="token punctuation">(</span>context<span class="token operator">:</span> CharacterContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;角色正在攻击&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> character <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CharacterContext</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RunningState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
character<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 角色正在跑步</span>

character<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JumpingState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
character<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 角色正在跳跃</span>

character<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AttackingState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
character<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 角色正在攻击</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="界面控件的状态" tabindex="-1"><a class="header-anchor" href="#界面控件的状态"><span>界面控件的状态</span></a></h3><p>在用户界面设计中，可以使用状态模式来管理控件的不同状态。每个状态（如普通、悬浮、按下、禁用）都可以有自己的行为和外观。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/state/interface-control-state.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 状态接口</span>
<span class="token keyword">interface</span> <span class="token class-name">ButtonState</span> <span class="token punctuation">{</span>
    <span class="token function">click</span><span class="token punctuation">(</span>buttonContext<span class="token operator">:</span> ButtonContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">hover</span><span class="token punctuation">(</span>buttonContext<span class="token operator">:</span> ButtonContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">leave</span><span class="token punctuation">(</span>buttonContext<span class="token operator">:</span> ButtonContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 按钮上下文</span>
<span class="token keyword">class</span> <span class="token class-name">ButtonContext</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> state<span class="token operator">:</span> ButtonState<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>state<span class="token operator">:</span> ButtonState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">setState</span><span class="token punctuation">(</span>state<span class="token operator">:</span> ButtonState<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">按钮状态变为：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>state<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">hover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">hover</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">leave</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">leave</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态：普通</span>
<span class="token keyword">class</span> <span class="token class-name">NormalState</span> <span class="token keyword">implements</span> <span class="token class-name">ButtonState</span> <span class="token punctuation">{</span>
    <span class="token function">click</span><span class="token punctuation">(</span>buttonContext<span class="token operator">:</span> ButtonContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;按钮被点击&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 可以根据需要切换到其他状态</span>
    <span class="token punctuation">}</span>

    <span class="token function">hover</span><span class="token punctuation">(</span>buttonContext<span class="token operator">:</span> ButtonContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        buttonContext<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">HoverState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">leave</span><span class="token punctuation">(</span>buttonContext<span class="token operator">:</span> ButtonContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token comment">// 通常情况下，普通状态下离开不会有特殊行为</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态：悬浮</span>
<span class="token keyword">class</span> <span class="token class-name">HoverState</span> <span class="token keyword">implements</span> <span class="token class-name">ButtonState</span> <span class="token punctuation">{</span>
    <span class="token function">click</span><span class="token punctuation">(</span>buttonContext<span class="token operator">:</span> ButtonContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;按钮被点击（悬浮状态）&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 可以根据需要切换到其他状态</span>
    <span class="token punctuation">}</span>

    <span class="token function">hover</span><span class="token punctuation">(</span>buttonContext<span class="token operator">:</span> ButtonContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token comment">// 悬浮状态下继续悬浮通常不会有特殊行为</span>
    <span class="token punctuation">}</span>

    <span class="token function">leave</span><span class="token punctuation">(</span>buttonContext<span class="token operator">:</span> ButtonContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        buttonContext<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">NormalState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">const</span> button <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ButtonContext</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">NormalState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

button<span class="token punctuation">.</span><span class="token function">hover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 按钮状态变为：HoverState</span>
button<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 按钮被点击（悬浮状态）</span>
button<span class="token punctuation">.</span><span class="token function">leave</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 按钮状态变为：NormalState</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网络连接管理" tabindex="-1"><a class="header-anchor" href="#网络连接管理"><span>网络连接管理</span></a></h3><p>状态模式适合用于管理网络连接的不同状态，如连接、断开、正在连接、连接失败等。每个状态可以有其特定的行为，比如尝试重新连接或显示错误信息。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/state/network-connection-management.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 状态接口</span>
<span class="token keyword">interface</span> <span class="token class-name">ConnectionState</span> <span class="token punctuation">{</span>
    <span class="token function">connect</span><span class="token punctuation">(</span>connectionContext<span class="token operator">:</span> ConnectionContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">disconnect</span><span class="token punctuation">(</span>connectionContext<span class="token operator">:</span> ConnectionContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">fail</span><span class="token punctuation">(</span>connectionContext<span class="token operator">:</span> ConnectionContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 连接上下文</span>
<span class="token keyword">class</span> <span class="token class-name">ConnectionContext</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> state<span class="token operator">:</span> ConnectionState<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>state<span class="token operator">:</span> ConnectionState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">setState</span><span class="token punctuation">(</span>state<span class="token operator">:</span> ConnectionState<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">连接状态变为：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>state<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态：连接</span>
<span class="token keyword">class</span> <span class="token class-name">ConnectedState</span> <span class="token keyword">implements</span> <span class="token class-name">ConnectionState</span> <span class="token punctuation">{</span>
    <span class="token function">connect</span><span class="token punctuation">(</span>connectionContext<span class="token operator">:</span> ConnectionContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;已经连接，无需再次连接&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">disconnect</span><span class="token punctuation">(</span>connectionContext<span class="token operator">:</span> ConnectionContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;断开连接&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionContext<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DisconnectedState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">fail</span><span class="token punctuation">(</span>connectionContext<span class="token operator">:</span> ConnectionContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;连接时发生错误&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionContext<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FailedState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态：断开</span>
<span class="token keyword">class</span> <span class="token class-name">DisconnectedState</span> <span class="token keyword">implements</span> <span class="token class-name">ConnectionState</span> <span class="token punctuation">{</span>
    <span class="token function">connect</span><span class="token punctuation">(</span>connectionContext<span class="token operator">:</span> ConnectionContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;正在连接...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionContext<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConnectingState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">disconnect</span><span class="token punctuation">(</span>connectionContext<span class="token operator">:</span> ConnectionContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;已经断开，无需再次断开&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">fail</span><span class="token punctuation">(</span>connectionContext<span class="token operator">:</span> ConnectionContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;连接失败&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionContext<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FailedState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态：正在连接</span>
<span class="token keyword">class</span> <span class="token class-name">ConnectingState</span> <span class="token keyword">implements</span> <span class="token class-name">ConnectionState</span> <span class="token punctuation">{</span>
    <span class="token function">connect</span><span class="token punctuation">(</span>connectionContext<span class="token operator">:</span> ConnectionContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;已经在连接中...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">disconnect</span><span class="token punctuation">(</span>connectionContext<span class="token operator">:</span> ConnectionContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;连接尚未完成，无法断开&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">fail</span><span class="token punctuation">(</span>connectionContext<span class="token operator">:</span> ConnectionContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;连接失败&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionContext<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FailedState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态：连接失败</span>
<span class="token keyword">class</span> <span class="token class-name">FailedState</span> <span class="token keyword">implements</span> <span class="token class-name">ConnectionState</span> <span class="token punctuation">{</span>
    <span class="token function">connect</span><span class="token punctuation">(</span>connectionContext<span class="token operator">:</span> ConnectionContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;尝试重新连接...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionContext<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConnectingState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">disconnect</span><span class="token punctuation">(</span>connectionContext<span class="token operator">:</span> ConnectionContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;已经断开&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionContext<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DisconnectedState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">fail</span><span class="token punctuation">(</span>connectionContext<span class="token operator">:</span> ConnectionContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;连接失败&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionContext</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DisconnectedState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

connection<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 正在连接...</span>
<span class="token comment">// 假设连接成功</span>
connection<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConnectedState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

connection<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 断开连接</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工作流管理" tabindex="-1"><a class="header-anchor" href="#工作流管理"><span>工作流管理</span></a></h3><p>在工作流或流程控制系统中，状态模式适合于管理不同的工作流状态（如审批、审核、拒绝、完成）。状态模式可以帮助清晰地定义在每个状态下应该执行的操作，以及如何从一个状态转换到另一个状态。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/state/workflow-management.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 工作流状态接口</span>
<span class="token keyword">interface</span> <span class="token class-name">WorkflowState</span> <span class="token punctuation">{</span>
    <span class="token function">approve</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">reject</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">audit</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">complete</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 工作流上下文</span>
<span class="token keyword">class</span> <span class="token class-name">WorkflowContext</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> state<span class="token operator">:</span> WorkflowState<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>state<span class="token operator">:</span> WorkflowState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">初始化工作流，状态为：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>state<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">setState</span><span class="token punctuation">(</span>state<span class="token operator">:</span> WorkflowState<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">工作流状态变为：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>state<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">approve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">approve</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">audit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">audit</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">complete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">complete</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态：审批</span>
<span class="token keyword">class</span> <span class="token class-name">ApprovalState</span> <span class="token keyword">implements</span> <span class="token class-name">WorkflowState</span> <span class="token punctuation">{</span>
    <span class="token function">approve</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;审批通过&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        workflowContext<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AuditState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">reject</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;审批被拒绝&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        workflowContext<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RejectedState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">audit</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;当前状态不支持审核操作&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">complete</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;当前状态不支持完成操作&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态：审核</span>
<span class="token keyword">class</span> <span class="token class-name">AuditState</span> <span class="token keyword">implements</span> <span class="token class-name">WorkflowState</span> <span class="token punctuation">{</span>
    <span class="token function">approve</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;已通过审核&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        workflowContext<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CompletedState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">reject</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;审核被拒绝&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        workflowContext<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RejectedState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">audit</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;正在进行审核&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">complete</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;当前状态不支持完成操作&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态：拒绝</span>
<span class="token keyword">class</span> <span class="token class-name">RejectedState</span> <span class="token keyword">implements</span> <span class="token class-name">WorkflowState</span> <span class="token punctuation">{</span>
    <span class="token function">approve</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;拒绝状态下不能进行审批&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">reject</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;已经是拒绝状态&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">audit</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;拒绝状态下不能进行审核&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">complete</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;拒绝状态下不能标记为完成&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体状态：完成</span>
<span class="token keyword">class</span> <span class="token class-name">CompletedState</span> <span class="token keyword">implements</span> <span class="token class-name">WorkflowState</span> <span class="token punctuation">{</span>
    <span class="token function">approve</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;完成状态下不能进行审批&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">reject</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;完成状态下不能被拒绝&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">audit</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;完成状态下不能进行审核&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">complete</span><span class="token punctuation">(</span>workflowContext<span class="token operator">:</span> WorkflowContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;已经是完成状态&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例使用</span>
<span class="token keyword">const</span> workflow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WorkflowContext</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ApprovalState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
workflow<span class="token punctuation">.</span><span class="token function">approve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 审批通过，进入审核状态</span>
workflow<span class="token punctuation">.</span><span class="token function">approve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 通过审核，进入完成状态</span>
workflow<span class="token punctuation">.</span><span class="token function">complete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 已经是完成状态</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","state.html.vue"]]),d=JSON.parse(`{"path":"/design-pattern/behavioral/state.html","title":"状态模式","lang":"zh-CN","frontmatter":{"description":"状态模式 核心思想 状态模式允许一个对象在其内部状态改变时改变它的行为，使其看上去就像改变了自身所属的类。 典型用例 订单管理 在订单管理系统中，订单会有不同的状态: 新订单、已支付、已发货、已完成、已取消。每个状态会有不同的处理逻辑。 在这个例子中，每个具体的订单状态类都知道如何处理当前状态并将上下文移至下一状态，这种方式使得添加新的状态或改变状态转...","head":[["meta",{"property":"og:url","content":"https://guoxicheng.top/design-pattern/behavioral/state.html"}],["meta",{"property":"og:site_name","content":"Guo's Page"}],["meta",{"property":"og:title","content":"状态模式"}],["meta",{"property":"og:description","content":"状态模式 核心思想 状态模式允许一个对象在其内部状态改变时改变它的行为，使其看上去就像改变了自身所属的类。 典型用例 订单管理 在订单管理系统中，订单会有不同的状态: 新订单、已支付、已发货、已完成、已取消。每个状态会有不同的处理逻辑。 在这个例子中，每个具体的订单状态类都知道如何处理当前状态并将上下文移至下一状态，这种方式使得添加新的状态或改变状态转..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-26T14:39:29.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-26T14:39:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"状态模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-26T14:39:29.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"核心思想","slug":"核心思想","link":"#核心思想","children":[]},{"level":2,"title":"典型用例","slug":"典型用例","link":"#典型用例","children":[{"level":3,"title":"订单管理","slug":"订单管理","link":"#订单管理","children":[]},{"level":3,"title":"状态机管理","slug":"状态机管理","link":"#状态机管理","children":[]},{"level":3,"title":"界面控件的状态","slug":"界面控件的状态","link":"#界面控件的状态","children":[]},{"level":3,"title":"网络连接管理","slug":"网络连接管理","link":"#网络连接管理","children":[]},{"level":3,"title":"工作流管理","slug":"工作流管理","link":"#工作流管理","children":[]}]}],"git":{"createdTime":1698890691000,"updatedTime":1701009569000},"readingTime":{"minutes":1.77,"words":532},"filePathRelative":"design-pattern/behavioral/state.md","localizedDate":"2023年11月2日","autoDesc":true}`);export{r as comp,d as data};
