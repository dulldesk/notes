---
title: LaTeX Snippets
date: 2023-10-01
tags: [counter, color, colour, enumitem]
---

## Colours

- List of latex colour definition snippets: [latexcolor.com](https://latexcolor.com/)
- Predefined colors: black, blue, brown, cyan, darkgray, gray, green, lightgray, lime, magenta, olive, orange, pink, purple, red, teal, violet, white, yellow ([src](https://en.wikibooks.org/wiki/LaTeX/Colors))

`{\color{blue} scoped blue} text`

## Simple counter

```latex
% one of these packages
\usepackage{enumerate}
\usepackage{array}
\usepackage{addlines}

\newcounter{ri}
\setcounter{ri}{0}
\newcommand{\st}{\stepcounter{ri}\theri}
```
Sample Usage (e.g. for tables):
```latex
\begin{tabular}{c|cc}
    & a & b \\
    \hline
    \st & 1 & 1 \\
    \st & 0 & 1
\end{tabular}
```

## Insert PDF, graphics

```latex
\usepackage{graphicx}
\graphicspath{ {./} }

\includegraphics[width=5in]{basename}
\includegraphics[width=5cm]{file.png}

\usepackage{pdfpages}
% one page
\includegraphics{file.pdf}
\includepdf{file.pdf}
% specify pages
\includepdf[pages=-]{file.pdf}
```

### Crop Images

```latex
\usepackage{graphicx}

\includegraphics[trim={5cm 0 0 0},clip]{image.png}
```

or

```
\usepackage[export]{adjustbox}

\adjincludegraphics[trim={0 0 {.5\width} 0},clip]{image.png}
```

trim from edge order: `left bottom right top`

[source](https://tex.stackexchange.com/questions/57418/crop-an-inserted-image)

## enumitem

```latex
\usepackage[shortlabels]{enumitem}
% ...
\begin{enumerate}[(a)]
\begin{enumerate}[label=(\textbf{\alph*})]
```

also available: `\Alph`, `\roman`, `\Roman`

[quick reference](https://ctan.math.illinois.edu/macros/latex/contrib/enumitem/enumitem.pdf)


## List spacing

![](https://images.ctfassets.net/nrgyaltdicpt/67uSeKS7soJ7j4yHs0IpDQ/319c15cf752ff6958ef6f1d509bf288e/LaTeX_list_parameters-plain.svg)

diagram is available with:

```latex
\usepackage{layouts}
% ...
\listdiagram
```


## Miscellaneous

* `\pagestyle{empty}` remove page numbers
* `\newcommand*{\bqed}{$\blacksquare$}`

Symbols:
* [some arrows](https://garsia.math.yorku.ca/MPWP/LATEXmath/node9.html)
* `\mathcal{E}` ε
* `\bigcup` union set operator
* `\langle`,`\rangle` ⟨⟩

<style>
h2 + div pre.highlight, h2 + ul { margin-top: 0; }
</style>
