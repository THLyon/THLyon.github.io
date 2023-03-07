import { defineConfig } from 'vite';
import path from 'path';
//import solidPlugin from 'vite-plugin-solid';
// import { chromeExtension } from 'vite-plugin-chrome-extension';

export default defineConfig({
  // plugins: [html()],
  base: '/Tanner-Lyon-Portfolio/',
  build: {
    lib: {
      // entry: path.resolve(__dirname, './Client/index.html'),
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'MyLib',
      fileName: (format) => `my-lib.${format}.js`
    },
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".json"
    ],
    input: './Client/index.html',
    outDir: path.join(__dirname, './extension/dist'),
    output: {
      sourcemap: false,
      format: 'iife',
      name: 'app',
      file: './Client/index.html',
    },
    rollupOptions: {
      external: ['chrome'],
    },
  },
});
