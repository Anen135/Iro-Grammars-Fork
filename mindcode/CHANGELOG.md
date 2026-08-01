# Change Log

All notable changes to the "mindcode" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2026-01-08

### Added

- Full Mindcode language support based on the official [Mindcode syntax documentation](https://github.com/francois/mindcode/blob/main/doc/syntax/SYNTAX.markdown)
- Support for all Mindcode keywords (`const`, `var`, `param`, `begin`, `then`, `do`, `return`, `break`, `continue`, `module`, `require`, `atomic`, `inline`, `ref`, `out`, `loop`, etc.)
- Support for additional literal types:
  - Binary literals (`0b1010`)
  - Scientific notation (`1e10`, `1.5e-5`)
  - Color literals (`%FF0000`, `%[salmon]`)
  - Formattable strings (`$"text"`)
- Support for mlog keywords (`:building`, `:core`, etc.)
- `wordPattern`, `indentationRules`, and `onEnterRules` in `language-configuration.json` for improved editor behavior
- `LICENSE` (MIT)
- Package metadata (`publisher`, `author`, `license`, `repository`, `homepage`, `bugs`, `keywords`)

### Changed

- Fixed invalid `uiTheme` value (`vs-dark-mindcode` → `vs-dark`)
- Fixed operator alternation ordering so compound assignment operators (`+=`, `-=`, `*=`, `/=`) are matched correctly
- Fixed division operator (`\\` → `/`)
- Fixed word-boundary usage on range operators (`..`, `...`)
- Replaced ACE/Pygments scope names with proper TextMate scopes (`Name.Variable.Global` → `variable.global.mindcode`)
- Removed over-aggressive `invalid.illegal` catch-all that flagged every unmatched character as an error
- Removed dead Iro-generated placeholder entries from the grammar
- Updated theme scopes to match the corrected grammar
- Rewrote README with proper documentation and credits

### Fixed

- Resolved unresolved Git merge conflict markers in `README.md`
- Fixed duplicate language alias in `package.json`
- Fixed `@game-object` matching to work mid-expression

## [0.0.3] - 2021-03-28

### Added

- Grammar for Game-Objects: `@memory-cell`

## [0.0.2] - 2021-03-28

### Changed

- Syntax Colors adjusted

## [0.0.1] - 2021-03-28

### Added

- Initial release