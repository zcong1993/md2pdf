---
nav: zh
---

# md2pdf

> 一个转换单个markdown文件为pdf文件的工具

## 特性

- 小巧快速
- 自定制样式
- 支持图片

## FAQ

### 和`gitbook`有什么不同？

相同：某些样式和layout均fork自gitbook，并且都使用`ebook-convert`转换生成`pdf`文件。

不同：`gitbook`不支持单文件转换，并且`markdown parser`和`highlight`方式不同

## 如何工作

使用[marked3](https://github.com/egoist/marked3)将`.md`文件转换成`html`，并用[prism](https://github.com/PrismJS/prism)高亮渲染，最后通过`ebook-convert`将`html`转换为`pdf`文件。

## 安装

<p class="warning">
  本工具生成pdf依赖`ebook-convert`。
  所以你应当[安装calibre](/zh/ebook)。
</p>

```bash
$ npm install -g mdtopdf
# yarn
$ yarn global add mdtopdf
```
## 使用方法

```bash
# md2pdf 是 mdtopdf 的一个alias
$ md2pdf <md file> [options]
# show help
$ md2pdf --help
```
<p class="tip">
  你的资源文件应该放在`assets`文件夹中。比如图片和`css`文件仅仅放在`assets`文件夹中才会生效。
</p>

你的文件目录应该是这样：

```
folder
  |-assets
    |-img.png
    |-main.css
  |-source.md
```


## 参数

### output

usage: `--output`

type: string

description: 输出文件名

default: `index.pdf`

alias: -o

<p class="tip">
  你应当使用以`.pdf`结尾的文件名保证能够正常打开文件。
</p>

### font-size

usage: `--font-size`

type: `number`

description: 字体大小

default: `12`

alias: `-f`

### font-family

usage: `--font-family`

type: `string`

description: 字体类型

default: `Arial`

### paper-size

usage: `--paper-size`

type: `string`

description: 纸张规格

default: `a4`

alias: `-p`

你可以选择以下类型的一种：`['a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'legal', 'letter']`

### no-page-numbers

usage: `---no-page-numbers`

type: `bool`

description: 不显示页码

default: `false`

### css

usage: `--css`

type: `string`

description: 额外自定制样式

default: 无

<p class="warning">
  `css`某些样式会报错，例如，我遇到过`prism`的`dark theme`出错。
</p>
