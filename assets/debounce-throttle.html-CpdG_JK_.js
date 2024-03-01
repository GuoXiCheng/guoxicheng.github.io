import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as d,a as r}from"./app-ClDIY6Nr.js";const n={},o=r('<h1 id="防抖和节流" tabindex="-1"><a class="header-anchor" href="#防抖和节流"><span>防抖和节流</span></a></h1><h2 id="防抖-vs-节流" tabindex="-1"><a class="header-anchor" href="#防抖-vs-节流"><span>防抖 VS 节流</span></a></h2><table border="1"><tr><th>特性</th><th>防抖</th><th>节流</th></tr><tr><td>原理</td><td>在事件触发后，等待一定的延迟时间。如果在此时间内再次触发了事件，则重新开始计时。</td><td>在一定时间间隔内只允许函数执行一次。</td></tr><tr><td>关注点</td><td>停止触发后的执行</td><td>在活动期间有规律的执行</td></tr><tr><td>使用场景</td><td>适用于连续事件只需在最后一次触发时响应的场景，如输入框自动完成。</td><td>适用于限制函数执行频率的场景，如滚动事件、窗口调整大小等。</td></tr><tr><td>效果</td><td>只有在事件停止触发后的一定时间内没有再次触发事件时，函数才会执行。</td><td>即使事件频繁触发，函数也只会按照设定的时间间隔执行。</td></tr></table>',3),a=[o];function c(i,h){return e(),d("div",null,a)}const s=t(n,[["render",c],["__file","debounce-throttle.html.vue"]]),m=JSON.parse(`{"path":"/article/debounce-throttle.html","title":"防抖和节流","lang":"zh-CN","frontmatter":{"description":"防抖和节流 防抖 VS 节流 ","head":[["meta",{"property":"og:url","content":"https://guoxicheng.top/article/debounce-throttle.html"}],["meta",{"property":"og:site_name","content":"Guo's Page"}],["meta",{"property":"og:title","content":"防抖和节流"}],["meta",{"property":"og:description","content":"防抖和节流 防抖 VS 节流 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-01T05:30:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-01T05:30:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"防抖和节流\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-01T05:30:25.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"防抖 VS 节流","slug":"防抖-vs-节流","link":"#防抖-vs-节流","children":[]}],"git":{"createdTime":1709271025000,"updatedTime":1709271025000},"readingTime":{"minutes":0.85,"words":254},"filePathRelative":"article/debounce-throttle.md","localizedDate":"2024年3月1日","autoDesc":true,"excerpt":"\\n<h2>防抖 VS 节流</h2>\\n<table border=\\"1\\">\\n  <tbody><tr>\\n    <th>特性</th>\\n    <th>防抖</th>\\n    <th>节流</th>\\n  </tr>\\n  <tr>\\n    <td>原理</td>\\n    <td>在事件触发后，等待一定的延迟时间。如果在此时间内再次触发了事件，则重新开始计时。</td>\\n    <td>在一定时间间隔内只允许函数执行一次。</td>\\n  </tr>\\n    <tr>\\n    <td>关注点</td>\\n    <td>停止触发后的执行</td>\\n    <td>在活动期间有规律的执行</td>\\n  </tr>\\n  <tr>\\n    <td>使用场景</td>\\n    <td>适用于连续事件只需在最后一次触发时响应的场景，如输入框自动完成。</td>\\n    <td>适用于限制函数执行频率的场景，如滚动事件、窗口调整大小等。</td>\\n  </tr>\\n  <tr>\\n    <td>效果</td>\\n    <td>只有在事件停止触发后的一定时间内没有再次触发事件时，函数才会执行。</td>\\n    <td>即使事件频繁触发，函数也只会按照设定的时间间隔执行。</td>\\n  </tr>\\n</tbody></table>"}`);export{s as comp,m as data};
