---
layout: primer_sidebar
title: Scaffolding
permalink: /scaffolding
---

# Scaffolding
Main `HTML`

**Masthead**

```html
<header class="masthead">
	<div class="container">
		<a href="/" class="masthead-logo">
			<span class="mega-octicon octicon-alert"></span>
			Title
		</a>
		<nav class="masthead-nav">
			<a href="/about" class="active">About</a>
		</nav>
	</div>
</header>
```

**Jumbotron**

```html
<div class="jumbotron">
	<div class="container">
		<h1>Title</h1>
		<p>Description</p>
		<a href="/scaffolding" class="btn btn-reverse">Read the docs</a>
	</div>
</div>
```

**Paghead**

```html
<div class="pagehead">
	<div class="container">
		<nav class="pagehead-nav" role="navigation">
			<a href="#" class="pagehead-nav-item">
			<span class="octicon octicon-person"></span> Login</a>
		</nav>
		<h1><a class="" href="/layout">Docs</a></h1>
	</div>
</div>
```

**Content**

Full width

```html
<div class="container">
	<div class="columns">
		<div class="column markdown-body">
			...
		</div>
	</div>
</div>
```

Sidebar

```html
<div class="container">
	<div class="columns docs-layout">
		<div class="one-fourth column">
			...
		</div>
		<div class="three-fourths column markdown-body">
			...
		</div>
	</div>
</div>
```

**Footer**

```html
<footer>
	<div class="container">
		...<br>
		...
	</div>
</footer>
```
