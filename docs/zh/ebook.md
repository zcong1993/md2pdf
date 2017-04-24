---
nav: zh
---

# ebook-convert

你需要安装[Calibre](https://calibre-ebook.com/download)，提供我们需要的`ebook-convert`。

## Windows 系统

直接下载[Calibre](https://calibre-ebook.com/download)，然后将安装目录加入系统环境变量`PATH`中。

## GNU/Linux 系统

Install `Calibre`

```bash
$ sudo aptitude install calibre
```

## OS X 系统

下载[Calibre](https://calibre-ebook.com/download)，然后将`calibre.app`移动到`Applications`目录。最后，你可能需要建立一个软连接。

```bash
$ sudo ln -s ~/Applications/calibre.app/Contents/MacOS/ebook-convert /usr/bin
```
你可以将`/usr/bin`替换成任何的`$PATH`中的任何目录。
