---
title: Keeping indentation in the <&#8288;pre&#8288;>
date: 2020-11-18
---

One typically indents HTML code when writing it to visualize the hierarchy of nested elements and for the sake of organization. 

<table>
<td>
{% highlight html %}
<div>
  <h1>hello</h1>
  <div>
    <span>world</span>
  </div>
<div>
{% endhighlight %}
</td>
<td>
{% highlight html %}
<div>
<h1>hello</h1>
<div>
<span>world</span>
</div>
<div>
{% endhighlight %}
</td>
</table>

However, with `<pre>` tags, this indented whitespace is preserved in the displayed text:

<table>
<td>
{% highlight html %}
<div>
  <pre>
    From the bells, bells, bells, bells,
    Bells, bells, bells—
  </pre>
  <small>- Edgar Allan Poe</small>
</div>
{% endhighlight %}
</td>
<td>
<div>
  <pre>
    From the bells, bells, bells, bells,
    Bells, bells, bells—
  </pre>
  <small>- Edgar Allan Poe</small>
</div>
</td>
</table>

A typical solution is to sacrifice hierarchy by removing the indentation from the content of the `<pre>`.

<table>
<td>
{% highlight html %}
<div>
  <pre>
From the bells, bells, bells, bells,
Bells, bells, bells—
  </pre>
  <small>- Edgar Allan Poe</small>
</div>
{% endhighlight %}
</td>
<td>
<div>
  <pre>
From the bells, bells, bells, bells,
Bells, bells, bells—
  </pre>
  <small>- Edgar Allan Poe</small>
</div>
</td>
</table>

Better solution: the CSS property &nbsp; `white-space: pre-line` :

<table>
<td>
{% highlight html %}
<div>
  <pre style="white-space: pre-line;">
    From the bells, bells, bells, bells,
    Bells, bells, bells—
  </pre>
  <small>- Edgar Allan Poe</small>
</div>
{% endhighlight %}
</td>
<td>
<div>
  <pre style="white-space: pre-line;">
    From the bells, bells, bells, bells,
    Bells, bells, bells—
  </pre>
  <small>- Edgar Allan Poe</small>
</div>
</td>
</table>

[edgar allan poe - the bells](https://poets.org/poem/bells)

<style>
figure {
  margin: 0;
}
.note table {
  width: 100%;
  table-layout: fixed;
  display: revert;
}
.note small {
  font-size: small;
}
.highlight pre {
  padding: 3px 0 3px 6px;
}
</style>
