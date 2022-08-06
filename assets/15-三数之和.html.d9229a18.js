import{_ as p,o as t,c as o,b as n,d as e,e as s,a as c,r as u}from"./app.2323e4f1.js";const l={},i={id:"_15-\u4E09\u6570\u4E4B\u548C",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#_15-\u4E09\u6570\u4E4B\u548C","aria-hidden":"true"},"#",-1),r=s(),d={href:"https://leetcode-cn.com/problems/3sum",target:"_blank",rel:"noopener noreferrer"},m=s("15-\u4E09\u6570\u4E4B\u548C"),v=c(`<blockquote><p>\u7ED9\u4F60\u4E00\u4E2A\u5305\u542B n \u4E2A\u6574\u6570\u7684\u6570\u7EC4 nums\uFF0C\u5224\u65AD nums \u4E2D\u662F\u5426\u5B58\u5728\u4E09\u4E2A\u5143\u7D20 a\uFF0Cb\uFF0Cc \uFF0C\u4F7F\u5F97 a + b + c = 0 \uFF1F\u8BF7\u4F60\u627E\u51FA\u6240\u6709\u548C\u4E3A 0 \u4E14\u4E0D\u91CD\u590D\u7684\u4E09\u5143\u7EC4\u3002</p><p>\u6CE8\u610F\uFF1A\u7B54\u6848\u4E2D\u4E0D\u53EF\u4EE5\u5305\u542B\u91CD\u590D\u7684\u4E09\u5143\u7EC4\u3002</p><p><strong>\u793A\u4F8B 1\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Anums = [-1,0,1,2,-1,-4]
\u8F93\u51FA\uFF1A[[-1,-1,2],[-1,0,1]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Anums = []
\u8F93\u51FA\uFF1A[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u793A\u4F8B 3\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Anums = [0]
\u8F93\u51FA\uFF1A[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u63D0\u793A\uFF1A</strong></p><ul><li><code>0 &lt;= nums.length &lt;= 3000</code></li><li><code>-105 &lt;= nums[i] &lt;= 105</code></li></ul></blockquote><h2 id="\u65B9\u6CD5\u4E00-\u66B4\u529B\u89E3\u6CD5\u4E09\u5C42\u5FAA\u73AF\u2014\u2014o-n3" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E00-\u66B4\u529B\u89E3\u6CD5\u4E09\u5C42\u5FAA\u73AF\u2014\u2014o-n3" aria-hidden="true">#</a> \u65B9\u6CD5\u4E00\uFF1A\u66B4\u529B\u89E3\u6CD5\u4E09\u5C42\u5FAA\u73AF\u2014\u2014O(N\xB3)</h2><p>\u53BB\u91CD\u6709\u96BE\u5EA6\uFF0C\u4E0D\u5EFA\u8BAE\u7528\u6B64\u65B9\u6CD5</p><p><strong>316 / 318</strong> \u4E2A\u901A\u8FC7\u6D4B\u8BD5\u7528\u4F8B,\u6848\u4F8B\u5168\u662F0\u7684\u65F6\u5019\u4F1A\u5185\u5B58\u6EA2\u51FA</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">threeSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token operator">-</span>b<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> k<span class="token operator">=</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>k<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">+</span>nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  res<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">===</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">-</span>b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>res<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&gt;</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">===</span>res<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">===</span>res<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">===</span>res<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">continue</span>
    <span class="token punctuation">}</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u6CD5\u4E8C-\u4E24\u5C42\u5FAA\u73AF-set\u2014\u2014o-n2" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E8C-\u4E24\u5C42\u5FAA\u73AF-set\u2014\u2014o-n2" aria-hidden="true">#</a> \u65B9\u6CD5\u4E8C\uFF1A\u4E24\u5C42\u5FAA\u73AF+Set\u2014\u2014O(N\xB2)</h2><p>\u53BB\u91CD\u540C\u6837\u662F\u4E2A\u9EBB\u70E6\u4E8B</p><p><strong>316 / 318</strong> \u4E2A\u901A\u8FC7\u6D4B\u8BD5\u7528\u4F8B,\u6848\u4F8B\u5168\u662F0\u7684\u65F6\u5019\u4F1A\u5185\u5B58\u6EA2\u51FA</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">threeSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token operator">-</span>b<span class="token punctuation">)</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> d<span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>d<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        d<span class="token punctuation">[</span><span class="token operator">-</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token operator">-</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  res<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">===</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">-</span>b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>res<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&gt;</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">===</span>res<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">===</span>res<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">===</span>res<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">continue</span>
    <span class="token punctuation">}</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u6CD5\u4E09-\u53CC\u6307\u9488\u2014\u2014o-n2" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E09-\u53CC\u6307\u9488\u2014\u2014o-n2" aria-hidden="true">#</a> \u65B9\u6CD5\u4E09\uFF1A\u53CC\u6307\u9488\u2014\u2014O(N\xB2)</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">threeSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&gt;</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>left<span class="token operator">&lt;</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token operator">+</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        left<span class="token operator">++</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token operator">+</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        right<span class="token operator">--</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        left<span class="token operator">++</span><span class="token punctuation">;</span>
        right<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>left<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>left<span class="token operator">++</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>right<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>right<span class="token operator">--</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function b(h,g){const a=u("ExternalLinkIcon");return t(),o("div",null,[n("h1",i,[k,r,n("a",d,[m,e(a)])]),v])}var y=p(l,[["render",b],["__file","15-\u4E09\u6570\u4E4B\u548C.html.vue"]]);export{y as default};
