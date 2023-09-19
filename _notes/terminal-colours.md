---
title: Printing Colours in the Terminal
date: 2021-05-15
tags: [powershell, posh, shell, console, bash, javascript, python, java]
---

Print ANSI escape codes in order to print colours in the terminal. 

More specifically, print a string in the format: `<prefix><code>%s`, where the prefix is the code for the control character "escape". Some example prefixes:

JavaScript | `\x1b[`
Python | `\033[`
Java | `\u001B[`
Bash | `\033[0;`
PowerShell | `[char]0x1b + '['` (or in one string via a subexpression operator: `"$([char]0x1b)["` )

`esc` is encoded in octal in Python and Bash (hence `\0`) but in hexadecimal in JavaScript (`\x`), Java (`\u` for unicode), and PowerShell (`0x`).

In Bash, use `printf` or `echo -e` to allow the backslash escapes.

The colour codes are as follows.

<div class="multi-table-wrapper">
{% capture md %}
Colour | FG | BG
---- | 
Black | `30m` | `40m`
Red | `31m` | `41m`
Green | `32m` | `42m`
Yellow | `33m` | `43m`
Blue | `34m` | `44m`
Magenta | `35m` | `45m`
Cyan | `36m` | `46m`
White | `37m` | `47m`

Colour | FG | BG
---- | 
Bright Black (gray) | `90m` | `100m`
Bright Red | `91m` | `101m`
Bright Green | `92m` | `102m`
Bright Yellow | `93m` | `103m`
Bright Blue | `94m` | `104m`
Bright Magenta | `95m` | `105m`
Bright Cyan | `96m` | `106m`
Bright White | `97m` | `107m`

Reset | `0m`
Bold | 1m
Dim | 2m
Italic (not widely supported) | 3m
Underline | 4m
Blink | 5m, 6m
Strikethrough | 9m
{% endcapture %}
{{ md | markdownify }}
</div>

Examples:
```javascript
// JavaScript
console.log('\x1b[36mcyan\x1b[0m');
console.log('\x1b[36m%s\x1b[0m', 'cyan');
```

Note that colour can also be printed in [PowerShell terminals]({{ "posh-colours" | relative_url }}) via `Write-Host` and the `-ForegroundColor` and `-BackgroundColor` parameters. 

<small>
[On ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors)
[Source](https://stackoverflow.com/a/41407246)
[on bash](https://stackoverflow.com/a/5947802)
</small>

<style>
td {vertical-align: top;}
</style>
