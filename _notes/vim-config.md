---
title: Some vim config
date: 2023-01-01
---

`~/.vimrc`, `$home/_vimrc`

- [indent stuff](https://vi.stackexchange.com/questions/7975/how-can-i-change-the-indent-size)

**some color/theme stuff**:
```
set t_Co=256
set background=dark
set termguicolors
colorscheme torte

syntax on
set hlsearch
set cursorline
highlight CursorLine ctermbg=52
```
- [vim-plug](https://github.com/junegunn/vim-plug#installation)
- [nord theme installation](https://www.nordtheme.com/docs/ports/vim/installation)

**misc**:
```
set clipboard^=unnamed,unnamedplus
set lazyredraw
```
<small>[clipboard stuff](https://stackoverflow.com/a/10979533)</small>
