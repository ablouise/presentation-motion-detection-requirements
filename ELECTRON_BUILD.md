# Electron Build Instructions

## Build your presentation for desktop (Mac, Windows, Linux)

1. **Build your web app**
   ```bash
   npm run build
   ```
   This generates the `dist/` folder.

2. **Run Electron for local testing**
   ```bash
   npm run electron
   ```
   This opens your presentation in a desktop window.

3. **Package as standalone executables**
   ```bash
   npx electron-packager . presentation-motion-detection-requirements --platform=win32,linux,darwin --arch=x64 --out=release-build --overwrite --ignore=node_modules
   ```
   - This creates executables for Windows, Mac, and Linux in the `release-build/` folder.
   - You can adjust `--arch` for ARM or other architectures if needed.

## Notes
- You may need to sign or notarize Mac apps for distribution.
- For advanced packaging (icons, installers), consider [electron-builder](https://www.electron.build/).
- The app loads your static `dist/index.html` for offline use.
