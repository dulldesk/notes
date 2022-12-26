---
title: Notes on Drag & Drop
date: 2022-12-21
tags: [js,html,javascript]
---

* [mdn docs](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
	* draggable element: set `draggable="true"`, `ondragstart` handler (can also do: `ondragend`)
	* drop zone element: define `ondrop`, `ondragover` handlers
	* [drag data](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_data): e.g. `e.dataTransfer.setData("text/plain", e.target.id)`, `.getData("text/plain")`
	* [drag image (beside cursor)](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API#define_the_drag_image)
* ([ref](https://stackoverflow.com/a/68423828)) to use a child element to drag a parent element: 
	* parent: `draggable="true"`
	* children: `draggable="false"` 
* [file upload field](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
* react: [react-dnd](https://react-dnd.github.io/react-dnd/about)
* get caret position: `caretPositionFromPoint` (Firefox), `caretRangeFromPoint` (WebKit) 
	* [example](https://developer.mozilla.org/en-US/docs/Web/API/Document/caretPositionFromPoint#javascript)
	* [stackoverflow](https://stackoverflow.com/a/14700441)
	* `CaretPosition` properties: `offsetNode`, `offset`
	* caretRange returns a [Range](https://developer.mozilla.org/en-US/docs/Web/API/Range) (or `null`)

