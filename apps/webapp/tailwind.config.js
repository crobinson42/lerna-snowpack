const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  purge: {
    content: [
      'public/**/*.html',
      'public/**/*.css',
      'public/**/*.js',
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.css',
    ],
    purge: isProd,
  },
}
