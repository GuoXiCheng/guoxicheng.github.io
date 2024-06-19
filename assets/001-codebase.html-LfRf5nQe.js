import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,a as n}from"./app-Bmj3ZKvS.js";const i="/assets/image/software-engineering/codebase-deploys.png",o={},r=n('<h1 id="基准代码" tabindex="-1"><a class="header-anchor" href="#基准代码"><span>基准代码</span></a></h1><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想"><span>核心思想</span></a></h2><p>在12-Factor APP中，一份基准代码应与一个应用保持一一对应关系，但可以存在多份部署。</p><h2 id="基准代码的定义" tabindex="-1"><a class="header-anchor" href="#基准代码的定义"><span>基准代码的定义</span></a></h2><ul><li><p>在集中式版本控制系统（如SVN）中，基准代码是指单一的代码库。</p></li><li><p>在分布式版本控制系统（如Git）中，基准代码是指最上游的代码库。</p></li></ul><h2 id="基准代码与应用的关系" tabindex="-1"><a class="header-anchor" href="#基准代码与应用的关系"><span>基准代码与应用的关系</span></a></h2><p>一份基准代码对应一个应用，多份基准代码对应多个应用，多个应用组成一个分布式系统。</p><p>在分布式系统中，每一个组件都是一个应用，每个应用都可以使用12-Factor进行开发。</p><p>多个应用共享一份基准代码有悖于12-Factor的原则，可以将共享代码拆分为独立的类库，然后将类库发布到代码仓库或包管理器中。</p><h2 id="部署的多样性" tabindex="-1"><a class="header-anchor" href="#部署的多样性"><span>部署的多样性</span></a></h2><p>一份基准代码的多份部署中，每份部署都相当于一个应用的实例，例如：开发环境、测试环境、生产环境等。</p><p>所有部署的基准代码相同，但可以有不同的版本。</p>',13),p=[r];function s(c,l){return t(),a("div",null,p)}const h=e(o,[["render",s],["__file","001-codebase.html.vue"]]),m=JSON.parse(`{"path":"/dump/software-engineering/twelve-factor/001-codebase.html","title":"基准代码","lang":"zh-CN","frontmatter":{"date":"2024-03-06T00:00:00.000Z","description":"基准代码 核心思想 在12-Factor APP中，一份基准代码应与一个应用保持一一对应关系，但可以存在多份部署。 基准代码的定义 在集中式版本控制系统（如SVN）中，基准代码是指单一的代码库。 在分布式版本控制系统（如Git）中，基准代码是指最上游的代码库。 基准代码与应用的关系 一份基准代码对应一个应用，多份基准代码对应多个应用，多个应用组成一个分...","head":[["meta",{"property":"og:url","content":"https://guoxicheng.top/dump/software-engineering/twelve-factor/001-codebase.html"}],["meta",{"property":"og:site_name","content":"Guo's Page"}],["meta",{"property":"og:title","content":"基准代码"}],["meta",{"property":"og:description","content":"基准代码 核心思想 在12-Factor APP中，一份基准代码应与一个应用保持一一对应关系，但可以存在多份部署。 基准代码的定义 在集中式版本控制系统（如SVN）中，基准代码是指单一的代码库。 在分布式版本控制系统（如Git）中，基准代码是指最上游的代码库。 基准代码与应用的关系 一份基准代码对应一个应用，多份基准代码对应多个应用，多个应用组成一个分..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://guoxicheng.top/assets/image/software-engineering/codebase-deploys.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-19T03:23:52.000Z"}],["meta",{"property":"article:published_time","content":"2024-03-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-19T03:23:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基准代码\\",\\"image\\":[\\"https://guoxicheng.top/assets/image/software-engineering/codebase-deploys.png\\"],\\"datePublished\\":\\"2024-03-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-19T03:23:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"核心思想","slug":"核心思想","link":"#核心思想","children":[]},{"level":2,"title":"基准代码的定义","slug":"基准代码的定义","link":"#基准代码的定义","children":[]},{"level":2,"title":"基准代码与应用的关系","slug":"基准代码与应用的关系","link":"#基准代码与应用的关系","children":[]},{"level":2,"title":"部署的多样性","slug":"部署的多样性","link":"#部署的多样性","children":[]}],"git":{"createdTime":1709540171000,"updatedTime":1718767432000},"readingTime":{"minutes":1.03,"words":308},"filePathRelative":"dump/software-engineering/twelve-factor/001-codebase.md","localizedDate":"2024年3月6日","autoDesc":true,"excerpt":"\\n<figure><img src=\\"/assets/image/software-engineering/codebase-deploys.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>核心思想</h2>\\n<p>在12-Factor APP中，一份基准代码应与一个应用保持一一对应关系，但可以存在多份部署。</p>\\n<h2>基准代码的定义</h2>\\n<ul>\\n<li>\\n<p>在集中式版本控制系统（如SVN）中，基准代码是指单一的代码库。</p>\\n</li>\\n<li>\\n<p>在分布式版本控制系统（如Git）中，基准代码是指最上游的代码库。</p>\\n</li>\\n</ul>"}`);export{h as comp,m as data};
