---
title: Git worktree
date: 2022-01-30
---


> A git repository can support multiple working trees, allowing you to check out more than one branch at a time.
>
> You're working on a feature for a project when you're told an urgent fix is required. However, your working repository ("worktree") is in disarray from developing [said] feature. Instead of stashing changes to create a new branch for the fix, you create a fresh worktree and make the fix there.

```bash
# e.g. git worktree add ../hotfix fix-thing
# -b   new branch
git worktree add <path> <branch>
git worktree add <path> -b <branch>
```

This newly created worktree can now be worked with as a typical git workspace. The "name" of the worktree is based on the directory name containing the tree (e.g. `hotfix` in the above example).

```bash
# list
git worktree list

# move worktree
git worktree move <tree> ~/new_parent_dir

# remove worktree
git worktree remove <tree>
```

[docs](https://git-scm.com/docs/git-worktree) [another reference](https://opensource.com/article/21/4/git-worktree)
