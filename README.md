# Jordan's Website Dev Instructions

To test in dev mode:
```
npm start
```

Do the following on branch `main`.

To build and deploy to https://jordanxlau.github.io (on a Powershell):
```
npm run build
Copy-Item -Path build\* -Destination . -Recurse -Force
```

Then save and push the changes:
```
git add .
git commit -m "YOUR COMMIT MESSAGE"
git push origin main
```

Then, make sure to save source code as `source` branch (without /build, /css /downloadables /images /static or asset-manifest.json).