---
title: WhatIf?
date: 2023-01-17
tags: [posh, confirm, supportsshouldprocess, cmdletbinding, args, shouldprocess]
---

```powershell
Function Push-Me {
	[CmdletBinding(SupportsShouldProcess)]
	Param([Parameter(ValueFromRemainingArguments)] $args)

	if ($PSCmdlet.ShouldProcess($args)) {
		git push @args
	}
	else {
		git push --dry-run @args
	}
}

Push-Me -Confirm
Push-Me -WhatIf
```

- `[CmdletBinding(SupportsShouldProcess)]` enables this
- `$PSCmdlet.ShouldProcess(...)` is what is to be run
- the `else` clause is not necessary unless for custom `WhatIf` output

*[`$args`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_automatic_variables?view=powershell-7.3#args) is not available in advanced functions (as defined by `CmdletBinding`)*

[reference](https://devblogs.microsoft.com/scripting/introduction-to-advanced-powershell-functions/)
[another example]({% link _notes/empty-dirs.md %})


<style>
.highlight .err {
  color: inherit;
  background-color: inherit;
}
.n + .p + .n, .bp, .err + .nx, .highlight .err {
  color: #82ffff;
}
</style>
