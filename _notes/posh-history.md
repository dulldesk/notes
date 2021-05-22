---
title: Get PowerShell History
date: 2020-11-13
---

```powershell
# File path
(Get-PSReadlineOption).HistorySavePath

# and cat it
cat (Get-PSReadlineOption).HistorySavePath
```
