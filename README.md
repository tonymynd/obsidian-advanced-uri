# Obsidian Advanced URI

A plugin for [Obsidian](https://obsidian.md)

[Documentation](https://vinzent03.github.io/obsidian-advanced-uri)

## Overview

[Obsidian Advanced URI](https://github.com/Vinzent03/obsidian-advanced-uri) allows you to control many different features in Obsidian just by opening some URIs. Because they are just text and don't require any mouse clicks or keyboard inputs, they are perfect to automate your Obsidian workflow.

You can for example 
- [open files](https://vinzent03.github.io/obsidian-advanced-uri/actions/navigation)
- [edit files](https://vinzent03.github.io/obsidian-advanced-uri/actions/writing)
- [create files](https://vinzent03.github.io/obsidian-advanced-uri/actions/writing)
- [open workspaces](https://vinzent03.github.io/obsidian-advanced-uri/actions/navigation)
- [open bookmarks](https://vinzent03.github.io/obsidian-advanced-uri/actions/bookmarks)
- [navigate to headings/blocks](https://vinzent03.github.io/obsidian-advanced-uri/actions/navigation)
- [automated search and replace in a file](https://vinzent03.github.io/obsidian-advanced-uri/actions/search)
- [call commands](https://vinzent03.github.io/obsidian-advanced-uri/actions/commands)
- [edit and read from frontmatter](https://vinzent03.github.io/obsidian-advanced-uri/actions/frontmatter)
- and much more

Please read the [documentation](https://vinzent03.github.io/obsidian-advanced-uri) for a detailed explanation.

## Examples

### Append content from the clipboard to today's daily note
```uri
obsidian://advanced-uri?vault=<your-vault>&daily=true&clipboard=true&mode=append
```

### Call a command
```uri
obsidian://advanced-uri?vault=<your-vault>&filepath=<your-file>&commandid=workspace%253Aclose
```

### Open heading in a file
```uri
obsidian://advanced-uri?vault=<your-vault>&filepath=my-file&heading=Goal
```

If you find this plugin useful and would like to support its development, you can support me on [Ko-fi](https://Ko-fi.com/Vinzent).

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F195IQ5)
