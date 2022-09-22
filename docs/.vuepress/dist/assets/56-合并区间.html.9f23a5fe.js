import{_ as t,r as e,o as p,c as o,b as n,d as l,e as s,a as c}from"./app.9c021dc2.js";const i={},u={id:"_56-\u5408\u5E76\u533A\u95F4",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#_56-\u5408\u5E76\u533A\u95F4","aria-hidden":"true"},"#",-1),k=s(),d={href:"https://leetcode-cn.com/problems/merge-intervals/",target:"_blank",rel:"noopener noreferrer"},v=s("56-\u5408\u5E76\u533A\u95F4"),m=c(`<blockquote><p>\u4EE5\u6570\u7EC4 intervals \u8868\u793A\u82E5\u5E72\u4E2A\u533A\u95F4\u7684\u96C6\u5408\uFF0C\u5176\u4E2D\u5355\u4E2A\u533A\u95F4\u4E3A intervals[i] = [starti, endi] \u3002\u8BF7\u4F60\u5408\u5E76\u6240\u6709\u91CD\u53E0\u7684\u533A\u95F4\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u4E0D\u91CD\u53E0\u7684\u533A\u95F4\u6570\u7EC4\uFF0C\u8BE5\u6570\u7EC4\u9700\u6070\u597D\u8986\u76D6\u8F93\u5165\u4E2D\u7684\u6240\u6709\u533A\u95F4\u3002</p><p><strong>\u793A\u4F8B 1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Aintervals = [[1,3],[2,6],[8,10],[15,18]]
\u8F93\u51FA\uFF1A[[1,6],[8,10],[15,18]]
\u89E3\u91CA\uFF1A\u533A\u95F4 [1,3] \u548C [2,6] \u91CD\u53E0, \u5C06\u5B83\u4EEC\u5408\u5E76\u4E3A [1,6].
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Aintervals = [[1,4],[4,5]]
\u8F93\u51FA\uFF1A[[1,5]]
\u89E3\u91CA\uFF1A\u533A\u95F4 [1,4] \u548C [4,5] \u53EF\u88AB\u89C6\u4E3A\u91CD\u53E0\u533A\u95F4\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u63D0\u793A\uFF1A</strong></p><ul><li>1 &lt;= intervals.length &lt;= 104</li><li>intervals[i].length == 2</li><li>0 &lt;= starti &lt;= endi &lt;= 104</li></ul></blockquote><h2 id="\u6392\u5E8F\u2014\u2014o-nlogn" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F\u2014\u2014o-nlogn" aria-hidden="true">#</a> \u6392\u5E8F\u2014\u2014O(NlogN)</h2><ol><li>\u9996\u5148\u5BF9\u6570\u7EC4\u8FDB\u884C\u6392\u5E8F</li><li>\u904D\u5386\uFF0C\u6BCF\u4E00\u6B21\u904D\u5386\u7684\u76EE\u7684\u662F\uFF0C\u4ECE\u5F53\u524D\u4F4D\u7F6E\u5F00\u59CB\uFF0C\u7528\u4E00\u4E2A\u53D8\u91CFright\u8BB0\u5F55\uFF0C\u5982\u679C\u4E0B\u4E00\u4E2A\u96C6\u5408\u7684\u5DE6\u533A\u95F4\u5C0F\u4E8E\u5F53\u524D\u96C6\u5408\u7684\u53F3\u533A\u95F4\uFF0C\u4E5F\u5C31\u662Fintervals[i+1] [0] &lt; intervals[i] [1]\uFF0C\u5219\u7EE7\u7EED\u5224\u65AD\u4E0B\u4E0B\u4E00\u4E2A\u96C6\u5408\u7684\u5DE6\u533A\u95F4\uFF0C\u7136\u540E\u628Aright\u7684\u503C\u66F4\u6539\u4E3A\u8FD9\u4E9B\u7B26\u5408\u6761\u4EF6\u96C6\u5408\u4E2D\u53F3\u533A\u95F4\u66F4\u5927\u7684\u4E00\u4E2A\u3002</li></ol><p>\u6216\u4E00\u79CD\u8BF4\u6CD5</p><ol><li>\u9996\u5148\u6392\u5E8F</li><li>\u4F7F\u7528\u53CC\u6307\u9488\uFF0C\u5DE6\u8FB9\u6307\u9488\u6307\u5411\u5F53\u524D\u533A\u95F4\u7684\u5F00\u59CB</li><li>\u4F7F\u7528\u4E00\u4E2A\u53D8\u91CFright\u6765\u8BB0\u5F55\u8FDE\u7EED\u7684\u8303\u56F4</li><li>\u53F3\u6307\u9488\u5F00\u59CB\u5F80\u540E\u5BFB\u627E\uFF0C\u5982\u679C\u540E\u7EED\u7684\u533A\u95F4\u7684\u5F00\u59CB\u503C\u6BD4 right \u8FD8\u5C0F\uFF0C\u8BF4\u660E\u91CD\u590D\u4E86\uFF0C\u53EF\u4EE5\u5F52\u5E76\u5230\u4E00\u8D77</li><li>\u6B64\u65F6\u66F4\u65B0\u66F4\u5927\u7684\u7ED3\u675F\u503C</li><li>\u76F4\u5230\u533A\u95F4\u65AD\u5F00\uFF0C\u5C06 \u5DE6\u53F3\u6307\u9488\u4F5C\u4E3A\u533A\u95F4\u7ED3\u675F\uFF0C\u5B58\u50A8\u5230\u7B54\u6848\u91CC</li><li>\u7136\u540E\u79FB\u52A8\u5DE6\u6307\u9488\uFF0C\u8DF3\u8FC7\u4E2D\u95F4\u5DF2\u7ECF\u5408\u5E76\u7684\u533A\u95F4</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">intervals</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">intervals</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>intervals<span class="token punctuation">.</span>length<span class="token operator">&lt;=</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> intervals
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  intervals<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span>intervals<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> intervals<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> intervals<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span> intervals<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span>right <span class="token operator">&gt;=</span> intervals<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      right <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>right<span class="token punctuation">,</span> intervals<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      i<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>left<span class="token punctuation">,</span> right<span class="token punctuation">]</span><span class="token punctuation">)</span>
    i<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function b(h,g){const a=e("ExternalLinkIcon");return p(),o("div",null,[n("h1",u,[r,k,n("a",d,[v,l(a)])]),m])}const f=t(i,[["render",b],["__file","56-\u5408\u5E76\u533A\u95F4.html.vue"]]);export{f as default};
