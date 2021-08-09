---
title: Ignore Commits in Git Blame
date: 2021-08-07
---

Git can be configured to ignore certain commits when running `git blame`. 

```
# Commit by commit basis
git blame --ignore-rev <commit hash> <file name>
```

A file can be set up to contain commit hashes to ignore, say `.git-blame-ignore-revs`. Delimit hashes with newlines. 

```
git blame --ignore-revs-file .git-blame-ignore-revs <file name>
```

Use this file name for ignored commits globally (or for a single repo with the `--local` flag)
```
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

[reference](https://www.moxio.com/blog/43/ignoring-bulk-change-commits-with-git-blame)
