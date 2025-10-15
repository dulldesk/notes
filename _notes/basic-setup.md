---
title: Temporary Work Setup
date: 2024-05-01
tags: [macos]
---

As part of the various co-ops I'm completing for my degree,
I find myself needing to set up MacOS several times,
so here's my work-in-progress list of extra terminal things to install.
Admittedly I should have something more robust, but it gets by to start.


homebrew:
```sh
curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh

brew install neovim
brew install --cask unnaturalscrollwheels
brew install --cask powershell
brew install bat
brew install gh gnupg ykman

git config --global core.editor nvim
git config --global alias.st status
```

.zshrc:
```sh
# git autocomplete
autoload -Uz compinit
compinit
```

[.vimrc]({{ site.baseurl }}{% link _notes/vim-config.md %})

PowerShell:
```powershell
Install-Module posh-git

# in $profile
Import-Module posh-git
function global:prompt {return "PS $($pwd.path.replace($home,"~"))"}
```

