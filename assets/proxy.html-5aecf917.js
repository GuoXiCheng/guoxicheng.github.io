import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as e}from"./app-b563cd4d.js";const t={},p=e(`<h1 id="代理模式" tabindex="-1"><a class="header-anchor" href="#代理模式" aria-hidden="true">#</a> 代理模式</h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>代理模式允许控制对另一对象的访问。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="保护代理" tabindex="-1"><a class="header-anchor" href="#保护代理" aria-hidden="true">#</a> 保护代理</h3><p>控制对原始对象的访问，用于不同权限的访问控制。保护代理根据访问者的权限决定是否允许访问真实对象。</p><p>在这个例子中，保护代理根据用户角色来决定是否允许访问。这样的设计可以用来在不同层级的应用程序中实现权限控制，而不必修改真实对象的代码。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/proxy/protection-agent.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 定义真实对象和代理的共同接口</span>
<span class="token keyword">interface</span> <span class="token class-name">SensitiveOperation</span> <span class="token punctuation">{</span>
    <span class="token function">performOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建真实对象类</span>
<span class="token keyword">class</span> <span class="token class-name">SensitiveObject</span> <span class="token keyword">implements</span> <span class="token class-name">SensitiveOperation</span> <span class="token punctuation">{</span>
    <span class="token function">performOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Performing a sensitive operation.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建保护代理类</span>
<span class="token keyword">class</span> <span class="token class-name">ProtectedProxy</span> <span class="token keyword">implements</span> <span class="token class-name">SensitiveOperation</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> sensitiveObject<span class="token operator">:</span> SensitiveObject<span class="token punctuation">;</span>
    <span class="token keyword">private</span> hasAccess<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>userRole<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sensitiveObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SensitiveObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>hasAccess <span class="token operator">=</span> userRole <span class="token operator">===</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 假设只有管理员有权限</span>
    <span class="token punctuation">}</span>

    <span class="token function">performOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>hasAccess<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>sensitiveObject<span class="token punctuation">.</span><span class="token function">performOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Access denied. You do not have permission to perform this operation.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> adminProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProtectedProxy</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
adminProxy<span class="token punctuation">.</span><span class="token function">performOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Performing a sensitive operation.</span>

<span class="token keyword">const</span> userProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProtectedProxy</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
userProxy<span class="token punctuation">.</span><span class="token function">performOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Access denied. You do not have permission to perform this operation.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","proxy.html.vue"]]);export{d as default};
