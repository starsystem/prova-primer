---
layout: primer_full
title: Javascript
permalink: /javascript
---

### ES6 Promise

### Fetch

### Tiny Tim

### Flash close

<div class="markdown-body">
<div class="docs-example clearfix"><div class="flash">
<span class="octicon octicon-x flash-close js-flash-close"></span>
Dismissable flash message goes here.
</div></div>
</div>
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

### Wakeup

<script type="text/javascript">
	console.log(tim("Hello {= place =}", {place: "world"}));
</script>
