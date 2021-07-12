---
title: GitHub commit dates
date: 2021-07-12
---

A git commit has an `author date` and `commit date`; the two differ in situations such as squashing, where the author date precedes the commit date (the timestamp of the squashing). While `git log` shows the author date, a GitHub repo's commit history displays the commit date.

To change the commits such that the commit date matches the author date:
```
git filter-branch --env-filter 'export GIT_COMMITTER_DATE="$GIT_AUTHOR_DATE"' HEAD~4..HEAD
```

`HEAD~4..HEAD` can be omitted to update all commits in the repo history. 

Force push the commits to update the remote repo. 

[some reading](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)

<small>[source](https://github.community/t/commit-timestamps-in-github-dont-match-repo/127766) [another source](https://stackoverflow.com/questions/11856983/why-git-authordate-is-different-from-commitdate)</small>
