const Path = require('path');
const fs = require('fs');
const md5 = require('md5');
const resolve = s => Path.resolve(__dirname, s);
//
const config = {};
//
config.assetsDir = 'assets';
//
config.pages = {
  index: {
    entry: 'src/main.js',
    template: 'public/index.ejs',
    filename: 'index.html',
    title: '标题标题',
    publicAssets: (file) => {
      const root = resolve('public');
      const filePath = Path.resolve(root, file);
      const content = fs.readFileSync(filePath).toString('base64');
      const version = md5(content);
      return `${file}?v=${version}`;
    },
    chunks: ['chunk-vendors', 'chunk-common', 'index']
  }
};
//
config.chainWebpack = function (config) {
  config.plugins.delete('prefetch-index');
  config.plugins.delete('preload-index');
  //
  config.resolve.alias.set('public', resolve('public'));
  config.resolve.alias.set('src', resolve('src'));
};
//
config.css = {
  extract: false,
  loaderOptions: {
    sass: {
      prependData: `@import "src/assets/css/config.scss";`
    }
  }
}
//
config.publicPath = './';
//
if (process.env.NODE_ENV === 'development') {
  const proxy = require('./proxy');
  config.devServer = { proxy };
}
//
module.exports = config;
