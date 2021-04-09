import { DEFAULT_EXTENSIONS } from '@babel/core'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'

const isProd = process.env.NODE_ENV === 'production'

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'es',
    preserveModules: true,
    preserveModulesRoot: 'src/',
  },
  plugins: [
    babel({
      extensions: DEFAULT_EXTENSIONS,
      babelHelpers: 'runtime',
      plugins: [
        '@babel/plugin-transform-runtime',
      ],
      presets: ['@babel/preset-react'],
    }),
    commonjs(),
    external({
      includeDependencies: isProd,
    }),
    resolve({ extensions: DEFAULT_EXTENSIONS }),
  ],
}
