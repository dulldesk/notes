---
title: Wi-Fi QR Code Format
date: 2022-12-15
---

> `WIFI:T:WPA;S:my_ssid;P:mys3curepasswd;;`

Encode string into a <abbr title="do it offline!">QR code</abbr>
and iOS & Android phones can scan it to join the network.

Note that special characters in arguments (like `:`) need to be escaped (i.e. `\:`)

Some parameters (`;` delimited):
* `T` - authentication/encryption protocol: `nopass` (none), `WPA`, `WEP`
* `S` - network SSID
* `P` - password
* `H` - if network is hidden: `true` (optional)

[reference (& more parameters)](https://feeding.cloud.geek.nz/posts/encoding-wifi-access-point-passwords-qr-code/)
