---
layout: primer_sidebar
title: About
permalink: /about
---

# Markdown

This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at [jekyllrb.com](http://jekyllrb.com/)

You can find the source code for the Jekyll new theme at:
<span class="octicon octicon-mark-github"></span> /
[jekyll-new](https://github.com/jglovier/jekyll-new)

You can find the source code for Jekyll at
<span class="octicon octicon-mark-github"></span> /
[jekyll](https://github.com/jekyll/jekyll)

# Layout
<div class="markdown-body">
  <p>Primer’s layout includes basic page containers and a single-tiered, fraction-based grid system. That sounds more complicated than it really is though—it’s just containers, rows, and columns.</p>

<p>You can find all the below styles in <code class="highlighter-rouge">_layout.scss</code>.</p>

<h2 id="contents">Contents</h2>

<ul id="markdown-toc">
<li><a href="#contents" id="markdown-toc-contents">Contents</a></li>
<li><a href="#container" id="markdown-toc-container">Container</a></li>
<li><a href="#grid" id="markdown-toc-grid">Grid</a>    <ul>
  <li><a href="#how-it-works" id="markdown-toc-how-it-works">How it works</a></li>
  <li><a href="#demo" id="markdown-toc-demo">Demo</a></li>
  <li><a href="#centered" id="markdown-toc-centered">Centered</a></li>
</ul>
</li>
</ul>

<h2 id="container">Container</h2>

<p>Center your page’s contents with a <code class="highlighter-rouge">.container</code>.</p>

<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>
<span class="c">&lt;!-- contents here --&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

<p>The container applies <code class="highlighter-rouge">width: 980px;</code> and uses horizontal <code class="highlighter-rouge">margin</code>s to center it.</p>

<h2 id="grid">Grid</h2>

<h3 id="how-it-works">How it works</h3>

<p>The grid is pretty standard—you create rows with <code class="highlighter-rouge">.columns</code> and individual columns with a column class and fraction class. Here’s how it works:</p>

<ul>
<li>Add a <code class="highlighter-rouge">.container</code> to encapsulate everything and provide ample horizontal gutter space.</li>
<li>Create your outer row to clear the floated columns with <code class="highlighter-rouge">&lt;div class="columns"&gt;</code>.</li>
<li>Add your columns with individual <code class="highlighter-rouge">&lt;div class="column"&gt;</code>s.</li>
<li>Add your fractional width classes to set the width of the columns (e.g., <code class="highlighter-rouge">.one-fourth</code>).</li>
</ul>

<h3 id="demo">Demo</h3>

<p>In practice, your columns will look like the example below.</p>

<div class="docs-example clearfix"><div class="container">
<div class="columns">
<div class="one-fifth column">
  .one-fifth
</div>
<div class="four-fifths column">
  .four-fifths
</div>
</div>

<div class="columns">
<div class="one-fourth column">
  .one-fourth
</div>
<div class="three-fourths column">
  .three-fourths
</div>
</div>

<div class="columns">
<div class="one-third column">
  .one-third
</div>
<div class="two-thirds column">
  .two-thirds
</div>
</div>

<div class="columns">
<div class="one-half column">
  .one-half
</div>
<div class="one-half column">
  .one-half
</div>
</div>
</div></div>
<div class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"columns"</span><span class="nt">&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"one-fifth column"</span><span class="nt">&gt;</span>
  .one-fifth
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"four-fifths column"</span><span class="nt">&gt;</span>
  .four-fifths
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"columns"</span><span class="nt">&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"one-fourth column"</span><span class="nt">&gt;</span>
  .one-fourth
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"three-fourths column"</span><span class="nt">&gt;</span>
  .three-fourths
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"columns"</span><span class="nt">&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"one-third column"</span><span class="nt">&gt;</span>
  .one-third
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"two-thirds column"</span><span class="nt">&gt;</span>
  .two-thirds
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"columns"</span><span class="nt">&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"one-half column"</span><span class="nt">&gt;</span>
  .one-half
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"one-half column"</span><span class="nt">&gt;</span>
  .one-half
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></div>

<h3 id="centered">Centered</h3>

<p>Columns can be <a href="/utilities/#centering-content">centered</a> by adding <code class="highlighter-rouge">.centered</code> to the <code class="highlighter-rouge">.column</code> class.</p>

<div class="docs-example clearfix"><div class="columns">
<div class="one-half column centered">
.one-half
</div>
</div></div>
<div class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"columns"</span><span class="nt">&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"one-half column centered"</span><span class="nt">&gt;</span>
.one-half
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></div>
</div>
