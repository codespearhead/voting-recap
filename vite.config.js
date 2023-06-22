import { resolve, extname } from "path";
import handlebars from "vite-plugin-handlebars";
import { readdirSync } from "fs";

const root = "src";

export default {
  root,
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: { input: getInputFiles(root) },
  },
  server: {
    host: "0.0.0.0",
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(root, "partials"),
    }),
  ],
};

function getInputFiles(path_to_folder = "") {
  const dirents = readdirSync(path_to_folder, { withFileTypes: true });
  const filesNames = dirents
    .filter((dirent) => extname(dirent.name) === ".html")
    .map((dirent) => resolve(path_to_folder, dirent.name));
  return { ...filesNames };
}
