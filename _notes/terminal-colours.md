---
title: Printing Colours in the Terminal
date: 2021-05-15
---

Print ANSI escape codes in order to print colours in the terminal. 

More specifically, print a string in the format: `<prefix><code>%s`, where the prefix is the code for the control character "escape". Some example prefixes:

JavaScript | `\x1b[`
Python | `\033[`
Java | `\u001B[`
Bash | `\033[0;`

`esc` is encoded in octal in Python and Bash (hence `\0`) but in hexadecimal in JavaScript (`\x`) and Java (`\u` for unicode).

The colour codes are as follows.

<div style="display:flex; justify-content:space-around;">
{% capture md %}
Foreground | 
---- | 
Black | `30m`
Red | `31m`
Green | `32m`
Yellow | `33m`
Blue | `34m`
Magenta | `35m`
Cyan | `36m`
White | `37m`

Background | 
---- | 
Black | `40m`
Red | `41m`
Green | `42m`
Yellow | `43m`
Blue | `44m`
Magenta | `45m`
Cyan | `46m`
White | `47m`

Additional Codes | 
---- | 
Reset | `0m`
Bright | `1m`
Dim | `2m`
Underscore | `4m`
Blink | `5m`
Reverse | `7m`
Hidden | `8m`
{% endcapture %}
{{ md | markdownify }}
</div>

Examples:
```javascript
// JavaScript
console.log('\x1b[36mcyan\x1b[0m');
console.log('\x1b[36m%s\x1b[0m', 'cyan');
```

<small>
[On ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors)
[Source](https://stackoverflow.com/a/41407246)
</small>
