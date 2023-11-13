---
title: Code beep
date: 2021-09-24
tags: [posh,sounds]
---

PowerShell:

```powershell
[console]::beep()
[console]::beep(1000,500)
# pitch, duration (ms)
```

System sounds via `rundll`:
```powershell
rundll32 user32.dll,MessageBeep
```

Python (🧀):
```py
os.system("printf '\a'")
```

