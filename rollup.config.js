import resolve from 'rollup-plugin-node-resolve';
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

export default [
    {
        input: "src/index.js",
        output: {
            file: "es/index.es.js",
            format: "esm",
        },
    },
    {
        input: "src/index.js",
        output: {
            file: "es/index.es.min.js",
            format: "esm",
            sourcemap: true,
        },
        plugins: [terser()],
    },
    {
        input: "src/index.js",
        output: {
            file: "dist/index.js",
            name: "Index",
            format: "umd",
        },
        plugins: [babel()],
    },
    {
        input: "src/index.js",
        output: {
            file: "dist/index.min.js",
            name: "index",
            format: "umd",
            sourcemap: true,
            // sourcemapFile: 'index.min.js.map',
        },
        plugins: [babel(), terser()],
    },
    {
        input: "src/index.js",
        output: {
            file: "./lib/index.js",
            format: "cjs",
            sourcemap: true,
        },
        plugins: [
            resolve(),
            babel({
                exclude: "node_modules/**",
            }),
            terser(),
        ],
    },
];
