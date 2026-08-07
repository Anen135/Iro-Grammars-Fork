#!/usr/bin/env node
/**
 * Builds the Mindcode VSIX package automatically.
 *
 * Usage:
 *   node build-vsix.js
 *
 * What it does:
 *   1. Removes previously built .vsix files from the extension directory.
 *   2. Runs `vsce package` inside the `mindcode/` extension directory,
 *      fetching the packager on the fly via npx (no global install needed).
 *   3. Verifies the produced package and prints the result.
 *
 * Works on Windows, macOS and Linux.
 */

'use strict';

const { spawnSync } = require('node:child_process');
const { existsSync, readdirSync, rmSync } = require('node:fs');
const path = require('node:path');

const ROOT_DIR = __dirname;
const EXTENSION_DIR = path.join(ROOT_DIR, 'mindcode');
const PACKAGER = '@vscode/vsce';
const VSIX_PATTERN = /\.vsix$/i;

// On Windows, npm's emulated binaries are exposed as .cmd wrappers
// and must be executed through cmd.exe.
const useCmdShim = process.platform === 'win32';

function run(command, args, cwd) {
  const fullCommand = [command, ...args].join(' ');
  console.log(`[build] $ ${fullCommand}`);

  if (useCmdShim) {
    // Wrap in cmd.exe to resolve .cmd shims (avoids shell:true + DEP0190).
    // windowsVerbatimArguments keeps the explicit quotes we pass; /s makes
    // cmd.exe strip the outer quote pair so the inner command is preserved.
    return spawnSync(process.env.ComSpec || 'cmd.exe', ['/d', '/s', '/c', `"${fullCommand}"`], {
      cwd,
      stdio: 'inherit',
      windowsVerbatimArguments: true,
    });
  }

  return spawnSync(command, args, {
    cwd,
    stdio: 'inherit',
  });
}

function main() {
  // 1. Make sure the extension directory exists.
  if (!existsSync(EXTENSION_DIR)) {
    console.error(`[error] Extension directory not found: ${EXTENSION_DIR}`);
    process.exit(1);
  }

  // 2. Clean up any stale .vsix files left by earlier builds.
  for (const file of readdirSync(EXTENSION_DIR).filter((f) => VSIX_PATTERN.test(f))) {
    const target = path.join(EXTENSION_DIR, file);
    console.log(`[clean] Removing stale package: ${file}`);
    rmSync(target);
  }

  // 3. Run the VSIX packager (uses npx so the packager is fetched on demand).
  const result = run(useCmdShim ? 'npx.cmd' : 'npx', ['--yes', PACKAGER, 'package'], EXTENSION_DIR);

  if (result.error) {
    console.error(`[error] Failed to start the packager: ${result.error.message}`);
    process.exit(1);
  }

  if (result.status !== 0) {
    console.error(`[error] Packaging failed with exit code ${result.status}`);
    process.exit(result.status ?? 1);
  }

  // 4. Verify the packager actually produced a .vsix file.
  const output = readdirSync(EXTENSION_DIR).filter((f) => VSIX_PATTERN.test(f));
  if (output.length === 0) {
    console.error('[error] Packager reported success, but no .vsix file was produced.');
    process.exit(1);
  }

  console.log('\n[success] Build complete:');
  for (const file of output) {
    console.log(`  mindcode/${file}`);
  }
}

main();