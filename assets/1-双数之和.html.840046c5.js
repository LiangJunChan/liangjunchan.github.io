import{_ as t,o as p,c as e,b as n,d as o,e as s,a as c,r as l}from"./app.2323e4f1.js";var u="/assets/1.68d06325.jpg";const i={},r={id:"_1-\u4E24\u6570\u4E4B\u548C",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#_1-\u4E24\u6570\u4E4B\u548C","aria-hidden":"true"},"#",-1),d=s(),m={href:"https://leetcode-cn.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},v=s("1-\u4E24\u6570\u4E4B\u548C"),b=c(`<blockquote><p>\u7ED9\u5B9A\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums \u548C\u4E00\u4E2A\u6574\u6570\u76EE\u6807\u503C target\uFF0C\u8BF7\u4F60\u5728\u8BE5\u6570\u7EC4\u4E2D\u627E\u51FA \u548C\u4E3A\u76EE\u6807\u503C target \u7684\u90A3 \u4E24\u4E2A \u6574\u6570\uFF0C\u5E76\u8FD4\u56DE\u5B83\u4EEC\u7684\u6570\u7EC4\u4E0B\u6807\u3002</p><p>\u4F60\u53EF\u4EE5\u5047\u8BBE\u6BCF\u79CD\u8F93\u5165\u53EA\u4F1A\u5BF9\u5E94\u4E00\u4E2A\u7B54\u6848\u3002\u4F46\u662F\uFF0C\u6570\u7EC4\u4E2D\u540C\u4E00\u4E2A\u5143\u7D20\u5728\u7B54\u6848\u91CC\u4E0D\u80FD\u91CD\u590D\u51FA\u73B0\u3002</p><p>\u4F60\u53EF\u4EE5\u6309\u4EFB\u610F\u987A\u5E8F\u8FD4\u56DE\u7B54\u6848\u3002</p><p>\u793A\u4F8B 1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Anums = [2,7,11,15], target = 9
\u8F93\u51FA\uFF1A[0,1]
\u89E3\u91CA\uFF1A\u56E0\u4E3A nums[0] + nums[1] == 9 \uFF0C\u8FD4\u56DE [0, 1] \u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B 2\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Anums = [3,2,4], target = 6
\u8F93\u51FA\uFF1A[1,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B 3\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Anums = [3,3], target = 6
\u8F93\u51FA\uFF1A[0,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63D0\u793A\uFF1A</p><ul><li><code>2 &lt;= nums.length &lt;= 104</code></li><li><code>-109 &lt;= nums[i] &lt;= 109</code></li><li><code>-109 &lt;= target &lt;= 109</code></li><li><strong>\u53EA\u4F1A\u5B58\u5728\u4E00\u4E2A\u6709\u6548\u7B54\u6848</strong></li></ul><p>\u8FDB\u9636\uFF1A\u4F60\u53EF\u4EE5\u60F3\u51FA\u4E00\u4E2A\u65F6\u95F4\u590D\u6742\u5EA6\u5C0F\u4E8E O(n2) \u7684\u7B97\u6CD5\u5417\uFF1F</p></blockquote><img src="`+u+`" alt="1" style="zoom:80%;"><h2 id="\u65B9\u6CD5\u4E00-\u66B4\u529B\u6C42\u89E3\u2014\u2014o-n2" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E00-\u66B4\u529B\u6C42\u89E3\u2014\u2014o-n2" aria-hidden="true">#</a> \u65B9\u6CD5\u4E00\uFF1A\u66B4\u529B\u6C42\u89E3\u2014\u2014O(N\xB2)</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span>j<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u6CD5\u4E8C-hashmap\u2014\u2014o-n" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E8C-hashmap\u2014\u2014o-n" aria-hidden="true">#</a> \u65B9\u6CD5\u4E8C\uFF1AHashMap\u2014\u2014O(N)</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>target<span class="token operator">-</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token operator">-</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">//\u6216\u8005\u76F4\u63A5\u7528\u4E00\u4E2A\u5BF9\u8C61</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> obj<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>target<span class="token operator">-</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span> obj<span class="token punctuation">[</span>target<span class="token operator">-</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>   		 <span class="token comment">//if(obj.hasOwnProperty(target-nums[i])) return [i, obj[target-nums[i]]]</span>
    obj<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> i
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function g(h,_){const a=l("ExternalLinkIcon");return p(),e("div",null,[n("h1",r,[k,d,n("a",m,[v,o(a)])]),b])}var f=t(i,[["render",g],["__file","1-\u53CC\u6570\u4E4B\u548C.html.vue"]]);export{f as default};
