import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-928a61b2.js";const e={},p=t(`<h1 id="访问者模式" tabindex="-1"><a class="header-anchor" href="#访问者模式" aria-hidden="true">#</a> 访问者模式</h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>访问者模式允许将算法与对象结构分离，以便在不修改已有代码的情况下向现有类层次中添加新的行为。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="保证兼容性和扩展性" tabindex="-1"><a class="header-anchor" href="#保证兼容性和扩展性" aria-hidden="true">#</a> 保证兼容性和扩展性</h3><p>为保证兼容性和扩展性，当需要对一组不同类型的对象执行操作，且这些对象经常添加新类型时，访问者模式允许在不修改现有类的情况下添加新操作。</p><p>在这个例子中，有两种类型的元素和两种类型的访问者。每个访问者都以不同的方式处理不同类型的元素。如果需要添加新的元素类型或新的操作方式，只需添加新的元素类或新的访问者类，而无需修改现有的类。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/visitor/compatibility.ts</span>

<span class="token comment">// 定义元素接口，用于接收访问者</span>
<span class="token keyword">interface</span> <span class="token class-name">MyElement</span> <span class="token punctuation">{</span>
    <span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token operator">:</span> Visitor<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 访问者接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Visitor</span> <span class="token punctuation">{</span>
    <span class="token function">visitConcreteElementA</span><span class="token punctuation">(</span>element<span class="token operator">:</span> ConcreteElementA<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">visitConcreteElementB</span><span class="token punctuation">(</span>element<span class="token operator">:</span> ConcreteElementB<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">// 更多元素的访问方法可以在这里添加</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建具体元素</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteElementA</span> <span class="token keyword">implements</span> <span class="token class-name">MyElement</span> <span class="token punctuation">{</span>
    <span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token operator">:</span> Visitor<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        visitor<span class="token punctuation">.</span><span class="token function">visitConcreteElementA</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">operationA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ConcreteElementA operation.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteElementB</span> <span class="token keyword">implements</span> <span class="token class-name">MyElement</span> <span class="token punctuation">{</span>
    <span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token operator">:</span> Visitor<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        visitor<span class="token punctuation">.</span><span class="token function">visitConcreteElementB</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">operationB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ConcreteElementB operation.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 为不同操作创建具体访问者</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteVisitor1</span> <span class="token keyword">implements</span> <span class="token class-name">Visitor</span> <span class="token punctuation">{</span>
    <span class="token function">visitConcreteElementA</span><span class="token punctuation">(</span>element<span class="token operator">:</span> ConcreteElementA<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ConcreteVisitor1 visiting ConcreteElementA.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        element<span class="token punctuation">.</span><span class="token function">operationA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">visitConcreteElementB</span><span class="token punctuation">(</span>element<span class="token operator">:</span> ConcreteElementB<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ConcreteVisitor1 visiting ConcreteElementB.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        element<span class="token punctuation">.</span><span class="token function">operationB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteVisitor2</span> <span class="token keyword">implements</span> <span class="token class-name">Visitor</span> <span class="token punctuation">{</span>
    <span class="token function">visitConcreteElementA</span><span class="token punctuation">(</span>element<span class="token operator">:</span> ConcreteElementA<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ConcreteVisitor2 visiting ConcreteElementA.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        element<span class="token punctuation">.</span><span class="token function">operationA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">visitConcreteElementB</span><span class="token punctuation">(</span>element<span class="token operator">:</span> ConcreteElementB<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ConcreteVisitor2 visiting ConcreteElementB.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        element<span class="token punctuation">.</span><span class="token function">operationB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> elements<span class="token operator">:</span> MyElement<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">ConcreteElementA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">ConcreteElementB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> visitor1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteVisitor1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> visitor2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteVisitor2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

elements<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>element <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    element<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>visitor1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 每个元素接受 ConcreteVisitor1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

elements<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>element <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    element<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>visitor2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 每个元素接受 ConcreteVisitor2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","visitor.html.vue"]]);export{r as default};
