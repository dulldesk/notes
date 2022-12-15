---
title: Save Canvas element to an image
date: 2022-01-18
---

```js
canvas.toDataURL()
```
generates a data URL of the image, by default a PNG.


```js
// jpeg
canvas.toDataURL("image/jpeg", 1)
```
* encoder option parameter for jpeg ranges from `0` (lossy) to `1` (lossless)
