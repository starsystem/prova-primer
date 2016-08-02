---
layout: primer_full
permalink: /
---
Toward `naledi.css`

1. Install [primer/primer](https://github.com/primer/primer) and [primer/octicons](https://github.com/primer/octicons/)
1. Duplicate `/node_modules/primer-css/build/build.css` file in `/css`
1. Duplicate `/node_modules/octicons/font/` folder in `/css`
1. Add `/css/naledi.scss`

```scss
@import
	"font/octicons.css", // octicons font folder from ./node_modules/octicons/
	"build.css", // primer build.css from ./node_modules/primer-css/build/
	"variables", // new variabiles + brand-colors
	"docs", // primer addons
	"organizations",
	"pagehead",
	"committease",
	"subnav",
	"syntax", // code highlight
	"corrections"
;
```

**Colors** are defined in `_sass/_variables.scss`

```scss
// Page brand colors
$base:						#808080 !default;
$brandy:					#4078c0 !default;
$lightred:					#c04040 !default;
$forest:					#40bf46 !default;
$melma:						#009688 !default;
$cave:						#a45e0a !default;
$blood:						#bf1414 !default;
```

Mixed in `_sass/_corrections.sass`

```sass
@each $brand, $color in $page-colours
	.#{$brand}
		...
```
