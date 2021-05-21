---
title: Fake Superscript Symbols
date: 2021-05-10
---

{%- assign N = 9 -%}
{%- assign total = site.data.superscripts.size | divided_by:N -%}

{%- for ind in (0..total) -%}
  <table class="no-border monospace w-auto">
    {%- assign start = ind | times:N -%}
    {%- tablerow term in site.data.superscripts offset:start cols:1 limit:N -%}
      {{ term.character }}&emsp;&emsp;{{ term.symbol }}
    {%- endtablerow -%}
  </table>
{%- endfor -%}

Useful for adding superscripts in spreadsheets that do not support them. 

[Source](https://www.benlcollins.com/spreadsheets/superscript-in-google-sheets/)
