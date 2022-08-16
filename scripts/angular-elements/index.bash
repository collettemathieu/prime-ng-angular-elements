#!/usr/bin/env bash

yarn run nx build elements --prod --output-hashing=none --skip-nx-cache

#For using-elements app
cat dist/apps/elements/runtime.js \
 dist/apps/elements/polyfills.js \
 dist/apps/elements/main.js > apps/using-elements/src/assets/elements.js

cat dist/apps/elements/styles.css > apps/using-elements/src/assets/elements-styles.css

#For a live server listening on port 4400
rm --recursive --force dist/preview

mkdir -p dist/preview/elements/assets

cat dist/apps/elements/runtime.js \
 dist/apps/elements/polyfills.js \
 dist/apps/elements/main.js > dist/preview/elements/elements.js

cat dist/apps/elements/styles.css > dist/preview/elements/styles.css
cp scripts/angular-elements/assets/template.html dist/preview/elements/index.html

cp -R dist/apps/elements/assets dist/preview/elements

npx live-server --host=0.0.0.0 --port=4400 --no-browser dist/preview/elements
