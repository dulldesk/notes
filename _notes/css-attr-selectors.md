---
title: CSS Attribute Selectors
date: 2021-02-08
---

`[attr]` | elements with an `attr` attribute
`[attr=val]` | `attr` attribute equals `val`
`[attr~=val]` | `attr` attribute contains `val` (does not select `vals`)
`[attr|=val]` | `attr` value equals to `val` or starts with `val-`
`[attr^=val]` | `attr` value starts with `val` (or is equal to `val`)
`[attr$=val]` | `attr` value ends with `val` (or is equal to `val`)
`[attr*=val]` | `attr` contains `val`

`[exp i]`, where `exp` is one of the above expressions (without the brackets), makes the value selection case-insensitive. 

`[exp s]` (experimental) selects the value with case-sensitivity.

Examples: `[data-units i]`, `span[title~="flag"]`

Like other CSS selectors, multiple attribute selectors can be combined, e.g. `a[href^="https"][href$=".png"]`.


[reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
