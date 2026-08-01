# Mindcode for Visual Studio Code

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](CHANGELOG.md)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Syntax highlighting and language support for the **Mindcode** programming language — a high-level procedural language that compiles to [Mindustry Logic](https://github.com/Anuken/Mindustry) (`mlog`).

This extension is a fork/derivative of the work by **Anen135** ([vscode-mlog](https://github.com/Anen135/vscode-mlog)), which provided language support for Mindustry Logic. It extends that foundation with a full grammar for the Mindcode language, designed using the [Iro grammar designer](https://eeyo.io/iro/).

## Features

- **Syntax highlighting** for `.mnd` and `.mindcode` files
- **Dark+ (Mindcode)** color theme with additional Mindcode-specific highlighting
- **Language configuration**:
  - Line (`//`) and block (`/* ... */`) comments
  - Bracket matching & auto-closing for `def/end`, `if/end`, `while/end`, `when/end`, `for/end`, `{ }`, `[ ]`, `( )`
  - Smart indentation for block constructs

## Installation

### From the Visual Studio Code Marketplace

1. Open VS Code
2. Go to the **Extensions** view (`Ctrl+Shift+X`)
3. Search for **"Mindcode"**
4. Click **Install**

### Manual installation

1. Download the latest `.vsix` from the [releases page](https://gitlab.com/jig-opensource/source-code/Iro-Grammars/-/releases)
2. In VS Code, open the **Extensions** view
3. Click the **...** menu → **Install from VSIX...**
4. Select the downloaded `.vsix` file

### From source

```bash
git clone https://gitlab.com/jig-opensource/source-code/Iro-Grammars.git
cd Iro-Grammars/mindcode
npm install -g @vscode/vsce
vsce package
code --install-extension mindcode-0.1.0.vsix
```

## Usage

Create a file with the `.mnd` or `.mindcode` extension, or select **Mindcode** as the language mode. The extension will automatically apply syntax highlighting.

### Example

```mindcode
// A simple Mindcode program
allocate stack in cell1;
allocate heap in cell2;

const PI = 3.14159;
var radius = 5;

def area(r)
    return PI * r * r;
end;

println("Area: $area(radius)");
printflush(message1);
```

## Language Support

The grammar covers the full Mindcode language, including:

- **Keywords**: `allocate`, `and`, `atomic`, `begin`, `break`, `cached`, `case`, `const`, `continue`, `debug`, `def`, `descending`, `do`, `else`, `elsif`, `end`, `export`, `external`, `false`, `for`, `guarded`, `heap`, `if`, `in`, `inline`, `linked`, `loop`, `mlog`, `module`, `noinit`, `noinline`, `not`, `null`, `or`, `out`, `param`, `private`, `public`, `ref`, `remote`, `require`, `return`, `stack`, `then`, `true`, `var`, `void`, `volatile`, `when`, `while`
- **Literals**: decimal, binary (`0b1010`), hexadecimal (`0xFF`), scientific (`1e10`), color (`%FF0000`, `%[salmon]`), character (`'a'`), string (`"text"`), formattable string (`$"text"`)
- **Built-in variables**: `@time`, `@unit`, `@links`, etc.
- **Global variables**: `$name`
- **Mlog keywords**: `:building`, `:core`, etc.
- **Operators**: arithmetic, comparison, logical, assignment, compound assignment
- **Comments**: line (`//`) and block (`/* ... */`)

## Requirements

- Visual Studio Code `^1.54.0` or later

## Extension Settings

This extension contributes the following settings:

* `mindcode.theme`: The color theme to use for Mindcode files (default: `Dark+ (Mindcode)`)

## Known Issues

The grammar is designed to be more permissive than the Mindcode compiler, to accommodate future language extensions. As a result, the editor may not flag all errors that the compiler would catch.

## Release Notes

See [CHANGELOG.md](CHANGELOG.md) for the full release history.

## Credits

- **Anen135** — original [vscode-mlog](https://github.com/Anen135/vscode-mlog) extension for Mindustry Logic
- **François Beausoleil** — creator of the [Mindcode language](https://github.com/francois/mindcode)
- **Iro** — [grammar designer](https://eeyo.io/iro/) used to create the TextMate grammar

## License

[MIT](LICENSE)