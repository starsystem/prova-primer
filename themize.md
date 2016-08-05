---
layout: primer_full
title: Themize
permalink: /themize
---

<h1 class="page-title">
  Themize
</h1>
<div class="markdown-body">
<p>Learn more about this styleguide, particularly how it’s built and who maintains it.</p>

<h3 id="what-and-why">What and why</h3>


	<div class="btn-group js-themize">
		<button class="btn btn-outline" type="button">base</button>
		<button class="btn btn-outline" type="button">brandy</button>
		<button class="btn btn-outline" type="button">lightred</button>
		<button class="btn btn-outline" type="button">melma</button>
		<button class="btn btn-outline" type="button">forest</button>
		<button class="btn btn-outline" type="button">cave</button>
		<button class="btn btn-outline" type="button">blood</button>
	</div>
</div>

<h5>Javascript code</h5>
<script type="text/javascript">
	var butz = document.querySelectorAll('.js-themize button');
	for (var i = 0; i < butz.length; i++) {
		butz[i].addEventListener('click', function (e) {
			e.preventDefault();
			document.body.setAttribute('class', '');
			document.body.classList.add(e.target.textContent);
		});
	}
</script>
```js
var butz = document.querySelectorAll('.js-themize button');
for (var i = 0; i < butz.length; i++) {
	butz[i].addEventListener('click', function (e) {
		e.preventDefault();
		document.body.setAttribute('class', '');
		document.body.classList.add(e.target.textContent);
	});
}
```
