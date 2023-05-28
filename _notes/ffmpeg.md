---
title: some ffmpeg commands
date: 2023-01-01
---

## Crop:
```
ffmpeg -i in.mp4 -vf "crop=out_w:out_h:x:y" out.mp4
```

- `out_w`, `out_h` -- width/height of the output rectangle (e.g. `850/2`)
- `(x,y)` -- top left corner for the output rectangle
- `in_w`, `in_h` -- input width/height (e.g. `in_w-40`, `in_w/2`)

[docs](https://ffmpeg.org/ffmpeg-filters.html#crop) [reference](https://video.stackexchange.com/questions/4563/how-can-i-crop-a-video-with-ffmpeg)

## Trim:
```
ffmpeg -i in.mp4 -ss hh:mm:ss -to hh:mm:ss out.mp4
```
- `-ss` -- starting timestamp
- `-to` -- ending timestamp
- `-t` -- duration

## Mute:
```
ffmpeg -i in.mp4 -an out.mp4
```

## General:
- `-c copy` for no re-encoding
- `-preset veryfast|ultrafast|...` for faster compression (tradeoff size/quality)
- `ffplay` to play a video (mostly used to test ffmpeg transformations)
- `ffmpeg -i in.mp4 -filter_complex "select=bitor(gt(scene\,0.5)\,eq(n\,0))" -vsync drop "frames/%04d.jpg"` export unique frames? ([src](https://superuser.com/a/1785999))

<style>
h2 + div > .highlight > pre,
h2 + ul
{margin-top: 0}
</style>
