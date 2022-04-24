---
title: Play a beep in PowerShell
date: 2021-09-24
tags: [posh]
---

```powershell
[console]::beep()
[console]::beep(1000,500)
# pitch, duration (ms)
```

System sounds via `rundll`:
```powershell
rundll32 user32.dll,MessageBeep
```
