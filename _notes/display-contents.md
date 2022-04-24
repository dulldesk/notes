---
title: "display: contents"
date: 2022-01-27
tags: [css]
---

When adding `display: contents` to a parent element:

- The parent element is not rendered
- Its chidren act as if the parent never existed, but styles will still be inherited

The MDN docs state that the parent element is "*replaced by [its] pseudo-box and their child boxes.*"

{% capture css %}
.parent {
	border: 5px solid mediumpurple;
	color: cyan;
	background-color: rgba(255, 255, 0, 0.25);
}
.parent .child {
	border: 5px dashed red;
}
{% endcapture %}

<style>
	{{- css | scssify -}}
</style>

```css
{{- css -}}
```

<table>
	<tr>
		<td><p>Normal:</p></td>
		<td><div class='parent'><div class='child'>child</div></div></td>
	</tr>
	<tr>
		<td><p>With <code>display: contents</code> on the parent:</p></td>
		<td><div class='parent' style='display:contents'><div class='child'>child</div></div></td>
	</tr>
</table>

A particularly handy use case that I encountered for this property is as follows:

<div style="overflow-x:auto">
	<img class="dark-invert" src="{{ 'assets/img/flow.png' | relative_url }}">
</div>

<small class="mobile-only muted">*The image horizontally scrolls if on mobile*</small>

By default / on the desktop:
* Each column would be its own `flex` container and reside inside a parent (let's call this Apple). Widths would be set accordingly.
* The elements' parent (and thus flexbox layout) would be one of the column

On a mobile viewport:
* Set Apple to `flex-direction: column`
* Set the columns' display to `contents`. The elements' new "parent" is Apple, in the sense that Apple's flex styles would apply to these items (flexbox applies to direct children).
* The `order` property can be used to set the order of the elements.

<small class="muted">*\*As of writing, elements with this `display` value will be removed from the "accessibility tree", meaning that the element itself is not visible to screen readers. This does not comply with the CSSWG specification.*</small>

[reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display-box)


<style>
.note table {
	width: 100%;
	max-width: 100%;
	display: revert;
}
table td:nth-child(1) {
	width: min-content;
}
.mobile-only {
	display: none;
}
@media (max-width: 660px) {
	table td {
		display: block;
		width: revert !important;
	}
	.mobile-only {
		display: block !important;
	}
}
.note img {
	max-width: min(100%,800px);
	max-height: revert;
	min-height: revert;
	min-width: 500px;
}
</style>
