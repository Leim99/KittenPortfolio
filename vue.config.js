/*
 * @Author: leimin99 leimimwork@gmail.com
 * @Date: 2024-04-23 16:08:21
 * @LastEditors: leimin99 leimimwork@gmail.com
 * @LastEditTime: 2024-05-30 11:19:26
 * @FilePath: /KittenPortfolio/vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
    title: '雷敏的作品集',
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
