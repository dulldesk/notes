---
title: PowerShell Audio
date: 2023-01-16
---

```powershell
$o = new-object media.soundplayer audio.wav
$o.play()
$o.playsync()
$o.stop()
$o.playlooping()
```

