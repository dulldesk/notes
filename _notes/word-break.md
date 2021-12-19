---
title: Word Breaking and Soft Hyphens
date: 2021-12-19
---

There's a couple of ways to determine where to break a line of text.

## `<wbr>`

HTML element.

<table>
<td>
{% capture html %}
```html
xeno<wbr>trans<wbr>plant<wbr>ation
```
{% endcapture %}
{{ html | markdownify }}
</td>
<td>
{% include word-break-demo.html content="xeno<wbr>trans<wbr>plant<wbr>ation" %}
</td>
</table>

## `&shy;`

HTML entity code. "Soft-hyphenation".

<table>
<td>
{% capture html %}
```html
xeno&shy;trans&shy;plant&shy;ation
```
{% endcapture %}
{{ html | markdownify }}
</td>
<td>
{% include word-break-demo.html content="xeno&shy;trans&shy;plant&shy;ation" %}
</td>
</table>

## CSS Properties

`word-break` and `overflow-wrap` (aka `word-wrap`) are also used to style how to break up a paragraph on overflow, though unlike the aforementioned two, they cannot pinpoint where exactly to break; rather, they focus on automatic splitting. 

{% assign demo="They say the fishing is excellent at Lake Chargoggagoggmanchauggagoggchaubunagungamaugg, though I've never been there myself. 次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉" %}

<div class="cntr">
{% for property in site.data.wordbreak %}
    {% for value in property[1] %}
    <div class="node">
      {%- capture css -%} {{ property[0] }}: {{ value }} {%- endcapture -%}
        {%- highlight css -%} {{ css }} {%- endhighlight -%}
        {% include word-break-demo.html content=demo css=css %}
    </div>
    {% endfor %}
{% endfor %}
</div>

<small>*Example taken from MDN*</small>

The most significant differences can be found between:
- the default/`normal`
- `word-break: break-all`
- `word-break: keep-all`
- `overflow-wrap: break-word/anywhere`

Here are the definitions of each, based on MDN:

<dl>
{% for term in site.data.wordbreak_definitions %}
    <dt><code>{{ term[0] }}</code></dt>
    <dd><i>{{ term[1] | markdownify }}</i></dd>
{% endfor %}
</dl>

[MDN: word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
[overflow-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap)


<style>
.demo {
  background: #2A2A25;
  padding: 5px 10px;
  border: 1px solid rgba(255,255,255,0.25);
  resize: both;
  overflow: auto;
  width: 150px;
  height: 70px;
  color: white;
}
.cntr {
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.cntr .demo {
  width: 100%;
  height: 170px;
}
.node {
  width: calc( 33% - 1rem);
}
.highlight, .node pre {
  margin: 0 !important;
}
@media (max-width:  600px) {
  .node {
    width: 100%;
  }
}

.node:nth-child(1) .demo,
.node:nth-child(2) .demo,
.node:nth-child(3) .demo,
.node:nth-child(5) .demo {
  border-color: var(--heading);
}

h2, h2 code {
  font-size: 2rem;
}
h2 + p, p + ul {
  margin-top: 0;
}

.cntr + p {
  margin-bottom: 0.25rem;
}
</style>
