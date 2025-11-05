---
title: .bind() in Python
date: 2025-10-22
tags: [js, py, bind, partial]
---

JavaScript: 

```js
callback = foo.bind(null, 1)
```

Python:

```py
from functools import partial
callback = partial(foo, 1)
```

[reference](https://stackoverflow.com/questions/19217587/python-alternative-to-javascript-function-bind) | [pydocs](https://docs.python.org/3/library/functools.html#partial-objects) | [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
