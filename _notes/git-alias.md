---
title: Git Aliases
date: 2021-11-04
---

Configure aliases for `git` commands.

```bash
git config --global alias.sta status
git sta

git config --global alias.last 'log -1 HEAD'
git last

git config --global alias.unstage 'reset HEAD --'
git unstage some_file
```

[source](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases)
