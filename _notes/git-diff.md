---
title: git diff algorithms
date: 2022-10-01
---

By default, `git diff` uses the greedy `myers` algorithm to generate diffs. Sometimes another one is more suitable.

From [git docs](https://git-scm.com/docs/git-diff#Documentation/git-diff.txt---diff-algorithmpatienceminimalhistogrammyers):
```
--diff-algorithm={patience|minimal|histogram|myers}

    Choose a diff algorithm. The variants are as follows:

    default, myers
        The basic greedy diff algorithm. Currently, this is the default.
    minimal
        Spend extra time to make sure the smallest possible diff is produced.
    patience
        Use "patience diff" algorithm when generating patches.
    histogram
        This algorithm extends the patience algorithm to "support low-occurrence common elements".
```

[a blog post on when to use which](https://luppeng.wordpress.com/2020/10/10/when-to-use-each-of-the-git-diff-algorithms/)

