---
title: Some vim config
date: 2023-01-01
---

`~/.vimrc`, `$home\_vimrc`


```vim
set t_Co=256
set background=dark
set termguicolors
colorscheme torte

syntax on
set hlsearch
set cursorline
set number ruler
highlight CursorLine ctermbg=52

set relativenumber
noremap <A-@> :set relativenumber!<cr>

" indenting
set autoindent smartindent
set tabstop=2 softtabstop=2 shiftwidth=2
set expandtab

" misc
set clipboard^=unnamed,unnamedplus
set lazyredraw
```
- [vim-plug](https://github.com/junegunn/vim-plug#installation)
- [nord theme installation](https://www.nordtheme.com/docs/ports/vim/installation)

<small>[clipboard stuff](https://stackoverflow.com/a/10979533) [indent stuff](https://vi.stackexchange.com/questions/7975/how-can-i-change-the-indent-size)</small>
