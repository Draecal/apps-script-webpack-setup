# Google Apps Script Webpack Setup

A custom Webpack configuration compatible with Google Apps Script WebApps.  
Enables modern JavaScript, SVG/icon imports and a full VS Code workflow using clasp, overcoming Apps Script’s runtime limitations.

## Features
- Webpack bundling adapted to Apps Script (no ESM, no dynamic imports)
- Support for SVGs, icon packages and static assets
- Local development in VS Code
- Deployment via clasp
- Modular structure for scalable internal tools

## Usage
Clone the repo, install dependencies, run Webpack to bundle your code, and deploy with `clasp push`.

## Purpose
Designed for developers building internal tools, dashboards and automation UIs on Google Workspace who want a modern JS workflow inside Apps Script.

## License
MIT
