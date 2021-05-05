---
title: List of Jinja Filters
date: 2021-02-10
---

Taken from [the documentation](https://jinja.palletsprojects.com/en/2.11.x/templates/); noted here for easy access. 
`{% raw %}{{ var | filter(args) }}{% endraw %}`

<table class="no-border monospace">
{% tablerow term in site.data.jinja.filters cols:4 %}
	<a href="https://jinja.palletsprojects.com/en/2.11.x/templates#{{ term }}">{{ term }}()</a>
{% endtablerow  %}
</table>	
