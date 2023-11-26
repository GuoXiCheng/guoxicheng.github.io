import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-595065ff.js";const p={},e=t(`<h1 id="模板方法模式" tabindex="-1"><a class="header-anchor" href="#模板方法模式" aria-hidden="true">#</a> 模板方法模式</h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>模板方法模式允许在基类中定义一个算法框架，并将一些步骤的具体实现延迟到子类中。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="数据处理" tabindex="-1"><a class="header-anchor" href="#数据处理" aria-hidden="true">#</a> 数据处理</h3><p>在处理数据的应用中，通常有一个固定的流程（如读取、解析、处理、输出数据），但是每个步骤的具体实现可能根据数据的不同格式而变化。模板方法可以定义处理流程的骨架，而具体步骤的实现则留给子类。</p><p>在这个例子中，抽象的数据处理基类定义了数据处理流程，不同的子类实现了具体的数据处理步骤。因此，当需要添加新的数据格式支持时，只需要添加一个新的子类并实现具体的步骤即可，而无需修改现有代码。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/template-method/data-processing.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一个抽象类，定义数据处理的模板方法，并声明在模板方法中使用的抽象步骤</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">DataProcessor</span> <span class="token punctuation">{</span>
    <span class="token comment">// 模板方法</span>
    <span class="token keyword">public</span> <span class="token function">processData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">readData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> parsedData <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">parseData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> processedData <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">processDataStep</span><span class="token punctuation">(</span>parsedData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">outputData</span><span class="token punctuation">(</span>processedData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 声明抽象步骤</span>
    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token function">readData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token function">parseData</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token function">processDataStep</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token function">outputData</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 为不同数据格式创建具体的子类，实现抽象步骤</span>
<span class="token keyword">class</span> <span class="token class-name">JSONDataProcessor</span> <span class="token keyword">extends</span> <span class="token class-name">DataProcessor</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token function">readData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token comment">// 读取 JSON 数据</span>
        <span class="token keyword">return</span> <span class="token string">&#39;{&quot;name&quot;: &quot;John&quot;, &quot;age&quot;: 30}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token function">parseData</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
        <span class="token comment">// 解析 JSON 数据</span>
        <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token function">processDataStep</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
        <span class="token comment">// 处理数据</span>
        data<span class="token punctuation">.</span>processed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token function">outputData</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token comment">// 输出数据</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;JSON Data:&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">XMLDataProcessor</span> <span class="token keyword">extends</span> <span class="token class-name">DataProcessor</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token function">readData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token comment">// 读取 XML 数据</span>
        <span class="token keyword">return</span> <span class="token string">&#39;&lt;user&gt;&lt;name&gt;John&lt;/name&gt;&lt;age&gt;30&lt;/age&gt;&lt;/user&gt;&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token function">parseData</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
        <span class="token comment">// 解析 XML 数据</span>
        <span class="token comment">// 实现省略...</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 示例返回值</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token function">processDataStep</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
        <span class="token comment">// 处理数据</span>
        data<span class="token punctuation">.</span>processed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token function">outputData</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token comment">// 输出数据</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;XML Data:&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> jsonDataProcessor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSONDataProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
jsonDataProcessor<span class="token punctuation">.</span><span class="token function">processData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将按照 JSON 数据处理流程执行</span>

<span class="token keyword">const</span> xmlDataProcessor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLDataProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xmlDataProcessor<span class="token punctuation">.</span><span class="token function">processData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将按照 XML 数据处理流程执行</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","template-method.html.vue"]]);export{k as default};
