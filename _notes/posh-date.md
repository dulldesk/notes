---
title: PowerShell Date Strings
date: 2022-04-30
tags: [posh, format]
---

```powershell
Get-Date -f d
Get-Date -f yyyy-MM-dd

Get-Date -uf %s            # 1651326604.8135
Get-Date -uf %s -milli 0   # 1651326604
```

`-Format` uses .NET date format specifiers. `-UFormat` uses UFormat specifiers. 

Links:
* [.NET standard date/time format specifiers](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)
* [.NET custom date/time format specifiers](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings)
* [further reading](https://devblogs.microsoft.com/scripting/formatting-date-strings-with-powershell/)
* [UFormat specifiers](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-date?view=powershell-7.2#notes)


---

**Abbreviated list of standard .NET date format specifiers** (adapted from [here](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings))

d &rarr; `6/15/2009`

D &rarr; `Monday, June 15, 2009`

g &rarr; `6/15/2009 1:45 PM`

G &rarr; `6/15/2009 1:45:30 PM`

m, M &rarr; `June 15`

r, R &rarr; `Mon, 15 Jun 2009 20:45:30 GMT`

t &rarr; `1:45 PM`

T &rarr; `1:45:30 PM`

U &rarr; `Monday, June 15, 2009 8:45:30 PM`

y, Y &rarr; `June 2009`


*examples for en-US culture*
