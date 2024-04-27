cd shared && bun run build && cd ..
cd content-script && bun run build --emptyOutDir && cd ..
cd background-script && bun run build && cd ..
cp manifest.json dist/manifest.json
cp -r assets dist/assets