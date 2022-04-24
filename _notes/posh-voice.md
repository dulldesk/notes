---
title: PowerShell Voice
date: 2022-01-06
tags: [posh]
---


```powershell
[Reflection.Assembly]::LoadWithPartialName("System.Speech")
$voice = New-Object System.Speech.Synthesis.SpeechSynthesizer
$voice.SelectVoiceByHints("Female")
$voice.Speak("hello world")

$voice.GetInstalledVoices() | select -exp voiceinfo | ft
```

[SpeechSynthesizer](https://docs.microsoft.com/en-us/dotnet/api/system.speech.synthesis.speechsynthesizer)
