import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,a as n}from"./app-CxdspBVH.js";const l={},i=n(`<h1 id="docker-基本用法" tabindex="-1"><a class="header-anchor" href="#docker-基本用法"><span>docker 基本用法</span></a></h1><p>docker 的基本用法涵盖 docker 的登入登出、操作镜像、操作容器的方法。在安装 docker 之后，掌握这些基本用法有助于你快速上手 docker。</p><h2 id="登入登出" tabindex="-1"><a class="header-anchor" href="#登入登出"><span>登入登出</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 登录Docker Hub</span></span>
<span class="line"><span class="token function">docker</span> login <span class="token parameter variable">-u</span> username <span class="token parameter variable">-p</span> password</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 登录私有仓库</span></span>
<span class="line"><span class="token function">docker</span> login <span class="token parameter variable">-u</span> username <span class="token parameter variable">-p</span> password registry.example.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 登出</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">logout</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作镜像" tabindex="-1"><a class="header-anchor" href="#操作镜像"><span>操作镜像</span></a></h2><p>docker 镜像是一个轻量级、不可变、可执行的软件包，它包含运行应用程序所需的一切内容。</p><p>镜像是容器运行的蓝图或模板，你可以从镜像启动一个或多个容器，镜像在这个过程中保持不变。</p><h3 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像"><span>拉取镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 从 Docker Hub 拉取 nginx 镜像</span></span>
<span class="line"><span class="token function">docker</span> pull nginx:latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列出本地镜像" tabindex="-1"><a class="header-anchor" href="#列出本地镜像"><span>列出本地镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">docker</span> images</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="删除镜像" tabindex="-1"><a class="header-anchor" href="#删除镜像"><span>删除镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">docker</span> rmi nginx:latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="操作容器" tabindex="-1"><a class="header-anchor" href="#操作容器"><span>操作容器</span></a></h2><p>容器是镜像的运行时实例。</p><p>当你从镜像启动一个容器时，docker 会在镜像顶部添加一个可写层（容器层），容器内的所有更改都发生在这个可写层上。</p><h3 id="运行容器" tabindex="-1"><a class="header-anchor" href="#运行容器"><span>运行容器</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--name</span> my-nginx <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 <span class="token parameter variable">-d</span> nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>--name</code> 指定容器名称</p><p><code>-p</code> 指定端口映射（宿主机端口:容器端口）</p><p><code>-d</code> 后台运行</p></div><h3 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器"><span>进入容器</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> my-nginx /bin/bash</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="列出容器" tabindex="-1"><a class="header-anchor" href="#列出容器"><span>列出容器</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 列出运行中的容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 列出所有容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启停容器" tabindex="-1"><a class="header-anchor" href="#启停容器"><span>启停容器</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 停止容器</span></span>
<span class="line"><span class="token function">docker</span> stop my-nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动容器</span></span>
<span class="line"><span class="token function">docker</span> start my-nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重启容器</span></span>
<span class="line"><span class="token function">docker</span> restart my-nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除容器" tabindex="-1"><a class="header-anchor" href="#删除容器"><span>删除容器</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">docker</span> <span class="token function">rm</span> my-nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,27),c=[i];function t(r,p){return a(),e("div",null,c)}const h=s(l,[["render",t],["__file","docker-use.html.vue"]]),m=JSON.parse(`{"path":"/cloud-native/docker/docker-use.html","title":"docker 基本用法","lang":"zh-CN","frontmatter":{"date":"2024-03-01T00:00:00.000Z","order":3,"description":"docker 基本用法 docker 的基本用法涵盖 docker 的登入登出、操作镜像、操作容器的方法。在安装 docker 之后，掌握这些基本用法有助于你快速上手 docker。 登入登出 操作镜像 docker 镜像是一个轻量级、不可变、可执行的软件包，它包含运行应用程序所需的一切内容。 镜像是容器运行的蓝图或模板，你可以从镜像启动一个或多个容器...","head":[["meta",{"property":"og:url","content":"https://guoxicheng.top/cloud-native/docker/docker-use.html"}],["meta",{"property":"og:site_name","content":"Guo's Page"}],["meta",{"property":"og:title","content":"docker 基本用法"}],["meta",{"property":"og:description","content":"docker 基本用法 docker 的基本用法涵盖 docker 的登入登出、操作镜像、操作容器的方法。在安装 docker 之后，掌握这些基本用法有助于你快速上手 docker。 登入登出 操作镜像 docker 镜像是一个轻量级、不可变、可执行的软件包，它包含运行应用程序所需的一切内容。 镜像是容器运行的蓝图或模板，你可以从镜像启动一个或多个容器..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-02T07:12:27.000Z"}],["meta",{"property":"article:published_time","content":"2024-03-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-02T07:12:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker 基本用法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-02T07:12:27.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"登入登出","slug":"登入登出","link":"#登入登出","children":[]},{"level":2,"title":"操作镜像","slug":"操作镜像","link":"#操作镜像","children":[{"level":3,"title":"拉取镜像","slug":"拉取镜像","link":"#拉取镜像","children":[]},{"level":3,"title":"列出本地镜像","slug":"列出本地镜像","link":"#列出本地镜像","children":[]},{"level":3,"title":"删除镜像","slug":"删除镜像","link":"#删除镜像","children":[]}]},{"level":2,"title":"操作容器","slug":"操作容器","link":"#操作容器","children":[{"level":3,"title":"运行容器","slug":"运行容器","link":"#运行容器","children":[]},{"level":3,"title":"进入容器","slug":"进入容器","link":"#进入容器","children":[]},{"level":3,"title":"列出容器","slug":"列出容器","link":"#列出容器","children":[]},{"level":3,"title":"启停容器","slug":"启停容器","link":"#启停容器","children":[]},{"level":3,"title":"删除容器","slug":"删除容器","link":"#删除容器","children":[]}]}],"git":{"createdTime":1709271025000,"updatedTime":1709363547000},"readingTime":{"minutes":1.28,"words":384},"filePathRelative":"cloud-native/docker/docker-use.md","localizedDate":"2024年3月1日","autoDesc":true,"excerpt":"\\n<p>docker 的基本用法涵盖 docker 的登入登出、操作镜像、操作容器的方法。在安装 docker 之后，掌握这些基本用法有助于你快速上手 docker。</p>\\n<h2>登入登出</h2>\\n<div class=\\"language-bash\\" data-highlighter=\\"prismjs\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"line\\"><span class=\\"token comment\\"># 登录Docker Hub</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">docker</span> login <span class=\\"token parameter variable\\">-u</span> username <span class=\\"token parameter variable\\">-p</span> password</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># 登录私有仓库</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">docker</span> login <span class=\\"token parameter variable\\">-u</span> username <span class=\\"token parameter variable\\">-p</span> password registry.example.com</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># 登出</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">docker</span> <span class=\\"token builtin class-name\\">logout</span></span>\\n<span class=\\"line\\"></span></code></pre></div>"}`);export{h as comp,m as data};
