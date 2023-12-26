---
title: PowerShell RegEx
date: 2023-12-01
tags: [regular expression, posh, match]
---

```powershell
'the goose' -match 'g[oe]{2}se'    # true
```

## Escaping

```powershell
'f\d.' -match [regex]::escape('\d.')
```


## Capture groups:

```powershell
'the goose' -match 'g([oe]{2})s(e)'
$Matches[1]
```

The automatic variable `$Matches` is a hashtable with the captured text. Key 0 holds the entire match.

```
> $Matches

Name                           Value
----                           -----
2                              e
1                              oo
0                              goose
```

Note that the hashtable contains only the first occurrence of any matching pattern. e.g. `the goose geese` → `goose` only ([docs](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_regular_expressions?view=powershell-5.1#groups-captures-and-substitutions))


**Named Captures**: use `?<keyname>`, e.g. `(?<keyname>pattern)` :

```powershell
'some geese flew south' -match '(?<bird>g[oe]{2}se) fl(?<tense>ew|y) (?<dir>\w+)'
```
```
> $Matches

Name                           Value
----                           -----
tense                          ew
bird                           geese
dir                            south
0                              geese flew south
```

## Find/Replace

```powershell
> 'red fox, brown fox, white swan' -replace '\w+ fox','pooh bear'

pooh bear, pooh bear, white swan
```

`$&` : all matched text

```powershell
> 'quick fox, quack fox, a quick quack fox' -replace 'qu\w+','$& $&'

quick quick fox, quack quack fox, a quick quick quack quack fox
```

With captures:

```powershell
> '1 red fox, 2 brown bears, 3 white swans' -replace
    '(\d) (\w+) (?<animal>([^s\W]|s\w)+)s?',
    '${animal} x$1 ($2)'

fox x1 (red), bear x2 (brown), swan x3 (white)
```

Special rules for using `$` since it's used in string expansion: [docs](https://learn.microsoft.com/en-us/dotnet/standard/base-types/substitutions-in-regular-expressions#substituting-a--character)
([summary](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_regular_expressions?view=powershell-5.1#substitutions-in-regular-expressions))

> Using `$` in general: use literal strings `''`
>
> `$` as a literal: use `$$`  --
> _e.g._ `'5.99' -replace '(.+)','CAD$$$&'` →  `CAD$5.99`

If not using literal strings, escape the `$`, i.e. <code>"`$1"</code> and <code>"`$`$"</code>


{%- capture sls_summary -%}
_**Another method:**  `Select-String`_
{%- endcapture -%}

{%- capture sls_details %}
```powershell
$m = 'the goose geese' | sls -pattern 'g([oe]{2})se'
$m.matches.groups[1]
```

```powershell
> $m.matches

Groups   : {0, 1}
Success  : True
Name     : 0
Captures : {0}
Index    : 0
Length   : 5
Value    : goose

# capture groups
> $m.matches.groups[1]

Success  : True
Name     : 1
Captures : {1}
Index    : 1
Length   : 2
Value    : oo
```

where `sls` is an alias for `Select-String`
{% endcapture %}

<details>
<summary><small>{{- sls_summary | markdownify }}</small></summary>
{{ sls_details | markdownify }}
</details>

[ref](https://stackoverflow.com/questions/33913878/how-to-get-the-captured-groups-from-select-string)
[docs](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_regular_expressions?view=powershell-5.1)

<style>
.highlight .err { color: inherit; background-color: inherit; }
summary p { display: inline; padding-left: 3px; }
summary small { font-size: initial }
</style>
