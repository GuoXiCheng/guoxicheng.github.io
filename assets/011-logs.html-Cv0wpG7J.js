import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,a as o}from"./app-Bmj3ZKvS.js";const n={},r=o('<h1 id="日志" tabindex="-1"><a class="header-anchor" href="#日志"><span>日志</span></a></h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想"><span>核心思想</span></a></h2><p>把日志当作事件流。</p><h2 id="应用的日志管理" tabindex="-1"><a class="header-anchor" href="#应用的日志管理"><span>应用的日志管理</span></a></h2><p>12-Factor APP 不应该试图自己管理日志的输出流，不应写或维护日志文件，每一个进程都会直接提供标准输出事件流。</p><p>在开发环境中，可以通过实时终端查看应用活动；在预发布或线上环境中，每个进程的输出流由运行环境截获，并发送给一个最终处理程序，用于查看或是长期存档。</p>',6),i=[r];function p(c,s){return t(),a("div",null,i)}const h=e(n,[["render",p],["__file","011-logs.html.vue"]]),m=JSON.parse(`{"path":"/dump/software-engineering/twelve-factor/011-logs.html","title":"日志","lang":"zh-CN","frontmatter":{"date":"2024-03-08T00:00:00.000Z","description":"日志 核心思想 把日志当作事件流。 应用的日志管理 12-Factor APP 不应该试图自己管理日志的输出流，不应写或维护日志文件，每一个进程都会直接提供标准输出事件流。 在开发环境中，可以通过实时终端查看应用活动；在预发布或线上环境中，每个进程的输出流由运行环境截获，并发送给一个最终处理程序，用于查看或是长期存档。","head":[["meta",{"property":"og:url","content":"https://guoxicheng.top/dump/software-engineering/twelve-factor/011-logs.html"}],["meta",{"property":"og:site_name","content":"Guo's Page"}],["meta",{"property":"og:title","content":"日志"}],["meta",{"property":"og:description","content":"日志 核心思想 把日志当作事件流。 应用的日志管理 12-Factor APP 不应该试图自己管理日志的输出流，不应写或维护日志文件，每一个进程都会直接提供标准输出事件流。 在开发环境中，可以通过实时终端查看应用活动；在预发布或线上环境中，每个进程的输出流由运行环境截获，并发送给一个最终处理程序，用于查看或是长期存档。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-19T03:23:52.000Z"}],["meta",{"property":"article:published_time","content":"2024-03-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-19T03:23:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"日志\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-19T03:23:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"核心思想","slug":"核心思想","link":"#核心思想","children":[]},{"level":2,"title":"应用的日志管理","slug":"应用的日志管理","link":"#应用的日志管理","children":[]}],"git":{"createdTime":1709540171000,"updatedTime":1718767432000},"readingTime":{"minutes":0.46,"words":138},"filePathRelative":"dump/software-engineering/twelve-factor/011-logs.md","localizedDate":"2024年3月8日","autoDesc":true,"excerpt":"\\n<h2>核心思想</h2>\\n<p>把日志当作事件流。</p>\\n<h2>应用的日志管理</h2>\\n<p>12-Factor APP 不应该试图自己管理日志的输出流，不应写或维护日志文件，每一个进程都会直接提供标准输出事件流。</p>\\n<p>在开发环境中，可以通过实时终端查看应用活动；在预发布或线上环境中，每个进程的输出流由运行环境截获，并发送给一个最终处理程序，用于查看或是长期存档。</p>\\n"}`);export{h as comp,m as data};
