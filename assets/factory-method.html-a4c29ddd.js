import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as e}from"./app-866cd06e.js";const t={},p=e(`<h1 id="工厂方法模式" tabindex="-1"><a class="header-anchor" href="#工厂方法模式" aria-hidden="true">#</a> 工厂方法模式</h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>工厂方法模式提供一个接口，让这个接口的实现来决定实例化哪个类。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="依赖注入" tabindex="-1"><a class="header-anchor" href="#依赖注入" aria-hidden="true">#</a> 依赖注入</h3><p>当一个类需要创建依赖对象，而又不应该知道具体的类时，可以使用工厂方法模式。例如：在使用日志记录器时，客户端无需知道具体使用哪种日志记录器，而只需与日志工厂接口交互。</p><p>这种方式支持依赖倒置原则，使得高级模块（客户端）不会依赖于低级模块（具体的日志记录器），而是依赖于抽象（日志记录器接口）。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/factory-method/dependency-injection.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 定义一个“产品”接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建具体的产品类</span>
<span class="token keyword">class</span> <span class="token class-name">ConsoleLogger</span> <span class="token keyword">implements</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ConsoleLogger: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">FileLogger</span> <span class="token keyword">implements</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token comment">// 假设这里将消息写入文件</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">FileLogger: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个“工厂”接口，用于创建“产品”</span>
<span class="token keyword">interface</span> <span class="token class-name">LoggerFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Logger<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建具体的工厂类</span>
<span class="token keyword">class</span> <span class="token class-name">ConsoleLoggerFactory</span> <span class="token keyword">implements</span> <span class="token class-name">LoggerFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Logger <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ConsoleLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">FileLoggerFactory</span> <span class="token keyword">implements</span> <span class="token class-name">LoggerFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Logger <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">FileLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">clientCode</span><span class="token punctuation">(</span>factory<span class="token operator">:</span> LoggerFactory<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> logger <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;This is a message.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> consoleFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConsoleLoggerFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span>consoleFactory<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用控制台记录器</span>

<span class="token keyword">const</span> fileFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileLoggerFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span>fileFactory<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用文件记录器</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","factory-method.html.vue"]]);export{k as default};
