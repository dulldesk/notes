---
title: Git Submodules
date: 2020-04-30
---

> [Git] submodules allow you to keep a Git repository as a subdirectory of another Git repository. This lets you clone another repository into your project and keep your commits separate.

Adding and maintaining submodules:
```bash
git submodule add <url to git project> # e.g. https://github.com/git/git
git submodule add <url to git project> <dir name>

git submodule update --remote
```

When cloning a project with submodules:
```bash
cd submodule_dir
git submodule init

# or

git clone --recurse-submodules <main project url>
```

More commands:
```bash
# Run a command in each submodule
git submodule foreach 'git stash'
```


[git book](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
