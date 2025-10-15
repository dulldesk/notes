---
title: Data URIs
date: 2023-01-22
tags: ["data uris", "notepad", "web"]
---

prefix for jpegs:
```
{{ site.data.data_uris.jpeg }}
```

prefix for pngs:
```
{{ site.data.data_uris.png }}
```

html (sample web browser notepad for temporary notes)
```
data:text/html,%3Ctextarea rows%3D30 cols%3D120%3E%3C%2Ftextarea%3E
```

<script src="{{ 'assets/js/copy-last-code.js' | relative_url }}"></script>
