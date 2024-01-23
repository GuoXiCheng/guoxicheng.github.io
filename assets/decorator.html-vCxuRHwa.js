import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-FRABKYep.js";const p={},e=t(`<h1 id="装饰模式" tabindex="-1"><a class="header-anchor" href="#装饰模式" aria-hidden="true">#</a> 装饰模式</h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>装饰模式允许动态的向一个对象添加额外的功能，而不改变其结构。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="数据流增强" tabindex="-1"><a class="header-anchor" href="#数据流增强" aria-hidden="true">#</a> 数据流增强</h3><p>在处理数据流时，如读写文件或网络数据流，装饰模式可以用来动态地添加额外的功能，例如数据压缩、加密、编码转换等。</p><p>在这个例子中，具体装饰者类分别添加了加密和压缩的功能，可以灵活的组合装饰者以提供不同的功能组合。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/decorator/data-enhancement.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 定义一个数据流接口作为所有具体数据流和装饰者的共同接口</span>
<span class="token keyword">interface</span> <span class="token class-name">DataStream</span> <span class="token punctuation">{</span>
    <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token function">write</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建具体的数据流类</span>
<span class="token keyword">class</span> <span class="token class-name">FileDataStream</span> <span class="token keyword">implements</span> <span class="token class-name">DataStream</span> <span class="token punctuation">{</span>
    <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token comment">// 从文件读取数据</span>
        <span class="token keyword">return</span> <span class="token string">&quot;data from file&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">write</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token comment">// 向文件写入数据</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Writing </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> to file</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建装饰者基类</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">DataStreamDecorator</span> <span class="token keyword">implements</span> <span class="token class-name">DataStream</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> wrappedStream<span class="token operator">:</span> DataStream<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>wrappedStream<span class="token operator">:</span> DataStream<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>wrappedStream <span class="token operator">=</span> wrappedStream<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>wrappedStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">write</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>wrappedStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建具体的装饰者类</span>
<span class="token keyword">class</span> <span class="token class-name">EncryptionDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">DataStreamDecorator</span> <span class="token punctuation">{</span>
    <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>wrappedStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 解密数据</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">decrypted(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">write</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token comment">// 加密数据</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>wrappedStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">encrypted(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CompressionDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">DataStreamDecorator</span> <span class="token punctuation">{</span>
    <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>wrappedStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 解压缩数据</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">decompressed(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">write</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token comment">// 压缩数据</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>wrappedStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">compressed(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> fileStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileDataStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> encryptedStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EncryptionDecorator</span><span class="token punctuation">(</span>fileStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> compressedAndEncryptedStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CompressionDecorator</span><span class="token punctuation">(</span>encryptedStream<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 压缩并加密数据，然后写入文件</span>
compressedAndEncryptedStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">// 从文件读取数据，解密并解压缩</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>compressedAndEncryptedStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户界面组件装饰" tabindex="-1"><a class="header-anchor" href="#用户界面组件装饰" aria-hidden="true">#</a> 用户界面组件装饰</h3><p>在图形用户界面框架中，装饰模式可以用于动态地添加或修改界面元素地行为或外观，如添加滚动条、边框或阴影效果。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/decorator/ui-component-decoration.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">GUIComponent</span> <span class="token punctuation">{</span>
    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TextBox</span> <span class="token keyword">implements</span> <span class="token class-name">GUIComponent</span> <span class="token punctuation">{</span>
    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Drawing a text box&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">implements</span> <span class="token class-name">GUIComponent</span> <span class="token punctuation">{</span>
    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Drawing a button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">GUIComponentDecorator</span> <span class="token keyword">implements</span> <span class="token class-name">GUIComponent</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> component<span class="token operator">:</span> GUIComponent<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>component<span class="token operator">:</span> GUIComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>component <span class="token operator">=</span> component<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>component<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ScrollbarDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">GUIComponentDecorator</span> <span class="token punctuation">{</span>
    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Adding a scrollbar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">BorderDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">GUIComponentDecorator</span> <span class="token punctuation">{</span>
    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Adding a border&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ShadowDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">GUIComponentDecorator</span> <span class="token punctuation">{</span>
    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Adding a shadow effect&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> textBox<span class="token operator">:</span> GUIComponent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
textBox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BorderDecorator</span><span class="token punctuation">(</span>textBox<span class="token punctuation">)</span><span class="token punctuation">;</span>
textBox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ShadowDecorator</span><span class="token punctuation">(</span>textBox<span class="token punctuation">)</span><span class="token punctuation">;</span>

textBox<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这将绘制一个有边框和阴影的文本框</span>

<span class="token keyword">let</span> button<span class="token operator">:</span> GUIComponent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
button <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ScrollbarDecorator</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span>

button<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这将绘制一个有滚动条的按钮</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日志记录和监控" tabindex="-1"><a class="header-anchor" href="#日志记录和监控" aria-hidden="true">#</a> 日志记录和监控</h3><p>装饰模式可以为现在系统添加日志记录或监控功能，而不改变原有的代码逻辑。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/decorator/log-recording-and-monitoring.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>
    <span class="token function">performTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Performing a task&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 任务相关的代码 ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">ServiceDecorator</span> <span class="token keyword">implements</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> wrapped<span class="token operator">:</span> Service<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>service<span class="token operator">:</span> Service<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>wrapped <span class="token operator">=</span> service<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">performTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>wrapped<span class="token punctuation">.</span><span class="token function">performTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LoggingDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceDecorator</span> <span class="token punctuation">{</span>
    <span class="token function">performTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Logging: Task is starting&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">performTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Logging: Task has finished&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MonitoringDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceDecorator</span> <span class="token punctuation">{</span>
    <span class="token function">performTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> startTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">performTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> endTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Monitoring: Task took </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>endTime<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> startTime<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> milliseconds</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Service</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LoggingDecorator</span><span class="token punctuation">(</span>service<span class="token punctuation">)</span><span class="token punctuation">;</span>
service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MonitoringDecorator</span><span class="token punctuation">(</span>service<span class="token punctuation">)</span><span class="token punctuation">;</span>

service<span class="token punctuation">.</span><span class="token function">performTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// 这将输出：</span>
<span class="token comment">// Logging: Task is starting</span>
<span class="token comment">// Performing a task</span>
<span class="token comment">// Logging: Task has finished</span>
<span class="token comment">// Monitoring: Task took [执行时间] milliseconds</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="业务规则的扩展" tabindex="-1"><a class="header-anchor" href="#业务规则的扩展" aria-hidden="true">#</a> 业务规则的扩展</h3><p>在企业应用中，装饰模式可以动态地添加或修改业务规则或流程，而不需要修改现有的类。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/decorator/extensions-of-business-rules.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">BusinessProcess</span> <span class="token punctuation">{</span>
    <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Executing standard business process&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 标准业务流程的代码 ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">BusinessProcessDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">BusinessProcess</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> wrapped<span class="token operator">:</span> BusinessProcess<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>businessProcess<span class="token operator">:</span> BusinessProcess<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>wrapped <span class="token operator">=</span> businessProcess<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>wrapped<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">AuditDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">BusinessProcessDecorator</span> <span class="token punctuation">{</span>
    <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Audit: Before execution&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Audit: After execution&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ValidationDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">BusinessProcessDecorator</span> <span class="token punctuation">{</span>
    <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Validation: Before execution&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Validation: Failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
        <span class="token comment">// ... 验证逻辑 ...</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 假设验证总是通过</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> process <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BusinessProcess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
process <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AuditDecorator</span><span class="token punctuation">(</span>process<span class="token punctuation">)</span><span class="token punctuation">;</span>
process <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ValidationDecorator</span><span class="token punctuation">(</span>process<span class="token punctuation">)</span><span class="token punctuation">;</span>

process<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// 输出将包括审计和验证信息，以及执行标准业务流程</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web服务的中间件" tabindex="-1"><a class="header-anchor" href="#web服务的中间件" aria-hidden="true">#</a> Web服务的中间件</h3><p>在Web开发中，装饰模式可以用于添加中间件功能，而不需要改变核心逻辑。中间件是一种常见的用于处理诸如身份验证、错误处理和日志记录等跨切面关注点的机制。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/decorator/middleware.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">WebService</span> <span class="token punctuation">{</span>
    <span class="token function">handleRequest</span><span class="token punctuation">(</span>request<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">BasicWebService</span> <span class="token keyword">implements</span> <span class="token class-name">WebService</span> <span class="token punctuation">{</span>
    <span class="token function">handleRequest</span><span class="token punctuation">(</span>request<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token comment">// 处理请求的核心逻辑</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Response to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>request<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">MiddlewareDecorator</span> <span class="token keyword">implements</span> <span class="token class-name">WebService</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> wrappedService<span class="token operator">:</span> WebService<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>service<span class="token operator">:</span> WebService<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>wrappedService <span class="token operator">=</span> service<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">handleRequest</span><span class="token punctuation">(</span>request<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>wrappedService<span class="token punctuation">.</span><span class="token function">handleRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">AuthenticationMiddleware</span> <span class="token keyword">extends</span> <span class="token class-name">MiddlewareDecorator</span> <span class="token punctuation">{</span>
    <span class="token function">handleRequest</span><span class="token punctuation">(</span>request<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Authentication Middleware: Checking authentication&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 添加身份验证逻辑</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handleRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ErrorHandlingMiddleware</span> <span class="token keyword">extends</span> <span class="token class-name">MiddlewareDecorator</span> <span class="token punctuation">{</span>
    <span class="token function">handleRequest</span><span class="token punctuation">(</span>request<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handleRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;ErrorHandling Middleware: An error occurred&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LoggingMiddleware</span> <span class="token keyword">extends</span> <span class="token class-name">MiddlewareDecorator</span> <span class="token punctuation">{</span>
    <span class="token function">handleRequest</span><span class="token punctuation">(</span>request<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Logging Middleware: Received request </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>request<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handleRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Logging Middleware: Sending response </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>response<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> response<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> service<span class="token operator">:</span> WebService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BasicWebService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AuthenticationMiddleware</span><span class="token punctuation">(</span>service<span class="token punctuation">)</span><span class="token punctuation">;</span>
service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ErrorHandlingMiddleware</span><span class="token punctuation">(</span>service<span class="token punctuation">)</span><span class="token punctuation">;</span>
service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LoggingMiddleware</span><span class="token punctuation">(</span>service<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> response <span class="token operator">=</span> service<span class="token punctuation">.</span><span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token string">&quot;user request&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","decorator.html.vue"]]);export{k as default};
