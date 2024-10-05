---
title: Remove YouTube Cards
date: 2021-06-20
tags: [bookmarklet, js]
---

```javascript
document.querySelectorAll(".ytp-ce-element").forEach(i => i.remove())
```

drag this bookmarklet to your Bookmarks Toolbar for one-click access: [rm YouTube cards](javascript:(()=>{document.querySelectorAll(".ytp-ce-element").forEach(i => i.remove())})())
