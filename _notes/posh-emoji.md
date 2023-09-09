---
title: PowerShell Emojis (& Unicode)
date: 2023-09-09
tags: [posh]
---

Take 📎, which is `U+1F4CE` in Unicode.

**PowerShell 5.1 / ISE**
```powershell
# get integer value of the unicode hex code
$int = [System.Convert]::toInt32("1F4CE",16)
[System.Char]::ConvertFromUtf32($int)
```

or in one line: 
```powershell
[System.Char]::ConvertFromUtf32([System.Convert]::toInt32("1F4CE",16))
```
<small class="muted">i.e. `[System.Char]::ConvertFromUtf32(128206)`</small>
  

**PowerShell 7**
```powershell
Write-Host `u{1F4CE}
```

[source](https://www.powershellcenter.com/2021/02/19/add-emojis-to-powershell-output/)
