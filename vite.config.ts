import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import themePreprocessorPlugin from "@zougt/vite-plugin-theme-preprocessor";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
    }),
    themePreprocessorPlugin({
      scss: {
        multipleScopeVars: [
          {
            scopeName: "default",
            path: path.resolve("src/styles/theme/default.scss"),
          },
          {
            scopeName: "dark",
            path: path.resolve("src/styles/theme/dark.scss"),
          },
        ],
        extract: true,
      },
    }),
  ],
  optimizeDeps: {
    exclude: ["@zougt/vite-plugin-theme-preprocessor/dist/browser-utils"],
  },
});
