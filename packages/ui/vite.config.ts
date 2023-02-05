import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";
import path from "path";
import { typescriptPaths } from "rollup-plugin-typescript-paths";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "QueueDash App",
      fileName: "main",
      formats: ["cjs", "es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      plugins: [
        typescriptPaths({
          preserveExtensions: true,
        }),
        typescript({
          sourceMap: false,
          declaration: true,
          outDir: "dist",
        }),
      ],
    },
  },
});
