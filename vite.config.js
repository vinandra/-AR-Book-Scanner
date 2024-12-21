import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Aliaskan addons ke lokasi three/examples/jsm
      "three/addons": path.resolve("node_modules/three/examples/jsm"),
    },
  },
});
