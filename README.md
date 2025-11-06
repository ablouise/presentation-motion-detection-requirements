# Welcome to [Slidev](https://github.com/slidevjs/slidev)!

To start the slide show:

- `pnpm install`
- `pnpm dev`
- visit <http://localhost:3030>

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev at the [documentation](https://sli.dev/).

## Build as Desktop App (Mac, Windows, Linux)

1. Build the presentation:
   ```bash
   npm run build
   ```
2. Test locally in Electron:
   ```bash
   npm run electron
   ```
3. Package as standalone executables:
   ```bash
   npx electron-packager . presentation-motion-detection-requirements --platform=win32,linux,darwin --arch=x64 --out=release-build --overwrite --ignore=node_modules
   ```
   - Executables will be in the `release-build/` folder.

## Create a Single Portable Executable (Advanced)

1. Make sure your `package.json` includes `version`, `description`, and `author` fields.
2. Build your presentation:
   ```bash
   npm run build
   ```
3. Build portable app for your platform:
   ```bash
   npm run build:electron
   ```
   - Output will be in the `dist/` or `release/` folder as a single file (e.g., `.exe`, `.AppImage`, `.dmg`).
   - See the `build` section in `package.json` for configuration details.
