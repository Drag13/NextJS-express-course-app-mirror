# Instructions

## Create

- npx create-next-app@latest dev-blog
- git remote add origin https://github.com/Drag13/NextJS-express-course-app-mirror.git
- git branch -M master
- git push -u origin master

## Deploy

### YAML

```yaml
 - name: copy files
        run: |
          cp -R .next/static .next/standalone/.next/static
          cp -R ./public .next/standalone/public

 - name: Upload artifact for deployment job
        uses: actions/upload-artifact@v2
        with:
          name: node-app
          path: .next/standalone
```

### package.json

```json
{
  "start:azure": "node server"
}
```

### next.config.js

```js
const nextConfig = {
  output: "standalone",
};
```
