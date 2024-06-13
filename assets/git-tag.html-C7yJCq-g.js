import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,a as n}from"./app-CxdspBVH.js";const t={},i=n(`<h1 id="git-标签" tabindex="-1"><a class="header-anchor" href="#git-标签"><span>Git 标签</span></a></h1><h2 id="检查当前标签" tabindex="-1"><a class="header-anchor" href="#检查当前标签"><span>检查当前标签</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="列出所有标签"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> tag</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="创建标签" tabindex="-1"><a class="header-anchor" href="#创建标签"><span>创建标签</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="创建轻量标签"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> tag v1.0.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="创建附注标签"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> tag <span class="token parameter variable">-a</span> v1.0.0 <span class="token parameter variable">-m</span> <span class="token string">&quot;release version 1.0.0&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="查看标签信息" tabindex="-1"><a class="header-anchor" href="#查看标签信息"><span>查看标签信息</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="查看标签信息"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> show v1.0.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="推送标签" tabindex="-1"><a class="header-anchor" href="#推送标签"><span>推送标签</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="推送单个标签"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> push origin v1.0.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="推送所有标签"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> push origin <span class="token parameter variable">--tags</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="删除标签" tabindex="-1"><a class="header-anchor" href="#删除标签"><span>删除标签</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="删除本地标签"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> tag <span class="token parameter variable">-d</span> v1.0.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>要删除远程标签，需要先删除本地标签，然后再删除远程标签。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="删除远程标签"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> push <span class="token parameter variable">--delete</span> origin v1.0.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,15),l=[i];function r(d,c){return a(),s("div",null,l)}const h=e(t,[["render",r],["__file","git-tag.html.vue"]]),g=JSON.parse(`{"path":"/develop/git/git-tag.html","title":"Git 标签","lang":"zh-CN","frontmatter":{"date":"2024-02-19T00:00:00.000Z","order":3,"description":"Git 标签 检查当前标签 创建标签 查看标签信息 推送标签 删除标签 要删除远程标签，需要先删除本地标签，然后再删除远程标签。","head":[["meta",{"property":"og:url","content":"https://guoxicheng.top/develop/git/git-tag.html"}],["meta",{"property":"og:site_name","content":"Guo's Page"}],["meta",{"property":"og:title","content":"Git 标签"}],["meta",{"property":"og:description","content":"Git 标签 检查当前标签 创建标签 查看标签信息 推送标签 删除标签 要删除远程标签，需要先删除本地标签，然后再删除远程标签。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-02T07:12:27.000Z"}],["meta",{"property":"article:published_time","content":"2024-02-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-02T07:12:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git 标签\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-02T07:12:27.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"检查当前标签","slug":"检查当前标签","link":"#检查当前标签","children":[]},{"level":2,"title":"创建标签","slug":"创建标签","link":"#创建标签","children":[]},{"level":2,"title":"查看标签信息","slug":"查看标签信息","link":"#查看标签信息","children":[]},{"level":2,"title":"推送标签","slug":"推送标签","link":"#推送标签","children":[]},{"level":2,"title":"删除标签","slug":"删除标签","link":"#删除标签","children":[]}],"git":{"createdTime":1708325028000,"updatedTime":1709363547000},"readingTime":{"minutes":0.52,"words":155},"filePathRelative":"develop/git/git-tag.md","localizedDate":"2024年2月19日","autoDesc":true,"excerpt":"\\n<h2>检查当前标签</h2>\\n<div class=\\"language-bash\\" data-highlighter=\\"prismjs\\" data-ext=\\"sh\\" data-title=\\"列出所有标签\\"><pre class=\\"language-bash\\"><code><span class=\\"line\\"><span class=\\"token function\\">git</span> tag</span>\\n<span class=\\"line\\"></span></code></pre></div><h2>创建标签</h2>\\n<div class=\\"language-bash\\" data-highlighter=\\"prismjs\\" data-ext=\\"sh\\" data-title=\\"创建轻量标签\\"><pre class=\\"language-bash\\"><code><span class=\\"line\\"><span class=\\"token function\\">git</span> tag v1.0.0</span>\\n<span class=\\"line\\"></span></code></pre></div>"}`);export{h as comp,g as data};
