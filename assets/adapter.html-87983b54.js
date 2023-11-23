import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as e}from"./app-928a61b2.js";const t={},p=e(`<h1 id="适配器模式" tabindex="-1"><a class="header-anchor" href="#适配器模式" aria-hidden="true">#</a> 适配器模式</h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>适配器模式负责在一个或多个类之间做接口转换，使得原本不兼容的接口能在一起工作。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="统一不同的接口" tabindex="-1"><a class="header-anchor" href="#统一不同的接口" aria-hidden="true">#</a> 统一不同的接口</h3><p>在处理多个具有不同接口的类时，适配器模式可以用来提供一个统一的接口，使得客户端代码可以以统一的方式与这些类交互。</p><p>在这个例子中，适配器实现了新的接口，但在内部使用了旧的接口实例，使得客户端代码可以通过新接口与旧的接口交互，而无需关心内部的具体实现。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/adapter/unify-interfaces.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 第一个接口和类</span>
<span class="token keyword">interface</span> <span class="token class-name">OldInterface</span> <span class="token punctuation">{</span>
    <span class="token function">specificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">OldClass</span> <span class="token keyword">implements</span> <span class="token class-name">OldInterface</span> <span class="token punctuation">{</span>
    <span class="token function">specificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Response from OldClass&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 第二个接口和类</span>
<span class="token keyword">interface</span> <span class="token class-name">NewInterface</span> <span class="token punctuation">{</span>
    <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">NewClass</span> <span class="token keyword">implements</span> <span class="token class-name">NewInterface</span> <span class="token punctuation">{</span>
    <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Response from NewClass&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建适配器，将旧的接口适配到新的接口</span>
<span class="token keyword">class</span> <span class="token class-name">Adapter</span> <span class="token keyword">implements</span> <span class="token class-name">NewInterface</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> oldInstance<span class="token operator">:</span> OldInterface<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>oldInstance<span class="token operator">:</span> OldInterface<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>oldInstance <span class="token operator">=</span> oldInstance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用 OldInterface 的方法，并可能进行一些其他操作</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>oldInstance<span class="token punctuation">.</span><span class="token function">specificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> oldClassInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OldClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> adapter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Adapter</span><span class="token punctuation">(</span>oldClassInstance<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>adapter<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将输出 &quot;Response from OldClass&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","adapter.html.vue"]]);export{r as default};
