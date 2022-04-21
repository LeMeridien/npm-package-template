import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default [
    {
        input: "src/index.js",
        output: {
            file: "es/index.es.js",
            format: "esm",
        },
        plugins: [
            typescript({ tsconfigOverride: noDeclarationFiles }),
            babel({
                exclude: "node_modules/**",
            }),
        ],
    },
    {
        input: "src/index.js",
        output: {
            file: "es/index.es.min.js",
            format: "esm",
            sourcemap: true,
        },
        plugins: [
            typescript({ tsconfigOverride: noDeclarationFiles }),
            babel({
                exclude: "node_modules/**",
            }),
            terser({
                compress: {
                    pure_getters: true,
                    unsafe: true,
                    unsafe_comps: true,
                },
            }),
        ],
    },
    {
        input: "src/index.js",
        output: {
            file: "dist/index.js",
            name: "Index",
            format: "umd",
        },
        plugins: [
            typescript({ tsconfigOverride: noDeclarationFiles }),
            babel({
                exclude: "node_modules/**",
            }),
        ],
    },
    {
        input: "src/index.js",
        output: {
            file: "dist/index.min.js",
            name: "index",
            format: "umd",
            sourcemap: true,
            sourcemapFile: "index.min.js.map",
        },
        plugins: [
            typescript({ tsconfigOverride: noDeclarationFiles }),
            babel({
                exclude: "node_modules/**",
            }),
            terser({
                compress: {
                    pure_getters: true,
                    unsafe: true,
                    unsafe_comps: true,
                },
            }),
        ],
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
            typescript({ useTsconfigDeclarationDir: true }),
            babel({
                exclude: "node_modules/**",
            }),
        ],
    },
    {
        input: "src/index.js",
        output: {
            file: "./lib/index.min.js",
            format: "cjs",
        },
        plugins: [
            resolve(),
            typescript({ useTsconfigDeclarationDir: true }),
            babel({
                exclude: "node_modules/**",
            }),
            terser({
                compress: {
                    pure_getters: true,
                    unsafe: true,
                    unsafe_comps: true,
                },
            }),
        ],
    },
];
