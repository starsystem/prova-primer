# prova-primer
Toward `naledi.css`

1. Install [primer/primer](https://github.com/primer/primer) and [primer/octicons](https://github.com/primer/octicons/)
1. Duplicate `./node_modules/primer-css/build/build.css` file in `./css`
2. Duplicate `./node_modules/octicons/font/` folder in `./css`
1. Add `css/naledi.scss`
	```scss
	---
	---
	@import
		"font/octicons.css",
		"build", // primer build.css from ./node_modules/primer-css/build/
		"variables",
		"docs",
		"organizations",
		"pagehead",
		"committease",
		"subnav",
		"syntax",
		"corrections"
	;
	```
