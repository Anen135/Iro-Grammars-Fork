@echo off
REM Builds the Mindcode VSIX package automatically.
REM Usage: build-vsix.bat
node "%~dp0build-vsix.js"
exit /b %errorlevel%