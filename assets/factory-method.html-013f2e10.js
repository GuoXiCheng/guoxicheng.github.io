import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-33d561e6.js";const e={},p=t(`<h1 id="工厂方法模式" tabindex="-1"><a class="header-anchor" href="#工厂方法模式" aria-hidden="true">#</a> 工厂方法模式</h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>工厂方法模式提供一个接口，让这个接口的实现来决定实例化哪个类。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="依赖注入" tabindex="-1"><a class="header-anchor" href="#依赖注入" aria-hidden="true">#</a> 依赖注入</h3><p>当一个类需要创建依赖对象，而又不应该知道具体的类时，可以使用工厂方法模式。例如：在使用日志记录器时，客户端无需知道具体使用哪种日志记录器，而只需与日志工厂接口交互。</p><p>这种方式支持依赖倒置原则，使得高级模块（客户端）不会依赖于低级模块（具体的日志记录器），而是依赖于抽象（日志记录器接口）。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/factory-method/dependency-injection.ts</span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建不同类型对象" tabindex="-1"><a class="header-anchor" href="#创建不同类型对象" aria-hidden="true">#</a> 创建不同类型对象</h3><p>在工厂方法模式中，对象的创建是通过调用一个工厂方法来完成的，而不是直接通过调用构造函数。这个模式特别适用于情况，当你有一组类似的对象，但它们在一些细节上有所不同，或者你需要根据不同的情境来创建不同的对象实例。</p><p>在这个例子中，开发跨平台应用时可能需要根据不同的操作系统创建不同的UI元素，具体工厂用以返回特定操作系统的UI元素，客户端代码接收一个工厂对象并使用它来创建UI元素，这样，UI元素的创建就与特定的类实现解耦了，使得添加新的UI元素或支持新的操作系统变得更容易。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/factory-method/create-different-type-objects.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 产品接口</span>
<span class="token keyword">interface</span> <span class="token class-name">UIElement</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品类</span>
<span class="token keyword">class</span> <span class="token class-name">WindowsButton</span> <span class="token keyword">implements</span> <span class="token class-name">UIElement</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering a Windows style button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacOSButton</span> <span class="token keyword">implements</span> <span class="token class-name">UIElement</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering a MacOS style button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LinuxButton</span> <span class="token keyword">implements</span> <span class="token class-name">UIElement</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering a Linux style button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 工厂接口</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">UIFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> UIElement<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂类</span>
<span class="token keyword">class</span> <span class="token class-name">WindowsFactory</span> <span class="token keyword">extends</span> <span class="token class-name">UIFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> UIElement <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WindowsButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacOSFactory</span> <span class="token keyword">extends</span> <span class="token class-name">UIFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> UIElement <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MacOSButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LinuxFactory</span> <span class="token keyword">extends</span> <span class="token class-name">UIFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> UIElement <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">LinuxButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用工厂方法</span>
<span class="token keyword">function</span> <span class="token function">clientCode</span><span class="token punctuation">(</span>factory<span class="token operator">:</span> UIFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> button <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    button<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 根据不同的操作系统创建不同的UI元素</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WindowsFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MacOSFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LinuxFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展类库或框架" tabindex="-1"><a class="header-anchor" href="#扩展类库或框架" aria-hidden="true">#</a> 扩展类库或框架</h3><p>当设计一个框架或库时，可以使用工厂方法来允许用户扩展或修改其标准组件。用户可以创建扩展了工厂方法的子类来生成自定义的对象。</p><p>在这个例子中，先创建了一个基本的日志类库，用户可以通过继承并重写工厂方法来创建自定义的日志记录器。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/factory-method/extend-framework.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 日志记录器接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 默认日志记录器实现</span>
<span class="token keyword">class</span> <span class="token class-name">ConsoleLogger</span> <span class="token keyword">implements</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[ConsoleLogger] </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 包含工厂方法的类</span>
<span class="token keyword">class</span> <span class="token class-name">LoggerFactory</span> <span class="token punctuation">{</span>
    <span class="token comment">// 工厂方法</span>
    <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Logger <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ConsoleLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 用户自定义日志记录器</span>
<span class="token keyword">class</span> <span class="token class-name">CustomLogger</span> <span class="token keyword">implements</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[CustomLogger] </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 用户扩展的工厂</span>
<span class="token keyword">class</span> <span class="token class-name">CustomLoggerFactory</span> <span class="token keyword">extends</span> <span class="token class-name">LoggerFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Logger <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CustomLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码</span>
<span class="token keyword">function</span> <span class="token function">clientCode</span><span class="token punctuation">(</span>factory<span class="token operator">:</span> LoggerFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> logger <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;This is a log message.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用默认日志记录器</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用自定义日志记录器</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CustomLoggerFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="替代子类化" tabindex="-1"><a class="header-anchor" href="#替代子类化" aria-hidden="true">#</a> 替代子类化</h3><p>工厂方法模式是一种在不产生大量子类的情况下实现对象的灵活创建的设计模式。在某些情况下，如果每种不同的行为或变化都通过子类来实现，可能会导致子类数量急剧增加。工厂方法允许子类通过覆盖一个方法来改变创建对象的类型，这样可以避免产生过多的子类。</p><p>假设开发一个游戏应用，其中的角色（如战士、法师、弓箭手）具有不同的武器。如果为每种角色和武器组合创建一个子类，子类的数量会非常多。因此可以创建不同类型的角色，并且每个角色可以使用相应的武器，而不需要为每种角色和武器组合创建单独的子类。这种方法减少了子类的数量，并提高了代码的灵活性和可维护性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/factory-method/alternative-subclassing.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 武器接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Weapon</span> <span class="token punctuation">{</span>
    <span class="token function">useWeapon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体武器类</span>
<span class="token keyword">class</span> <span class="token class-name">Sword</span> <span class="token keyword">implements</span> <span class="token class-name">Weapon</span> <span class="token punctuation">{</span>
    <span class="token function">useWeapon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Swinging a sword&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bow</span> <span class="token keyword">implements</span> <span class="token class-name">Weapon</span> <span class="token punctuation">{</span>
    <span class="token function">useWeapon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Shooting an arrow&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Staff</span> <span class="token keyword">implements</span> <span class="token class-name">Weapon</span> <span class="token punctuation">{</span>
    <span class="token function">useWeapon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Casting a spell&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 角色类，包含工厂方法</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Character</span> <span class="token punctuation">{</span>
    <span class="token comment">// 工厂方法</span>
    <span class="token keyword">abstract</span> <span class="token function">createWeapon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Weapon<span class="token punctuation">;</span>

    <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> weapon <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createWeapon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        weapon<span class="token punctuation">.</span><span class="token function">useWeapon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体角色子类</span>
<span class="token keyword">class</span> <span class="token class-name">Warrior</span> <span class="token keyword">extends</span> <span class="token class-name">Character</span> <span class="token punctuation">{</span>
    <span class="token function">createWeapon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Weapon <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Sword</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Archer</span> <span class="token keyword">extends</span> <span class="token class-name">Character</span> <span class="token punctuation">{</span>
    <span class="token function">createWeapon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Weapon <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Bow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Mage</span> <span class="token keyword">extends</span> <span class="token class-name">Character</span> <span class="token punctuation">{</span>
    <span class="token function">createWeapon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Weapon <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Staff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码</span>
<span class="token keyword">function</span> <span class="token function">clientCode</span><span class="token punctuation">(</span>character<span class="token operator">:</span> Character<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    character<span class="token punctuation">.</span><span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建不同的角色，并使用它们的武器</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Warrior</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Archer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Mage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解耦代码" tabindex="-1"><a class="header-anchor" href="#解耦代码" aria-hidden="true">#</a> 解耦代码</h3><p>工厂方法模式通过定义一个用于创建对象的接口，但让子类决定实例化哪一个类，从而实现解耦。这种模式允许代码在不知道具体类的情况下实例化对象，这样就可以降低类之间的耦合度。</p><p>在这个例子中，程序需要根据不同的配置或环境条件创建不同类型的数据库连接。如果直接在代码中实例化特定类型的数据库连接，那么代码就会与特定的数据库类紧密耦合。使用工厂方法模式，就可以避免这种耦合。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/factory-method/decoupled-code.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 数据库连接接口</span>
<span class="token keyword">interface</span> <span class="token class-name">DatabaseConnection</span> <span class="token punctuation">{</span>
    <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体数据库连接类</span>
<span class="token keyword">class</span> <span class="token class-name">MySQLConnection</span> <span class="token keyword">implements</span> <span class="token class-name">DatabaseConnection</span> <span class="token punctuation">{</span>
    <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Connecting to MySQL database&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SQLiteConnection</span> <span class="token keyword">implements</span> <span class="token class-name">DatabaseConnection</span> <span class="token punctuation">{</span>
    <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Connecting to SQLite database&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PostgreSQLConnection</span> <span class="token keyword">implements</span> <span class="token class-name">DatabaseConnection</span> <span class="token punctuation">{</span>
    <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Connecting to PostgreSQL database&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 数据库连接工厂</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">ConnectionFactory</span> <span class="token punctuation">{</span>
    <span class="token comment">// 工厂方法</span>
    <span class="token keyword">abstract</span> <span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> DatabaseConnection<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂子类</span>
<span class="token keyword">class</span> <span class="token class-name">MySQLConnectionFactory</span> <span class="token keyword">extends</span> <span class="token class-name">ConnectionFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> DatabaseConnection <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MySQLConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SQLiteConnectionFactory</span> <span class="token keyword">extends</span> <span class="token class-name">ConnectionFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> DatabaseConnection <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SQLiteConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PostgreSQLConnectionFactory</span> <span class="token keyword">extends</span> <span class="token class-name">ConnectionFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> DatabaseConnection <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PostgreSQLConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码</span>
<span class="token keyword">function</span> <span class="token function">clientCode</span><span class="token punctuation">(</span>factory<span class="token operator">:</span> ConnectionFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> connection <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    connection<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 根据需要创建不同类型的数据库连接</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MySQLConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SQLiteConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PostgreSQLConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","factory-method.html.vue"]]);export{d as default};
