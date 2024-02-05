import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-5NT8Mz2f.js";const p={},e=t(`<h1 id="抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式" aria-hidden="true">#</a> 抽象工厂模式</h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>抽象工厂模式提供一个创建一系列相关对象的接口，而无需指定具体的类。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="切换环境" tabindex="-1"><a class="header-anchor" href="#切换环境" aria-hidden="true">#</a> 切换环境</h3><p>抽象工厂模式可以用来切换不同的环境而无需修改客户端代码，例如：在测试环境中，使用模拟对象；而在生产环境中，使用实际对象。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/abstract-factory/switch-environment.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 定义一些“产品”接口</span>
<span class="token keyword">interface</span> <span class="token class-name">DatabaseConnection</span> <span class="token punctuation">{</span>
    <span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建具体的产品实现类</span>
<span class="token comment">// 生产环境的实现</span>
<span class="token keyword">class</span> <span class="token class-name">ProductionDatabaseConnection</span> <span class="token keyword">implements</span> <span class="token class-name">DatabaseConnection</span> <span class="token punctuation">{</span>
    <span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
        <span class="token comment">// 实现数据库查询逻辑</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Executing SQL on production database: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>sql<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ProductionLogger</span> <span class="token keyword">implements</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token comment">// 实现日志记录逻辑</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Logging in production: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 测试环境的实现（模拟对象）</span>
<span class="token keyword">class</span> <span class="token class-name">MockDatabaseConnection</span> <span class="token keyword">implements</span> <span class="token class-name">DatabaseConnection</span> <span class="token punctuation">{</span>
    <span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Mock query executed: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>sql<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MockLogger</span> <span class="token keyword">implements</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Mock log: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个抽象工厂接口，它包含创建所有不同类型产品的方法</span>
<span class="token keyword">interface</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createDatabaseConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> DatabaseConnection<span class="token punctuation">;</span>
    <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Logger<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建具体的工厂类</span>
<span class="token keyword">class</span> <span class="token class-name">ProductionEnvironmentFactory</span> <span class="token keyword">implements</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createDatabaseConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> DatabaseConnection <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductionDatabaseConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Logger <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductionLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TestEnvironmentFactory</span> <span class="token keyword">implements</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createDatabaseConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> DatabaseConnection <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MockDatabaseConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Logger <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MockLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">clientCode</span><span class="token punctuation">(</span>factory<span class="token operator">:</span> AbstractFactory<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> dbConnection <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createDatabaseConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> logger <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    dbConnection<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;SELECT * FROM users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Query executed.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 生产环境</span>
<span class="token keyword">const</span> productionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProductionEnvironmentFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span>productionFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 测试环境</span>
<span class="token keyword">const</span> testFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestEnvironmentFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span>testFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="替换依赖关系" tabindex="-1"><a class="header-anchor" href="#替换依赖关系" aria-hidden="true">#</a> 替换依赖关系</h3><p>抽象工厂模式允许产生一系列相关或依赖对象，而无需指定具体的类。</p><p>在这个例子中，创建了一个抽象工厂来处理不同的数据库访问和消息传递。这样，当需要更换整个产品族时（数据库访问和消息传递），只需要更换工厂实现即可，而无需修改客户端代码。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/abstract-factory/substitution-dependency.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 抽象产品：数据库连接</span>
<span class="token keyword">interface</span> <span class="token class-name">DatabaseConnection</span> <span class="token punctuation">{</span>
    <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品：MySQL连接</span>
<span class="token keyword">class</span> <span class="token class-name">MySQLConnection</span> <span class="token keyword">implements</span> <span class="token class-name">DatabaseConnection</span> <span class="token punctuation">{</span>
    <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Connected to MySQL database.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品：PostgreSQL连接</span>
<span class="token keyword">class</span> <span class="token class-name">PostgreSQLConnection</span> <span class="token keyword">implements</span> <span class="token class-name">DatabaseConnection</span> <span class="token punctuation">{</span>
    <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Connected to PostgreSQL database.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象产品：消息传递</span>
<span class="token keyword">interface</span> <span class="token class-name">MessageService</span> <span class="token punctuation">{</span>
    <span class="token function">sendMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品：邮件服务</span>
<span class="token keyword">class</span> <span class="token class-name">EmailService</span> <span class="token keyword">implements</span> <span class="token class-name">MessageService</span> <span class="token punctuation">{</span>
    <span class="token function">sendMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Email: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品：SMS服务</span>
<span class="token keyword">class</span> <span class="token class-name">SMSService</span> <span class="token keyword">implements</span> <span class="token class-name">MessageService</span> <span class="token punctuation">{</span>
    <span class="token function">sendMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">SMS: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象工厂</span>
<span class="token keyword">interface</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createDatabaseConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> DatabaseConnection<span class="token punctuation">;</span>
    <span class="token function">createMessageService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> MessageService<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂：生产MySQL和邮件服务的产品</span>
<span class="token keyword">class</span> <span class="token class-name">MySQLAndEmailFactory</span> <span class="token keyword">implements</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createDatabaseConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> DatabaseConnection <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MySQLConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">createMessageService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> MessageService <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">EmailService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂：生产PostgreSQL和SMS服务的产品</span>
<span class="token keyword">class</span> <span class="token class-name">PostgreSQLAndSMSFactory</span> <span class="token keyword">implements</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createDatabaseConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> DatabaseConnection <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PostgreSQLConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">createMessageService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> MessageService <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SMSService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">clientCode</span><span class="token punctuation">(</span>factory<span class="token operator">:</span> AbstractFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> dbConnection <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createDatabaseConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dbConnection<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> messageService <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createMessageService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    messageService<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用MySQL和邮件服务的工厂</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MySQLAndEmailFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用PostgreSQL和SMS服务的工厂</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PostgreSQLAndSMSFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跨平台组件" tabindex="-1"><a class="header-anchor" href="#跨平台组件" aria-hidden="true">#</a> 跨平台组件</h3><p>抽象工厂模式可以用来根据不同的操作系统创建适应其风格的UI组件，同时保持客户端代码的一致性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/abstract-factory/cross-platform.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 抽象产品：窗口</span>
<span class="token keyword">interface</span> <span class="token class-name">MyWindow</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象产品：按钮</span>
<span class="token keyword">interface</span> <span class="token class-name">Button</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象产品：文本框</span>
<span class="token keyword">interface</span> <span class="token class-name">TextBox</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Windows风格的具体产品</span>
<span class="token keyword">class</span> <span class="token class-name">WindowsWindow</span> <span class="token keyword">implements</span> <span class="token class-name">MyWindow</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering Windows style window.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WindowsButton</span> <span class="token keyword">implements</span> <span class="token class-name">Button</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering Windows style button.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WindowsTextBox</span> <span class="token keyword">implements</span> <span class="token class-name">TextBox</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering Windows style text box.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// MacOS风格的具体产品</span>
<span class="token keyword">class</span> <span class="token class-name">MacOSWindow</span> <span class="token keyword">implements</span> <span class="token class-name">MyWindow</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering MacOS style window.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacOSButton</span> <span class="token keyword">implements</span> <span class="token class-name">Button</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering MacOS style button.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacOSTextBox</span> <span class="token keyword">implements</span> <span class="token class-name">TextBox</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering MacOS style text box.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象工厂</span>
<span class="token keyword">interface</span> <span class="token class-name">UIFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> MyWindow<span class="token punctuation">;</span>
    <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Button<span class="token punctuation">;</span>
    <span class="token function">createTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> TextBox<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂：创建Windows风格的UI组件</span>
<span class="token keyword">class</span> <span class="token class-name">WindowsFactory</span> <span class="token keyword">implements</span> <span class="token class-name">UIFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> MyWindow <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WindowsWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Button <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WindowsButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">createTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> TextBox <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WindowsTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂：创建MacOS风格的UI组件</span>
<span class="token keyword">class</span> <span class="token class-name">MacOSFactory</span> <span class="token keyword">implements</span> <span class="token class-name">UIFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> MyWindow <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MacOSWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Button <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MacOSButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">createTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> TextBox <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MacOSTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">clientCode</span><span class="token punctuation">(</span>factory<span class="token operator">:</span> UIFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> window <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> button <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> textBox <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createTextBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    window<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    button<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    textBox<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用Windows风格的UI工厂</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WindowsFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用MacOS风格的UI工厂</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MacOSFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建产品族" tabindex="-1"><a class="header-anchor" href="#创建产品族" aria-hidden="true">#</a> 创建产品族</h3><p>抽象工厂模式可以用来创建不同风格的UI产品族。</p><p>在这个例子中，每种风格将包含不同的按钮、滚动条和菜单组件。抽象工厂模式允许根据不同风格创建一系列可以一起工作的 UI 组件，可客户端代码不需要了解具体的组件实现。</p><p>如果需要添加新的风格系列，只需实现一个新的具体工厂和一系列具体产品即可。客户端代码只需要更换使用的工厂，无需进行其他修改，就能创建新风格的 UI 组件。这样，抽象工厂模式有效地支持了产品族的创建和易于扩展。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/abstract-factory/product-family.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 抽象产品接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Button</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ScrollBar</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Menu</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 现代风格的具体组件</span>
<span class="token keyword">class</span> <span class="token class-name">ModernButton</span> <span class="token keyword">implements</span> <span class="token class-name">Button</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering a modern button.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ModernScrollBar</span> <span class="token keyword">implements</span> <span class="token class-name">ScrollBar</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering a modern scroll bar.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ModernMenu</span> <span class="token keyword">implements</span> <span class="token class-name">Menu</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering a modern menu.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 经典风格的具体组件</span>
<span class="token keyword">class</span> <span class="token class-name">ClassicButton</span> <span class="token keyword">implements</span> <span class="token class-name">Button</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering a classic button.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ClassicScrollBar</span> <span class="token keyword">implements</span> <span class="token class-name">ScrollBar</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering a classic scroll bar.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ClassicMenu</span> <span class="token keyword">implements</span> <span class="token class-name">Menu</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Rendering a classic menu.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象工厂</span>
<span class="token keyword">interface</span> <span class="token class-name">UIFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Button<span class="token punctuation">;</span>
    <span class="token function">createScrollBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ScrollBar<span class="token punctuation">;</span>
    <span class="token function">createMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Menu<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 现代风格的工厂</span>
<span class="token keyword">class</span> <span class="token class-name">ModernUIFactory</span> <span class="token keyword">implements</span> <span class="token class-name">UIFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Button <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ModernButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">createScrollBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ScrollBar <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ModernScrollBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">createMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Menu <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ModernMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 经典风格的工厂</span>
<span class="token keyword">class</span> <span class="token class-name">ClassicUIFactory</span> <span class="token keyword">implements</span> <span class="token class-name">UIFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Button <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ClassicButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">createScrollBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ScrollBar <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ClassicScrollBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">createMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Menu <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ClassicMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">clientCode</span><span class="token punctuation">(</span>factory<span class="token operator">:</span> UIFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> button <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> scrollBar <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createScrollBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> menu <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    button<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    scrollBar<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    menu<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用现代风格的UI工厂</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ModernUIFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用经典风格的UI工厂</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ClassicUIFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置产品组合" tabindex="-1"><a class="header-anchor" href="#配置产品组合" aria-hidden="true">#</a> 配置产品组合</h3><p>抽象工厂模式允许根据不同的配置或环境条件创建与之相匹配的对象组合，如不同语言的文本显示和消息处理。</p><p>在这个例子中，如果需要支持新的语言环境，只需添加一个新的具体工厂和相应的具体产品即可。客户端代码根据配置或环境条件选择相应的工厂，从而轻松实现多语言支持，而无需修改现有代码。这样，抽象工厂模式有效地支持了根据不同配置创建产品组合的需求。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/abstract-factory/configuration-portfolio.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 抽象产品：文本显示</span>
<span class="token keyword">interface</span> <span class="token class-name">TextDisplay</span> <span class="token punctuation">{</span>
    <span class="token function">display</span><span class="token punctuation">(</span>text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象产品：消息处理</span>
<span class="token keyword">interface</span> <span class="token class-name">MessageHandler</span> <span class="token punctuation">{</span>
    <span class="token function">handleMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 英语环境的具体产品</span>
<span class="token keyword">class</span> <span class="token class-name">EnglishTextDisplay</span> <span class="token keyword">implements</span> <span class="token class-name">TextDisplay</span> <span class="token punctuation">{</span>
    <span class="token function">display</span><span class="token punctuation">(</span>text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Displaying in English: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>text<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">EnglishMessageHandler</span> <span class="token keyword">implements</span> <span class="token class-name">MessageHandler</span> <span class="token punctuation">{</span>
    <span class="token function">handleMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Handling English message: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 中文环境的具体产品</span>
<span class="token keyword">class</span> <span class="token class-name">ChineseTextDisplay</span> <span class="token keyword">implements</span> <span class="token class-name">TextDisplay</span> <span class="token punctuation">{</span>
    <span class="token function">display</span><span class="token punctuation">(</span>text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">显示中文: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>text<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ChineseMessageHandler</span> <span class="token keyword">implements</span> <span class="token class-name">MessageHandler</span> <span class="token punctuation">{</span>
    <span class="token function">handleMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">处理中文消息: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象工厂</span>
<span class="token keyword">interface</span> <span class="token class-name">LocalizationFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createTextDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> TextDisplay<span class="token punctuation">;</span>
    <span class="token function">createMessageHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> MessageHandler<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 英语环境的工厂</span>
<span class="token keyword">class</span> <span class="token class-name">EnglishLocalizationFactory</span> <span class="token keyword">implements</span> <span class="token class-name">LocalizationFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createTextDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> TextDisplay <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">EnglishTextDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">createMessageHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> MessageHandler <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">EnglishMessageHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 中文环境的工厂</span>
<span class="token keyword">class</span> <span class="token class-name">ChineseLocalizationFactory</span> <span class="token keyword">implements</span> <span class="token class-name">LocalizationFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createTextDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> TextDisplay <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ChineseTextDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">createMessageHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> MessageHandler <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ChineseMessageHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">clientCode</span><span class="token punctuation">(</span>factory<span class="token operator">:</span> LocalizationFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> textDisplay <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createTextDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> messageHandler <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createMessageHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    textDisplay<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    messageHandler<span class="token punctuation">.</span><span class="token function">handleMessage</span><span class="token punctuation">(</span><span class="token string">&quot;This is a test message&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用英语环境的工厂</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">EnglishLocalizationFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用中文环境的工厂</span>
<span class="token function">clientCode</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ChineseLocalizationFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","abstract-factory.html.vue"]]);export{r as default};
