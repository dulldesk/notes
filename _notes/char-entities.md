---
title: Character Entities (HTML, CSS)
date: 2021-06-29
---

[the list](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references) 

Format (examples are for &lt;):
```html
&lt; or &#60; 
<!-- Entity number: (hexadecimal) Unicode character in base 10 -->
```
```css
a::before {
  content: '\003C';
  /* unicode / hex value */
}
```

