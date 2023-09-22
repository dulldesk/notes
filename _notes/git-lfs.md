---
title: Git LFS
date: 2021-04-04
---

**Set up:**
1. [install it](https://git-lfs.com/) (scoop: `git-lfs`)
2. Initialize with git: `git lfs install`
3. Update git hooks: `git lfs update`

**Usage:**
1. Track a file extension: `git lfs track "*.psd"`
2. Ensure updates to `.gitattributes` are committed: `git add .gitattributes`

then commit & push files as per typical.

**Cloning:**
- regular `git clone` will generally work
- `git lfs clone` is often faster

**Working:**
- `git lfs fetch`
- `git lfs pull`
- `git lfs prune` - deletes old local cache 

[git-lfs.com](https://git-lfs.com/) [more info](https://www.atlassian.com/git/tutorials/git-lfs) [docs](https://github.com/git-lfs/git-lfs/tree/main/docs/man)
