import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-b563cd4d.js";const p={},e=t(`<h1 id="访问者模式" tabindex="-1"><a class="header-anchor" href="#访问者模式" aria-hidden="true">#</a> 访问者模式</h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>访问者模式允许将算法与对象结构分离，以便在不修改已有代码的情况下向现有类层次中添加新的行为。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="保证兼容性和扩展性" tabindex="-1"><a class="header-anchor" href="#保证兼容性和扩展性" aria-hidden="true">#</a> 保证兼容性和扩展性</h3><p>为保证兼容性和扩展性，当需要对一组不同类型的对象执行操作，且这些对象经常添加新类型时，访问者模式允许在不修改现有类的情况下添加新操作。</p><p>在这个例子中，有两种类型的元素和两种类型的访问者。每个访问者都以不同的方式处理不同类型的元素。如果需要添加新的元素类型或新的操作方式，只需添加新的元素类或新的访问者类，而无需修改现有的类。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/visitor/compatibility.ts</span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解析文档或对象结构" tabindex="-1"><a class="header-anchor" href="#解析文档或对象结构" aria-hidden="true">#</a> 解析文档或对象结构</h3><p>访问者模式适用于操作复杂对象结构，例如：XML文档或语法树。这种模式允许在不修改对象结构的情况下，向其添加新的操作。当需要为元素添加新的操作时，只需添加新的访问者类，而无需修改现有的元素类。这种模式特别适合于对象结构经常变化，但操作相对固定的场景。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/visitor/parse-document-or-object-structure.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">MyElement</span> <span class="token punctuation">{</span>
    <span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token operator">:</span> Visitor<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">XMLNode</span> <span class="token keyword">implements</span> <span class="token class-name">MyElement</span> <span class="token punctuation">{</span>
    <span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token operator">:</span> Visitor<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        visitor<span class="token punctuation">.</span><span class="token function">visitXMLNode</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// XMLNode 特有的方法</span>
    <span class="token function">getTagName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;XML Tag&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">JSONNode</span> <span class="token keyword">implements</span> <span class="token class-name">MyElement</span> <span class="token punctuation">{</span>
    <span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token operator">:</span> Visitor<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        visitor<span class="token punctuation">.</span><span class="token function">visitJSONNode</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// JSONNode 特有的方法</span>
    <span class="token function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;JSON Key&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Visitor</span> <span class="token punctuation">{</span>
    <span class="token function">visitXMLNode</span><span class="token punctuation">(</span>node<span class="token operator">:</span> XMLNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">visitJSONNode</span><span class="token punctuation">(</span>node<span class="token operator">:</span> JSONNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SyntaxChecker</span> <span class="token keyword">implements</span> <span class="token class-name">Visitor</span> <span class="token punctuation">{</span>
    <span class="token function">visitXMLNode</span><span class="token punctuation">(</span>node<span class="token operator">:</span> XMLNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Checking syntax for XMLNode with tag: &quot;</span> <span class="token operator">+</span> node<span class="token punctuation">.</span><span class="token function">getTagName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">visitJSONNode</span><span class="token punctuation">(</span>node<span class="token operator">:</span> JSONNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Checking syntax for JSONNode with key: &quot;</span> <span class="token operator">+</span> node<span class="token punctuation">.</span><span class="token function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Renderer</span> <span class="token keyword">implements</span> <span class="token class-name">Visitor</span> <span class="token punctuation">{</span>
    <span class="token function">visitXMLNode</span><span class="token punctuation">(</span>node<span class="token operator">:</span> XMLNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering XMLNode with tag: &quot;</span> <span class="token operator">+</span> node<span class="token punctuation">.</span><span class="token function">getTagName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">visitJSONNode</span><span class="token punctuation">(</span>node<span class="token operator">:</span> JSONNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering JSONNode with key: &quot;</span> <span class="token operator">+</span> node<span class="token punctuation">.</span><span class="token function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> xmlNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> jsonNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSONNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> syntaxChecker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SyntaxChecker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Renderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

xmlNode<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>syntaxChecker<span class="token punctuation">)</span><span class="token punctuation">;</span>
jsonNode<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>renderer<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="报告和统计" tabindex="-1"><a class="header-anchor" href="#报告和统计" aria-hidden="true">#</a> 报告和统计</h3><p>访问者模式允许在不改变对象的情况下添加新的报告功能，适用于需要从复杂对象集合中生成各种报告或统计信息。例如：不同的访问者可以用于计算总销售额、or平均值或其他统计数据。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/visitor/reporting-and-statistics.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">SalesRecord</span> <span class="token punctuation">{</span>
    <span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token operator">:</span> Visitor<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">getAmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteSalesRecord</span> <span class="token keyword">implements</span> <span class="token class-name">SalesRecord</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> amount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token operator">:</span> Visitor<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        visitor<span class="token punctuation">.</span><span class="token function">visitSalesRecord</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">getAmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>amount<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Visitor</span> <span class="token punctuation">{</span>
    <span class="token function">visitSalesRecord</span><span class="token punctuation">(</span>record<span class="token operator">:</span> SalesRecord<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TotalSalesVisitor</span> <span class="token keyword">implements</span> <span class="token class-name">Visitor</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token function">visitSalesRecord</span><span class="token punctuation">(</span>record<span class="token operator">:</span> SalesRecord<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>total <span class="token operator">+=</span> record<span class="token punctuation">.</span><span class="token function">getAmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>total<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">AverageSalesVisitor</span> <span class="token keyword">implements</span> <span class="token class-name">Visitor</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token function">visitSalesRecord</span><span class="token punctuation">(</span>record<span class="token operator">:</span> SalesRecord<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>total <span class="token operator">+=</span> record<span class="token punctuation">.</span><span class="token function">getAmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">getAverage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>total <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> records <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">ConcreteSalesRecord</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">ConcreteSalesRecord</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">ConcreteSalesRecord</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> totalSalesVisitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TotalSalesVisitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> averageSalesVisitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AverageSalesVisitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

records<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>record <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    record<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>totalSalesVisitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    record<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>averageSalesVisitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Total Sales: &quot;</span> <span class="token operator">+</span> totalSalesVisitor<span class="token punctuation">.</span><span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Average Sales: &quot;</span> <span class="token operator">+</span> averageSalesVisitor<span class="token punctuation">.</span><span class="token function">getAverage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作用户界面组件" tabindex="-1"><a class="header-anchor" href="#操作用户界面组件" aria-hidden="true">#</a> 操作用户界面组件</h3><p>访问者模式可以在用户界面组件上执行不同的操作，例如：布局、绘制和事件处理。这种模式允许在不修改组件类的情况下，为组件添加新的操作。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/visitor/user-interface-operation.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">GUIComponent</span> <span class="token punctuation">{</span>
    <span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token operator">:</span> GUIVisitor<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">implements</span> <span class="token class-name">GUIComponent</span> <span class="token punctuation">{</span>
    <span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token operator">:</span> GUIVisitor<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        visitor<span class="token punctuation">.</span><span class="token function">visitButton</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Button 特有的方法</span>
    <span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Button clicked&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TextBox</span> <span class="token keyword">implements</span> <span class="token class-name">GUIComponent</span> <span class="token punctuation">{</span>
    <span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token operator">:</span> GUIVisitor<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        visitor<span class="token punctuation">.</span><span class="token function">visitTextBox</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// TextBox 特有的方法</span>
    <span class="token function">setText</span><span class="token punctuation">(</span>text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Text set in TextBox: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>text<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">GUIVisitor</span> <span class="token punctuation">{</span>
    <span class="token function">visitButton</span><span class="token punctuation">(</span>button<span class="token operator">:</span> Button<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">visitTextBox</span><span class="token punctuation">(</span>textBox<span class="token operator">:</span> TextBox<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LayoutVisitor</span> <span class="token keyword">implements</span> <span class="token class-name">GUIVisitor</span> <span class="token punctuation">{</span>
    <span class="token function">visitButton</span><span class="token punctuation">(</span>button<span class="token operator">:</span> Button<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Laying out button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">visitTextBox</span><span class="token punctuation">(</span>textBox<span class="token operator">:</span> TextBox<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Laying out text box&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">RenderVisitor</span> <span class="token keyword">implements</span> <span class="token class-name">GUIVisitor</span> <span class="token punctuation">{</span>
    <span class="token function">visitButton</span><span class="token punctuation">(</span>button<span class="token operator">:</span> Button<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">visitTextBox</span><span class="token punctuation">(</span>textBox<span class="token operator">:</span> TextBox<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering text box&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">EventHandlingVisitor</span> <span class="token keyword">implements</span> <span class="token class-name">GUIVisitor</span> <span class="token punctuation">{</span>
    <span class="token function">visitButton</span><span class="token punctuation">(</span>button<span class="token operator">:</span> Button<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        button<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Handling button click event&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">visitTextBox</span><span class="token punctuation">(</span>textBox<span class="token operator">:</span> TextBox<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        textBox<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Handling text box text change event&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> button <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> textBox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> layoutVisitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LayoutVisitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> renderVisitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RenderVisitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> eventHandlingVisitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventHandlingVisitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

button<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>layoutVisitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
button<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>renderVisitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
button<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>eventHandlingVisitor<span class="token punctuation">)</span><span class="token punctuation">;</span>

textBox<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>layoutVisitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
textBox<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>renderVisitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
textBox<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>eventHandlingVisitor<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="序列化和反序列化" tabindex="-1"><a class="header-anchor" href="#序列化和反序列化" aria-hidden="true">#</a> 序列化和反序列化</h3><p>访问者模式允许将序列化和反序列化逻辑从对象本身分离，从而使对象类保持简洁且专注于其主要职责。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/visitor/serialization-and-deserialization.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">SerializableObject</span> <span class="token punctuation">{</span>
    <span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token operator">:</span> SerializationVisitor<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">SerializableObject</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token keyword">public</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token operator">:</span> SerializationVisitor<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> visitor<span class="token punctuation">.</span><span class="token function">visitPerson</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Address</span> <span class="token keyword">implements</span> <span class="token class-name">SerializableObject</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> street<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token keyword">public</span> city<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token operator">:</span> SerializationVisitor<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> visitor<span class="token punctuation">.</span><span class="token function">visitAddress</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SerializationVisitor</span> <span class="token punctuation">{</span>
    <span class="token function">visitPerson</span><span class="token punctuation">(</span>person<span class="token operator">:</span> Person<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token function">visitAddress</span><span class="token punctuation">(</span>address<span class="token operator">:</span> Address<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">JSONSerializationVisitor</span> <span class="token keyword">implements</span> <span class="token class-name">SerializationVisitor</span> <span class="token punctuation">{</span>
    <span class="token function">visitPerson</span><span class="token punctuation">(</span>person<span class="token operator">:</span> Person<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token operator">:</span> person<span class="token punctuation">.</span>name<span class="token punctuation">,</span> age<span class="token operator">:</span> person<span class="token punctuation">.</span>age<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">visitAddress</span><span class="token punctuation">(</span>address<span class="token operator">:</span> Address<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>street<span class="token operator">:</span> address<span class="token punctuation">.</span>street<span class="token punctuation">,</span> city<span class="token operator">:</span> address<span class="token punctuation">.</span>city<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> address <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Address</span><span class="token punctuation">(</span><span class="token string">&quot;123 Main St&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wonderland&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> jsonVisitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSONSerializationVisitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> serializedPerson <span class="token operator">=</span> person<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>jsonVisitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> serializedAddress <span class="token operator">=</span> address<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>jsonVisitor<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Serialized Person: &quot;</span><span class="token punctuation">,</span> serializedPerson<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Serialized Address: &quot;</span><span class="token punctuation">,</span> serializedAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","visitor.html.vue"]]);export{r as default};
