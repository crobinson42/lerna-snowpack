module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  optimize: {
    bundle: false,
    minify: false,
    splitting: true,
    target: 'es2019',
    treeshake: true,
  },
  plugins: ['@snowpack/plugin-postcss', '@snowpack/plugin-react-refresh'],
  workspaceRoot: '../../',
}
