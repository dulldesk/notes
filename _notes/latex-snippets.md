---
title: LaTeX Snippets
date: 2023-10-01
tags: [counter, color, colour]
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
begin{tabular}{c|cc}
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

## Miscellaneous

* `\pagestyle{empty}` remove page numbers
