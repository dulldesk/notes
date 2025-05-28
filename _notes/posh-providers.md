---
title: PowerShell Providers
tags: [posh,alias,function]
---

PowerShell exposes a number of "providers" as "drives", which allows us to view certain data in a manner that resembles a file system drive,
i.e. we can use operations like `ls` and `cat` on them (ish).

To list the available providers:
```powershell
PS ~> Get-PSProvider

Name           Capabilities                          Drives
----           ------------                          ------
Alias          ShouldProcess                         {Alias}
Environment    ShouldProcess                         {Env}
FileSystem     Filter, ShouldProcess, Credentials    {Temp, /}
Function       ShouldProcess                         {Function}
Variable       ShouldProcess                         {Variable}
```

Windows only:
- `HKLM:`, `HKCU:` access registry hives under the Registry provider
- `Cert:` to manipulate the system X.509 certificate store


They can be accessed like filesystem objects in PowerShell, e.g. `gci alias`, `get-item alias:gci`, `get-content alias:gci`.

## Examples

- the Alias provider exposes the `Alias:` drive:
```powershell
PS ~> gci alias:
CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Alias           ? -> Where-Object                                             
Alias           % -> ForEach-Object                                           
Alias           cd -> Set-Location                                            
Alias           chdir -> Set-Location                                         
Alias           clc -> Clear-Content                                          
Alias           clhy -> Clear-History                                         
Alias           cli -> Clear-Item                                             
Alias           clp -> Clear-ItemProperty                                     
Alias           cls -> Clear-Host                                             

# equivalent to Get-Alias gci
PS ~> Get-Item alias:gci 

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Alias           gci -> Get-ChildItem                                          
```

- `gci function:,alias:` we can list multiple "drives"
- `get-content function:Get-GitStatus` (from the posh-git module)
- `remove-item alias:curl -force`
- Items inside providers can also be accessed through variables. `$env:path` denotes the `path` key inside the `env:` provider (i.e. an environment variable); `$alias:cd` for the `cd` alias
- `$function:countdown` returns the ScriptBlock assigned to a function named `countdown` 
- For function names with symbols (like most functions following PowerShell naming conventions), use `${function:Clear-Host}` variable syntax
- Custom providers can be created


[msdocs](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_providers)

[the alias provider](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_alias_provider?view=powershell-7.5)
[the function provider](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_function_provider?view=powershell-7.5)
