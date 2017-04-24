# md2pdf

> generate pdf file from single markdown file

## Features

- tiny and effective
- external custom css style
- support images

## FAQ

### Is there any differences from `gitbook`？

same: some css style and layout are forked from gitbook, and both are using `ebook-convert` to generate pdf file.

differences: `gitbook` can not work with single file ，and we using different libs for `markdown parser` and `highlight`.

## How does it work

First, we use [marked3](https://github.com/egoist/marked3) transfer `.md` file into `html`，meanwhile make highlight by [prism](https://github.com/PrismJS/prism), then generate pdf file by `ebook-convert` from `html` file。

## Install

<p class="warning">
  The tools depend on `ebook-convert`, so you should [install calibre](/ebook) first.
</p>

```bash
$ npm install -g mdtopdf
# yarn
$ yarn global add mdtopdf
```
## Usage

```bash
# md2pdf 是 mdtopdf 的一个alias
$ md2pdf <md file> [options]
# show help
$ md2pdf --help
```
<p class="tip">
  Your external resource file should put in `assets` folder, such as `css` and `images` files. And only in this way, it works well.
</p>

So your workspace folder will like this：

```
folder
  |-assets
    |-img.png
    |-main.css
  |-source.md
```


## Options

### output

usage: `--output`

type: string

description: out put file name

default: `index.pdf`

alias: -o

<p class="tip">
  Your should set this options endswith `.pdf`, so you can open it correctly.
</p>

### font-size

usage: `--font-size`

type: `number`

description: font size

default: `12`

alias: `-f`

### font-family

usage: `--font-family`

type: `string`

description: font family we use

default: `Arial`

### paper-size

usage: `--paper-size`

type: `string`

description: paper size

default: `a4`

alias: `-p`

You can choose one of these：`['a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'legal', 'letter']`

### no-page-numbers

usage: `---no-page-numbers`

type: `bool`

description: not render page numbers

default: `false`

### css

usage: `--css`

type: `string`

description: external css style

default: none

<p class="warning">
  Some `css` style maybe throw error in rendering. It throw error when I use `dark theme` of `prism`.
</p>
