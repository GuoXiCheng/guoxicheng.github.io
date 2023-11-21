import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-866cd06e.js";const p={},e=t(`<h1 id="责任链模式" tabindex="-1"><a class="header-anchor" href="#责任链模式" aria-hidden="true">#</a> 责任链模式</h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>责任链模式允许将请求沿着一条链进行传递，直到有一个对象处理它为止。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="审批流程" tabindex="-1"><a class="header-anchor" href="#审批流程" aria-hidden="true">#</a> 审批流程</h3><p>在审批业务流程中，每个审批者可以决定批准、拒绝或将审批传递给更高级别的管理者。</p><p>在这个例子中，每个处理者都有自己的处理逻辑和批准权限。请求在责任链上逐级传递，直到找到合适的处理者。通过这种方式，可以灵活地增加、移除或重新排列处理者，而无需修改主要的业务逻辑。这样的设计使得审批流程更加灵活和可扩展。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/chain-of-responsibility/approval-process.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 定义处理者接口，声明处理请求的方法</span>
<span class="token keyword">interface</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>
    <span class="token function">setNext</span><span class="token punctuation">(</span>handler<span class="token operator">:</span> Handler<span class="token punctuation">)</span><span class="token operator">:</span> Handler<span class="token punctuation">;</span>
    <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> MyRequest<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyRequest</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token keyword">public</span> amount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建具体处理者，每个处理者决定是否处理请求或将其传递给下一个处理者</span>
<span class="token keyword">class</span> <span class="token class-name">AbstractHandler</span> <span class="token keyword">implements</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> nextHandler<span class="token operator">!</span><span class="token operator">:</span> Handler<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">setNext</span><span class="token punctuation">(</span>handler<span class="token operator">:</span> Handler<span class="token punctuation">)</span><span class="token operator">:</span> Handler <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler <span class="token operator">=</span> handler<span class="token punctuation">;</span>
        <span class="token keyword">return</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> MyRequest<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Manager</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> MyRequest<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;Leave&#39;</span> <span class="token operator">&amp;&amp;</span> request<span class="token punctuation">.</span>amount <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Manager will approve </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>request<span class="token punctuation">.</span>amount<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> day(s) leave</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Director</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> MyRequest<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;Leave&#39;</span> <span class="token operator">&amp;&amp;</span> request<span class="token punctuation">.</span>amount <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Director will approve </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>request<span class="token punctuation">.</span>amount<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> day(s) leave</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">CEO</span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> MyRequest<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token comment">// CEO can approve any amount of leave</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">CEO will approve </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>request<span class="token punctuation">.</span>amount<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> day(s) leave</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> manager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Manager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> director <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Director</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ceo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">CEO</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

manager<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>director<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>ceo<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyRequest</span><span class="token punctuation">(</span><span class="token string">&#39;Leave&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
manager<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Director will approve 15 day(s) leave</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","chain-of-responsibility.html.vue"]]);export{k as default};