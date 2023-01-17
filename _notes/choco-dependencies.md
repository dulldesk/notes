---
title: List Choco package dependencies
date: 2021-07-26
---

In PowerShell, list the dependencies of all installed Chocolatey packages with the following:
```powershell
$dependency_table = @{}
ls C:\ProgramData\chocolatey\lib -Recurse "*.nuspec" | % {
  $dependencies = ([xml](cat $_.FullName)).package.metadata.dependencies.dependency | % {
    $_.id
  }
  if ($dependencies) {
    $dependency_table.Add($_.BaseName, $dependencies)
  }
}
[PSCustomObject]$dependency_table | Format-List
```

Minified:
```powershell
$t = @{}; ls C:\ProgramData\chocolatey\lib -r "*.nuspec" | % {if ($d = (([xml](cat $_.fullname)).package.metadata.dependencies.dependency | % {$_.id})) {$t.add($_.basename, $d)}}; [PSCustomObject]$t | fl
```

`Format-List`, or `fl`, is optional and purely cosmetic. If there are <abbr title="5+">enough</abbr> properties, or in this case packages with dependencies, then PowerShell will automatically format the output as a list as opposed to a table. 

Note that, should X depend on Y and Y depend on Z, this does not directly show that X depends on Z. 

Side note: `choco uninstall pkgname -x` force uninstalls a package's dependencies (in addition to the package itself), should no other installed packages be dependent on them. 

[reference](https://superuser.com/questions/1117789/is-there-a-way-to-list-all-chocolatey-packages-that-have-no-dependencies) [on Format-List](https://thomasrayner.ca/powershell-rules-for-format-table-and-format-list/)

<script src="{{ 'assets/js/copy-last-code.js' | relative_url }}"></script>
