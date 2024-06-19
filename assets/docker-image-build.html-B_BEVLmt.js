import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,a}from"./app-Bmj3ZKvS.js";const n={},l=a(`<h1 id="docker-镜像构建" tabindex="-1"><a class="header-anchor" href="#docker-镜像构建"><span>docker 镜像构建</span></a></h1><h2 id="镜像构建指令" tabindex="-1"><a class="header-anchor" href="#镜像构建指令"><span>镜像构建指令</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> example-image:1.0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>-t</code> 指定镜像仓库名和标签（可选），格式为<code>&lt;仓库名/镜像名&gt;:&lt;标签&gt;</code>，如果不指定标签，默认为<code>latest</code>。</p><p><code>.</code> 指定构建上下文的路径为当前目录。如果Dockerfile文件不在当前目录，可以使用<code>-f</code>参数指定Dockerfile文件的路径：<code>docker build -t example-image:1.0 -f /path/to/Dockerfile .</code>。</p></div><h2 id="dockerfile可用指令" tabindex="-1"><a class="header-anchor" href="#dockerfile可用指令"><span>Dockerfile可用指令</span></a></h2><p>Dockerfile 文件可以包含一系列的指令和参数，用于定义如何自动构建一个镜像。</p><h3 id="workdir" tabindex="-1"><a class="header-anchor" href="#workdir"><span>WORKDIR</span></a></h3><p>WORKDIR 指令用于设置工作目录，后续的指令将会在指定的目录下执行。</p><h3 id="copy-和-add" tabindex="-1"><a class="header-anchor" href="#copy-和-add"><span>COPY 和 ADD</span></a></h3><p>COPY 指令用于将文件从构建上下文复制到镜像中，语义清晰，仅支持复制文件和目录。</p><p>ADD 指令功能更加丰富，除了支持COPY指令的所有功能外，还支持解压tar文件、从URL中下载文件复制到镜像中。</p><h3 id="volume" tabindex="-1"><a class="header-anchor" href="#volume"><span>VOLUME</span></a></h3><p>VOLUME 指令用于声明容器内的一个或多个挂载点。</p><p>在容器运行时，所有写入容器中的数据都会在容器删除时丢失，通过使用VOLUME声明挂载点，数据可以持久化到宿主机上，即使容器被删除，数据也不会丢失。</p><p>通过将相同的卷挂载到多个容器中，可以实现容器间的数据共享。</p><h3 id="cmd-和-entrypoint" tabindex="-1"><a class="header-anchor" href="#cmd-和-entrypoint"><span>CMD 和 ENTRYPOINT</span></a></h3><p>CMD 指令提供容器启动时执行的默认命令，可以被<code>docker run</code>命令行参数覆盖。如果有多个CMD指令，只有最后一个CMD指令会生效。</p><p>ENTRYPOINT 指令提供容器启动时执行的基础命令，CMD 中的参数将附加到这里，如果在<code>docker run</code>时提供了额外的参数，这些参数会覆盖CMD中的参数。</p><h2 id="dockerfile文件示例" tabindex="-1"><a class="header-anchor" href="#dockerfile文件示例"><span>Dockerfile文件示例</span></a></h2><div class="language-dockerfile line-numbers-mode" data-highlighter="shiki" data-ext="dockerfile" data-title="dockerfile" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 使用官方Python运行时作为父镜像</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#61AFEF;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> python:3.8-slim</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 设置环境变量，确保Python输出直接打印到终端，不会被缓存</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#61AFEF;">ENV</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> PYTHONUNBUFFERED=1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 设置工作目录为/app</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#61AFEF;">WORKDIR</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> /app</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 将当前目录下的requirements.txt文件复制到容器中的/app</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#61AFEF;">COPY</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> requirements.txt /app/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 使用pip安装requirements.txt中指定的所需包</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> pip install --no-cache-dir -r requirements.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 将当前目录下的所有文件添加到容器中的/app</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#61AFEF;">ADD</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> . /app</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 创建一个挂载点，可以从本地主机或其他容器挂载卷到这里</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#61AFEF;">VOLUME</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;/app/data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 使容器监听8080端口，这是我们应用的运行端口</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#61AFEF;">EXPOSE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 8080</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 设置环境变量，用于示例应用程序</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#61AFEF;">ENV</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> APP_NAME=ExampleApp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 容器启动时执行的命令，这里用来启动一个Python应用</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#61AFEF;">CMD</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;python&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;app.py&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 容器启动时执行的入口点，设置基础命令，CMD 中的参数将附加到这里</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#61AFEF;">ENTRYPOINT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;python&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 注意：CMD 和 ENTRYPOINT 的组合使用意味着 ENTRYPOINT 设置了执行的命令，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 而 CMD 提供了该命令的默认参数。在这个例子中，如果没有提供任何运行时参数，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 容器将执行 &quot;python app.py&quot;。如果运行时提供了参数，比如 &quot;docker run example-image myscript.py&quot;，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 那么 CMD 的 &quot;app.py&quot; 将被忽略，容器将执行 &quot;python myscript.py&quot;。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),t=[l];function h(d,p){return s(),e("div",null,t)}const c=i(n,[["render",h],["__file","docker-image-build.html.vue"]]),o=JSON.parse(`{"path":"/cloud-native/docker/docker-image-build.html","title":"docker 镜像构建","lang":"zh-CN","frontmatter":{"date":"2024-03-02T00:00:00.000Z","order":5,"description":"docker 镜像构建 镜像构建指令 提示 -t 指定镜像仓库名和标签（可选），格式为<仓库名/镜像名>:<标签>，如果不指定标签，默认为latest。 . 指定构建上下文的路径为当前目录。如果Dockerfile文件不在当前目录，可以使用-f参数指定Dockerfile文件的路径：docker build -t example-image:1.0 -...","head":[["meta",{"property":"og:url","content":"https://guoxicheng.top/cloud-native/docker/docker-image-build.html"}],["meta",{"property":"og:site_name","content":"Guo's Page"}],["meta",{"property":"og:title","content":"docker 镜像构建"}],["meta",{"property":"og:description","content":"docker 镜像构建 镜像构建指令 提示 -t 指定镜像仓库名和标签（可选），格式为<仓库名/镜像名>:<标签>，如果不指定标签，默认为latest。 . 指定构建上下文的路径为当前目录。如果Dockerfile文件不在当前目录，可以使用-f参数指定Dockerfile文件的路径：docker build -t example-image:1.0 -..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-02T07:12:27.000Z"}],["meta",{"property":"article:published_time","content":"2024-03-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-02T07:12:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker 镜像构建\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-02T07:12:27.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"镜像构建指令","slug":"镜像构建指令","link":"#镜像构建指令","children":[]},{"level":2,"title":"Dockerfile可用指令","slug":"dockerfile可用指令","link":"#dockerfile可用指令","children":[{"level":3,"title":"WORKDIR","slug":"workdir","link":"#workdir","children":[]},{"level":3,"title":"COPY 和 ADD","slug":"copy-和-add","link":"#copy-和-add","children":[]},{"level":3,"title":"VOLUME","slug":"volume","link":"#volume","children":[]},{"level":3,"title":"CMD 和 ENTRYPOINT","slug":"cmd-和-entrypoint","link":"#cmd-和-entrypoint","children":[]}]},{"level":2,"title":"Dockerfile文件示例","slug":"dockerfile文件示例","link":"#dockerfile文件示例","children":[]}],"git":{"createdTime":1709363547000,"updatedTime":1709363547000},"readingTime":{"minutes":2.69,"words":807},"filePathRelative":"cloud-native/docker/docker-image-build.md","localizedDate":"2024年3月2日","autoDesc":true,"excerpt":"\\n<h2>镜像构建指令</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">docker</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> build</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> -t</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> example-image:1.0</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> .</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}`);export{c as comp,o as data};
