import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-FRABKYep.js";const t={},p=e(`<h1 id="适配器模式" tabindex="-1"><a class="header-anchor" href="#适配器模式" aria-hidden="true">#</a> 适配器模式</h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>适配器模式负责在一个或多个类之间做接口转换，使得原本不兼容的接口能在一起工作。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="统一不同的接口" tabindex="-1"><a class="header-anchor" href="#统一不同的接口" aria-hidden="true">#</a> 统一不同的接口</h3><p>在处理多个具有不同接口的类时，适配器模式可以用来提供一个统一的接口，使得客户端代码可以以统一的方式与这些类交互。</p><p>在这个例子中，适配器实现了新的接口，但在内部使用了旧的接口实例，使得客户端代码可以通过新接口与旧的接口交互，而无需关心内部的具体实现。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/adapter/unify-interfaces.ts</span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集成第三方库或旧系统" tabindex="-1"><a class="header-anchor" href="#集成第三方库或旧系统" aria-hidden="true">#</a> 集成第三方库或旧系统</h3><p>适配器模式可以用于集成第三方库或旧系统。例如：有一个第三方库或旧系统，它提供了一个特定的接口，但这个接口与当前系统的接口不兼容，可以创建一个适配器来解决这个问题。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/adapter/integrating-legacy-interface.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 当前系统的接口</span>
<span class="token keyword">interface</span> <span class="token class-name">ITarget</span> <span class="token punctuation">{</span>
    <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 第三方库或旧系统的接口</span>
<span class="token keyword">interface</span> <span class="token class-name">IAdaptee</span> <span class="token punctuation">{</span>
    <span class="token function">specificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 第三方库或旧系统的实现</span>
<span class="token keyword">class</span> <span class="token class-name">Adaptee</span> <span class="token keyword">implements</span> <span class="token class-name">IAdaptee</span> <span class="token punctuation">{</span>
    <span class="token function">specificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Specific response from the Adaptee&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 适配器类</span>
<span class="token keyword">class</span> <span class="token class-name">Adapter</span> <span class="token keyword">implements</span> <span class="token class-name">ITarget</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> adaptee<span class="token operator">:</span> IAdaptee<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>adaptee<span class="token operator">:</span> IAdaptee<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>adaptee <span class="token operator">=</span> adaptee<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token comment">// 适配器将 ITarge 接口的调用转换为 IAdaptee 接口的调用</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>adaptee<span class="token punctuation">.</span><span class="token function">specificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Adapter: (TRANSLATED) </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>result<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用示例</span>
<span class="token keyword">const</span> adaptee <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Adaptee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> adapter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Adapter</span><span class="token punctuation">(</span>adaptee<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>adapter<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 适配器使得原本不兼容的接口能够一起工作</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="替换系统组件" tabindex="-1"><a class="header-anchor" href="#替换系统组件" aria-hidden="true">#</a> 替换系统组件</h3><p>适配器模式可以用于替换系统组件，例如：需要替换系统的一个组件，但新组件的接口与旧组件的接口不同。适配器模式可以用于使新组件与现有系统兼容。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/adapter/replacement-system-component.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 旧组件的接口</span>
<span class="token keyword">interface</span> <span class="token class-name">IOldComponent</span> <span class="token punctuation">{</span>
    <span class="token function">oldRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 新组件的接口</span>
<span class="token keyword">interface</span> <span class="token class-name">INewComponent</span> <span class="token punctuation">{</span>
    <span class="token function">newRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 旧组件的实现（将被替换）</span>
<span class="token keyword">class</span> <span class="token class-name">OldComponent</span> <span class="token keyword">implements</span> <span class="token class-name">IOldComponent</span> <span class="token punctuation">{</span>
    <span class="token function">oldRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Response from Old Component&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 新组件的实现</span>
<span class="token keyword">class</span> <span class="token class-name">NewComponent</span> <span class="token keyword">implements</span> <span class="token class-name">INewComponent</span> <span class="token punctuation">{</span>
    <span class="token function">newRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Response from New Component&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 适配器类</span>
<span class="token keyword">class</span> <span class="token class-name">ComponentAdapter</span> <span class="token keyword">implements</span> <span class="token class-name">IOldComponent</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> newComponent<span class="token operator">:</span> INewComponent<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>newComponent<span class="token operator">:</span> INewComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>newComponent <span class="token operator">=</span> newComponent<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">oldRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将旧组件的调用转换为新组件的调用</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>newComponent<span class="token punctuation">.</span><span class="token function">newRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Adapter: (ADAPTED) </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>result<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用示例</span>
<span class="token keyword">const</span> newComponent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NewComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> adapter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ComponentAdapter</span><span class="token punctuation">(</span>newComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>adapter<span class="token punctuation">.</span><span class="token function">oldRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 通过适配器，新组件与旧接口兼容</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="向旧代码增加新功能" tabindex="-1"><a class="header-anchor" href="#向旧代码增加新功能" aria-hidden="true">#</a> 向旧代码增加新功能</h3><p>适配器模式可以在不更改旧代码的基础上，向系统添加新功能。适配器模式可以用来封装新功能，确保它们与旧系统的接口保持一致。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/adapter/add-new-functionality-to-old-code.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 旧系统的接口</span>
<span class="token keyword">interface</span> <span class="token class-name">IOldInterface</span> <span class="token punctuation">{</span>
    <span class="token function">performTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 旧系统的实现</span>
<span class="token keyword">class</span> <span class="token class-name">OldSystem</span> <span class="token keyword">implements</span> <span class="token class-name">IOldInterface</span> <span class="token punctuation">{</span>
    <span class="token function">performTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Performing task in the old way.&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 新功能的类</span>
<span class="token keyword">class</span> <span class="token class-name">NewFeature</span> <span class="token punctuation">{</span>
    <span class="token function">performNewTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Performing task using new feature.&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 适配器类</span>
<span class="token keyword">class</span> <span class="token class-name">NewFeatureAdapter</span> <span class="token keyword">implements</span> <span class="token class-name">IOldInterface</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> newFeature<span class="token operator">:</span> NewFeature<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>newFeature<span class="token operator">:</span> NewFeature<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>newFeature <span class="token operator">=</span> newFeature<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">performTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用新功能来执行任务</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>newFeature<span class="token punctuation">.</span><span class="token function">performNewTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用示例</span>
<span class="token keyword">const</span> oldSystem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OldSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oldSystem<span class="token punctuation">.</span><span class="token function">performTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用旧系统</span>

<span class="token keyword">const</span> newFeature <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NewFeature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> adapter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NewFeatureAdapter</span><span class="token punctuation">(</span>newFeature<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>adapter<span class="token punctuation">.</span><span class="token function">performTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用适配器来使用新功能</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api接口适配" tabindex="-1"><a class="header-anchor" href="#api接口适配" aria-hidden="true">#</a> API接口适配</h3><p>适配器模式可以在不同版本的API之间进行适配。例如：一个老旧系统需要与新版本API对接，适配器模式可以用于兼容新旧接口。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/adapter/api-interface-adaptation.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 旧版本 API 的接口</span>
<span class="token keyword">interface</span> <span class="token class-name">IOldAPI</span> <span class="token punctuation">{</span>
    <span class="token function">requestOld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 新版本 API 的接口</span>
<span class="token keyword">interface</span> <span class="token class-name">INewAPI</span> <span class="token punctuation">{</span>
    <span class="token function">requestNew</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 新版本 API 的实现</span>
<span class="token keyword">class</span> <span class="token class-name">NewAPI</span> <span class="token keyword">implements</span> <span class="token class-name">INewAPI</span> <span class="token punctuation">{</span>
    <span class="token function">requestNew</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Response from New API&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 适配器类</span>
<span class="token keyword">class</span> <span class="token class-name">APIAdapter</span> <span class="token keyword">implements</span> <span class="token class-name">IOldAPI</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> newApi<span class="token operator">:</span> INewAPI<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>newApi<span class="token operator">:</span> INewAPI<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>newApi <span class="token operator">=</span> newApi<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">requestOld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将旧 API 的调用适配为新 API 的调用</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Adapter: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>newApi<span class="token punctuation">.</span><span class="token function">requestNew</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用示例</span>
<span class="token keyword">const</span> newApi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NewAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> adapter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">APIAdapter</span><span class="token punctuation">(</span>newApi<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>adapter<span class="token punctuation">.</span><span class="token function">requestOld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 通过适配器使用新 API</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","adapter.html.vue"]]);export{r as default};
