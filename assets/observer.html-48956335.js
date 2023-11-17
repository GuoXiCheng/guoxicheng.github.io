import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as p}from"./app-a614ae52.js";const t={},e=p(`<h1 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> 观察者模式</h1><h2 id="真实世界类比" tabindex="-1"><a class="header-anchor" href="#真实世界类比" aria-hidden="true">#</a> 真实世界类比</h2><p>出版社负责管理订阅者，在有新报纸时通知订阅的读者。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/observer/real-world.ts</span>

<span class="token keyword">interface</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
    <span class="token function">update</span><span class="token punctuation">(</span>news<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>
    <span class="token function">subscribe</span><span class="token punctuation">(</span>observer<span class="token operator">:</span> Observer<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">unsubscribe</span><span class="token punctuation">(</span>observer<span class="token operator">:</span> Observer<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">NewspaperPublisher</span> <span class="token keyword">implements</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> observers<span class="token operator">:</span> Observer<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> latestNews<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

    <span class="token function">subscribe</span><span class="token punctuation">(</span>observer<span class="token operator">:</span> Observer<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> isExist <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isExist<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">unsubscribe</span><span class="token punctuation">(</span>observer<span class="token operator">:</span> Observer<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>observers <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>obs <span class="token operator">=&gt;</span> obs <span class="token operator">!==</span> observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">publishNews</span><span class="token punctuation">(</span>news<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>latestNews <span class="token operator">=</span> news<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> observer <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            observer<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>latestNews<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Reader</span> <span class="token keyword">implements</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">update</span><span class="token punctuation">(</span>news<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is reading news: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>news<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建出版社</span>
<span class="token keyword">const</span> publisher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NewspaperPublisher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建读者</span>
<span class="token keyword">const</span> alice <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Reader</span><span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> bob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Reader</span><span class="token punctuation">(</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 读者订阅报纸</span>
publisher<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>alice<span class="token punctuation">)</span><span class="token punctuation">;</span>
publisher<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>bob<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 出版社发布新闻</span>
publisher<span class="token punctuation">.</span><span class="token function">publishNews</span><span class="token punctuation">(</span><span class="token string">&quot;New edition of the newspaper is out!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","observer.html.vue"]]);export{k as default};
