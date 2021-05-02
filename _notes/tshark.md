---
title: Basic tshark usage
date: 2021-04-19
---

```bash
$ tshark -r file.pcap -T fields -e data.data -Y "icmp && ip.src == 192.168.1.7"
$ tshark -r file.pcapng -T fields -e dns.qry.name -Y "ip.addr == 18.217.1.57 && dns"
```

`-r`: file

`-Y`: filter

`-e`: extract certain fields

`-T`: format of text output (required for `-e`; `fields` option outputs only the field value)

