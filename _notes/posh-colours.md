---
title: Colours of the PowerShell Rainbow
date: 2020-01-23
---

PowerShell's foreground and background colours available for printing can be displayed via the following PowerShell command:
```powershell
[enum]::GetValues([ConsoleColor]) | % {Write-Host $_ -ForegroundColor $_} 
```

The non-colour-coded list:

Gray | DarkGray
Blue | DarkBlue
Green | DarkGreen
Cyan | DarkCyan
Red | DarkRed
Magenta | DarkMagenta
Yellow | DarkYellow
White | Black

<small>[Source](https://stackoverflow.com/a/20541733)</small>

<style>
table {font-family: monospace;}
</style>
