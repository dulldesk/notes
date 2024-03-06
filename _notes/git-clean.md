---
title: Remove untracked files in Git
date: 2022-09-15
tags: [git, clean]
---

```
git clean -ndx
```

Must append one of these flags:
* `-n` dry run
* `-f` force
* `-i` interactive

Flags:
- `-d` remove whole directories
- `-x` remove [git]ignored files, too
- `-X` only remove ignored files
- `-e <pattern>` add pattern to ignore rules
