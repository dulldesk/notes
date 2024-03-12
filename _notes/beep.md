---
title: Code beep
date: 2021-09-24
tags: [posh,python,js,javascript,sounds]
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

JavaScript:
```js
{% include js-beep.html -%}
```
(if not user-triggered, requires autoplay enabled)

[source](https://stackoverflow.com/questions/879152/how-do-i-make-javascript-beep) [override window.alert](https://superuser.com/a/1642565)
