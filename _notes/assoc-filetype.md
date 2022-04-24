---
title: Creating file extension associations
date: 2020-05-17
tags: [assoc, filetype, ftype]
---

```batch
assoc .ahk=ahkfile
ftype ahkfile=C:\path\to\program.exe "%1"
```

| Variable | Value |
|-|-|
| `%0`, `%1` | file being launched |
| `%*` | all arguments |
| `%2`, `%3` ... | the first arg (`%2`), the second arg (`%3`), etc. |
| `%~<n>` | the remaining arguments, starting with the `n`th arg (2 &le; `n` &le; 9) |

[reference](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/ftype)

<style>
.s2 + .err {background-color: revert; color: revert;}
</style>
