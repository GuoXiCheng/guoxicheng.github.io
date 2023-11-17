import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-a614ae52.js";const p={},e=t(`<h1 id="责任链模式" tabindex="-1"><a class="header-anchor" href="#责任链模式" aria-hidden="true">#</a> 责任链模式</h1><h2 id="现实世界类比" tabindex="-1"><a class="header-anchor" href="#现实世界类比" aria-hidden="true">#</a> 现实世界类比</h2><p>在击鼓传花的游戏中，数个玩家可以围成一圈，在鼓声响起时，花（或小物件）在所有人手中依次传递，当鼓声停止时，花在谁的手里谁就要表演节目。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/chain-of-responsibility/real-world.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Player</span> <span class="token punctuation">{</span>
    <span class="token function">setNext</span><span class="token punctuation">(</span>player<span class="token operator">:</span> Player<span class="token punctuation">)</span><span class="token operator">:</span> Player<span class="token punctuation">;</span>
    <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractPlayer</span> <span class="token keyword">implements</span> <span class="token class-name">Player</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> nextPlayer<span class="token operator">!</span><span class="token operator">:</span> Player<span class="token punctuation">;</span>

    <span class="token keyword">private</span> playerName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>playerName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>playerName <span class="token operator">=</span> playerName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">setNext</span><span class="token punctuation">(</span>player<span class="token operator">:</span> Player<span class="token punctuation">)</span><span class="token operator">:</span> Player <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nextPlayer <span class="token operator">=</span> player<span class="token punctuation">;</span>
        <span class="token keyword">return</span> player<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0.1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 10%概率拿到花</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>playerName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 拿到了花</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nextPlayer<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">GamePlayer</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractPlayer</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>playerName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>playerName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> player1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GamePlayer</span><span class="token punctuation">(</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> player2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GamePlayer</span><span class="token punctuation">(</span><span class="token string">&quot;小红&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> player3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GamePlayer</span><span class="token punctuation">(</span><span class="token string">&quot;小李&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

player1<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>player2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>player3<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>player1<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> player1<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发场景类比" tabindex="-1"><a class="header-anchor" href="#开发场景类比" aria-hidden="true">#</a> 开发场景类比</h2><p>在开发中一个常见的情景是处理前端的请求，在处理业务逻辑之前可能会需要对用户请求的内容进行验证，例如：数据验证、用户身份验证、用户权限验证等。在所有验证通过之后，才会处理业务逻辑。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/chain-of-responsibility/development.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>
    <span class="token function">setNext</span><span class="token punctuation">(</span>handler<span class="token operator">:</span> Handler<span class="token punctuation">)</span><span class="token operator">:</span> Handler<span class="token punctuation">;</span>
    <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractHandler</span> <span class="token keyword">implements</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> nextHandler<span class="token operator">!</span><span class="token operator">:</span> Handler<span class="token punctuation">;</span>

    <span class="token function">setNext</span><span class="token punctuation">(</span>handler<span class="token operator">:</span> Handler<span class="token punctuation">)</span><span class="token operator">:</span> Handler <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler <span class="token operator">=</span> handler<span class="token punctuation">;</span>
        <span class="token keyword">return</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token string">&quot;can not handle&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DataVerificationHandler</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>
    <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>request <span class="token operator">===</span> <span class="token string">&quot;数据验证&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;数据验证通过&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PermissionVerification</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>
    <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>request <span class="token operator">===</span> <span class="token string">&quot;权限验证&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;权限验证通过&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dataVerification <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataVerificationHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> permissionVerification <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PermissionVerification</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

dataVerification<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>permissionVerification<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dataVerification<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token string">&quot;数据验证&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dataVerification<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token string">&quot;权限验证&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dataVerification<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token string">&quot;其他&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","chain-of-responsibility.html.vue"]]);export{k as default};
