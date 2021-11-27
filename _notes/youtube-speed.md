---
title: Custom YouTube Speed
date: 2021-06-20
---

```javascript
document.getElementsByClassName('html5-main-video')[0].playbackRate = 2.0
```

drag this bookmarklet to your Bookmarks Toolbar for one-click access: [change YouTube speed](javascript:(()=>{let spd = prompt('Video speed:', document.getElementsByClassName('html5-main-video')[0].playbackRate); if (spd != null && spd.length > 0 && parseFloat(spd)) document.getElementsByClassName('html5-main-video')[0].playbackRate = parseFloat(spd); })())

[reference](https://webapps.stackexchange.com/questions/9948/speed-up-youtube-playback)
