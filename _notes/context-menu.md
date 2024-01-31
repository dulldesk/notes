---
title: Tweaking the Windows Context Menu
date: 2020-10-04
tags: [explorer, regedit, registry, posh, "right click"]
---

For the Windows Explorer right click context menu.
Use the HKCR (`HKEY_CLASSES_ROOT`) path for administrator, 
and HKCU (`HKEY_CURRENT_USER`) for only the current user.

**Background of right panel**
```
HKCR\Directory\Background\shell
HKCU\Software\Classes\directory\Background\shell
```
**Directory icon**
```
HKCR\Directory\shell
HKCU\Software\Classes\directory\shell
```
**File**
```
HKCR\*\shell
HKCU\Software\Classes\*\shell 
```

### How to add a command (sample install script):

If prompted, do not override keys unless it's for the command/knowledgable.
```powershell
$name = "Open with Sublime"
$cmd = """C:\Program Files\Sublime Text\subl.exe '%1'"""

reg add HKCU\Software\Classes\Directory\Background\shell
reg add "HKCU\Software\Classes\Directory\Background\shell\$name"
reg add "HKCU\Software\Classes\Directory\Background\shell\$name\command" /d $cmd
```
<small>If manually adding via regedit, note that these are keys (not string values)</small>

`%1` indicates the current file. [more args]({{ site.baseurl }}{% link _notes/assoc-filetype.md %})

Alternate script, if opting for a different key vs name:
```powershell
$name = "Open with Sublime"
$key = "OpenSublime"
$cmd = """C:\Program Files\Sublime Text\subl.exe '%1'"""

reg add HKCU\Software\Classes\Directory\Background\shell
reg add "HKCU\Software\Classes\Directory\Background\shell\$key" /d $name
reg add "HKCU\Software\Classes\Directory\Background\shell\$key\command" /d $cmd
```

Other paths to try:
```
HKEY_CLASSES_ROOT\AllFileSystemObjects\ShellEx\ContextMenuHandlers
HKEY_CLASSES_ROOT\*\shellex\ContextMenuHandlers\
HKEY_CLASSES_ROOT\Folder\shellex\ContextMenuHandlers\
```

### Miscellaneous

Windows 11 always expand context menu:
`reg add HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32 /ve /f`
(may need to restart Windows Explorer)

[source](https://stackoverflow.com/questions/20449316/how-add-context-menu-item-to-windows-explorer-for-folders)
[MS-docs](https://docs.microsoft.com/en-us/windows/win32/shell/context-menu)
[another source](https://www.hongkiat.com/blog/manage-windows-context-menu/)
