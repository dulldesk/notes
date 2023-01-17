---
title: Pipeline Input in PowerShell
date: 2023-01-17
tags: [posh, cmdletbinding, process]
---

```powershell
Function Remove-IfEmpty {
	[CmdletBinding()]
	Param(
		[Parameter(ValueFromPipeline)] $dir
	)
	process {
		if (
			(Test-Path $dir.fullname -PathType container) -and 
			((ls $dir.fullname -rec -file | measure | select -expand count) -eq 0)
		) {
			rm $_.fullname -confirm
		}
	}
}

ls -rec -dir | Remove-IfEmpty
ls -dir | select -first 1 | Remove-IfEmpty
```

Citing [this](https://learn.microsoft.com/en-us/powershell/scripting/developer/cmdlet/adding-parameters-that-process-pipeline-input?view=powershell-7.3),

- `ValueFromPipeline`: binds the parameter to the incoming object if the object is the same type as the parameter, or if it can be coerced to the same type
- `ValueFromPipelineByPropertyName`: check the incoming object for a `Name` property. If it exists, bind the `Name` parameter to the `Name` property of the incoming object


[reference](https://devblogs.microsoft.com/scripting/incorporating-pipelined-input-into-powershell-functions/)
[if `process` aliases `get-process`](https://github.com/PowerShell/PSScriptAnalyzer/issues/1402)
