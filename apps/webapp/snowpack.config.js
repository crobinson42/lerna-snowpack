module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  optimize: {
    target: 'es2019',
  },
  plugins: ['@snowpack/plugin-postcss', '@snowpack/plugin-react-refresh'],
  workspaceRoot: '../../',
}
