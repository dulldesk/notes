---
title: PowerShell Audio
date: 2023-01-16
tags: [posh, media]
---

For wav files. 

```powershell
$o = new-object media.soundplayer audio.wav
$o.play()
$o.playsync()
$o.stop()
$o.playlooping()
```

A function:
```powershell
function play($f, [switch]$loop=$false) {
	if (test-path "$pwd\$f") {$f = "$pwd\$f"}
	$o = new-object media.soundplayer $f
	if ($loop) {$o.playlooping()} else {$o.play()}
	return $o
}
```
