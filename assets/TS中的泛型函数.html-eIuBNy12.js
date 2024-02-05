import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-5NT8Mz2f.js";const t={},p=e(`<h1 id="ts-中的泛型函数" tabindex="-1"><a class="header-anchor" href="#ts-中的泛型函数" aria-hidden="true">#</a> TS 中的泛型函数</h1><h2 id="keyof" tabindex="-1"><a class="header-anchor" href="#keyof" aria-hidden="true">#</a> keyof</h2><p>用于获取一个类型的所有属性键的联合类型。作用于类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    gender<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">P</span></span> <span class="token operator">=</span> <span class="token keyword">keyof</span> Person<span class="token punctuation">;</span> <span class="token comment">// &quot;name&quot; | &quot;age&quot; | &quot;gender&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h2><p>用于获取一个值的类型。作用于值</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">&quot;female&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
type P = <span class="token punctuation">{</span>
    name: string;
    age: number;
    gender: string;
<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">P</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> person<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="keyof-typeof" tabindex="-1"><a class="header-anchor" href="#keyof-typeof" aria-hidden="true">#</a> keyof typeof</h2><p>用于获取一个值的类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">&quot;female&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">P</span></span> <span class="token operator">=</span> <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> person<span class="token punctuation">;</span> <span class="token comment">// &quot;name&quot; | &quot;age&quot; | &quot;gender&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="omit" tabindex="-1"><a class="header-anchor" href="#omit" aria-hidden="true">#</a> Omit</h2><p>以一个类型为基础类型，从中排除指定的属性</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    gender<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
type P = <span class="token punctuation">{</span>
    gender: string;
<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">P</span></span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>Person<span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;age&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pick" tabindex="-1"><a class="header-anchor" href="#pick" aria-hidden="true">#</a> Pick</h2><p>从一个类型中挑选出指定的属性</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    gender<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
type P = <span class="token punctuation">{</span>
    name: string;
    age: number;
<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">P</span></span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>Person<span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;age&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="required" tabindex="-1"><a class="header-anchor" href="#required" aria-hidden="true">#</a> Required</h2><p>将一个类型中的所有属性变为必选项</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    gender<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
type P = <span class="token punctuation">{</span>
    name: string;
    age: number;
    gender: string;
<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">P</span></span> <span class="token operator">=</span> Required<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="partial" tabindex="-1"><a class="header-anchor" href="#partial" aria-hidden="true">#</a> Partial</h2><p>将一个类型中的所有属性变为可选项</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    gender<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
type P = <span class="token punctuation">{</span>
    name?: string | undefined;
    age?: number | undefined;
    gender?: string | undefined;
<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">P</span></span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="record" tabindex="-1"><a class="header-anchor" href="#record" aria-hidden="true">#</a> Record</h2><p>用于创建一个具有指定属性键和对应类型的对象类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token string">&quot;name&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;age&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;gender&quot;</span><span class="token punctuation">,</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">&quot;female&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude" aria-hidden="true">#</a> Exclude</h2><p>用于从联合类型中排除指定的类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Color</span> <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;green&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">RedOrGreen</span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span>Color<span class="token punctuation">,</span> <span class="token string">&quot;blue&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;red&quot; | &quot;green&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extract" tabindex="-1"><a class="header-anchor" href="#extract" aria-hidden="true">#</a> Extract</h2><p>用于从联合类型中提取指定的类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Color</span> <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;green&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">RedOrGreen</span> <span class="token operator">=</span> Extract<span class="token operator">&lt;</span>Color<span class="token punctuation">,</span> <span class="token string">&quot;red&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;green&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;red&quot; | &quot;green&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> Readonly</h2><p>将一个类型中的所有属性变为只读属性</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> readOnlyPerson<span class="token operator">:</span> Readonly<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

readOnlyPerson<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 错误：无法分配给 &quot;name&quot;，因为它是只读属性。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mutable" tabindex="-1"><a class="header-anchor" href="#mutable" aria-hidden="true">#</a> Mutable</h2><p>Mutable 不是的内置类型，用于表示将对象的属性设置为可变（可修改）的状态</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token keyword">readonly</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">MutablePerson</span> <span class="token operator">=</span> Mutable<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Mutable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">-</span><span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">const</span> mutablePerson<span class="token operator">:</span> MutablePerson <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

mutablePerson<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 可以修改 &quot;name&quot; 属性</span>
mutablePerson<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">31</span><span class="token punctuation">;</span> <span class="token comment">// 可以修改 &quot;age&quot; 属性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),o=[p];function l(i,c){return s(),a("div",null,o)}const d=n(t,[["render",l],["__file","TS中的泛型函数.html.vue"]]);export{d as default};
