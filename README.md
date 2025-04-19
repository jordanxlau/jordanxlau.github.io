# Jordan's Website Dev Instructions

To test in dev mode:
```
npm start
```

Make sure to develop code on  `source` branch. Then, merge with main and do the following.

To build and deploy to https://jordanxlau.github.io (on a Powershell):
```
npm run build
Copy-Item -Path build\* -Destination . -Recurse -Force
```

Then save and push the changes:
```
git add .
git commit -m "Deploy React app to GitHub Pages user site"
git push origin main
```