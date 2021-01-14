module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '././' : '/',
  outputDir:'dist',
  chainWebpack: (config) => {
  const resolve = require('path');
    config.resolve.alias.set('img', resolve('public/img'))
  }
}