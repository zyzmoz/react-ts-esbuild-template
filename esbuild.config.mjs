import esbuild from "esbuild";
import { sassPlugin } from "@jgoz/esbuild-plugin-sass";
import postcss from "postcss";
import autoprefixer from "autoprefixer";

const watch = process.argv.includes("--watch");

const args = {
  entryPoints: ["src/styles/index.scss", "src/index.tsx", "src/index.html"],
  outdir: "dist",
  bundle: true, // Enable bundling
  format: "esm", // Enable ES Modules
  minify: true, // Minify the output for production
  sourcemap: false, // Generate sourcemaps
  loader: {
    ".png": "file", // Handle PNG images
    ".css": "css", // Handle CSS files
    ".scss": "css",
    ".html": "copy", // Handle HTML files
  },
  logLevel: "info",
  entryNames: "[name]",
  assetNames: "assets/[name]-[hash]",
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  external: ["node_modules/*"], // Exclude specific modules from being bundled (e.g., node_modules)
  plugins: [
    sassPlugin({
      async transform(source) {
        const { css } = await postcss([autoprefixer]).process(source, {
          from: undefined,
        });
        return css;
      },
    }),
  ],
};

let ctx;
if (watch) {
  ctx = await esbuild.context(args);
  await ctx.watch().catch(() => process.exit(1));
  console.log("Watching...");
} else {
  args.minify = true;
  ctx = await esbuild.build(args).catch(() => process.exit(1));
  console.log("Build successful");
}
