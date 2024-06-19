import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,a as n}from"./app-Bmj3ZKvS.js";const r="/assets/image/software-engineering/process-types.png",i={},o=n('<h1 id="并发" tabindex="-1"><a class="header-anchor" href="#并发"><span>并发</span></a></h1><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想"><span>核心思想</span></a></h2><p>通过进程模型进行水平扩展。</p><h2 id="进程模型基本构成" tabindex="-1"><a class="header-anchor" href="#进程模型基本构成"><span>进程模型基本构成</span></a></h2><p>在12-Factor APP中，一个应用被设计为一组小型、独立的进程。这些进程可以是处理Web请求的web进程、处理后台任务的worker进程，或是执行其他特定任务的进程。</p><p>每个进程都是无状态的，它们不会直接共享内存或存储状态信息。这种设计使得每个进程都可以独立运行，互不干扰。</p><h2 id="扩展的类型" tabindex="-1"><a class="header-anchor" href="#扩展的类型"><span>扩展的类型</span></a></h2><h3 id="垂直扩展" tabindex="-1"><a class="header-anchor" href="#垂直扩展"><span>垂直扩展</span></a></h3><p>通过增加单个进程的计算资源（如CPU、内存）来增加处理能力。这是传统的扩展方式，但它有物理和成本的限制。</p><h3 id="水平扩展" tabindex="-1"><a class="header-anchor" href="#水平扩展"><span>水平扩展</span></a></h3><p>通过增加进程的实例数量来扩展处理能力。在12-Factor APP中，这通常是通过增加同一类型的无状态进程实例来实现的，比如增加更多的web进程来处理更多的并发用户请求。</p>',12),c=[o];function s(p,l){return t(),a("div",null,c)}const g=e(i,[["render",s],["__file","008-concurrency.html.vue"]]),m=JSON.parse(`{"path":"/dump/software-engineering/twelve-factor/008-concurrency.html","title":"并发","lang":"zh-CN","frontmatter":{"date":"2024-03-07T00:00:00.000Z","description":"并发 核心思想 通过进程模型进行水平扩展。 进程模型基本构成 在12-Factor APP中，一个应用被设计为一组小型、独立的进程。这些进程可以是处理Web请求的web进程、处理后台任务的worker进程，或是执行其他特定任务的进程。 每个进程都是无状态的，它们不会直接共享内存或存储状态信息。这种设计使得每个进程都可以独立运行，互不干扰。 扩展的类型 ...","head":[["meta",{"property":"og:url","content":"https://guoxicheng.top/dump/software-engineering/twelve-factor/008-concurrency.html"}],["meta",{"property":"og:site_name","content":"Guo's Page"}],["meta",{"property":"og:title","content":"并发"}],["meta",{"property":"og:description","content":"并发 核心思想 通过进程模型进行水平扩展。 进程模型基本构成 在12-Factor APP中，一个应用被设计为一组小型、独立的进程。这些进程可以是处理Web请求的web进程、处理后台任务的worker进程，或是执行其他特定任务的进程。 每个进程都是无状态的，它们不会直接共享内存或存储状态信息。这种设计使得每个进程都可以独立运行，互不干扰。 扩展的类型 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://guoxicheng.top/assets/image/software-engineering/process-types.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-19T03:23:52.000Z"}],["meta",{"property":"article:published_time","content":"2024-03-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-19T03:23:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"并发\\",\\"image\\":[\\"https://guoxicheng.top/assets/image/software-engineering/process-types.png\\"],\\"datePublished\\":\\"2024-03-07T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-19T03:23:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"核心思想","slug":"核心思想","link":"#核心思想","children":[]},{"level":2,"title":"进程模型基本构成","slug":"进程模型基本构成","link":"#进程模型基本构成","children":[]},{"level":2,"title":"扩展的类型","slug":"扩展的类型","link":"#扩展的类型","children":[{"level":3,"title":"垂直扩展","slug":"垂直扩展","link":"#垂直扩展","children":[]},{"level":3,"title":"水平扩展","slug":"水平扩展","link":"#水平扩展","children":[]}]}],"git":{"createdTime":1709540171000,"updatedTime":1718767432000},"readingTime":{"minutes":0.89,"words":268},"filePathRelative":"dump/software-engineering/twelve-factor/008-concurrency.md","localizedDate":"2024年3月7日","autoDesc":true,"excerpt":"\\n<figure><img src=\\"/assets/image/software-engineering/process-types.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>核心思想</h2>\\n<p>通过进程模型进行水平扩展。</p>\\n<h2>进程模型基本构成</h2>\\n<p>在12-Factor APP中，一个应用被设计为一组小型、独立的进程。这些进程可以是处理Web请求的web进程、处理后台任务的worker进程，或是执行其他特定任务的进程。</p>\\n<p>每个进程都是无状态的，它们不会直接共享内存或存储状态信息。这种设计使得每个进程都可以独立运行，互不干扰。</p>"}`);export{g as comp,m as data};
