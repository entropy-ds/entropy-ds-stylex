import typescript from '@rollup/plugin-typescript';
import esbuild from 'rollup-plugin-esbuild';
import stylexPlugin from '@stylexjs/rollup-plugin';

export default [
  {
    plugins: [
      stylexPlugin({
        fileName: "./dist/stylex.css",
        // default: false
        dev: false,
        // prefix for all generated classNames
        classNamePrefix: 'x',
        // Required for CSS variable support
        unstable_moduleResolution: {
          // type: 'commonJS' | 'haste'
          // default: 'commonJS'
          type: 'commonJS',
          // The absolute path to the root directory of your project
          rootDir: __dirname,
        },
      }),
      typescript(),
      esbuild(),
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
