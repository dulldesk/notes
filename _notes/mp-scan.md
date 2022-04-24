---
title: Run a Windows Defender scan via command line
date: 2021-12-12
tags: [posh, powershell]
---

Windows Defender Antivirus has a command line utility.

```batch
"C:\Program Files\Windows Defender\MpCmdRun.exe" -scan -scantype 1
```

Scan types:

1 | quick scan
2 | full scan
3 | custom file/directory scan (must specify a path via the `-File` parameter)


Other interesting parameters:
* `-Restore -ListAll` list all items that were quarantined
* `-SignatureUpdate` runs signature updates


`-?` lists all of the [available options](https://docs.microsoft.com/en-us/microsoft-365/security/defender-endpoint/command-line-arguments-microsoft-defender-antivirus).


PowerShell also makes available the following equivalent cmdlets ([among others](https://docs.microsoft.com/en-us/powershell/module/defender/)):
* `Start-MpScan` (the `-ScanType` parameter is also required)
* `Start-MpWDOScan` (runs before the OS loads; requires a restart; [more info](https://www.reddit.com/r/antivirus/comments/mzz0ic/windows_defender_offline_scan_vs_online_scan_what/))
* `Get-MpThreat`
* `Update-MpSignature`

The two scanning cmdlets can also be run as jobs by passing the `-AsJob` switch.
