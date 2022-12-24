---
title: Browser Clipboard Interaction
date: 2021-05-05
---

[mdn docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)

* Clipboard API: 
    * `navigator.clipboard.readText()`, `navigator.clipboard.read()`
    * `navigator.clipboard.writeText()`, `navigator.clipboard.write()`
    * returns a Promise
    * [browser compatability](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API#browser_compatibility)
* `document.execCommand()` (deprecated)
	```js
	let copyText = document.querySelector("#input");
	copyText.select();
	document.execCommand("copy");
	```
  * also available: `paste`, `cut` ([list](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand))

