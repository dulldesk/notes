---
title: Creating a symlink via PowerShell
date: 2021-06-23
tags: [posh]
---

In past times, I've used cmd's `mklink`. The PowerShell way is as follows:

```powershell
New-Item -ItemType SymbolicLink -Path "C:\LINK" -Target "C:\SOURCE"
```

Hard link:
```powershell
New-Item -ItemType HardLink -Path "C:\LINK.txt" -Target "C:\SOURCE\SRC.txt"
```

Junction: 
```powershell
New-Item -ItemType Junction -Path "C:\LINK" -Target "C:\SOURCE"
```

By the power of PowerShell aliases and partial parameter names, the above can all be simplified as follows:
```powershell
ni -i hardlink link.txt -tar src.txt
```

[Source](https://techexpert.tips/powershell/powershell-creating-symbolic-link/)
[On symlinks, hard links, and junctions](https://www.2brightsparks.com/resources/articles/NTFS-Hard-Links-Junctions-and-Symbolic-Links.pdf)
