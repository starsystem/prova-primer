---
layout: primer_sidebar
title: Alerts
permalink: /alerts
---

<h1 class="page-title">
  Alerts
</h1>
<div class="markdown-body">
  <p>Flash messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don’t show more than one at a time.</p>

<h2 id="contents">Contents</h2>

<ul id="markdown-toc">
<li><a href="#contents" id="markdown-toc-contents">Contents</a></li>
<li><a href="#default" id="markdown-toc-default">Default</a></li>
<li><a href="#variations" id="markdown-toc-variations">Variations</a></li>
<li><a href="#with-icon" id="markdown-toc-with-icon">With icon</a></li>
<li><a href="#dismiss" id="markdown-toc-dismiss">Dismiss</a></li>
</ul>

<h2 id="default">Default</h2>

<p>Flash messages start off looking decently neutral—they’re just light blue rounded rectangles.</p>

<div class="docs-example clearfix"><div class="flash">
Flash message goes here.
</div></div>
<div class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"flash"</span><span class="nt">&gt;</span>
Flash message goes here.
<span class="nt">&lt;/div&gt;</span></code></pre></div>

<p>You can put multiple paragraphs of text in a flash message—the last paragraph’s bottom <code class="highlighter-rouge">margin</code> will be automatically override.</p>

<div class="docs-example clearfix"><div class="flash">
<p>This is a longer flash message in it's own paragraph. It ends up looking something like this. If we keep adding more text, it'll eventually wrap to a new line.</p>
<p>And this is another paragraph.</p>
</div></div>
<div class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"flash"</span><span class="nt">&gt;</span>
<span class="nt">&lt;p&gt;</span>This is a longer flash message in it's own paragraph. It ends up looking something like this. If we keep adding more text, it'll eventually wrap to a new line.<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p&gt;</span>And this is another paragraph.<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></div>

<p>Should the need arise, you can quickly space out your flash message from surrounding content with a <code class="highlighter-rouge">.flash-messages</code> wrapper. <em>Note the extra top and bottom margin in the example below.</em></p>

<div class="docs-example clearfix"><div class="flash-messages">
<div class="flash">
Flash message goes here.
</div>
</div></div>
<div class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"flash-messages"</span><span class="nt">&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"flash"</span><span class="nt">&gt;</span>
Flash message goes here.
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></div>

<h2 id="variations">Variations</h2>

<p>Add <code class="highlighter-rouge">.flash-warn</code> or <code class="highlighter-rouge">.flash-error</code> to the flash message to make it yellow or red, respectively.</p>

<div class="docs-example clearfix"><div class="flash flash-warn">
Flash message goes here.
</div></div>
<div class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"flash flash-warn"</span><span class="nt">&gt;</span>
Flash message goes here.
<span class="nt">&lt;/div&gt;</span></code></pre></div>

<div class="docs-example clearfix"><div class="flash flash-error">
Flash message goes here.
</div></div>
<div class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"flash flash-error"</span><span class="nt">&gt;</span>
Flash message goes here.
<span class="nt">&lt;/div&gt;</span></code></pre></div>

<h2 id="with-icon">With icon</h2>

<p>Add an icon to the left of the flash message to give it some funky fresh attention. Just add <code class="highlighter-rouge">.flash-with-icon</code> and your Octicon.</p>

<div class="docs-example clearfix"><div class="flash flash-with-icon">
<span class="octicon octicon-alert"></span>
Flash message with an icon goes here.
</div></div>
<div class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"flash flash-with-icon"</span><span class="nt">&gt;</span>
<span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"octicon octicon-alert"</span><span class="nt">&gt;&lt;/span&gt;</span>
Flash message with an icon goes here.
<span class="nt">&lt;/div&gt;</span></code></pre></div>

<h2 id="dismiss">Dismiss</h2>
</div>
~~Add a JavaScript enabled (via Crema) dismiss (close) icon on the right of any flash message.~~

Added script

```js
// CLOSE ALERTS
var flashClose = document.querySelectorAll('.js-flash-close');

// Loop
for(i=0 ; i<flashClose.length ; i++){
	flashClose[i].addEventListener("click", function (e) {
		var flash = e.target.parentNode;
		flash.parentNode.removeChild(flash);
	}, false);
}
```
<div class="markdown-body">
<div class="docs-example clearfix"><div class="flash">
<span class="octicon octicon-x flash-close js-flash-close"></span>
Dismissable flash message goes here.
</div></div>
<div class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"flash"</span><span class="nt">&gt;</span>
<span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"octicon octicon-x flash-close js-flash-close"</span><span class="nt">&gt;&lt;/span&gt;</span>
Dismissable flash message goes here.
<span class="nt">&lt;/div&gt;</span></code></pre></div>
</div>
