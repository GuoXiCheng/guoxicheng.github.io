import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as p}from"./app-0a5cd555.js";const e={},t=p(`<h1 id="工厂方法模式" tabindex="-1"><a class="header-anchor" href="#工厂方法模式" aria-hidden="true">#</a> 工厂方法模式</h1><h2 id="真实世界类比" tabindex="-1"><a class="header-anchor" href="#真实世界类比" aria-hidden="true">#</a> 真实世界类比</h2><p>假设你要去菜鸟驿站寄快递，你可以选择京东快递、顺丰快递、中通快递等，并且这个菜鸟驿站后续可能还会有其他快递公司入驻。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ExpressService</span> <span class="token punctuation">{</span>
    <span class="token function">delivery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">JDExpress</span> <span class="token keyword">implements</span> <span class="token class-name">ExpressService</span> <span class="token punctuation">{</span>
    <span class="token function">delivery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;京东快递&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SFExpress</span> <span class="token keyword">implements</span> <span class="token class-name">ExpressService</span> <span class="token punctuation">{</span>
    <span class="token function">delivery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;顺丰快递&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ZTExpress</span> <span class="token keyword">implements</span> <span class="token class-name">ExpressService</span> <span class="token punctuation">{</span>
    <span class="token function">delivery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;中通快递&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">CainiaoYizhanExpressService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token function">createExpress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ExpressService<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">expressDelivery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createExpress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">我要寄出: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>express<span class="token punctuation">.</span><span class="token function">delivery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">JDExpressService</span> <span class="token keyword">extends</span> <span class="token class-name">CainiaoYizhanExpressService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">createExpress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ExpressService <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">JDExpress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SFExpressService</span> <span class="token keyword">extends</span> <span class="token class-name">CainiaoYizhanExpressService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">createExpress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ExpressService <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SFExpress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ZTExpressService</span> <span class="token keyword">extends</span> <span class="token class-name">CainiaoYizhanExpressService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">createExpress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ExpressService <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ZTExpress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">clientNode</span><span class="token punctuation">(</span>express<span class="token operator">:</span> <span class="token string">&quot;京东&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;顺丰&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;中通&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> expressService<span class="token operator">:</span> CainiaoYizhanExpressService<span class="token punctuation">;</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>express<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&quot;京东&quot;</span><span class="token operator">:</span>
            expressService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JDExpressService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&quot;顺丰&quot;</span><span class="token operator">:</span>
            expressService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SFExpressService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&quot;中通&quot;</span><span class="token operator">:</span>
            expressService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZTExpressService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    expressService<span class="token punctuation">.</span><span class="token function">expressDelivery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">clientNode</span><span class="token punctuation">(</span><span class="token string">&quot;京东&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="业务场景类比" tabindex="-1"><a class="header-anchor" href="#业务场景类比" aria-hidden="true">#</a> 业务场景类比</h2><p>在使用ORM框架开发时，可能会创建多种数据库连接，例如：使用sqlite运行测试，在开发中使用mysql运行，在生产环境为了更好的性能而选择oracle。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">DBOption</span> <span class="token punctuation">{</span>
    <span class="token function">getOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SqliteOption</span> <span class="token keyword">implements</span> <span class="token class-name">DBOption</span> <span class="token punctuation">{</span>
    <span class="token function">getOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;sqlite连线配置&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MysqlOption</span> <span class="token keyword">implements</span> <span class="token class-name">DBOption</span> <span class="token punctuation">{</span>
    <span class="token function">getOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;mysql连线配置&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">OracleOption</span> <span class="token keyword">implements</span> <span class="token class-name">DBOption</span> <span class="token punctuation">{</span>
    <span class="token function">getOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;oracle连线配置&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">DBConnection</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token function">createOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> DBOption<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">使用</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>options<span class="token punctuation">.</span><span class="token function">getOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">连接数据库</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SqliteConnection</span> <span class="token keyword">extends</span> <span class="token class-name">DBConnection</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">createOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> DBOption <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SqliteOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MysqlConnection</span> <span class="token keyword">extends</span> <span class="token class-name">DBConnection</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">createOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> DBOption <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MysqlOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">OracleConnection</span> <span class="token keyword">extends</span> <span class="token class-name">DBConnection</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">createOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> DBOption <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">OracleOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">clientNode</span><span class="token punctuation">(</span>env<span class="token operator">:</span> <span class="token string">&quot;DEV&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;QAS&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;PRD&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> connection<span class="token operator">:</span> DBConnection<span class="token punctuation">;</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>env<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&quot;DEV&quot;</span><span class="token operator">:</span>
            connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqliteConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&quot;QAS&quot;</span><span class="token operator">:</span>
            connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MysqlConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&quot;PRD&quot;</span><span class="token operator">:</span>
            connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OracleConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    connection<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">clientNode</span><span class="token punctuation">(</span><span class="token string">&quot;DEV&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">clientNode</span><span class="token punctuation">(</span><span class="token string">&quot;QAS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">clientNode</span><span class="token punctuation">(</span><span class="token string">&quot;PRD&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","factory-method.html.vue"]]);export{r as default};
