---
title: Tee-Object
date: 2022-01-30
tags: [powershell,posh]
---

`Tee-Object` (alias `tee`) is used to save piped command output into a file or variable as well as down the pipeline.

### Pipeline/File Output
```powershell
> Get-Process | Tee-Object -FilePath ps.txt

Handles  NPM(K)    PM(K)      WS(K)     CPU(s)     Id  SI ProcessName
-------  ------    -----      -----     ------     --  -- -----------
    150      10     4636       3676              7308   0 AggregatorHost
...
```

Other self-explanatory flags available with this parameter set: 
* `-Append`
* `-Encoding` [values](https://learn.microsoft.com/en-gb/powershell/module/microsoft.powershell.utility/tee-object?view=powershell-7.3#-encoding) 


### Variable/File Output
```powershell
$a = ps | tee -f ps.txt
```
(redirects pipeline output to variable)

### Pipeline/Variable Output
```powershell
ls | tee -variable fooey
$fooey
```

### Other
* `ps | tee -f ps.txt | select -ind 0` only saves and outputs the first line
    * does not work for `variable` parameter

<style>
.highlight code span.err { background-color: inherit; color: inherit; }
h3 { padding-bottom: 0 }
<style>
