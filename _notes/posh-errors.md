---
title: PowerShell Error Handling
date: 2022-04-30
tags: [posh, traps, catch, erroraction, errorvariable, ea, silentlycontinue]
---

- Similar to most languages, PowerShell errors can be handled with `try`/`catch` blocks. 

```powershell
try { 0/0 }
catch {
  Write-Host "the error: $_" -fore cyan
}
```

- `throw "error"`
- `catch [System.IO.FileNotFoundException] {}`. Can chain several `catch` statements.
- PowerShell only handles **terminating** errors in try/catch blocks (as opposed to non-terminating)
- [Traps](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_trap) can also be used to handle all terminating errors within a scope. Can be used to continue execution upon a terminating error. 

```powershell
function foo {
  trap {"error found"}
  0/0
  write-host "still here"
}
```


Related: two common parameters
* `-ErrorAction [Continue [default] | Stop | SilentlyContinue | Inquire]`. `Stop` is terminating. <small><i>e.g. `mv a b -erroraction stop`, `mv c d -ea silentlycontinue`</i></small>
* `-ErrorVariable var_name` - errors are assigned to this variable. Default: `$error`. Can also pass `+var_name` to append and not clear the variable. `var_name` is of type `ArrayList`. Default: `$error`. <small><i>e.g. `mv a a -errorvariable e`, `mv a a -ev e`</i></small>


[docs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_try_catch_finally) 
[reading](https://docs.microsoft.com/en-us/powershell/scripting/learn/deep-dives/everything-about-exceptions)
