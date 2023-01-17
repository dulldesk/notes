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
function play($f) {
	if (test-path "$pwd\$f") {$f = "$pwd\$f"}
	$o = new-object media.soundplayer $f
	$o.play()
	return $o
}
```
