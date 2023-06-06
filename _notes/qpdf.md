---
title: Some qpdf commands
date: 2022-09-11
---


## Split pdf pages into separate files:
```bash
qpdf --split-pages=1 i.pdf out-%d.pdf
```
<small>*1 being 1 page per file*</small>

## Delete pages:
```bash
qpdf i.pdf --pages . 1-3,6 -- out.pdf
```

## Merge pdfs into a single pdf:
```bash
qpdf --empty --pages a.pdf b.pdf c.pdf -- out.pdf
qpdf --empty --pages *.pdf -- out.pdf

# Take only the 1st page of a.pdf
qpdf --empty --pages a.pdf 1 b.pdf c.pdf -- out.pdf

# Another method, yields: b1, a3, c2
qpdf a.pdf --pages b.pdf 1 . 3 c.pdf 2 -- out.pdf
```

## Page ranges:
* stated in order (e.g. `1,6,4`)
* ranges are inclusive (e.g. `3-7`)
* can iterate backwards (e.g. `7-3`)
* `z`: last page (e.g. `1,z` ; `1-z` ; `z-1`)
* `rX`: Xth last page, e.g. `r1`: last page, `r2`: second last
* `r3-r1`: last 3 pages
* `r1-r3`: last 3 pages, reverse order
* `:even`, `:odd`: selects from *resulting* range (`5,7-9,12:odd`,`7,9:even`)
* `1,3,5-9,15-12,z,r3-r1:odd`

Some other options/flags:
* `--remove-page-labels`: exclude page labels (explicit page numbers)
* `--optimize-images`: *[docs](https://qpdf.readthedocs.io/en/stable/cli.html#option-optimize-images)*
* [pdf analysis options](https://qpdf.readthedocs.io/en/stable/cli.html#pdf-inspection)


[docs](https://qpdf.readthedocs.io/en/stable/cli.html)

<style>
pre,ul {margin-top: 0}
ul + p {margin-bottom: 0.5rem}
</style>
