import typescript from '@rollup/plugin-typescript';
import esbuild from 'rollup-plugin-esbuild';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import tailwindConfig from './tailwind.config.js';

export default [
  {
    plugins: [
      typescript(),
      esbuild(),
      postcss({
        extensions: ['.css', 'module.css'],
        plugins: [autoprefixer(), tailwindcss(tailwindConfig)],
      }),
    ],
    input: ['./src/index.ts'],
    external: (id) => !/^[./]/.test(id),
    output: [
      {
        dir: 'dist',
        entryFileNames: '[name].cjs',
        exports: 'auto',
        format: 'cjs',
        preserveModules: true,
        preserveModulesRoot: 'src',
        interop: 'compat',
      },
      {
        dir: 'dist',
        entryFileNames: '[name].mjs',
        exports: 'auto',
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
  },
];
