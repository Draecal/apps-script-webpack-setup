# Google Apps Script Webpack Setup

A custom Webpack configuration compatible with Google Apps Script WebApps.  
Enables modern JavaScript, SVG/icon imports and a full VS Code workflow using clasp, overcoming Apps Script’s runtime limitations.

## Features
- Webpack bundling adapted to Apps Script (no ESM, no dynamic imports)
- Support for SVGs, icon packages and static assets
- Local development in VS Code
- Deployment via clasp
- Framework‑agnostic: integrate with any JS setup (Vanilla, Angular‑style, React‑style, etc.)

## Usage
Add this `webpack.config.js` to your project, install your own dependencies, bundle with Webpack, and deploy using `clasp push`.

## Purpose
Designed for developers building internal tools, dashboards and automation UIs on Google Workspace who want a modern JS workflow inside Apps Script.

## License
MIT

