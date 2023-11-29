---
title: Getting Linux distribution's name
date: 2022-05-22T14:19:00.000Z
metatags: linux
description: Getting Linux distribution's name
cover: posts/tanya-grypachevskaya-6y5dHVz4dUk-unsplash.webp
isPublished: true
isArchive: false
---

I had just linked my VS Code to a container, when I questioned myself about which Linux distribution I was connected to, and a quick search led me to the following instruction:

```
cat /etc/os-release
```

Which after ran, should print the following information in the terminal:

```bash
PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
NAME="Debian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"
```

Linux uses the file mentioned in the command above to store information about the operating system. An alternative file that can be used to get the same information is: `/usr/lib/os-release`.

## Further reading:

- [os-release](https://www.linux.org/docs/man5/os-release.html)
