import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-Tqq9RgcH.js";const p={},e=t(`<h1 id="桥接模式" tabindex="-1"><a class="header-anchor" href="#桥接模式" aria-hidden="true">#</a> 桥接模式</h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>桥接模式用于将抽象部分与实现部分分离，使它们都可以独立地变化。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="数据库抽象访问" tabindex="-1"><a class="header-anchor" href="#数据库抽象访问" aria-hidden="true">#</a> 数据库抽象访问</h3><p>在需要支持多种数据库的应用中，桥接模式可以用于将业务逻辑（抽象部分）与数据库访问层（实现部分）分离，使得更换数据库时不需要修改业务逻辑。</p><p>在这个例子中，DataService及其子类表示抽象部分，负责定义高层的业务逻辑。Database接口及其实现表示实现部分，负责具体的数据库操作。这使得更换数据库变得简单，因为业务逻辑层不需要知道具体使用的是哪种数据库。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/bridge/database-access.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 数据库访问接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Database</span> <span class="token punctuation">{</span>
    <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
    <span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体数据库实现</span>
<span class="token keyword">class</span> <span class="token class-name">MySqlDatabase</span> <span class="token keyword">implements</span> <span class="token class-name">Database</span> <span class="token punctuation">{</span>
    <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Connecting to MySQL database.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Querying: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>sql<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 实现查询逻辑...</span>
    <span class="token punctuation">}</span>

    <span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Disconnecting from MySQL database.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PostgreSqlDatabase</span> <span class="token keyword">implements</span> <span class="token class-name">Database</span> <span class="token punctuation">{</span>
    <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Connecting to PostgreSQL database.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Querying: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>sql<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 实现查询逻辑...</span>
    <span class="token punctuation">}</span>

    <span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Disconnecting from PostgreSQL database.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建一个抽象类持有数据库访问接口的引用，并定义与数据库操作相关的业务逻辑</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">DataService</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> database<span class="token operator">:</span> Database<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>database<span class="token operator">:</span> Database<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>database <span class="token operator">=</span> database<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">abstract</span> <span class="token function">processData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">UserDataService</span> <span class="token keyword">extends</span> <span class="token class-name">DataService</span> <span class="token punctuation">{</span>
    <span class="token function">processData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>database<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 业务逻辑，例如查询用户数据</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>database<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;SELECT * FROM users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>database<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ProductDataService</span> <span class="token keyword">extends</span> <span class="token class-name">DataService</span> <span class="token punctuation">{</span>
    <span class="token function">processData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>database<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 业务逻辑，例如查询产品数据</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>database<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;SELECT * FROM products&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>database<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> mysqlDatabase <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MySqlDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> postgresDatabase <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PostgreSqlDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> userService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserDataService</span><span class="token punctuation">(</span>mysqlDatabase<span class="token punctuation">)</span><span class="token punctuation">;</span>
userService<span class="token punctuation">.</span><span class="token function">processData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用 MySQL 数据库处理用户数据</span>

<span class="token keyword">const</span> productService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProductDataService</span><span class="token punctuation">(</span>postgresDatabase<span class="token punctuation">)</span><span class="token punctuation">;</span>
productService<span class="token punctuation">.</span><span class="token function">processData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用 PostgreSQL 数据库处理产品数据</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多维度变化的系统" tabindex="-1"><a class="header-anchor" href="#多维度变化的系统" aria-hidden="true">#</a> 多维度变化的系统</h3><p>当一个系统有多维变化时可以使用桥接模式。例如：一个软件产品有不同的版本，每个版本有不同的操作系统支持，桥接模式允许将这些变化的维度（产品版本和操作系统）独立开来，实现解耦。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/bridge/multi-dimensional-system.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 操作系统接口</span>
<span class="token keyword">interface</span> <span class="token class-name">OperatingSystem</span> <span class="token punctuation">{</span>
    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体的操作系统类</span>
<span class="token keyword">class</span> <span class="token class-name">Windows</span> <span class="token keyword">implements</span> <span class="token class-name">OperatingSystem</span> <span class="token punctuation">{</span>
    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Windows&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacOS</span> <span class="token keyword">implements</span> <span class="token class-name">OperatingSystem</span> <span class="token punctuation">{</span>
    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;MacOS&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Linux</span> <span class="token keyword">implements</span> <span class="token class-name">OperatingSystem</span> <span class="token punctuation">{</span>
    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Linux&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 软件产品抽象类</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">SoftwareProduct</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> os<span class="token operator">:</span> OperatingSystem<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>os<span class="token operator">:</span> OperatingSystem<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>os <span class="token operator">=</span> os<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">abstract</span> <span class="token function">getVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token keyword">abstract</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体的软件产品类</span>
<span class="token keyword">class</span> <span class="token class-name">ProductA</span> <span class="token keyword">extends</span> <span class="token class-name">SoftwareProduct</span> <span class="token punctuation">{</span>
    <span class="token function">getVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;ProductA Version 1.0&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> running on </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>os<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ProductB</span> <span class="token keyword">extends</span> <span class="token class-name">SoftwareProduct</span> <span class="token punctuation">{</span>
    <span class="token function">getVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;ProductB Version 2.0&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> running on </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>os<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用示例</span>
<span class="token keyword">const</span> windows <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Windows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> productAOnWindows <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProductA</span><span class="token punctuation">(</span>windows<span class="token punctuation">)</span><span class="token punctuation">;</span>
productAOnWindows<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> linux <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Linux</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> productBOnLinux <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProductB</span><span class="token punctuation">(</span>linux<span class="token punctuation">)</span><span class="token punctuation">;</span>
productBOnLinux<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跨平台应用开发" tabindex="-1"><a class="header-anchor" href="#跨平台应用开发" aria-hidden="true">#</a> 跨平台应用开发</h3><p>在开发跨平台应用时，桥接模式可以用来分离抽象的用户界面与具体的平台实现，使得同一套用户界面代码可以在不同平台上云霄。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/bridge/develop-cross-platform-applications.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 平台接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Platform</span> <span class="token punctuation">{</span>
    <span class="token function">renderUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体的平台类</span>
<span class="token keyword">class</span> <span class="token class-name">WindowsPlatform</span> <span class="token keyword">implements</span> <span class="token class-name">Platform</span> <span class="token punctuation">{</span>
    <span class="token function">renderUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Rendering UI in Windows style&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacOSPlatform</span> <span class="token keyword">implements</span> <span class="token class-name">Platform</span> <span class="token punctuation">{</span>
    <span class="token function">renderUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Rendering UI in MacOS style&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LinuxPlatform</span> <span class="token keyword">implements</span> <span class="token class-name">Platform</span> <span class="token punctuation">{</span>
    <span class="token function">renderUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Rendering UI in Linux style&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 用户界面抽象类</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">UserInterface</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> platform<span class="token operator">:</span> Platform<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>platform<span class="token operator">:</span> Platform<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>platform <span class="token operator">=</span> platform<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">abstract</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体的用户界面类</span>
<span class="token keyword">class</span> <span class="token class-name">ApplicationUI</span> <span class="token keyword">extends</span> <span class="token class-name">UserInterface</span> <span class="token punctuation">{</span>
    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Application UI is being drawn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>platform<span class="token punctuation">.</span><span class="token function">renderUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用示例</span>
<span class="token keyword">const</span> windowsPlatform <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WindowsPlatform</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> appUIOnWindows <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApplicationUI</span><span class="token punctuation">(</span>windowsPlatform<span class="token punctuation">)</span><span class="token punctuation">;</span>
appUIOnWindows<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> macPlatform <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MacOSPlatform</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> appUIOnMac <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApplicationUI</span><span class="token punctuation">(</span>macPlatform<span class="token punctuation">)</span><span class="token punctuation">;</span>
appUIOnMac<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> linuxPlatform <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinuxPlatform</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> appUIOnLinux <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApplicationUI</span><span class="token punctuation">(</span>linuxPlatform<span class="token punctuation">)</span><span class="token punctuation">;</span>
appUIOnLinux<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="驱动程序开发" tabindex="-1"><a class="header-anchor" href="#驱动程序开发" aria-hidden="true">#</a> 驱动程序开发</h3><p>在开发硬件驱动程序时，桥接模式可以用来将驱动程序的高层逻辑（抽象部分）与底层硬件操作（实现部分）分离。这种方式使得驱动程序可以独立于硬件进行开发和测试，从而提高了代码的可维护性和可扩展性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/bridge/driver-development.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 硬件接口</span>
<span class="token keyword">interface</span> <span class="token class-name">HardwareInterface</span> <span class="token punctuation">{</span>
    <span class="token function">sendCommand</span><span class="token punctuation">(</span>command<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">receiveData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体的硬件类</span>
<span class="token keyword">class</span> <span class="token class-name">KeyboardHardware</span> <span class="token keyword">implements</span> <span class="token class-name">HardwareInterface</span> <span class="token punctuation">{</span>
    <span class="token function">sendCommand</span><span class="token punctuation">(</span>command<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Sending &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>command<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39; to Keyboard</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">receiveData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Keyboard data&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MouseHardware</span> <span class="token keyword">implements</span> <span class="token class-name">HardwareInterface</span> <span class="token punctuation">{</span>
    <span class="token function">sendCommand</span><span class="token punctuation">(</span>command<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Sending &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>command<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39; to Mouse</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">receiveData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Mouse data&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 驱动程序抽象类</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Driver</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> hardware<span class="token operator">:</span> HardwareInterface<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>hardware<span class="token operator">:</span> HardwareInterface<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>hardware <span class="token operator">=</span> hardware<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">abstract</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体的驱动程序类</span>
<span class="token keyword">class</span> <span class="token class-name">KeyboardDriver</span> <span class="token keyword">extends</span> <span class="token class-name">Driver</span> <span class="token punctuation">{</span>
    <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Executing Keyboard driver logic&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>hardware<span class="token punctuation">.</span><span class="token function">sendCommand</span><span class="token punctuation">(</span><span class="token string">&#39;keyboard-init&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Received: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>hardware<span class="token punctuation">.</span><span class="token function">receiveData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MouseDriver</span> <span class="token keyword">extends</span> <span class="token class-name">Driver</span> <span class="token punctuation">{</span>
    <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Executing Mouse driver logic&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>hardware<span class="token punctuation">.</span><span class="token function">sendCommand</span><span class="token punctuation">(</span><span class="token string">&#39;mouse-init&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Received: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>hardware<span class="token punctuation">.</span><span class="token function">receiveData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用示例</span>
<span class="token keyword">const</span> keyboardHardware <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyboardHardware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> keyboardDriver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyboardDriver</span><span class="token punctuation">(</span>keyboardHardware<span class="token punctuation">)</span><span class="token punctuation">;</span>
keyboardDriver<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> mouseHardware <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MouseHardware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mouseDriver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MouseDriver</span><span class="token punctuation">(</span>mouseHardware<span class="token punctuation">)</span><span class="token punctuation">;</span>
mouseDriver<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图形和渲染系统" tabindex="-1"><a class="header-anchor" href="#图形和渲染系统" aria-hidden="true">#</a> 图形和渲染系统</h3><p>在图形和渲染系统中，可以使用桥接模式来分离抽象的图形对象和具体的渲染API（如OpenGL、DirectX），使得图形对象不直接依赖于特定的渲染技术。这样的设计使得图形对象不直接依赖于特定的渲染技术，从而增强了系统的可扩展性和灵活性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/bridge/graphics-and-rendering-systems.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 渲染API接口</span>
<span class="token keyword">interface</span> <span class="token class-name">RenderAPI</span> <span class="token punctuation">{</span>
    <span class="token function">renderShape</span><span class="token punctuation">(</span>shape<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体的渲染API类</span>
<span class="token keyword">class</span> <span class="token class-name">OpenGLAPI</span> <span class="token keyword">implements</span> <span class="token class-name">RenderAPI</span> <span class="token punctuation">{</span>
    <span class="token function">renderShape</span><span class="token punctuation">(</span>shape<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Rendering </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>shape<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> with OpenGL</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DirectXAPI</span> <span class="token keyword">implements</span> <span class="token class-name">RenderAPI</span> <span class="token punctuation">{</span>
    <span class="token function">renderShape</span><span class="token punctuation">(</span>shape<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Rendering </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>shape<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> with DirectX</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 图形抽象类</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> api<span class="token operator">:</span> RenderAPI<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>api<span class="token operator">:</span> RenderAPI<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>api <span class="token operator">=</span> api<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">abstract</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体的图形类</span>
<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">renderShape</span><span class="token punctuation">(</span><span class="token string">&#39;Circle&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">renderShape</span><span class="token punctuation">(</span><span class="token string">&#39;Rectangle&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用示例</span>
<span class="token keyword">const</span> openGL <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OpenGLAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span>openGL<span class="token punctuation">)</span><span class="token punctuation">;</span>
circle<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> directX <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DirectXAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> rectangle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span>directX<span class="token punctuation">)</span><span class="token punctuation">;</span>
rectangle<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","bridge.html.vue"]]);export{r as default};
