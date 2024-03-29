---
title: The formats of git log
date: 2022-10-01
tags: [pretty, fuller]
---

```bash
git log --pretty=<format> # or --format=<format>
```

Selection of formats: `oneline`, `fuller`, `reference`, `raw`. `medium` is default. More at [git docs](https://www.git-scm.com/docs/git-log#_pretty_formats).

* `oneline` (aka `--oneline`): formats as `<hash> <title-line>`
* `fuller`: contains `hash`, `author`, `authordate`, `commiter`, `commitdate`, commit title, and message
* `reference`: formats as `<abbrev-hash> (<title-line>, <short-author-date>)`
* `raw`: shows commit info as stored in the commit object
* `%H`: see [list](https://www.git-scm.com/docs/git-show#Documentation/git-show.txt-emnem) of custom placeholders

Also:
* valid for `git show`, `git diff`, etc.
* `--name-only` lists modified files
* `-s` (e.g. for `git show`) suppresses file diffs
