import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as e}from"./app-33ddc902.js";const t={},p=e(`<h1 id="跨域问题" tabindex="-1"><a class="header-anchor" href="#跨域问题" aria-hidden="true">#</a> 跨域问题</h1><h2 id="django跨域" tabindex="-1"><a class="header-anchor" href="#django跨域" aria-hidden="true">#</a> Django跨域</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> django-cors-headers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>INSTALLED_APPS <span class="token operator">=</span> <span class="token punctuation">[</span> 
  <span class="token string">&#39;corsheaders&#39;</span><span class="token punctuation">,</span> 
<span class="token punctuation">]</span> 

MIDDLEWARE <span class="token operator">=</span> <span class="token punctuation">[</span> 
  <span class="token string">&#39;corsheaders.middleware.CorsMiddleware&#39;</span><span class="token punctuation">,</span> 
<span class="token punctuation">]</span>

<span class="token comment"># 配置允许所有域名 </span>
CORS_ORIGIN_ALLOW_ALL <span class="token operator">=</span> <span class="token boolean">True</span> 

<span class="token comment"># 配置白名单域名</span>
CORS_ORIGIN_WHITELIST <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token string">&#39;127.0.0.1:8080&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;localhost:8080&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">)</span> 

<span class="token comment"># 指明在跨域访问中，后端是否支持对cookie的操作</span>
CORS_ALLOW_CREDENTIALS <span class="token operator">=</span> <span class="token boolean">True</span>

<span class="token comment"># 允许的请求方式 </span>
CORS_ALLOW_METHODS <span class="token operator">=</span> <span class="token punctuation">(</span> 
  <span class="token string">&#39;DELETE&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;PATCH&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;PUT&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;VIEW&#39;</span><span class="token punctuation">,</span> 
<span class="token punctuation">)</span> 

<span class="token comment"># 允许的请求头 </span>
CORS_ALLOW_HEADERS <span class="token operator">=</span> <span class="token punctuation">(</span> 
  <span class="token string">&#39;XMLHttpRequest&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;X_FILENAME&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;accept-encoding&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;authorization&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;content-type&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;dnt&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;origin&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;user-agent&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;x-csrftoken&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;x-requested-with&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;Pragma&#39;</span><span class="token punctuation">,</span> 
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react跨域" tabindex="-1"><a class="header-anchor" href="#react跨域" aria-hidden="true">#</a> React跨域</h2><p>如果要访问的API为：<code>https://test.com.cn/api/user</code></p><h3 id="在本地开发环境时" tabindex="-1"><a class="header-anchor" href="#在本地开发环境时" aria-hidden="true">#</a> 在本地开发环境时</h3><p>在package.json中添加</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;proxy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://test.com.cn&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署到nginx中时" tabindex="-1"><a class="header-anchor" href="#部署到nginx中时" aria-hidden="true">#</a> 部署到Nginx中时</h3><p>编辑nginx.conf文件</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /api/</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">150</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_pass</span> https://test.com.cn</span><span class="token punctuation">;</span>
  <span class="token comment">#将原请求的http链接header头中的Host信息放到转发请求中</span>
  <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-Ip <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_set_header</span> REMOTE-HOST <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="springboot跨域" tabindex="-1"><a class="header-anchor" href="#springboot跨域" aria-hidden="true">#</a> SpringBoot跨域</h2><p>在Application启动器同目录下新建：CorsConfig</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpHeaders</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">CorsRegistry</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebMvcConfigurer</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CorsConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token function">corsConfigurer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WebMvcConfigurer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addCorsMappings</span><span class="token punctuation">(</span><span class="token class-name">CorsRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                registry<span class="token punctuation">.</span><span class="token function">addMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
                        <span class="token function">allowedOrigins</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token comment">//允许跨域的域名，可以用*表示允许任何域名使用</span>
                        <span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token comment">//允许任何方法（post、get等）</span>
                        <span class="token function">allowedHeaders</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token comment">//允许任何请求头</span>
                        <span class="token function">allowCredentials</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token comment">//带上cookie信息</span>
                        <span class="token function">exposedHeaders</span><span class="token punctuation">(</span><span class="token class-name">HttpHeaders</span><span class="token punctuation">.</span><span class="token constant">SET_COOKIE</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">maxAge</span><span class="token punctuation">(</span><span class="token number">3600L</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//maxAge(3600)表明在3600秒内，不需要再发送预检验请求，可以缓存该结果</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","跨域问题.html.vue"]]);export{d as default};
