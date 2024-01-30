import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,a}from"./app-_kw0YS15.js";const i={},t=a(`<h1 id="contribution-guide" tabindex="-1"><a class="header-anchor" href="#contribution-guide" aria-hidden="true">#</a> Contribution Guide</h1><h2 id="clone" tabindex="-1"><a class="header-anchor" href="#clone" aria-hidden="true">#</a> Clone</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:GuoXiCheng/TinyCRUD.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="install-dependencies" tabindex="-1"><a class="header-anchor" href="#install-dependencies" aria-hidden="true">#</a> Install Dependencies</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> TinyCRUD

<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="run-tests" tabindex="-1"><a class="header-anchor" href="#run-tests" aria-hidden="true">#</a> Run Tests</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>By default, in order to ensure that the test is not affected by the test environment, the test will be performed in a simulated environment. If you need to use the real network request API to perform the test, you need to create a .env file in the project root directory with the following content:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">USE_API</span><span class="token operator">=</span>true <span class="token comment"># Whether to use a real network environment</span>
<span class="token assign-left variable">TEST_ENCRYPT_KEY</span><span class="token operator">=</span>YourEncryptKey

<span class="token comment"># Gitee</span>
<span class="token assign-left variable">TEST_GITEE_TOKEN</span><span class="token operator">=</span>Your Gitee Token
<span class="token assign-left variable">TEST_GITEE_OWNER</span><span class="token operator">=</span>Your Gitee Owner
<span class="token assign-left variable">TEST_GITEE_REPO</span><span class="token operator">=</span>Your Gitee Repo
<span class="token assign-left variable">TEST_GITEE_NUMBER</span><span class="token operator">=</span>Your Gitee Issue Number

<span class="token comment"># Github</span>
<span class="token assign-left variable">TEST_GITHUB_TOKEN</span><span class="token operator">=</span>Your Github Token
<span class="token assign-left variable">TEST_GITHUB_OWNER</span><span class="token operator">=</span>Your Github Owner
<span class="token assign-left variable">TEST_GITHUB_REPO</span><span class="token operator">=</span>Your Github Repo
<span class="token assign-left variable">TEST_GITHUB_NUMBER</span><span class="token operator">=</span>Your Github Issue Number

<span class="token comment"># Gitlab</span>
<span class="token assign-left variable">TEST_GITLAB_TOKEN</span><span class="token operator">=</span>Your Gitlab Token
<span class="token assign-left variable">TEST_GITLAB_PROJECT_ID</span><span class="token operator">=</span>Your Gitlab Project ID
<span class="token assign-left variable">TEST_GITLAB_NUMBER</span><span class="token operator">=</span>Your Gitlab Issue Number
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>If USE_API is set to true, a real network request will be made during the test, so whether the test passes depends not only on whether the code is correct, but also on whether your network environment is normal and the configuration is correct.</p></div>`,10),l=[t];function r(o,c){return n(),s("div",null,l)}const u=e(i,[["render",r],["__file","contribution-guide.html.vue"]]);export{u as default};
