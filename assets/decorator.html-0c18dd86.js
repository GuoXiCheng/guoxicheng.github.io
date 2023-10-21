import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as i,e as u,w as a,b as r,f as s,d as n}from"./app-262de2ea.js";const k={},d=r(`<h1 id="装饰模式" tabindex="-1"><a class="header-anchor" href="#装饰模式" aria-hidden="true">#</a> 装饰模式</h1><h2 id="typescript自定装饰器" tabindex="-1"><a class="header-anchor" href="#typescript自定装饰器" aria-hidden="true">#</a> Typescript自定装饰器</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">clock</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&#39;run time&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span> propertyKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
        descriptor<span class="token operator">:</span> PropertyDescriptor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 保存原方法的引用</span>
        <span class="token keyword">const</span> originalMethod <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>value<span class="token punctuation">;</span>

        <span class="token comment">// 编辑 descriptor 参数的value属性</span>
        descriptor<span class="token punctuation">.</span><span class="token function-variable function">value</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// 在调用原方法前做点什么</span>

                <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">originalMethod</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用原方法</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

                <span class="token comment">// 在调用原方法后做点什么</span>

            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">// 返回编辑后的属性描述对象</span>
        <span class="token keyword">return</span> descriptor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="python自定义装饰器" tabindex="-1"><a class="header-anchor" href="#python自定义装饰器" aria-hidden="true">#</a> Python自定义装饰器</h2>`,4),m=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"my_decorator"),n("span",{class:"token punctuation"},"("),s("function"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"wrapped"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("args"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"**"),s("kwargs"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`

        `),n("span",{class:"token comment"},"# 在调用原始函数前做点什么"),s(`
        result `),n("span",{class:"token operator"},"="),s(" function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("args"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"**"),s("kwargs"),n("span",{class:"token punctuation"},")"),s(`

        `),n("span",{class:"token comment"},"# 在调用原始函数后做点什么"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" result  "),n("span",{class:"token comment"},"# 返回结果"),s(`

    `),n("span",{class:"token comment"},"# 返回wrapper作为装饰函数"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` wrapped


`),n("span",{class:"token decorator annotation punctuation"},"@my_decorator"),s(`
`),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"my_function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"pass"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" functools "),n("span",{class:"token keyword"},"import"),s(` wraps


`),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"my_decorator"),n("span",{class:"token punctuation"},"("),s("message"),n("span",{class:"token operator"},"="),n("span",{class:"token boolean"},"None"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"decorate"),n("span",{class:"token punctuation"},"("),s("func"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`

        msg `),n("span",{class:"token operator"},"="),s(" message "),n("span",{class:"token keyword"},"if"),s(" message "),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token string"},'"no message"'),s(`

        `),n("span",{class:"token decorator annotation punctuation"},"@wraps"),n("span",{class:"token punctuation"},"("),s("func"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"wrapped"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("args"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"**"),s("kwargs"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("msg"),n("span",{class:"token punctuation"},")"),s(`

            `),n("span",{class:"token comment"},"# 在调用原始函数前做点什么"),s(`
            result `),n("span",{class:"token operator"},"="),s(" func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("args"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"**"),s("kwargs"),n("span",{class:"token punctuation"},")"),s(`

            `),n("span",{class:"token comment"},"# 在调用原始函数后做点什么"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" result  "),n("span",{class:"token comment"},"# 返回结果"),s(`

        `),n("span",{class:"token comment"},"# 返回wrapper作为装饰函数"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` wrapped

    `),n("span",{class:"token keyword"},"return"),s(` decorate


`),n("span",{class:"token decorator annotation punctuation"},"@my_decorator"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"my_function_1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"pass"),s(`


`),n("span",{class:"token decorator annotation punctuation"},"@my_decorator"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"new message"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"my_function_2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"pass"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function b(y,w){const o=p("CodeTabs");return l(),i("div",null,[d,u(o,{id:"10",data:[{id:"无参装饰器"},{id:"有参装饰器"}]},{title0:a(({value:e,isActive:t})=>[s("无参装饰器")]),title1:a(({value:e,isActive:t})=>[s("有参装饰器")]),tab0:a(({value:e,isActive:t})=>[m]),tab1:a(({value:e,isActive:t})=>[v]),_:1})])}const h=c(k,[["render",b],["__file","decorator.html.vue"]]);export{h as default};
