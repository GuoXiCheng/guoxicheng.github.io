import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,a as n}from"./app-Bmj3ZKvS.js";const a={},t=n(`<h1 id="contribution-guide" tabindex="-1"><a class="header-anchor" href="#contribution-guide"><span>Contribution Guide</span></a></h1><h2 id="clone" tabindex="-1"><a class="header-anchor" href="#clone"><span>Clone</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> git@github.com:GuoXiCheng/TinyCRUD.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="install-dependencies" tabindex="-1"><a class="header-anchor" href="#install-dependencies"><span>Install Dependencies</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> TinyCRUD</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="run-tests" tabindex="-1"><a class="header-anchor" href="#run-tests"><span>Run Tests</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> test</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>By default, in order to ensure that the test is not affected by the test environment, the test will be performed in a simulated environment. If you need to use the real network request API to perform the test, you need to create a .env file in the project root directory with the following content:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">USE_API</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # Whether to use a real network environment</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">TEST_ENCRYPT_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">YourEncryptKey</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># Gitee</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">TEST_GITEE_TOKEN</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Your</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Gitee</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Token</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">TEST_GITEE_OWNER</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Your</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Gitee</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Owner</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">TEST_GITEE_REPO</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Your</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Gitee</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Repo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">TEST_GITEE_NUMBER</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Your</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Gitee</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Issue</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Number</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># Github</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">TEST_GITHUB_TOKEN</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Your</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Github</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Token</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">TEST_GITHUB_OWNER</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Your</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Github</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Owner</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">TEST_GITHUB_REPO</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Your</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Github</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Repo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">TEST_GITHUB_NUMBER</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Your</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Github</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Issue</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Number</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># Gitlab</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">TEST_GITLAB_TOKEN</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Your</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Gitlab</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Token</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">TEST_GITLAB_PROJECT_ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Your</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Gitlab</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Project</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ID</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">TEST_GITLAB_NUMBER</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Your</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Gitlab</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Issue</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Number</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>If USE_API is set to true, a real network request will be made during the test, so whether the test passes depends not only on whether the code is correct, but also on whether your network environment is normal and the configuration is correct.</p></div>`,10),l=[t];function h(r,k){return s(),e("div",null,l)}const o=i(a,[["render",h],["__file","contribution-guide.html.vue"]]),c=JSON.parse(`{"path":"/dump/en/projects/TinyCRUD-Docs/contribution-guide.html","title":"Contribution Guide","lang":"zh-CN","frontmatter":{"order":3,"description":"Contribution Guide Clone Install Dependencies Run Tests By default, in order to ensure that the test is not affected by the test environment, the test will be performed in a sim...","head":[["meta",{"property":"og:url","content":"https://guoxicheng.top/dump/en/projects/TinyCRUD-Docs/contribution-guide.html"}],["meta",{"property":"og:site_name","content":"Guo's Page"}],["meta",{"property":"og:title","content":"Contribution Guide"}],["meta",{"property":"og:description","content":"Contribution Guide Clone Install Dependencies Run Tests By default, in order to ensure that the test is not affected by the test environment, the test will be performed in a sim..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-13T07:17:20.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-13T07:17:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Contribution Guide\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-13T07:17:20.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Clone","slug":"clone","link":"#clone","children":[]},{"level":2,"title":"Install Dependencies","slug":"install-dependencies","link":"#install-dependencies","children":[]},{"level":2,"title":"Run Tests","slug":"run-tests","link":"#run-tests","children":[]}],"git":{"createdTime":1706604986000,"updatedTime":1718263040000},"readingTime":{"minutes":0.62,"words":186},"filePathRelative":"dump/en/projects/TinyCRUD-Docs/contribution-guide.md","localizedDate":"2024年1月30日","autoDesc":true,"excerpt":"\\n<h2>Clone</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> clone</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> git@github.com:GuoXiCheng/TinyCRUD.git</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}`);export{o as comp,c as data};
