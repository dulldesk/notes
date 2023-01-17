---
title: Remove Empty Directories
date: 2023-01-17
tags: [dirs, posh, pipeline]
---

```powershell
Function Remove-IfEmpty {
	[CmdletBinding(SupportsShouldProcess)]
	Param(
		[Parameter(ValueFromPipeline)] $dir
	)
	process {
		if (
			(Test-Path $dir.fullname -PathType container) -and 
			((ls $dir.fullname -rec -file | measure | select -expand count) -eq 0)
		) {
			rm $_.fullname
		}
	}
}

ls -rec -dir | Remove-IfEmpty -WhatIf
ls -rec -dir | Remove-IfEmpty -Confirm
ls -dir | select -first 1 | Remove-IfEmpty
```

Minified:
```powershell
Function Remove-IfEmpty {[CmdletBinding(SupportsShouldProcess)] Param([Parameter(ValueFromPipeline)] $dir);  process {if ((Test-Path $dir.fullname -PathType container) -and ((ls $dir.fullname -rec -file | measure | select -expand count) -eq 0)) {rm $_.fullname}}}
```

[about `WhatIf` & `Confirm`]({{ site.baseurl }}{% link _notes/posh-whatif.md %}) [about the PowerShell pipeline]({{ site.baseurl }}{% link _notes/posh-pipeline.md  %})

<script src="{{ 'assets/js/copy-last-code.js' | relative_url }}"></script>
