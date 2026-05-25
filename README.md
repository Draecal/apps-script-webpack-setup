# Google Apps Script Webpack Setup

A custom Webpack configuration compatible with Google Apps Script WebApps.  
Enables modern JavaScript, SVG/icon imports and a full VS Code workflow using clasp, overcoming Apps Script’s runtime limitations.

## Features
- Webpack bundling adapted to Apps Script (no ESM, no dynamic imports)
- Support for SVGs, icon packages and static assets
- Local development in VS Code
- Deployment via clasp
- Framework‑agnostic: integrate with any JS setup (Vanilla, Angular‑style, React‑style, etc.)

## Example

```js
// Example import inside your client code
import icon from './assets/icon.svg';
```
# Usage

1. Add this webpack.config.js to your project
2. Install your own dependencies (framework‑specific)
3. Run Webpack to bundle your assets
4. Deploy to Apps Script using clasp push

# Limitations of Apps Script (why this setup matters)
Google Apps Script imposes several restrictions:

- No ES Modules
- No dynamic imports
- No top‑level await
- No native bundling
- HTML Service sandbox
- Limited asset handling

This configuration bypasses these constraints and enables a modern development workflow.

# Purpose
Designed for developers building internal tools, dashboards and automation UIs on Google Workspace who want a modern JS workflow inside Apps Script.

# License
MIT
