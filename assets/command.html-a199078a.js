import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-866cd06e.js";const p={},o=t(`<h1 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式" aria-hidden="true">#</a> 命令模式</h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>命令模式将请求封装为一个对象，将发出者和处理者解耦，并能延迟请求执行或放入队列中，实现可撤销操作。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="撤销重做" tabindex="-1"><a class="header-anchor" href="#撤销重做" aria-hidden="true">#</a> 撤销重做</h3><p>命令模式可以用于实现撤销重做功能，每个执行的操作都是一个命令对象，可以被存储和恢复。</p><p>在这个例子中，创建了一个简单的文本编辑器和一些命令来修改文本。CommandInvoker 类负责执行命令并维护历史记录，以便支持撤销和重做功能。这样可以灵活地添加新的命令类型，同时保持编辑器类的简洁性和命令的独立性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/command/undo-redo.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 定义命令接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
    <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建接收者执行与请求相关操作</span>
<span class="token keyword">class</span> <span class="token class-name">TextEditor</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> content<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

    <span class="token function">append</span><span class="token punctuation">(</span>text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>content <span class="token operator">+=</span> text<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>content <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>content<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>content<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建具体命令类，每个命令类将执行一个操作并保存其状态以便撤销。</span>
<span class="token keyword">class</span> <span class="token class-name">AppendCommand</span> <span class="token keyword">implements</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> editor<span class="token operator">:</span> TextEditor<span class="token punctuation">;</span>
    <span class="token keyword">private</span> text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>editor<span class="token operator">:</span> TextEditor<span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor <span class="token operator">=</span> editor<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> text<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>text<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DeleteCommand</span> <span class="token keyword">implements</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> editor<span class="token operator">:</span> TextEditor<span class="token punctuation">;</span>
    <span class="token keyword">private</span> deleted<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>editor<span class="token operator">:</span> TextEditor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor <span class="token operator">=</span> editor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>deleted <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>deleted<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建一个调用者类，用于执行命令。</span>
<span class="token comment">// 并创建历史记录用于管理撤销和重做操作。</span>
<span class="token keyword">class</span> <span class="token class-name">CommandInvoker</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> history<span class="token operator">:</span> Command<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> undoneCommands<span class="token operator">:</span> Command<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token function">executeCommand</span><span class="token punctuation">(</span>command<span class="token operator">:</span> Command<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        command<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>undoneCommands <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 清空撤销历史</span>
    <span class="token punctuation">}</span>

    <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> command <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            command<span class="token punctuation">.</span><span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>undoneCommands<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">redo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> command <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>undoneCommands<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            command<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> editor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextEditor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> invoker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CommandInvoker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 执行一些操作</span>
invoker<span class="token punctuation">.</span><span class="token function">executeCommand</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AppendCommand</span><span class="token punctuation">(</span>editor<span class="token punctuation">,</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
invoker<span class="token punctuation">.</span><span class="token function">executeCommand</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AppendCommand</span><span class="token punctuation">(</span>editor<span class="token punctuation">,</span> <span class="token string">&#39; World&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>editor<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Hello World</span>

<span class="token comment">// 撤销操作</span>
invoker<span class="token punctuation">.</span><span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>editor<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Hello</span>

<span class="token comment">// 重做操作</span>
invoker<span class="token punctuation">.</span><span class="token function">redo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>editor<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Hello World</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),e=[o];function c(i,l){return s(),a("div",null,e)}const d=n(p,[["render",c],["__file","command.html.vue"]]);export{d as default};