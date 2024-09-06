---
title: Web Share API
date: 2024-09-05
tags: [navigator, tel, menu]
---

```js
await navigator.share({
  title: 'the title to be shared (may be ignored)'
  url: 'a url string to be shared',
  text: 'some text to be shared',
  files: [file_objects_to_be_shared]
})
```

The [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API) opens and uses the user's operating system's native sharing menu to share content to user-selected targets.

<!-- screenshots to be added -->

<button class="styled" onclick='shareSmth()'>Click to share some text</button>
&nbsp;
<i><small class="muted" id='share-error'></small></i>


Also available is `navigator.canShare()`, which returns whether the client is supported (boolean);
see [browser compatability](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API#browser_compatibility).

The `web-share` permission and "transient activation" (i.e. a user-triggered event) is required for security purposes.
As of writing, the `dom.webshare.enabled` feature flag must be manually enabled in Firefox,
and it does not support file sharing altogether.

- [mdn docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API)
  - [`navigator.share(data)`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)
  - [`navigator.canShare(data?)`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/canShare)
  - [list of shareable file types](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share#shareable_file_types)
  - [demo](https://mdn.github.io/dom-examples/web-share/)
- blog post - [testing the web share api](https://www.raymondcamden.com/2023/04/20/testing-the-web-share-api)
  - [list of Web APIs on mdn](https://developer.mozilla.org/en-US/docs/Web/API)
- miscellaneous reading: [tel:me.about.it.](https://bkardell.com/blog/tel-me.html)

<script>
async function shareSmth() {
  let data = {
    title: 'some title',
    text: 'some text',
    url: window.location,
  };
  if (navigator.share && navigator.canShare(data)) {
    try { await navigator.share(data); }
    catch (e) { document.getElementById('share-error').textContent = e.message }
  } else {
    document.getElementById('share-error').textContent = 'navigator.share is not supported on this browser'
  }
}
</script>
