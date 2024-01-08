import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-FEhF658K.js";const t={},i=e(`<h2 id="kotlin-测量代码耗时" tabindex="-1"><a class="header-anchor" href="#kotlin-测量代码耗时" aria-hidden="true">#</a> kotlin 测量代码耗时</h2><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">import</span> kotlin<span class="token punctuation">.</span>system<span class="token punctuation">.</span>measureTimeMillis

<span class="token keyword">val</span> elapsedTime <span class="token operator">=</span> measureTimeMillis <span class="token punctuation">{</span>
    <span class="token comment">// 将您想要测量的代码放在这里</span>
    <span class="token comment">// 例如：</span>
    Thread<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span> <span class="token comment">// 延迟一秒钟</span>
<span class="token punctuation">}</span>

<span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;The code took </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">elapsedTime</span></span><span class="token string"> milliseconds to execute&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[i];function l(c,p){return s(),a("div",null,o)}const d=n(t,[["render",l],["__file","index.html.vue"]]);export{d as default};
