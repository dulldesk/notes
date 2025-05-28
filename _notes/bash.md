---
title: Some bash stuff
date: 2023-10-01
tags: [bash, sh, alias, trap, awk, zsh]
---

* expand aliases: `shopt -s expand_aliases`
* exit on fail: `set -e` (upon a command exiting with a non-zero status)
* trap the exit signal: `trap 'rm -f foo' EXIT` (e.g. to perform cleanup upon exit)
* `while IFS=',' read -r var_name; do`
* <code class="highlight">echo test`<span class='s1'>which sh</span>`</code>
- [bash scoping rules](https://gist.github.com/CMCDragonkai/0a66ba5e37c5d1746d8bc814b37d6e1d)

## awk

```bash
awk ‑F: 'OFS="-" { print $1 $3 $NF }' /etc/passwd

fortune | awk '{ print toupper($0) }'

awk '$1 ~ foo { print $3 }'
```
* comparison operators: ==, !=, <, <=, (etc), ~ (match, e.g. contain), !~ (not match)
* `$NF` - last field

[awk by example](https://developer.ibm.com/tutorials/l-awk1/)
