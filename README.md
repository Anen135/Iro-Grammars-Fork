# Iro Grammars

A collection of grammar definitions for the [Iro grammar designer](https://eeyo.io/iro/), used to create TextMate grammars for Visual Studio Code.

## Contents

| Directory | Description |
|-----------|-------------|
| [`mindcode/`](mindcode/) | VS Code extension providing syntax highlighting and language support for the **Mindcode** programming language (Mindustry Logic compiler) |

## Mindcode Extension

The [`mindcode/`](mindcode/) directory contains a complete VS Code extension for the [Mindcode language](https://github.com/francois/mindcode), a high-level procedural language that compiles to Mindustry Logic (`mlog`).

This extension is a fork/derivative of the work by **Anen135** ([vscode-mlog](https://github.com/Anen135/vscode-mlog)), which provided language support for Mindustry Logic. It extends that foundation with a full grammar for the Mindcode language.

### Features

- Syntax highlighting for `.mnd` and `.mindcode` files
- Dark+ (Mindcode) color theme
- Language configuration with bracket matching, auto-closing, and smart indentation

### Development

The grammar is designed using the [Iro grammar designer](https://eeyo.io/iro/):

1. Open [`mindcode/Iro Grammar Designer/Mindcode-Grammar.iro`](mindcode/Iro%20Grammar%20Designer/Mindcode-Grammar.iro) in Iro
2. Make changes to the grammar
3. Export the TextMate grammar to `mindcode/syntaxes/mindcode.plist`
4. Test the extension by pressing `F5` in VS Code

## License

[MIT](mindcode/LICENSE)