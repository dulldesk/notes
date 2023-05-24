---
title: netsh for WiFi
date: 2021-07-23
tags: ["netsh","wlan","network"]
---

Get plaintext password of current/past networks
```
netsh wlan show profiles * key=clear
netsh wlan show profile <network_name> key=clear
```

Connect to/disconnect from WiFi:
```
netsh wlan disconnect
netsh wlan connect [name=]<string> [[ssid=]<string>] [[interface=]<string>]
```

Show info (a selection from `netsh wlan show`):
```
show all       - Shows complete wireless device and networks information.
show drivers   - Shows properties of the wireless LAN drivers on the system.
show interfaces - Shows a list of the wireless LAN interfaces on the system.
show networks  - Shows a list of networks visible on the system.
show profiles  - Shows a list of profiles configured on the system.
show wirelesscapabilities - Shows the wireless capabilities of the system
show wlanreport - Generate a report showing recent wireless session information.
```

