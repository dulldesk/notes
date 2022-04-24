---
title: Parse XML Feeds in PowerShell
date: 2021-05-01
tags: [posh]
---

Atom:
```powershell
$atomfeed = [xml](iwr https://dmoj.ca/feed/problems/atom/)

# actual entries
$atomfeed.feed.entry
```

RSS:
```powershell
$rssfeed = [xml](iwr https://www.theonion.com/rss)

# actual entries
$rssfeed.rss.channel.item
```

<small>[Reference](https://devblogs.microsoft.com/scripting/use-windows-powershell-to-parse-rss-feeds/)</small>
