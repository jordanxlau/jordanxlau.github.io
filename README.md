# Jordan's Website Dev Instructions

To test in dev mode:
```
npm start
```

Make sure to save source code as `source` branch (without /build, /css /downloadables /images /static or asset-manifest.json).
Then, do the following on branch `main`.

To build and deploy to https://jordanxlau.github.io (on a Powershell):
```
npm run build
Copy-Item -Path build\* -Destination . -Recurse -Force
```

Then save and push the changes:
```
git add .
git commit -m "Deploy: React app deployed to GitHub Pages"
git push origin main
```