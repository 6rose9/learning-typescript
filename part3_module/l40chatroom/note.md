Uncaught ReferenceError: exports is not defined
    <anonymous> http://127.0.0.1:5500/part3_module/l40chatroom/dist/app.js:2

- app.js combines seperated js files using exports (commonjs module system)

- Typescript targets ESM and then generates commonjs (defined by tsconfig.json)
- Browser doesn't support standlone commonjs module
- Need buddled JS tool (webpack/vite/...)

---
