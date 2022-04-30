---
title: Some ImageMagick Commands
date: 2021-12-28
---


## File type conversion

```powershell
magick logo.png favicon.ico

# Get first frame of a video
magick video.mp4[2] frame_2.jpg
```

Can also be used as  `magick convert x.png y.png`. More info [here](https://imagemagick.org/script/convert.php).

## Resize an image

```powershell
magick old.png -resize x400 new.png      # height 400px, preserves aspect ratio
magick old.png -resize 1000 new.png      # width 1000px, preserves aspect ratio
```

Several more options on the image "geometry" (the `x400` arg) are listed [in the documentation](https://imagemagick.org/script/command-line-processing.php#geometry). 
More info [here](https://imagemagick.org/script/command-line-options.php#resize).

## Some other analysis tools

[`identify`](https://imagemagick.org/script/identify.php) outputs an image's format and characteristics, e.g. its dimensions. 
```powershell
magick identify image.png
magick identify -verbose image.png
```

[`compare`](https://imagemagick.org/script/compare.php) compares two images and outputs a difference analysis to a third image. The red areas of the output image highlights pixels that are different. Whitened areas are similar. 

```powershell
magick compare a.jpg b.jpg diff-output.png
```

Use the [`-metric`](https://imagemagick.org/script/command-line-options.php#metric) option to print a numeric measure of the two images' similarity.

```powershell
magick compare -metric SSIM a.jpg b.jpg diff-output.png
# 0.215678
```

The output of <abbr title="structural similarity index">`SSIM`</abbr> ranges from `0` (completely different) to `1` (identical).
Other metrics available include <abbr title="absolute error count / number of different pixels">`AE`</abbr> and <abbr title="structural dissimilarity index">`DSSIM`</abbr>.

## Filters

**Inversion**:
```
magick input.png output.png
# if an alpha channel is present (i.e. has transparency)
magick input.png -channel RGB -negate output.png
```

<br>
[other `magick` options](https://imagemagick.org/script/command-line-options.php) [and tools](https://imagemagick.org/script/command-line-tools.php)
