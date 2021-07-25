---
title: CSS Shorthands are Clockwise
date: 2021-05-01
---

A CSS shorthand property "memory aid".

The order for <span class="help" title="margin, padding, border-color, etc.">"side based"</span> properties is as follows:
```css
/*
    A
B       B
    A
 */
margin: vertical | horizontal;

/*
    A
B       B
    C
 */
margin: top | horizontal | bottom;

/*
    A
D       B
    C
 */
margin: top | right | bottom | left;
```

[reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
