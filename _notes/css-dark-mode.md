---
title: CSS "Dark Mode"
---

Apply css based on the user's light/dark mode theme preference. 

```css
@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
    color: cyan;
  }
}
```

Possible values: 
- `light`
- `dark`
- `no-preference` ([not widely supported](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme#browser_compatibility) as of writing)


[Original reference](https://notes.zander.wtf/css-media-queries#prefers-color-scheme)

[MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
