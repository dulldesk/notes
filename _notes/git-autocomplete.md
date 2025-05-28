---
title: Git Auto-Completion
date: 2023-05-10
tags: [autocomplete]
---

* bash: find `git-completion.bash` or `bash_completion` ([link](https://stackoverflow.com/questions/11173447/how-can-i-set-up-autocompletion-for-git-commands))
* powershell: `Install-Module posh-git`, then `Import-Module posh-git` in the `$profile` file; see [posh-git](https://git-scm.com/book/ms/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Powershell) ([repo](https://github.com/dahlbyk/posh-git))
* zsh: `autoload -Uz compinit && compinit` in `.zshrc`

also: `git lfs completion` ([docs](https://github.com/git-lfs/git-lfs/blob/main/docs/man/git-lfs-completion.adoc))
