---
title: List of Jinja Filters
date: 2021-02-10
---

Taken from [the documentation](https://jinja.palletsprojects.com/en/2.11.x/templates/); noted here for easy access. 
`{% raw %}{{ var | filter(args) }}{% endraw %}`

<table>
{% tablerow term in site.data.jinja.filters cols:4 %}
	<a href="https://jinja.palletsprojects.com/en/2.11.x/templates#{{ term }}">{{ term }}()</a>
{% endtablerow  %}
</table>

<style>
table {
	width: 100%;
	font-family: monospace;
	font-size: 1.2rem;
}
td {
	padding: 2.5px;
}
td a {
	border-bottom: transparent;
}
</style>
