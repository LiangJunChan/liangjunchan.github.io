import{_ as c,r as a,o as l,c as i,b as s,d as e,w as r,e as n,a as t}from"./app.9c021dc2.js";const u="/assets/235.4a5ed538.png",d={},k={id:"_235-\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#_235-\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148","aria-hidden":"true"},"#",-1),m=n(),b={href:"https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",target:"_blank",rel:"noopener noreferrer"},h=n("235. \u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148"),_=t('<blockquote><p>\u7ED9\u5B9A\u4E00\u4E2A\u4E8C\u53C9\u641C\u7D22\u6811, \u627E\u5230\u8BE5\u6811\u4E2D\u4E24\u4E2A\u6307\u5B9A\u8282\u70B9\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148\u3002</p><p>\u767E\u5EA6\u767E\u79D1\u4E2D\u6700\u8FD1\u516C\u5171\u7956\u5148\u7684\u5B9A\u4E49\u4E3A\uFF1A\u201C\u5BF9\u4E8E\u6709\u6839\u6811 T \u7684\u4E24\u4E2A\u7ED3\u70B9 p\u3001q\uFF0C\u6700\u8FD1\u516C\u5171\u7956\u5148\u8868\u793A\u4E3A\u4E00\u4E2A\u7ED3\u70B9 x\uFF0C\u6EE1\u8DB3 x \u662F p\u3001q \u7684\u7956\u5148\u4E14 x \u7684\u6DF1\u5EA6\u5C3D\u53EF\u80FD\u5927\uFF08\u4E00\u4E2A\u8282\u70B9\u4E5F\u53EF\u4EE5\u662F\u5B83\u81EA\u5DF1\u7684\u7956\u5148\uFF09\u3002\u201D</p><p>\u4F8B\u5982\uFF0C\u7ED9\u5B9A\u5982\u4E0B\u4E8C\u53C9\u641C\u7D22\u6811: root = [6,2,8,0,4,7,9,null,null,3,5]</p><p><img src="'+u+`" alt="img"></p><p>\u793A\u4F8B 1:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
\u8F93\u51FA: 6 
\u89E3\u91CA: \u8282\u70B9 2 \u548C\u8282\u70B9 8 \u7684\u6700\u8FD1\u516C\u5171\u7956\u5148\u662F 6\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B 2:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
\u8F93\u51FA: 2
\u89E3\u91CA: \u8282\u70B9 2 \u548C\u8282\u70B9 4 \u7684\u6700\u8FD1\u516C\u5171\u7956\u5148\u662F 2, \u56E0\u4E3A\u6839\u636E\u5B9A\u4E49\u6700\u8FD1\u516C\u5171\u7956\u5148\u8282\u70B9\u53EF\u4EE5\u4E3A\u8282\u70B9\u672C\u8EAB\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8BF4\u660E:</strong></p><ul><li>\u6240\u6709\u8282\u70B9\u7684\u503C\u90FD\u662F\u552F\u4E00\u7684\u3002</li><li>p\u3001q \u4E3A\u4E0D\u540C\u8282\u70B9\u4E14\u5747\u5B58\u5728\u4E8E\u7ED9\u5B9A\u7684\u4E8C\u53C9\u641C\u7D22\u6811\u4E2D\u3002</li></ul></blockquote><h2 id="\u65B9\u6CD5\u4E00-\u5229\u7528\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u7279\u6027\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E00-\u5229\u7528\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u7279\u6027\u9012\u5F52" aria-hidden="true">#</a> \u65B9\u6CD5\u4E00\uFF1A\u5229\u7528\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u7279\u6027\u9012\u5F52</h2><p>\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u7279\u6027\u662F\uFF1A</p><ul><li>\u6839\u8282\u70B9\u7684\u5DE6\u5B50\u6811\u90FD\u6BD4\u6839\u8282\u70B9\u5C0F</li><li>\u6839\u8282\u70B9\u7684\u53F3\u5B50\u6811\u90FD\u6BD4\u6839\u8282\u70B9\u5927</li><li>\u5176\u4ED6\u8282\u70B9\u4E5F\u90FD\u662F\u8FD9\u6837</li></ul><p>\u90A3\u4E48\u5C31\u53EF\u4EE5\u7528\u9012\u5F52\u7684\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.left = this.right = null;
 * <span class="token punctuation">}</span>
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">q</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lowestCommonAncestor</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span>  p <span class="token operator">===</span> root <span class="token operator">||</span> q <span class="token operator">===</span> root<span class="token punctuation">)</span> <span class="token keyword">return</span> root
  <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> root<span class="token punctuation">.</span>val <span class="token operator">&amp;&amp;</span> q<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> root<span class="token punctuation">.</span>val <span class="token operator">&amp;&amp;</span> q<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span>
  <span class="token keyword">return</span> root
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E0D\u7528\u9012\u5F52\u7684\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u7528\u9012\u5F52\u7684\u5199\u6CD5" aria-hidden="true">#</a> \u4E0D\u7528\u9012\u5F52\u7684\u5199\u6CD5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.left = this.right = null;
 * <span class="token punctuation">}</span>
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">q</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lowestCommonAncestor</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span>  p <span class="token operator">===</span> root <span class="token operator">||</span> q <span class="token operator">===</span> root<span class="token punctuation">)</span> <span class="token keyword">return</span> root
  <span class="token keyword">while</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> root<span class="token punctuation">.</span>val <span class="token operator">&amp;&amp;</span> q<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> root <span class="token operator">=</span> root<span class="token punctuation">.</span>left
    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> root<span class="token punctuation">.</span>val <span class="token operator">&amp;&amp;</span> q<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> root <span class="token operator">=</span> root<span class="token punctuation">.</span>right
    <span class="token keyword">else</span> <span class="token keyword">return</span> root
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u6CD5\u4E8C-\u5FFD\u7565\u4E8C\u53C9\u641C\u7D22\u6811-\u5F53\u6210\u666E\u901A\u7684\u6811\u6765\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E8C-\u5FFD\u7565\u4E8C\u53C9\u641C\u7D22\u6811-\u5F53\u6210\u666E\u901A\u7684\u6811\u6765\u9012\u5F52" aria-hidden="true">#</a> \u65B9\u6CD5\u4E8C\uFF1A\u5FFD\u7565\u4E8C\u53C9\u641C\u7D22\u6811\uFF0C\u5F53\u6210\u666E\u901A\u7684\u6811\u6765\u9012\u5F52</h2>`,9),w=n("\u5148\u505A"),f=n("236-\u4E8C\u53C9\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148"),y=n("\uFF0C\u518D\u505A\u672C\u9898\uFF0C\u4E8C\u53C9\u6811\u80FD\u7528\u7684\u65B9\u6CD5\u4E8C\u53C9\u641C\u7D22\u6811\u80AF\u5B9A\u4E5F\u80FD\u7528"),g=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.left = this.right = null;
 * <span class="token punctuation">}</span>
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">q</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lowestCommonAncestor</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span>  p <span class="token operator">===</span> root <span class="token operator">||</span> q <span class="token operator">===</span> root<span class="token punctuation">)</span> <span class="token keyword">return</span> root
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span>
  <span class="token keyword">return</span> left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> right <span class="token operator">:</span> right <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> left <span class="token operator">:</span> root
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function x(q,N){const o=a("ExternalLinkIcon"),p=a("RouterLink");return l(),i("div",null,[s("h1",k,[v,m,s("a",b,[h,e(o)])]),_,s("p",null,[w,e(p,{to:"/LEETCODE/TREE/236-%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88.html"},{default:r(()=>[f]),_:1}),y]),g])}const E=c(d,[["render",x],["__file","235-\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148.html.vue"]]);export{E as default};
