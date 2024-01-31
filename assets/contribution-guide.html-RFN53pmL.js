import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,a as e}from"./app-76qPPWJm.js";const i={},l=e(`<h1 id="贡献指南" tabindex="-1"><a class="header-anchor" href="#贡献指南" aria-hidden="true">#</a> 贡献指南</h1><h2 id="克隆" tabindex="-1"><a class="header-anchor" href="#克隆" aria-hidden="true">#</a> 克隆</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:GuoXiCheng/TinyCRUD.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> TinyCRUD

<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行测试" tabindex="-1"><a class="header-anchor" href="#执行测试" aria-hidden="true">#</a> 执行测试</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认情况下，为了保证测试不受测试环境干扰，测试会在模拟环境下执行。如果需要使用真实网络请求API执行测试，需要在项目根目录下新建.env文件，内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">USE_API</span><span class="token operator">=</span>true <span class="token comment"># 是否使用真实网络环境</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果设置USE_API为true，在执行测试过程中会发起真实的网络请求，因此测试是否通过不仅取决于代码是否正确，还取决于你的网络环境是否正常和配置是否正确。</p></div>`,10),t=[l];function r(o,c){return a(),n("div",null,t)}const u=s(i,[["render",r],["__file","contribution-guide.html.vue"]]);export{u as default};
