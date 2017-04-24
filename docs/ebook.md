# ebook-convert

You need install [Calibre](https://calibre-ebook.com/download) which provide `ebook-convert`.

## Windows

Download [Calibre](https://calibre-ebook.com/download), then set the installation folder into your `$PATH` of environment variables.

## GNU/Linux

Install `Calibre`

```bash
$ sudo aptitude install calibre
```

## OS X

Download [Calibre](https://calibre-ebook.com/download), move `calibre.app` into your `Applications` folder. Finally, maybe need this:

```bash
$ sudo ln -s ~/Applications/calibre.app/Contents/MacOS/ebook-convert /usr/bin
```
You can replace `/usr/bin` with any directory that is in your `$PATH`.
