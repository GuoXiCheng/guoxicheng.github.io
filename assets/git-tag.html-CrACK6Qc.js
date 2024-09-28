import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,a}from"./app-DxlDdRj8.js";const t={},h=a('<h1 id="git-标签" tabindex="-1"><a class="header-anchor" href="#git-标签"><span>Git 标签</span></a></h1><h2 id="检查当前标签" tabindex="-1"><a class="header-anchor" href="#检查当前标签"><span>检查当前标签</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="列出所有标签" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tag</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="创建标签" tabindex="-1"><a class="header-anchor" href="#创建标签"><span>创建标签</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="创建轻量标签" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tag</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> v1.0.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="创建附注标签" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tag</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> v1.0.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;release version 1.0.0&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="查看标签信息" tabindex="-1"><a class="header-anchor" href="#查看标签信息"><span>查看标签信息</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="查看标签信息" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> v1.0.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="推送标签" tabindex="-1"><a class="header-anchor" href="#推送标签"><span>推送标签</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="推送单个标签" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> v1.0.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="推送所有标签" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --tags</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="删除标签" tabindex="-1"><a class="header-anchor" href="#删除标签"><span>删除标签</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="删除本地标签" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tag</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> v1.0.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>要删除远程标签，需要先删除本地标签，然后再删除远程标签。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="删除远程标签" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --delete</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> v1.0.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',15),l=[h];function n(d,r){return e(),s("div",null,l)}const g=i(t,[["render",n],["__file","git-tag.html.vue"]]),c=JSON.parse(`{"path":"/develop/git/git-tag.html","title":"Git 标签","lang":"zh-CN","frontmatter":{"date":"2024-02-19T00:00:00.000Z","order":3,"description":"Git 标签 检查当前标签 创建标签 查看标签信息 推送标签 删除标签 要删除远程标签，需要先删除本地标签，然后再删除远程标签。","head":[["meta",{"property":"og:url","content":"https://guoxicheng.top/develop/git/git-tag.html"}],["meta",{"property":"og:site_name","content":"Guo's Page"}],["meta",{"property":"og:title","content":"Git 标签"}],["meta",{"property":"og:description","content":"Git 标签 检查当前标签 创建标签 查看标签信息 推送标签 删除标签 要删除远程标签，需要先删除本地标签，然后再删除远程标签。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-02T07:12:27.000Z"}],["meta",{"property":"article:published_time","content":"2024-02-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-02T07:12:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git 标签\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-02T07:12:27.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"检查当前标签","slug":"检查当前标签","link":"#检查当前标签","children":[]},{"level":2,"title":"创建标签","slug":"创建标签","link":"#创建标签","children":[]},{"level":2,"title":"查看标签信息","slug":"查看标签信息","link":"#查看标签信息","children":[]},{"level":2,"title":"推送标签","slug":"推送标签","link":"#推送标签","children":[]},{"level":2,"title":"删除标签","slug":"删除标签","link":"#删除标签","children":[]}],"git":{"createdTime":1708325028000,"updatedTime":1709363547000},"readingTime":{"minutes":0.52,"words":155},"filePathRelative":"develop/git/git-tag.md","localizedDate":"2024年2月19日","autoDesc":true,"excerpt":"\\n<h2>检查当前标签</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"列出所有标签\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> tag</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}`);export{g as comp,c as data};